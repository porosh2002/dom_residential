import React from 'react'
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo'

function BodyContent() {
    return (
        <div className='BodyContent'>
            <div className='bContentOne'>
                <ContentOne />
            </div>
            <div className='bContenttwo'>
                <ContentTwo />
            </div>
        </div>
    )
}

export default BodyContent
