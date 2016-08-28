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
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Opciones <span className='caret' /></a>
                <ul className='dropdown-menu'>
                  <li><Link to='/select'>Elegir texto</Link></li>
                  <li role='separator' className='divider' />
                  <li><Link to='/upload'>Subir texto</Link></li>
                  <li role='separator' className='divider' />
                  <li><Link to='/'>Inicio</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container main-container'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
