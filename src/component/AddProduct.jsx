import React from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
  return (
    <div>
        <NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Product name</label>
        <input type="text" className="form-control" />
    </div>


    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Description</label>
<textarea name="" id="" className="form-control"></textarea>    </div>


    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Warranty</label>
        <input type="text" className="form-control" />
    </div>


    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Expiry-date</label>
<input type="date" name="" id="" className="form-control" />

    </div>


    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Manufacturing date</label>
        <input type="date" name="" id="" className="form-control" />
    </div>



    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Price</label>
        <input type="text" className="form-control" />
    </div>


    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Product Image</label>
        <input type="file" name="" id="" className="form-control" />
    </div>



    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Customer care</label>
        <input type="text" className="form-control" />
    </div>



    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-success">Submit</button>
    </div>
</div>


        </div>
    </div>
</div>






    </div>
  )
}

export default AddProduct