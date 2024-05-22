import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
  <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <h1 className="navbar-brand mb-2 h1">
          <img src="https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png" width="30" height="30" className="d-inline-block align-top" alt="can't load" />
          TextUtils
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <Link className=" nav-item nav-link active " to="/TextForm">TextForm</Link>  {/* to make active Link try nav-Link-active */}
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link active mb-1" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className='d-flex'>
            <div className='bg-primary rounded mx-2 my-2' onClick={()=>{props.togglemode('primary')}} style={{height: '30px' , width: '30px' , cursor: 'pointer'}}></div>
            <div className='bg-danger rounded mx-2 my-2' onClick={()=>{props.togglemode('danger')}} style={{height: '30px' , width: '30px' , cursor: 'pointer'}}></div>
            <div className='bg-success rounded mx-2 my-2' onClick={()=>{props.togglemode('success')}} style={{height: '30px' , width: '30px' , cursor: 'pointer'}}></div>
            <div className='bg-warning rounded mx-2 my-2' onClick={()=>{props.togglemode('warning')}} style={{height: '30px' , width: '30px' , cursor: 'pointer'}}></div>
          </div>

          
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={()=>{props.togglemode('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
          </div>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit" style={{cursor: 'pointer'}}>Search</button> {/*primary - blue and success - green */}
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
