import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../asset/logoicon.png';
import './layout.css'

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-md navbar-dark sticky-top navBg">
                    <div className="container-fluid navStyle"><span className="text-white d-md-none"><Link to={'/'}><img className="img-fluid imgNav" src={logo} />Mr. Joints Spearfishing</Link></span><button className="btn btn-link navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav"><span className="navbar-toggler-icon"></span></button>
                        <div id="main-nav" className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-fill w-100">
                                <li className="nav-item"><Link to={'/'}>Home</Link></li>
                                <li className="nav-item"><Link to={'/Products'}>Product</Link></li>
                                <li className="nav-item"><Link to={'/Lifestyles'}>Lifestyle</Link></li>
                                <li className="nav-item"><Link to={'/about'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <img className='img-fluid d-none d-sm-block imgBan' src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fac003.jpeg?alt=media&token=e069815d-811c-4c1f-8a47-dd6152444bbc" />
                    </div>
                </div>

                <div>{this.props.children}</div>


                <section className="row">
                    <div className="col-md-12 footer-basic">
                        <footer>
                            <div className="footer-dark">
                                <footer>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-3 item">
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
                                            <div className="col-sm-6 col-md-3 item">
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
                                            <div className="col-md-6 item text">
                                                <h3>Mr. Joints Spearfishing</h3>
                                                <p>facebook : Mr.Joints Spearfishing Tahiti</p>
                                                <p>mobile: +68987315673</p>
                                                <p>e-mail: mr.joints.spearguns@gmail.com</p>
                                                <p>address: BP10188 Paea 98711 Paea Tahiti French Polynesia</p>
                                            </div>
                                            <div className="col item social">
                                                <a href="https://www.facebook.com/FranciJoints/">
                                                    <i className="icon ion-social-facebook"></i>
                                                </a>
                                                <a href="https://www.instagram.com/mr.joints_spearfishing_tahiti/?hl=fr">
                                                    <i className="icon ion-social-instagram"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="copyright">Mr. Joints Spearfishing © 2018</p>
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