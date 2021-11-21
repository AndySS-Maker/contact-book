import React, { useState } from 'react';

import TextInput from './textInput';

function SingUp() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
    })

    function handleChange(event) {
        if(event.target.files){
            return setState({
                ...state, [event.currentTarget.name] : event.currentTarget.files[0],
            });
        }

        setState({
            ...state,
            [event.currentTarget.name] : event.currentTarget.value,
        });
    }

    return (

        <div className='singUp-form fadeInDown'>
           <form className='singUp-form-content'>
          
            <h1 className='singUp-form-title'>Register</h1>
            
            <TextInput
            label="Name"
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            onChange={handleChange}
            />

            <TextInput
            label="E-mail"
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            onChange={handleChange}
            />

            <TextInput
            label="Password"
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            onChange={handleChange}
            />

            <TextInput
            label="Phone Number"
            type="text"
            name="phoneNumber"
            id="signupFormphoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            />

            <div style={{backgroundColor: 'white'}}>
              <button className='singUp-form-button'>Send</button>
            </div>

        </form>
        </div>

    )
}

export default SingUp;