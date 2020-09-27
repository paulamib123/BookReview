import React, { Component } from 'react';
import axios from 'axios';



class BookReview extends Component {
    
    state = {
        book: {},
        reviews: [],
        title: '',
        review: ''
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/review/" + this.props.match.params.isbn)
        .then(res => this.setState({ book: res.data }))
    }

    addReview = (title, review) => this.setState({ reviews: [...this.state.reviews, 
    {
        title: title, 
        review: review
    }
    ]});

    onChange = (e) => this.setState({ [e.target.name] : [e.target.value] })

    onSubmit = (e) => {
        e.preventDefault();
        this.addReview(this.state.title, this.state.review);
        this.setState({ title: '', review: '' });
    }

    render() {
        return (
            <div>
                <h3 style={h3_style}>Isbn: {this.state.book.isbn}</h3>
                <h3 style={h3_style}>Name: {this.state.book.title}</h3>
                <h3 style={h3_style}>Author: {this.state.book.author}</h3>
                <h3 style={h3_style}>Published on: {this.state.book.year}</h3>
                <form onSubmit={this.onSubmit}>
                    <h4 style={h4_style}>Title</h4>
                    <input type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                        style={titleStyle}></input>

                    <h4 style={h4_style}>Review</h4>
                    <input type="Review"
                        name="review"
                        value={this.state.review}
                        onChange={this.onChange}></input>
                    <br></br>
                    <br></br>
                    <input type="submit"
                        value="submit"
                    ></input>
                </form>
                <div>
                    {this.state.reviews.map((content) => {
                        return <div style={content_style}>
                            <h5>{content.title}</h5>
                            <h5>{content.review}</h5>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const h3_style = {
    color: 'white',
    textAlign: 'center'
}

const titleStyle = {
    width: '500px'
}

const h4_style = {
    color: 'white'
}

const content_style = {
    color: 'yellow'
}
export default BookReview