import React from 'react'
import {connect} from 'react-redux'
import classes from '../../Styles/Common.module.css'

class ListPhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    getUserName(userId) {
        if(this.props.users===undefined || this.props.users==="" || this.props.users===null) {
            return null
        }

        const userData = this.props.users.filter(user => user.id === userId)
        return userData[0].name
    }

    render() {
        return (
            <div className={classes.imgWrapper}>
                <div className={classes.imgBox}>
                    <a target="_blank" href="img_5terre.jpg">
                        <img src="https://via.placeholder.com/600/771796" alt="title" />
                    </a>
                    <div className={classes.imgDesc}>{this.getUserName(this.props.album.userId)}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListPhoto)