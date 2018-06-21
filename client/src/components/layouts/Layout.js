import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../asset/logoicon.png'
import './layout.css'

class Layout extends Component {
    render() {
        return (
            <div>

                <div>
                    <div>
                        <nav class="navbar navbar-light navbar-expand-md sticky-top navigation-clean-button darkNavClass">
                            <div class="container-fluid">
                                <a class="navbar-brand aNav"><Link to={'/'}>
                                    <img class="img-fluid imgNav" src={logo} />Mr. Joints Spearfishing</Link></a>
                                <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse navCol" id="navcol-1">
                                    <ul class="nav navbar-nav ml-auto">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link colorNav">
                                                <i class="fa fa-home"></i><Link to={'/'}>Accueil</Link></a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link colorNav"><Link to={'/Products'}>Produit</Link></a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link colorNav"><Link to={'/Lifestyles'}>Lifestyle</Link></a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link colorNav"><Link to={'/about'}>Contact</Link></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

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
                                                <p>facebook : Mr.Joints Spearfishing Tahiti</p>
                                                <p>mobile: +68987315673</p>
                                                <p>e-mail: mr.joints.spearguns@gmail.com</p>
                                                <p>address: BP10188 Paea 98711 Paea Tahiti French Polynesia</p>
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
                {/* <ul>
                        <li><Link to={'/'}>Accueil</Link></li>
                        <li><Link to={'/Products'}>Produit</Link></li>
                        <li><Link to={'/Lifestyles'}>Lifestyle</Link></li>
                        <li><Link to={'/about'}>Contact</Link></li>
                    </ul> */}
            </div >

        );
    }

}

export default Layout;