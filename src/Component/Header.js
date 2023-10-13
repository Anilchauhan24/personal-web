import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {


        return (
            <div className="One">


                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="#">Anil Chauhan</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-success " />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">About me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Contact us</a>
                                </li>
                            </ul>

                        </div>
                        <div id="right">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">My Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Pages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Let's Talk</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

