import './ads.css'
import React from 'react'

class Ads extends React.Component {
    render() {
        const allAds = this.props.data; 
        return(
            <div className='ads'>
                {
                    allAds.map((allAds) => {
                        return (
                            <div className='ad-items'>
                                <div key={allAds.id}>{allAds.description}</div>

                            </div>
                        )
                    })
                }
            </div>
        ) 
    }
}

export default Ads