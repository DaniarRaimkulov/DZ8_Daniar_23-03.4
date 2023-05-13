import React from 'react'
import '../../App.css'

export const Pagination = ({ page, handleNext, handlePrev, count }) => {
    return (
        <div className='btnBox'>
            <button onClick={handlePrev}>Prev</button>
            <h2> {page}  / {count} </h2>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}
