import csv

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine("postgres://ohsytgllrqearp:a5896f7632df75e4a2c324215bb03dd3052e12adba6a098e24cd358310ef1fa4@ec2-18-210-214-86.compute-1.amazonaws.com:5432/d8o02eepgrivbh")
db = scoped_session(sessionmaker(bind=engine))


def main():
    f = open("books.csv", "r")
    reader = csv.reader(f)
    next(reader)
    for isbn, title, author, year in reader:
        db.execute("INSERT INTO books (isbn, title, author, year) VALUES (:isbn, :title, :author, :year)",
               {"isbn": isbn, "title": title, "author": author, "year": year})
        db.commit()
        print(f"Added book with ISBN: {isbn} Title: {title}  Author: {author}  Year: {year}")


if __name__ == '__main__':
    main()