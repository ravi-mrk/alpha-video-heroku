from flask import Blueprint, render_template
from flask_ask_alphavideo import Ask, question, statement, audio, current_stream, logger, convert_errors
from youtube_dl import YoutubeDL
from pytube import *
blueprint = Blueprint('blueprint_api', __name__, url_prefix="/ask")
ask = Ask(blueprint=blueprint)
