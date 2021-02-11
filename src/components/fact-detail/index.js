import { getDefaultNormalizer } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FactDetail(props) {

    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get(`http://cat-fact.herokuapp.com/facts/${props.match.params.id}`).then(res => setPost(res.data))
    }, )
    return(
        <div>
            <h1>Fact about cat</h1>
            <p>{post.text}</p>
        </div>
    )

}

export default FactDetail;