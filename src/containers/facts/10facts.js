import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fact from '../../components/fact'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Menu, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function Facts10() {

    const [facts, setFacts] = useState([])

    const getRandom = () => {
        axios.get('http://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10').then(res => setFacts(res.data));
    }

    const getList = () => {
        axios.get('http://cat-fact.herokuapp.com/facts?animal_type=cat').then(res => setFacts(res.data));
    }

    const factsItems = facts.map((item, i) => <Fact key={i} id={item._id} text={item.text}/>)

    const menu = (
        <Menu>
            <Link to={'facts5'}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    5 facts
                </Menu.Item>
            </Link> 
            <Link to={'facts10'}>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    10 facts
                </Menu.Item>
            </Link>
            <Link to={'facts15'}>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    15 facts
                </Menu.Item>
            </Link>
        </Menu>
      );

    return(
        <>
            <div style={{width: '600px', margin: '0 auto', display: 'flex', justifyContent: 'space-between'}}>
                <Button onClick={() => getRandom()}>random facts about cats</Button>
                <Button onClick={() => getList()}>facts about cats</Button>
                <Dropdown overlay={menu}>
                    <Button>
                        Amount of facts <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '100px'}}>
                {factsItems}
            </div>
        </>    
    )

}

export default Facts10; 