import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../header/style.css';
import {Link} from 'react-router-dom';

function CardsAuthors(props) {

    return (
            <Link to={`authors/${props.id}`}>
                <Card title={props.name}>
                    <p>{props.bio}</p>
                </Card>
            </Link>
    )

}

export default CardsAuthors;