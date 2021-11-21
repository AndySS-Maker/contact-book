import React from 'react';

function Home() {
    return (
        <div className="homePage">

            <h1 className='homePage-title'>Welcome to Contact Book !</h1>

        <div className='homePage-icon'>
           <i className="far fa-user"></i>
        </div>

        <div>
          <div className='homePage-button-singIn'>
            <button className='homePage-button-title'>Sing in</button>
          </div>
          <div className='homePage-button-singUp'>
            <button className='homePage-button-title'>Sing up</button>
          </div>
        </div>
      </div>
    );
}

export default Home;