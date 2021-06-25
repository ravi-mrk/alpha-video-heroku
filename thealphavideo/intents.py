from flask import Blueprint, render_template
from flask_ask_alphavideo import Ask, question, statement, audio, current_stream, logger, convert_errors
from youtube_dl import YoutubeDL
from pytube import *
blueprint = Blueprint('blueprint_api', __name__, url_prefix="/api")
ask = Ask(blueprint=blueprint)

@ask.launch
def launch():
    card_title = render_template('card_title')
    question_text = render_template('welcome')
    return question(question_text).simple_card(card_title, question_text)


@ask.intent('PlayList')
def start_playlist():
    speech = 'Heres a playlist of some sounds. You can ask me Next, Previous, or Start Over'
    stream_url = queue.start()
    yt = YouTube(stream_url)
    print(yt.streams.all()[0].url)
    return audio(speech).play(yt.streams.all()[0].url)


@ask.intent('QueryIntent', mapping={'query': 'Query'})
def handle_query_intent(query):
    if not query or 'query' in convert_errors:
        return question('no results found, try another search query')

    data = ytdl.extract_info(f"ytsearch:{query}", download=False)
    search_results = data['entries']

    if not search_results:
        noresult = render_template('noresult')
        session.attributes[search_results] = search_results
        return question(noresult)

    result = search_results[0]
    song_name = result['title']
    channel_name = result['uploader']

    for format_ in result['formats']:
        if format_['ext'] == 'm4a':
            mp3_url = format_['url']
            playing = render_template('playing', song_name=song_name, channel_name=channel_name)
            return audio(playing).play(mp3_url)

    return question('noresult')


# QueueManager object is not stepped forward here.
# This allows for Next Intents and on_playback_finished requests to trigger the step
@ask.on_playback_nearly_finished()
def nearly_finished():
    if queue.up_next:
        _infodump('Alexa is now ready for a Next or Previous Intent')
        # dump_stream_info()
        next_stream_render = queue.up_next
        yt = YouTube(next_stream_render)
        print(yt.streams.all()[0].url)
        next_stream = yt.streams.all()[0].url
        _infodump('Enqueueing {}'.format(next_stream))
        return audio().enqueue(next_stream)
    else:
        _infodump('Nearly finished with last song in playlist')


@ask.on_playback_finished()
def play_back_finished():
    _infodump('Finished Audio stream for track {}'.format(queue.current_position))
    if queue.up_next:
        queue.step()
        _infodump('stepped queue forward')
        dump_stream_info()
    else:
        return statement('You have reached the end of the playlist!')


# NextIntent steps queue forward and clears enqueued streams that were already sent to Alexa
# next_stream will match queue.up_next and enqueue Alexa with the correct subsequent stream.
@ask.intent('AMAZON.NextIntent')
def next_song():
    if queue.up_next:
        speech = 'playing next queued song'
        next_stream_render = queue.step()
        yt = YouTube(next_stream_render)
        print(yt.streams.all()[0].url)
        next_stream = yt.streams.all()[0].url
        _infodump('Stepped queue forward to {}'.format(next_stream))
        dump_stream_info()
        return audio(speech).play(next_stream)
    else:
        return audio('There are no more songs in the queue')


@ask.intent('AMAZON.PreviousIntent')
def previous_song():
    if queue.previous:
        speech = 'playing previously played song'
        prev_stream_render = queue.step_back()
        yt = YouTube(prev_stream_render)
        print(yt.streams.all()[0].url)
        prev_stream = yt.streams.all()[0].url
        dump_stream_info()
        return audio(speech).play(prev_stream)

    else:
        return audio('There are no songs in your playlist history.')


@ask.intent('AMAZON.StartOverIntent')
def restart_track():
    if queue.current:
        speech = 'Restarting current track'
        dump_stream_info()
        return audio(speech).play(queue.current, offset=0)
    else:
        return statement('There is no current song')


@ask.on_playback_started()
def started(offset, token, url):
    _infodump('Started audio stream for track {}'.format(queue.current_position))
    dump_stream_info()


@ask.on_playback_stopped()
def stopped(offset, token):
    _infodump('Stopped audio stream for track {}'.format(queue.current_position))


@ask.intent('AMAZON.PauseIntent')
def pause():
    seconds = current_stream.offsetInMilliseconds / 1000
    msg = 'Paused the Playlist on track {}, offset at {} seconds'.format(
        queue.current_position, seconds)
    _infodump(msg)
    dump_stream_info()
    return audio(msg).stop().simple_card(msg)


@ask.intent('AMAZON.ResumeIntent')
def resume():
    seconds = current_stream.offsetInMilliseconds / 1000
    msg = 'Resuming the Playlist on track {}, offset at {} seconds'.format(queue.current_position, seconds)
    _infodump(msg)
    dump_stream_info()
    return audio(msg).resume().simple_card(msg)


@ask.session_ended
def session_ended():
    return "{}", 200
