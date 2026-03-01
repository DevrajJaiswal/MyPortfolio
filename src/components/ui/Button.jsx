import React from 'react'
import { Link } from 'react-router-dom'

function Button({ type, text, link }) {

    return link
        ? <Link to={`/${link}`} className="btn">{text}</Link>
        : <button type={type} className="btn">{text}</button>
}

export default Button