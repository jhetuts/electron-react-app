import * as React from 'react';

import Header from '../Header/index.jsx'
import Content from '../Content/index.jsx'
import './index.css'

const MainWrapper = () => {
    return <main className={'MainWrapper'}>
        <Header />
        <Content />
    </main>
}

export default MainWrapper