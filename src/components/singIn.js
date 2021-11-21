import React from 'react';

import Navbar from './navBar'; 

function SingIn() {
    return (
      <div>
          < Navbar />
          <div className='singIn-content'>
            <h1 className='singIn-title'>Contatos</h1>

            <div className='singIn-contacts'></div>
          </div>
      </div>
    );
}

export default SingIn