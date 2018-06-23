import React, { Component } from 'react';
import './lifestyles.css';

import * as firebase from 'firebase';

class Lifestyles extends Component {

    constructor() {
        super()
        this.state = {
            items: []
        }

    }

    componentDidMount() {

        console.log("on componentDidMount");

        // call 'home' the path-collection from firebase bro'
        firebase.firestore().collection('team')
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
            <div>
                <div className='row titlepage'>
                    <div className='col-md-12'>
                        Lifestyles
                    </div>
                </div>

                {/* card-bootstrap */}

                <div className="row">

                    <div className="col-1"></div>
                    <div className="col-10">

                        <div className="title">
                            <h1>JOINTS</h1>
                        </div>
                        <div>
                            <p>
                                I spend most of my life at sea, sailing a boat, crossing an ocean, diving the blue, searching for the good vibe.
                                </p>
                            <p>
                                Freediving and spearfishing are the ways for me to enter my deepest emotions and resize the world around me at its most important core.
                                </p>
                            <p>
                                Spearfishing in its deep significance is the perfect way to get in full contact with our common mother Ocean.
                                </p>
                            <p>
                                Oceans are wild territories, where silence, steadiness, calm, and focus are optimized at best to survive.
                                </p>
                            <p>
                                All conscious spearfishermen respect the seas and catch just the minimum to survive, selecting the pray by size and specimen.
                                </p>
                            <p>
                                In my activity I ensure the minimum amount of plastic materials, to build my guns, most of it wood and stainless steel, to promote the most sustainable fishing gear.
                                </p>
                        </div>
                        <div className="title">
                            <h1>TEAMS</h1>
                        </div>
                        <div className="row">
                        

                            {this.state.items.map((itemTeamCard) => {
                                return (

                                    // <div className="col-4 auto-marge">

                                    <div class="card card-resizing mx-auto">
                                        <img class="card-img-top" src={itemTeamCard.url} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">{itemTeamCard.title}</h5>
                                            <p class="card-text">
                                                <h5>lifestyle:</h5>
                                                {itemTeamCard.lifestyle}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <h5>passport:</h5>
                                                {itemTeamCard.passport}</li>
                                            <li class="list-group-item">
                                                <h5>position:</h5>
                                                {itemTeamCard.position}</li>
                                        </ul>
                                    </div>

                                    // </div>


                                )
                            })}
                        </div>
                    </div>
                    <div className="col-1"></div>

                </div>
            </div>
        )
    }
}

export default Lifestyles;