import React from 'react'
import { Link } from 'react-router-dom'
function MadeBy() {
    return (
        <>
         {/* TODO: сделать ссылку, чтобы можно было с нами связаться*/}
         <Link to='#' className='made-by' >
                    <div className='tilt'>
                        <span>M</span>
                        <span>A</span>
                        <span>D</span>
                        <span>E</span>
                        <span>_</span>
                        <span>B</span>
                        <span>Y</span>
                        <span>_</span>
                        <span>R</span>
                        <span>O</span>
                        <span>M</span>
                        <span>A</span>
                        <span>_</span>
                        <span>S</span>
                        <span>E</span>
                        <span>R</span>
                        <span>G</span>
                        <span>E</span>
                        <span>Y</span>

                        {/* TODO: сделать ссылку, чтобы можно было с нами связаться*/}
                    </div>
                </Link>   
        </>
    )
}

export default MadeBy
