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
                            <div className='separate'>
                                <div className='ad-items' key={allAds.id}>
                                    <img src={allAds.image} className='a-image' />
                                    <span>{allAds.description}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        ) 
    }
}

export default Ads