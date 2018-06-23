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

                <div className="row auto-center">

                    {this.state.items.map((itemTeamCard) => {
                        return (

                            // <div className="col-4 auto-marge">

                            <div class="card card-resizing">
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
        )
    }
}

export default Lifestyles;