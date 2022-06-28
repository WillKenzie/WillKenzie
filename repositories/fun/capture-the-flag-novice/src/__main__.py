from flask import Flask, abort, request, Response
from faker import Faker
fake = Faker('en_US')
app = Flask(__name__)

@app.route('/users')
def users():
    return("{{[for i in range(1000) {'email':fake.ascii_email(), 'password':fake.ascii()}]}}")

@app.route('/database')
def database():
    if request.authorization == None:
        abort(503)
    else:
        return "[]"

@app.route('/posts', methods=['GET', 'PUT'])
def posts():
    if request.cookies:
        return 200
    else:
        abort(503)

@app.route('/admin')
def admin():
    abort(503)

@app.route('/api')
def api():
    if request.authorization == None:
        abort(503)

@app.route('/api/admin')
def apiadmin():
    

@app.route('/')
def users():
    abort(404)