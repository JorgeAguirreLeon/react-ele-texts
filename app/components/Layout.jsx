import React        from 'react'
import {Link}       from 'react-router'
import Evaluation   from './Evaluation'
import Footer       from './Footer'
import Data         from '../utils/Data'

const Layout = (props)=> {

  return (
    <div>
      <nav className='navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link className='navbar-brand' to='/'>Español como Lengua Extranjera</Link>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li className='active'><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>Link</a></li>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Dropdown <span className='caret' /></a>
                <ul className='dropdown-menu'>
                  <li><a href='#'>Action</a></li>
                  <li><a href='#'>Action 2</a></li>
                  <li><a href='#'>Action 3</a></li>
                  <li role='separator' className='divider' />
                  <li><a href='#'>Action 4</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container main-container'>
        <Evaluation
          text={Data.text}
          title={Data.title}
          difficulty={Data.difficulty}
          tests={Data.tests}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
