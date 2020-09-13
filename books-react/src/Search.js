import { useFormik } from 'formik'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Search() {
    const [books, setbooks] = useState([])
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: async (values) => {
            console.log(values)
            const response = await fetch("http://127.0.0.1:5000/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)

            })

            if (response.ok) {
                const json = await response.json();
                if (json) {
                    setbooks(json.books)
                }
                console.log(json)
                console.log("response worked!")
            }
        }
    })

    return (
        
        <div className="heading">
            <header className="body">
                <h1 style={{color: "white", marginLeft: 20, marginTop: 20}}>Search For Your Favourite Book</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div id="searchbox">
                    <input
                        type="text"
                        placeholder="Search for Book by Title"
                        name="search"
                        id="search"
                        onChange={formik.handleChange}
                        value={formik.values.search}
                    />
                    <button type="submit">Search</button>
                </div>
                </form>

                <br />
                <div className="grid">
                        {books && books.map((book, index) => {
                            return (
                                <div className="grid-item" key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Header as="h4">{book.title}</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item><b>ISBN: </b>{book.isbn}</ListGroup.Item>
                                            <ListGroup.Item><b>Author: </b>{book.author}</ListGroup.Item>
                                            <ListGroup.Item><b>Year of publication: </b>{book.year}</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="#">Write A Review</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                        )
                        }
                </div>
            </header>
        </div>
    )
}
