import React, { useState } from 'react';

import TextInput from './textInput';
import Navbar from './navBar';

function NewContact() {
    const [state, setState] = useState({
        name: '',
        nickName: '',
        address: '',
        phoneNumber: '',
        email: '',
        note: '',
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
        <div>
        < Navbar />
        <div className='newContact-form fadeInDown'>
           <form className='newContact-form-content'>
          
            <h1 className='newContact-form-title'>New Contact</h1>
            
            <TextInput
            label="Name"
            type="text"
            name="name"
            id="newContact-name"
            value={state.name}
            onChange={handleChange}
            />

            <TextInput
            label="Nickname"
            type="text"
            name="nickName"
            id="newContact-nickName"
            value={state.nickName}
            onChange={handleChange}
            />

            <TextInput
            label="Phone Number"
            type="text"
            name="phoneNumber"
            id="newContact-phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            />

            <TextInput
            label="E-mail"
            type="email"
            name="email"
            id="newContact-email"
            value={state.email}
            onChange={handleChange}
            />

            <TextInput
            label="Address"
            type="text"
            name="address"
            id="newContact-address"
            value={state.address}
            onChange={handleChange}
            />

            <TextInput
            label="Note"
            type="text"
            name="note"
            id="newContact-note"
            value={state.note}
            onChange={handleChange}
            />

            <div style={{backgroundColor: 'white'}}>
              <button className='singUp-form-button'>Save</button>
            </div>

        </form>
        </div>
        </div>
    )
}

export default NewContact