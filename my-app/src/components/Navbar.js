import React from 'react';

export default function Navbar() {
  return (
    <>
    <nav className="navbar sticky-top bg-body-tertiary" data-bs-theme="dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>Medico</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/"><h3>Home</h3></a>
          </li>
          <li className="nav-item">
            <a classNameName="nav-link" href="/About"><h3>About</h3></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Services"><h3>Services</h3></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact"><h3>Contact</h3></a>
          </li>
          {/*<li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h3>Dropdown</h3>
            </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
  </li>*/}
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
