import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../header/style.css';
import {Link} from 'react-router-dom';

function Cards(props) {

    return (
            <Link to={`quotes/${props.id}`}>
                <Card title={props.author}>
                    <p>{props.content}</p>
                </Card>
            </Link>
    )

}

export default Cards;