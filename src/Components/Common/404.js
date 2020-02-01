import React from 'react'
import Header from './Header'
import Footer from './Footer'

class NotFound extends React.Component {
    render() {
        return(
            <div>
                <Header />
                    <React.Fragment>Invalid URL. Kindly check the URL</React.Fragment>
                <Footer />
            </div>
        )
    }
}

export default NotFound