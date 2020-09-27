import os
import requests

from flask import Flask, session, request, jsonify, render_template
# from flask_session import Session
# from sqlalchemy import create_engine
# from sqlalchemy.orm import scoped_session, sessionmaker
from models import *
from flask_cors import CORS
from flask_api import status

app = Flask(__name__)
cors = CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://ohsytgllrqearp:a5896f7632df75e4a2c324215bb03dd3052e12adba6a098e24cd358310ef1fa4@ec2-18-210-214-86.compute-1.amazonaws.com:5432/d8o02eepgrivbh"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


@app.route('/')
def index():
   return render_template("index.html")



@app.route("/login", methods=["POST"])
def login():
    req = request.json

    if req["email"] is None or req["password"] is None:
        return "Error", status.HTTP_401_UNAUTHORIZED

    try:
        data = User.query.filter_by(email=req["email"]).one()
        if data is None or data.password != req["password"]:
            return "Error", status.HTTP_401_UNAUTHORIZED

        return "Success", status.HTTP_200_OK

    except:
        return "Error", status.HTTP_401_UNAUTHORIZED



@app.route('/signup', methods=["POST"])
def signup():
    req = request.json
    if req["email"] is None or req["password"] is None or req["confirmpassword"] is None:
        return "Error", status.HTTP_400_BAD_REQUEST
    
    try:
        data = User.query.filter_by(email=req["email"]).one()
        if data and data.email == req["email"]:
            return "Error", status.HTTP_401_UNAUTHORIZED

    except:
        data = User(email=req["email"], password=req["password"])
        db.session.add(data)
        db.session.commit()
        return "Success", status.HTTP_201_CREATED

    return "Error", status.HTTP_400_BAD_REQUEST



@app.route("/search", methods=["POST"])
def search():        
    req = request.json
    return searchData(req["search"])

def searchData(query):
    all_books = Books.query.filter(Books.title.like("%"+query+"%")).all()
    books = []
    for book in all_books:
        books.append({"isbn" : book.isbn, "title" : book.title, "author" : book.author, "year" : book.year})

    return jsonify({"books" : books})

@app.route("/review/<isbn>", methods=["GET"])
def show_book(isbn):
    return search_isbn_data(isbn)

def search_isbn_data(query):
    book = Books.query.filter(Books.isbn.like(query)).one()
    data = {
        "isbn" : book.isbn, "title" : book.title, "author" : book.author, "year" : book.year
    }
    print(data)
    return jsonify(data)
    

    
