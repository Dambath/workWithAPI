import React,{ useState, useEffect } from 'react'
import axios from 'axios'

function InfoAuthors(props) {

    const [post, setPost] = useState({})

    const [content, setContent] = useState([])

    useEffect(() => {
        axios.get(`http://api.quotable.io/authors/${props.match.params.id}`).then(res => setPost(res.data))
    }, [])

    return(
        <div>
            <h1>{post.name}</h1>
            <ul>
                <li>count of quotes:  {post.quoteCount}</li>
                <li>quotes: {post.quotes?.map((item, i) => item.content)}</li>
            </ul>
        </div>
    )

}

export default InfoAuthors;