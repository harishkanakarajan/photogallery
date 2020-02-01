import React from 'react'
import { connect } from 'react-redux'
import { InvokeGetAPI } from '../../API/InvokeAPI'
import APIConfig, { APIEndPointConfig } from '../../Config/APIConfig'
import { listAlbums } from '../../Redux/Actions/ActionCreators'
import Album from './Album'

class ListAlbum extends React.Component {
    constructor(props) {
        super(props)
        /* 
                this.state = {
                    albumData: []
                } */
    }

    componentDidMount() {        
        (this.props.albums.length === 0 &&
            InvokeGetAPI(APIConfig.apiBaseURL + APIEndPointConfig.listAlbum).then((res) => {
                this.props.listAlbums(res)
            }).catch((err) => {
                console.log(err)
            })
        )
    }

    render() {
        console.log('render')
        console.log(this.props)
        return (
            this.props.albums.map(album =>
                <Album />
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}

const mapDispatchToProps = dispatch => ({
    listAlbums: (res) => dispatch(listAlbums(res))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbum)