import React from 'react'
import './testme.css'
import { Link } from 'react-router-dom'


export default function TestMe(props) {
    return (
       <div id="test-wrapper">
       <h1 style={{color: 'black'}}>Test Me!</h1> <br/> <br/>
       <p style={{fontSize: 20}}>
            If you'd like to try out this product, simply <Link to="/login">login</Link> with these credentials. <br/><br/>

            User: <em>testing@testing.com</em><br/>
            Password: <em>test</em><br/>
       </p>
       </div>
    )
}