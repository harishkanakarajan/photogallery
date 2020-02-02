import React from 'react'
import { connect } from 'react-redux'
import classes from '../../Styles/Common.module.css'
import APIConfig, { APIEndPointConfig } from '../../Config/APIConfig'
import { InvokeGetAPI } from '../../API/InvokeAPI'
import { listPhotos } from '../../Redux/Actions/ActionCreators'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

class ListPhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.photoList + this.props.match.params.id).then((res) => {
            this.props.listPhotos(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className={classes.mainAppWrapper}>
                <Header />
                <div className={classes.photoBox}>
                    {(this.props.photos !== undefined && this.props.photos.length > 0) && this.props.photos.map(photo =>
                        <div className={classes.photoHolder}>
                            {/* thumbnail image wrapped in a link */}
                            <a href={"#image_" + photo.id}>
                                <img src={photo.thumbnailUrl} className={classes.thumbnail} />
                            </a>

                            {/* lightbox container hidden with CSS */}
                            <a href="#_" className={classes.lightbox} id={"image_" + photo.id}>
                                <img src={photo.url} />
                                <div className={classes.photoDesc}>
                                    <p>{photo.title}</p>
                                </div>
                            </a>

                            <div className={classes.photoDesc}>
                                <p>{photo.title.length > 30 ? photo.title.substr(0,30)+"..." : photo.title}</p>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos
    }
}

const mapDispatchToProps = dispatch => ({
    listPhotos: (res) => dispatch(listPhotos(res)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPhoto)