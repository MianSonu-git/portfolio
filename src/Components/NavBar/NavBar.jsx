import "./NavBar.style.css";
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#home">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 _ul">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#skill">Skill</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#project">Project</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#aboutme">AboutMe</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
          </>
        )
    }
}
