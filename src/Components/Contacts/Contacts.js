import React from 'react';
import './Contacts.css';
import Form from './Form/Form';
import Info from './Info/Info';


const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="contacts">
                <div className="form">
                    <h1>Send A Massage</h1>
                    <Form/>
                </div>
                <div className="info">
                <h1>Contacts Info</h1>
                    <Info/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;