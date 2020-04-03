import React from 'react';
import './navbar.css';

class appNavbar extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <nav className="mb-4 navbar navbar-expand-lg navbar-dark unique-color-dark">
                <a className="navbar-brand" href="#"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navLinks" id="navbarSupportedContent-4">
                    {/*
                    Nav Links 
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><i class="fa fa-heart"></i> Follow <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-thumbs-up"></i> Collaboration</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-newspaper-o"></i> Media </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-cyan" aria-labelledby="navbarDropdownMenuLink-4">
                                <a class="dropdown-item" href="#">Facebook</a>
                                <a class="dropdown-item" href="#">Instagram</a>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </nav>
        )
    }
}
export default appNavbar;