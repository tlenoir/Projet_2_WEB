import React, { Component } from 'react';
import './products.css'

class Products extends Component {
    render() {
        return (
            <div>

                <div className='row titlepage'>
                    <div className='col-md-12'>
                        Products
                    </div>
                </div>

                {/* UTU90 */}

                <div className='nameGun'>
                    <p>UTU 110</p>
                </div>

                <div id="carouselExampleIndicators2" className="carousel slide caroussImg" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
                        {/* <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li> */}
                        {/* <li data-target="#carouselExampleIndicators2" data-slide-to="5"></li> */}
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Futu001.jpg?alt=media&token=63c847d1-dfc9-4435-9c45-99f61de79346" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Futu002.jpg?alt=media&token=77368103-ebdc-4c61-86df-baa4ca2749bb" alt="Second slide" />
                        </div>
                        {/* <div className="carousel-item">
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Futu003.jpg?alt=media&token=704fe120-eed8-430e-b576-3929589ba6be" alt="Third slide" />
                        </div> */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Futu004.jpg?alt=media&token=a3ca38ea-8ccd-4a19-b46d-045fca8105c1" alt="Fourth slide" />
                        </div>
                        {/* <div className="carousel-item">
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Futu005.jpg?alt=media&token=05071359-4e39-4fa1-b687-a7c46dd81b21" alt="Fifth slide" />
                        </div> */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Futu006.jpg?alt=media&token=d27a65c8-7b51-4c35-a21d-47a133e82fe2" alt="Sixth slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/* FIN UTU90 */}


                {/* RAEPUU120 */}
                <div className='nameGun'>
                    <p>Reapuu 120</p>
                </div>
                <div className='row caroussRow'>
                    <div className='col-md-12'>
                        <div id="carouselExampleIndicators" className="carousel slide caroussImg" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap001.jpg?alt=media&token=ce2d6deb-a002-44e4-833b-1b112d1f6483" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap002.jpg?alt=media&token=01c9c428-1d2f-46e1-b722-db5d1572745e" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap003.jpg?alt=media&token=ee096904-d806-457a-8c34-d9570c248dde" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap004.jpg?alt=media&token=5e97c636-095d-4af3-a85d-2064171780bd" alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap005.jpg?alt=media&token=553f65f3-ad40-40c0-a013-e76674e78613" alt="Fifth Slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap006.jpg?alt=media&token=617e730c-778b-4493-960c-4827699e32a0" alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Freap007.jpg?alt=media&token=2cff4ccd-2af0-4855-8bf3-a0ab0f5080b3" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin RAEPUU120 */}


                {/* VAU100 */}
                <div className='nameGun'>
                    <p>Vau 100</p>
                </div>
                <div className='row caroussRow'>
                    <div className='col-md-12'>
                        <div id="carouselExampleIndicators1" className="carousel slide caroussImg" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="6"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="7"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau001.jpg?alt=media&token=3e40de64-0660-4972-9c16-1698efb3aaec" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau002.jpg?alt=media&token=6ab2a783-b340-4852-a83e-7a93fd40e3c2" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau003.jpg?alt=media&token=eb511a41-7811-4bfa-9a69-356011fd37bb" alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau004.jpg?alt=media&token=d7d36d8e-f0f1-42b1-a3ee-5ef444423521" alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau005.jpg?alt=media&token=fd0ef52f-1ce6-4c3a-9592-14ab660843ad" alt="Fifth Slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau006.jpg?alt=media&token=e9501d77-18e0-4718-bf3b-ba0acdcc567d" alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau007.jpg?alt=media&token=fe6a25b7-6650-464a-bc56-71ef6ffa134d" alt="Seventh slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fvau008.jpg?alt=media&token=a9b46561-e3f2-4ae6-a9ff-6a7ebcf2e0e8" alt="Eighth slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* FIN VAU100 */}

                {/* AVE130 */}
                <div className='nameGun'>
                    <p>Ave 130</p>
                </div>
                <div className='row caroussRow'>
                    <div className='col-md-12'>
                        <div id="carouselExampleIndicators3" className="carousel slide caroussImg" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="6"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave001.jpg?alt=media&token=bf9acdff-e79a-43f6-b01e-809b04e11478" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave002.jpg?alt=media&token=b2d9d99b-5ba2-4274-a67a-d801f3af384f" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave003.jpg?alt=media&token=43fae5a0-eb15-4a44-9d7b-fbc37c945039" alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave005.jpg?alt=media&token=4bef25e5-5160-4e04-937d-d17dd6f21049" alt="Fourth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave006.jpg?alt=media&token=e19c8d72-6632-4d5b-aaa7-3735c74f5689" alt="Fifth Slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave007.jpg?alt=media&token=5463598b-f10a-4b0a-94fb-4785123735c2" alt="Sixth slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/fishingw-45678.appspot.com/o/root%2Fproducts%2Fave008.jpg?alt=media&token=2b3156f1-61cf-492c-b1ef-fa1f3e5291b4" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Fin AVE130 */}
            </div>


        )
    }
}


export default Products;