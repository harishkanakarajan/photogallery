import React from 'react'
import { connect } from 'react-redux'
import classes from '../../Styles/Common.module.css'
import APIConfig, { APIEndPointConfig } from '../../Config/APIConfig'
import { InvokeGetAPI } from '../../API/InvokeAPI'
import { listPhotos } from '../../Redux/Actions/ActionCreators'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Loader from '../Common/Loader'
import { Link } from 'react-router-dom'

class ListPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: false,
            albumName: ""
        }
    }

    componentDidMount() {
        this.setState({loader: true}, () => {
            InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.photoList + this.props.match.params.id).then((res) => {
                this.props.listPhotos(res)
                this.setState({loader: false})
            }).catch((err) => {
                console.log(err)
                this.setState({loader: false})
            })
        })

        this.setState({loader: true}, () => {
            InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.album + this.props.match.params.id).then((res) => {
                this.setState({loader: false, albumName: res[0].title})
            }).catch((err) => {
                console.log(err)
                this.setState({loader: false, albumName: ""})
            })
        })        
    }

    render() {
        return (
            <div className={classes.mainAppWrapper}>
                <Header />

                <div className={classes.breadcrumb}>
                    Home / <Link to="/">{this.state.albumName}</Link>
                </div>

                <div className={classes.photoBox}>
                    {this.state.loader ? <Loader /> : (this.props.photos !== undefined && this.props.photos.length > 0) && this.props.photos.map(photo =>
                        <div className={classes.photoHolder} key={Math.random()}>
                            {/* thumbnail image wrapped in a link */}
                            <a href={"#image_" + photo.id}>
                                <img src={photo.thumbnailUrl} className={classes.thumbnail} alt="thumbnail" />
                            </a>

                            {/* lightbox container hidden with CSS */}
                            <a href="#_" className={classes.lightbox} id={"image_" + photo.id}>
                                <img src={photo.url} alt="lightbox"/>
                                <div className={classes.photoDesc}>
                                    <p>{photo.title}</p>
                                </div>
                            </a>

                            <a href={"#image_" + photo.id}>
                            <div className={classes.photoDesc}>
                                <p>{photo.title.length > 30 ? photo.title.substr(0, 30) + "..." : photo.title}</p>
                            </div>
                            </a>
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