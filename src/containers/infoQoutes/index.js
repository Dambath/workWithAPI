import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InfoQoutes(props) {

    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get(`http://api.quotable.io/quotes/${props.match.params.id}`).then(res => setInfo(res.data))
    }, [])

    return (
        <div>    
            <h1 style={{padding: '5px 25px'}}>{info.content}</h1>
            <ul>
                <li style={{fontSize: '24px'}}>Author: {info.author}</li>
                <li style={{fontSize: '24px'}}>Length of symbols: {info.length}</li>
                <li style={{fontSize: '24px'}}>Tags: {info.tags + ' '}</li>
            </ul>
        </div>
    )

}

export default InfoQoutes;