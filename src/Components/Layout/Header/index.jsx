import * as React from 'react';
import './index.css'

const Header = () => {

    return <header className={'Header flex justify-between p-4'}>
        <h1>Sample Header</h1>

        <ul className='flex'>
            <li className="mx-2">Home</li>
            <li className="mx-2">Contact Us</li>
            <li className="mx-2">About Us</li>
        </ul>
    </header>
}

export default Header