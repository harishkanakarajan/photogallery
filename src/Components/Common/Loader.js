import React from 'react'
import loader from '../../Images/loading.gif'

class Loader extends React.Component {
    render() {
        return(
            <div>
                <img src={loader} alt="Loading..." style={{width:"100%"}}/>
            </div>
        )
    }
}

export default Loader