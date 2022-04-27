import React from 'react'
import {Link} from "react-router-dom"

function login() {
  return (
    <form className="from">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter passward"
            />
          </div>
        <button type='submit' className='btn btn-primary m-2' >
        login
        </button>
       <div>
       I don't have an anccount
       <Link to="/register"className='nav-link' >Ragister</Link>
       </div>
</div>
    </form>
  );
}

export default login