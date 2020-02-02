import React from 'react'
import { connect } from 'react-redux'
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

    getFolderColor() {
        var randColor = CommonConfig.folderColors[Math.floor(Math.random() * CommonConfig.folderColors.length)];
        var color = ""
        switch(randColor) {
            case "cyan": {
                color = folderClasses.cyan
                break
            }

            case "yellow": {
                color = folderClasses.yellow
                break
            }
            
            case "pink": {
                color = folderClasses.pink
                break
            }            

            case "green": {
                color = folderClasses.green
                break
            }
            
            case "gray": {
                color = folderClasses.gray
                break
            }            

            default: {
                color = folderClasses.cyan
                break
            }
        }
        return color
    }

    render() {
        
        return (
            <div className={classes.imgWrapper}>
                <div className={folderClasses.ffolder + " " + folderClasses.medium + " " + this.getFolderColor()}>
                    <span>{this.props.album.title}</span>

                    <div className={classes.imgDesc}>{"By : " + this.getUserName(this.props.album.userId)}</div>
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

export default connect(mapStateToProps)(Album)