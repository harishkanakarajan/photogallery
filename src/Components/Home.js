import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import { connect } from 'react-redux'
import { InvokeGetAPI } from '../API/InvokeAPI'
import APIConfig, { APIEndPointConfig } from '../Config/APIConfig'
import { listUsers } from '../Redux/Actions/ActionCreators'

import classes from '../Styles/Common.module.css'
import ListAlbum from './Albums/ListAlbum'


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: false
        }
    }

    componentDidMount() {
        this.setState({ loader: true }, () => {
            InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.userList).then((res) => {
                this.props.listUsers(res)
                this.setState({ loader: false })
            }).catch((err) => {
                console.log(err)
                this.setState({ loader: false })
            })
        })
    }

    render() {
        return (
            <div className={classes.mainAppWrapper}>
                <Header />
                
                <div className={classes.breadcrumb}>
                    Home
                </div>

                <div className={classes.listWrapper}>
                    <ListAlbum />
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    listUsers: (res) => dispatch(listUsers(res)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)