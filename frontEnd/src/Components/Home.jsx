import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <header className='container-fluid bg-primary'>
                <nav className="container navbar navbar-expand-md navbar-dark bg-primary">
                    <a className='navbar-brand' href='/'>Xenon </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0" >
                            <li className="nav-item active">
                                <Link className="nav-link active" to="/Sign">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Login">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="text-center  mt-5">
                <span className="display-1">
                    Welcome
                </span>
            </div>
        </>
    )
}
