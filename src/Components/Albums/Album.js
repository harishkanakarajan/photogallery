import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import classes from '../../Styles/Common.module.css'
import folderClasses from '../../Styles/Gallery.module.css'
import CommonConfig from '../../Config/CommonConfig'

class Album extends React.Component {
    constructor(props) {
        super(props)
    }

    getUserName(userId) {
        if (this.props.users === undefined || this.props.users === "" || this.props.users === null) {
            return null
        }

        const userData = this.props.users.filter(user => user.id === userId)
        return userData[0].name
    }

    render() {
        return (
            <div className={classes.imgWrapper}>
                <Link to={`/photos/${this.props.album.id}`} >
                    <div className={folderClasses.ffolder + " " + folderClasses.medium + " " + folderClasses.cyan} >
                        <span>{this.props.album.title}</span>

                        <div className={classes.imgDesc}>{"By : " + this.getUserName(this.props.album.userId)}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Album)