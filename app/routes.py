from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello world!"

@app.route('/favicon.ico')
def favicon():
    return 