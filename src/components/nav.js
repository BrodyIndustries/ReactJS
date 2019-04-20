import React, { Component } from 'react';
import{
  Link
}from 'react-router-dom';


class Nav extends Component {
  constructor(props){
        super(props);

        this.state = {
          news: []
        }
    }


  componentDidMount() {
this.interval = setInterval(() => {
  //Please put token on below line
  fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=')
    .then(response => response.json())
    .then(response => {
                    this.setState({news: response.articles});
                });

}, 5000);
  }




  render() {
    return (
<nav className="navigation">
  <ul>
    <li>
    <h1 className="hi">
<Link to="/">Home</Link>
  </h1>
    </li>
    </ul>
  <h4>Top Google Headlines</h4>
        <ul>
    {this.state.news.slice(0,5).map(newss => <li>{newss.title}</li>)}
            </ul>

    </nav>




    );
  }
}

export default Nav;
