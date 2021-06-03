from __main__ import app

@app.route('/')
def index():
    return render_template('public.html')
