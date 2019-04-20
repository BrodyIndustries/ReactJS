import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';


import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import Main from './components/main';

import Homepage from './components/pages/homePage';
import Blogpage from './components/pages/blogPage';
import Thirdblog from './components/pages/thirdBlog';
import Secondblog from './components/pages/secondBlog';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //blog: false,
      data: []
    }
  }
  render() {
    return (
      <Router>
      <div className="App">

<div>
      <Header className="header" />
</div>


      <Route exact path='/' component={Homepage} />
      <Route exact path='/Blog' component={Blogpage} />
      <Route exact path='/Blog2' component={Secondblog} />
      <Route exact path='/Blog3' component={Thirdblog }/>



  <Nav className="nav"/>



      <Footer />


      </div>
      </Router>
    );
  }
}

export default App;
