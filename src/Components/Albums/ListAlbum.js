import React from 'react'
import { connect } from 'react-redux'
import { InvokeGetAPI } from '../../API/InvokeAPI'
import APIConfig, { APIEndPointConfig } from '../../Config/APIConfig'
import { listAlbums } from '../../Redux/Actions/ActionCreators'
import Album from './Album'
import Loader from '../Common/Loader'

class ListAlbum extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: false        
        }
    }
    
    componentDidMount() {
        this.setState({ loader: true }, () => {
            (this.props.albums &&
                InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.listAlbum).then((res) => {
                    this.props.listAlbums(res)
                    this.setState({loader: false})
                }).catch((err) => {
                    console.log(err)
                    this.setState({loader: false})
                })            
            ) 
        })
    }

    render() {
        return (
            this.state.loader ? <Loader /> : this.props.albums.map(album =>
                <div key={"Album_" + album.id}>
                    <Album album={album}/>
                </div>
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    listAlbums: (res) => dispatch(listAlbums(res)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbum)