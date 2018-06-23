import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';


class Layout extends Component {
    render() {
        return (
            <div>

                {/*            <div className="navbar navbar-expand-md navbar-dark sticky-top navBg" id='global-nav'>
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
 */}

                {/* BARRE DE NAVIGATION */}
                <nav className="navbar navbar-light navbar-expand-md sticky-top navigation-clean-button darkNavClass navBg">
                    <a className="navbar-brand aNav"><Link to={'/'}>
                        <img className="img-fluid imgNav" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Flogoicon.png?alt=media&token=8764ac38-e041-4f7a-8602-ba113b70d07b" />Mr. Joints Spearfishing</Link></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navCol" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link colorNav">
                                    <i className="fa fa-home"></i><Link to={'/'}>Home</Link></a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link colorNav"><Link to={'/Products'}>Product</Link></a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link colorNav"><Link to={'/Lifestyles'}>Lifestyle</Link></a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link colorNav"><Link to={'/about'}>Contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* FIN BARRE DE NAVIGATION */}
                <img className='img-fluid imgBan' src='https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fac003.jpg?alt=media&token=1a449d1b-7395-4732-b986-0700b6e812df' />

                <div>{this.props.children}</div>

                {/* PIED DE PAGE */}
                <section className="row">
                    <div className="col-md-12 footer-basic">
                        <footer>
                            <div className="footer-dark">
                                <footer>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6 item">
                                                <h3>Links</h3>
                                                <ul>
                                                    <li>
                                                        <a><Link to={'/'}>Accueil</Link></a>
                                                    </li>
                                                    <li>
                                                        <a><Link to={'/Products'}>Product</Link></a>
                                                    </li>
                                                    <li>
                                                        <a><Link to={'/Lifestyles'}>Lifestyle</Link></a>
                                                    </li>
                                                    <li>
                                                        <a><Link to={'/about'}>Contact</Link></a>
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
                {/* FIN PIED DE PAGE */}
            </div >

        );
    }

}

export default Layout;