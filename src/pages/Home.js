import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
          <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item d-flex">
                <div>
                  <i class="fa-solid fa-house ps-3"></i>
                  <h6 className='pe-4'>Home</h6>
                </div>
                <div>
                <i class="fa-solid fa-users ps-4"></i>
                  <h6 className='pe-4'>My Network</h6>
                </div>
                <div>
                <i class="fa-solid fa-briefcase ps-2"></i>
                  <h6 className='pe-4'>Jobs</h6>
                </div>
                <div>
                <i class="fa-solid fa-message ps-3"></i>
                  <h6 className='pe-4'>Message</h6>
                </div>
                <div>
                <i class="fa-solid fa-bell ps-3"></i>
                  <h6 className='pe-4'>Notification</h6>
                </div>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"><h6>Dropdown</h6> </a>
                <ul className="dropdown-menu">
                  <li className='ps-3'>
                    <Link className='nav=link-active' to = "/home">
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Setting & Privacy
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home
