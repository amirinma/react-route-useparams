import React from 'react'
import {Link} from "react-router-dom"
export default function Headers(){
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
            </ul>
        </div>

    )
}