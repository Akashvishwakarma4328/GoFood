// import React from 'react'

// const Crousels = () => {
    

//     return (
//         <div>

//             <div id="carouselExampleFade"  className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit": "contain !important" , "weidth" : "100% !important" , "height": "100% !important"}}>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active" style ={{ "maxHeight" :"500px"}} >
//                         <img  src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'  alt="..." />
//                     </div>
//                     <div className="carousel-item" >
//                         <img src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="..." />
//                     </div>
//                     <div className="carousel-item" >
//                         <img src='https://plus.unsplash.com/premium_photo-1663852297496-c427a58e98c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="..." />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//         </div>
//     )
// }

// export default Crousels

import React from 'react';

const Carousels = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{
          width: '100%',
          height: '60vh', // Set the height to occupy the full viewport height
        }}
      >
        <div className="carousel-inner" style={{width: "100%", margin: "auto"}}>
          <div className="carousel-item active" >
            <img
              src="https://images.unsplash.com/photo-1598511756348-640384c52ada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="..."
              style={{  height: "60vh"}} // Apply object-fit: cover and height: 100% to the image
            />
          </div>
          <div className="carousel-item" style={{ maxHeight: '100vh' }}>
            <img
              src="https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=2048x2048&w=is&k=20&c=AtAY-5PW4eW6di6XadrfCKvyjgbPHg1SOLNBQXxRucA="
              className="d-block w-100"
              alt="..."
              style={{ height: "60vh"}} // Apply object-fit: cover and height: 100% to the image
            />
          </div>
          <div className="carousel-item" style={{ maxHeight: '100vh' }}>
            <img
              src="https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=2048x2048&w=is&k=20&c=8OBQa24pfg30tPlnhq4fCzhdaNlcHn-vRDpTHo4H3bA="
              className="d-block w-100"
              alt="..."
              style={{  height: "60vh"}} // Apply object-fit: cover and height: 100% to the image
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousels;
