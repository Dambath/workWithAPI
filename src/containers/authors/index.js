import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Select} from 'antd'
import 'antd/dist/antd.css'
import Header from '../../components/header'
import CardsAuthors from '../../components/cards/authors'
import { OmitProps } from 'antd/lib/transfer/ListBody';
import axios from 'axios';
const {Option} = Select
 
function Authors() {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        fetch()
    }, [])

    const authorsItems = authors.map((item, i) => <CardsAuthors id={item._id} name={item.name} bio={item.bio} />)

    const limit = (value) => {
        fetch(value)
    }

    const fetch = (value = 5) => {
        axios.get(`http://api.quotable.io/authors?limit=${value}`).then(res => setAuthors(res.data.results))
    }

    return (
        <>
            <Header/>
            <div class={'quotes-wrapper'}>
                <section class={'filter'}>
                    <div class="selects">
                        <Select defaultValue="5" style={{ width: 120 }} onChange={limit}>
                            <Option value="5">5</Option>
                            <Option value="10">10</Option>
                            <Option value="15">15</Option>
                        </Select>
                    </div>
                </section>  
                <div class={'cards'}>
                    {authorsItems}
                </div>
            </div>
        </> 
    )

}

export default Authors;