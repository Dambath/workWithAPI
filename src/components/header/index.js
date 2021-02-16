import React from 'react'; 
import {Link} from 'react-router-dom'
import '../header/style.css'

function Header() {
    return(
        <header class={'header'}>
            <div class={'list'}>
                <Link to='/quotes' class={'links'}>Quotes</Link>
                <Link to='/authors' class={'links'}>Authors</Link>
            </div>
        </header>
    )
}

export default Header;