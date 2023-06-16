import React from 'react'

const Cards = (props) => {
    return (
        <div>
            <div className="card m-3" style={{"width": "20rem" }}>
                <img src={props.imgsrc}alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        <p className="card-text">{props.description}</p>
                        <select className='m-3 h-100 b-100 bg-sucess'>
                            {
                               Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key ={i+1} value ={i+1}> {i+1}</option>

                                )
                               }) 
                            }
                        </select>
                    </div>
            </div>

        </div>
    )
}

export default Cards