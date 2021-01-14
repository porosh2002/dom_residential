import React from 'react'
import ImageArchi from '../../Images/Test_Image_1.jpg'
function ContentTwo() {
    return (
        <div className='ContentBody'>
            <p className='Content-Title'>
            Architecture
            </p>
            <p className='Content-Des'>
            Creative and high-performance architecture implements all service phases of a construction project, ie from the first draft to final completion. Every builder receives continuous and personal support in all phases.

In close dialogue with each client, we develop concepts that give their individual wishes and needs a form and expression.

Intensive support, cost and deadline security as well as high quality and at the same time economical execution are important to us.
            </p>
            <img className='ContentImage' src={ImageArchi} alt='Dom residential' />
        </div>
    )
}

export default ContentTwo
