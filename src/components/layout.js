import React from 'react'
import Header from '../components/header'
import '../style/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.cotainer}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
        </div>
    )
}
export default Layout