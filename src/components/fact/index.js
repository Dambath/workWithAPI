import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
 
function Fact(props) {

    return(
        <Link to={`facts/${props.id}`}>
            <Card title='fact about cat' style={{ width: 300, marginRight: '60px' }}>
                <p>{props.text}</p>
            </Card>
        </Link>
    )

}

export default Fact;