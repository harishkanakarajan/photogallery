import React from 'react'
import classes from '../../Styles/Common.module.css'

class Album extends React.Component {
    render() {
        return (
            <div className={classes.imgWrapper}>
                <div className={classes.imgBox}>
                    <a target="_blank" href="img_5terre.jpg">
                        <img src="https://via.placeholder.com/600/771796" alt="title" />
                    </a>
                    <div className={classes.imgDesc}>Add a description of the image here</div>
                </div>
            </div>
        )
    }
}

export default Album