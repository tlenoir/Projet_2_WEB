import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Layout extends Component {
    render() {
        return (
            <div>

                <div>
                    <nav class="navbar navbar-expand-md navbar-light bg-light">
                        <a class="navbar-brand" >MrJoints Spearfishing</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" ><Link to={'/'}>Home</Link><span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to={'/Products'}>Product</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to={'/Lifestyles'}>Lifestyle</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" ><Link to={'/about'}>Contact</Link></a>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    {/* <ul>
                        <li><Link to={'/'}>Accueil</Link></li>
                        <li><Link to={'/Products'}>Produit</Link></li>
                        <li><Link to={'/Lifestyles'}>Lifestyle</Link></li>
                        <li><Link to={'/about'}>Contact</Link></li>
                    </ul> */}
                    <div className="container-fluid">
                        <div className="row header">
                            <div className="col-md-12" id="ban">
                            </div>
                        </div>
                    </div>

                    <div>{this.props.children}</div>
                </div>

                <section class="row">
                    <div class="col-md-12 footer-basic">
                        <footer>
                            <div class="footer-dark">
                                <footer>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-3 item">
                                                <h3>Services</h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Web design</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Development</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hosting</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-6 col-md-3 item">
                                                <h3>About</h3>
                                                <ul>
                                                    <li>
                                                        <a href="#">Company</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Careers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-6 item text">
                                                <h3>Mr. Joints Spearfishing</h3>
                                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus
                            elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                                            </div>
                                            <div class="col item social">
                                                <a href="#">
                                                    <i class="icon ion-social-facebook"></i>
                                                </a>
                                                <a href="#">
                                                    <i class="icon ion-social-instagram"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <p class="copyright">Mr. Joints Spearfishing © 2018</p>
                                    </div>
                                </footer>
                            </div>
                        </footer>
                    </div>
                </section>
            </div >
        );
    }
}

export default Layout;