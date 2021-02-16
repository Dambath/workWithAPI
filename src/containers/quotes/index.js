import React, {useState, useEffect} from 'react';
import Header from '../../components/header/index';
import 'antd/dist/antd.css'
import Cards from '../../components/cards/index'
import axios from 'axios';
import '../../components/header/style.css'
import {Select} from 'antd';
const {Option} = Select

function Quotes() {

    const [quotes, setQuotes] = useState([])
    const [obj, setObj] = useState({tags: '', amount: 5, authorId: ''})
    const [authors, setAuthors] = useState([])
    const [allTags, setAllTags] = useState([])

    useEffect(() => {
        fetchAll()
        fetchAuthor()
        fetchAllTags()
    }, [])

    console.log(quotes)

    const quotesItems = quotes?.map((item, i) => <Cards author={item.author} content={item.content} count={item.count} id={item._id}/>)

    const authorItems = authors?.map((item, i) => <Option value={item._id}>{item.name}</Option>)

    const allTagsItems = allTags?.map((item, i) => <Option value={item.name}>{item.name}</Option>)

    const amount = (limit) => {
        setObj({...obj, amount: limit})
        axios.get(`https://api.quotable.io/quotes?tags=${obj.tags}&limit=${limit}&authorId=${obj.authorId}`).then(res => setQuotes(res.data.results))
    }

    const tags = (tag) => {
        const strtags = tag.join('|')
        setObj({...obj, tags: strtags})
        axios.get(`https://api.quotable.io/quotes?tags=${strtags}&limit=${obj.amount}&authorId=${obj.authorId}`).then(res => setQuotes(res.data.results))
    }

    const fetchAll = () => {
        axios.get(`https://api.quotable.io/quotes?tags=${obj.tags}&limit=${obj.amount}&authorId=${obj.authorId}`).then(res => setQuotes(res.data.results))
    }

    const fetchAuthor = () => {
        axios.get(`https://api.quotable.io/authors`).then(res => setAuthors(res.data.results))
    }

    const fetchAllTags = () => {
        axios.get(`https://api.quotable.io/tags`).then(res => setAllTags(res.data))
    }

    const handleAuthors = (id) => {
        setObj({...obj, authorId: id})
        axios.get(`https://api.quotable.io/quotes?tags=${obj.tags}&limit=${obj.amount}&authorId=${id}`).then(res => setQuotes(res.data.results))

    } 


    return(
        <>
            <Header/>
            <div class={'quotes-wrapper'}>
                <section class={'filter'}>
                    <div class="selects">
                        <Select style={{ width: 120 }} onChange={handleAuthors}>
                            {authorItems}
                        </Select>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="tags"
                            onChange={tags}
                            >
                                {allTagsItems}
                        </Select>
                        <Select defaultValue="5" style={{ width: 120 }} onChange={amount}>
                            <Option value="5" limit='5'>5</Option>
                            <Option value='10' limit='10'>10</Option>
                            <Option value="15" limit='15'>15</Option>
                        </Select>
                    </div>
                </section>
                <div class={'cards'}>
                    {quotesItems}
                </div>
            </div>
        </>    
    )

}

export default Quotes;