import React from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";
import { TextField } from '@material-ui/core';



function Navbar (props){

    const sendDataToMain = (que) => {
        props.getQuery(que)
    }

    return(
        <>
        <div>
            <div>
                <div className='logo'>
                    <img src ="images/logo.jpeg" alt='Abc Company Logo' className='leftimage'/>
                    <img src="images/hrc_logo.jpeg" alt='HRC Logo' className='centerimage'/>
                </div>
            </div>
           
            
            
            <div className='navbar'>
                <div className='navbar-centered'>
                    
                    <TextField
                    label='Search Customer Id'
                    size='small'
                    variant="filled"
                    onChange={(e) => {sendDataToMain(e.target.value) } }
                    />
                </div>

                <button className='b1'>PREDICT</button>
                <button className='b3'>ANALYTICS VIEW</button>
                <Link to='/AdvanceSearch'>
                        <button className='b2'>ADVANCED SEARCH</button>
                </Link>

                <div className='navbar-right'>
                    <Link to='/Delete'>
                        <button className='b2'>DELETE</button>
                    </Link>
                    
                    <Link to='/Edit'>
                        <button className='b3'>EDIT</button>
                    </Link>
                    
                    <Link to='/Add'>
                        <button className='b1'> ADD</button>
                        
                    </Link>
                   
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Navbar;