import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Product-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/SearchProduct">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/DeleteProduct">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewProduct">View</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"></a>
        </li>
      </ul>
    </div>
  </div>
</nav>







    </div>
  )
}

export default NavBar