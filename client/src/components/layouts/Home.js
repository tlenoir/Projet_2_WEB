import React, { Component }
    from 'react';
import './home.css';
import * as firebase from 'firebase';
import Lightbox from 'react-images';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            items: []
        }

        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);

    }



    openLightbox(event, obj) {

        this.setState({

            currentImage: obj.index,

            lightboxIsOpen: true

        });

    }



    closeLightbox() {

        this.setState({

            currentImage: 0,

            lightboxIsOpen: false

        });

    }



    gotoPrevious() {

        this.setState({

            currentImage: this.state.currentImage - 1

        });

    }



    gotoNext() {

        this.setState({

            currentImage: this.state.currentImage + 1

        });

    }



    componentDidMount() {

        console.log("on componentDidMount");

        // call 'home' the path-collection from firebase bro'
        firebase.firestore().collection('home')
            .get()
            .then(collection => {

                // just get the url of image-storage
                const suggestions = collection.docs.map(doc =>
                    doc.data())
                this.setState({
                    items: suggestions
                })
            })
    }
    render() {
        return (
            <div className='body-content'>
                <div className='row titlepage'>
                    <div className='col-md-12'>
                        Home
                    </div>
                </div>

                <div className='row'>

                    <div className='col-2'></div>
                    <div className='col-8'>

                        <div className='inside-body'>

                            <div className="title">
                                <h1>100% Handcrafted Spearguns</h1>
                            </div>
                            <div>
                                <p>
                                    My adoptive Tahitian Grandpa, Jack B., is one of the original inventors of the widely known Tahitian speargun. He drew his inspiration from the knowledge and expertise of the local people. Using the local Tahitian wood, Grandpa Jack handcrafted every part of the guns he produced.
                            </p>
                                <p>
                                    I decided to continue this tradition in his honour.  Mr. Joints Spearfishing guns are  a combination of tradition and modernity.  I use tropical wood and top quality materials, such as carbonfiber and stainless steel, to create an ideal balance between performance and style.
                            </p>
                                <p>
                                    All Mr. Joints Spearguns are entirely handcrafted, with each gun having been individually tested by me personally. Emphasis on balance, ergonomics and finishing makes these guns unique not only in their appearance but in their technical abilities.
                            </p>
                                <p>
                                    Light yet stiff, Red Dark Meranti wood is laminated with UD carbonfiber plates in order to give stability and significant rigor to the gunstock under the traction of the rubber bands.
                            </p>
                                <p>
                                    Mr. Joints Spearguns are reliable, powerful and extremely precise, making your hunting experience more enjoyable and rewarding.
                            </p>
                            </div>

                            {/* show image */}
                            <ul className="background-item-image">
                                <div className="center-block-img">
                                    {this.state.items.map((image) => {
                                        return (
                                            
                                                <img id="myImg" onClick={this.openLightbox} className="rounded mx-auto img-thumbnail ul-img" src={image.url} />
                
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>


                    </div>

                    {/* <Lightbox
                        images={[this.state.items.url]}
                        isOpen={this.state.lightboxIsOpen}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        onClose={this.closeLightbox}
                    /> */}

                    <div className='col-2'></div>

                </div>
            </div>
        )
    }
}

export default Home;