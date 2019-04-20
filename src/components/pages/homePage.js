import React, { Component } from 'react';


import{
  Link
}from 'react-router-dom';


class Homepage extends Component {
  render() {
    return (


    <div className="main">

        <div>
      <h1>
      <Link to="/Blog">Japan</Link>
      </h1>
      <img className="sizing" src="https://cdn.japantimes.2xx.jp/wp-content/uploads/2018/04/n-kyoto-a-20180406-870x580.jpg" alt ="Kyoto" />
      <h6>
      April 12th, 2019
      </h6>
      <p>
      Japan is one of Asia's most traveled to countries.  There are many things you can do like vising the country countrysid
      or the city.
      </p>
      </div>


<div className="blog">
  <h1>
    <Link to="/Blog2">Italy</Link>
  </h1>
  <img className="sizing" src="https://leger2.imgix.net/Includes/images/overview/italy/rome.jpg?auto=compress,enhance,format&q=30" alt="Italy">
  </img>
  <h6>
  March 28th, 2019
  </h6>
<p>
Mama Mia you decided to go to Italy.  The Pasta is amazing and the countryside is beautiful.
</p>

</div>

<div className="blog">
  <h1>
  <Link to="/Blog3">Belgium</Link>
  </h1>
  <img className="sizing" src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/3e/cb/41/brussels.jpg" alt="Belgium">
  </img>
  <h6>
  February 23rd, 2019
  </h6>
  <p>
  Belgium is a wonderful place and here are a few spots where you should check out.
  </p>
</div>


      </div>



    );
  }
}

export default Homepage;
