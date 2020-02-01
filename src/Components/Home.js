import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'

import classes from '../Styles/Common.module.css'
import ListAlbum from './Albums/ListAlbum'

class Home extends React.Component {
    render() {
        return(
            <div className={classes.mainAppWrapper}>
                <Header />

                <div className={classes.listWrapper}>
                    <ListAlbum />
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home