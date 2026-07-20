import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                new Post(0, "", "")
            ]
        };
    }
    loadPosts() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            this.setState({
                posts: data
            });
        })
        .catch(error => {
            console.log(error);
        });

}
componentDidMount() {
    this.loadPosts();
}
    render() {

    return (

        <div>

            {
                this.state.posts.map((post) => (

                    <div key={post.id}>

                        <h2>{post.title}</h2>

                        <p>{post.body}</p>

                        <hr />

                    </div>

                ))
            }

        </div>

    );

}
componentDidCatch(error, info) {
    alert(error);
    console.log(info);
}
}

export default Posts;