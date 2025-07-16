import React from 'react'
import NavBar from './NavBar'

const DeleteProduct = () => {
  return (
      <div style={{
            backgroundImage: "url('https://st3.depositphotos.com/6171310/37268/v/450/depositphotos_372684956-stock-illustration-beautiful-wallpaper-splash-watercolor-multicolor.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
        }}>
        <NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Product Name</label>
<input type="text" className="form-control" />


    </div>




    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-success">Delete</button>
    </div>
</div>


        </div>
    </div>
</div>



    </div>
  )
}

export default DeleteProduct