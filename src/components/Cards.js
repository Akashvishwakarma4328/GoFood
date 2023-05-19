import React from 'react'

const Cards = () => {
    return (
        <div>
            <div className="card m-3" style={{"width": "20rem" }}>
                <img src="https://plus.unsplash.com/premium_photo-1663852297496-c427a58e98c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="card-img- m-1" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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