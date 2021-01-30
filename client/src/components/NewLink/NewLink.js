import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

export default function NewLink(props) {
    let location = props.location
    return (
        <Link to={location} style={{padding: '20px', textDecoration: 'none'}}>
            <Typography variant={props.variant || "h6"} style={{color: 'white'}}>{props.text}</Typography>
        </Link>
    )
}