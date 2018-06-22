import React, {Component}
from 'react';
import './home.css';
import * as firebase from 'firebase';

class Home extends Component {

    constructor () {
        super()
        this.state = {
            items: []
        }

      }

    componentDidMount() {

        console.log("on componentDidMount");

        // call 'home' the path-collection from firebase bro'
        firebase.firestore().collection('home')
            .get()
            .then(collection => {

                    // just get the url of image-storage
                    const suggestions = collection.docs.map(doc => 
                        doc.data().url)
                    this.setState({ 
                        items: suggestions })
                })
    }

    render() {
        return ( 
        <div className='body-content'>
            <div className='row'>

                <div className='col-2'></div>
                <div className='col-8'>

                    <div className='inside-body'>

                    {/* show image */}
                    <ul>
                    {this.state.items.map((image) => {
                    return (
                      
                        <img src={image}/>
                    )
                    })}
                    </ul>

                    Quis velit do culpa ea. Ut ad cupidatat do consectetur. Est qui amet ad qui sit irure consequat ipsum minim labore veniam. Ea exercitation consequat ea do voluptate. Mollit reprehenderit nisi duis est anim esse do non aliqua. Sunt nostrud ea id do laboris excepteur ipsum.

Nulla qui nulla mollit irure nulla. Sint eiusmod aliqua labore officia amet amet consectetur. Laboris exercitation Lorem dolore cillum cupidatat culpa. Sit mollit est occaecat id cupidatat. Enim commodo irure pariatur anim velit cillum. Id sint excepteur cillum mollit ex pariatur aliqua.

Enim aliqua proident voluptate aliqua duis. Cillum fugiat culpa ullamco id nostrud dolore eu occaecat exercitation aute veniam quis. Officia magna ea ex consectetur voluptate aute cillum adipisicing est ad qui ut ullamco adipisicing. Occaecat aliqua do officia amet aliqua exercitation incididunt Lorem quis dolore nulla exercitation.

Eiusmod dolor laborum enim irure qui commodo culpa fugiat eiusmod dolore amet nulla sint. Officia ipsum sint et adipisicing nulla laboris. Tempor velit labore minim mollit Lorem in ad deserunt mollit ut aliquip sunt aute dolor. Dolor sit aliqua est laboris eiusmod dolor ex culpa. Anim ex minim officia ad ad quis minim qui. Ullamco id et ex aute. Culpa aliqua aliquip amet eiusmod magna consectetur qui eiusmod.

Irure id aute et reprehenderit sint culpa. Ipsum ipsum commodo deserunt dolor reprehenderit incididunt ea dolore eiusmod aute nulla voluptate sint cupidatat. In in qui ullamco cupidatat aute. Proident pariatur in aliquip Lorem et quis aute esse exercitation aute. Qui est consequat qui consectetur commodo ut aliquip laborum ad do. Occaecat commodo voluptate ullamco reprehenderit ut ullamco. Laboris adipisicing enim id pariatur esse minim eiusmod commodo veniam.

Veniam sint nulla id laboris aliquip consectetur proident. Exercitation labore cupidatat officia eu adipisicing magna eu. Occaecat labore duis irure magna deserunt ea eiusmod fugiat. Laborum enim sunt veniam ipsum qui. Sint et cupidatat enim commodo culpa occaecat commodo incididunt minim.

Elit et deserunt velit laboris excepteur occaecat sit nulla occaecat commodo eiusmod occaecat duis. Enim culpa excepteur irure duis. Lorem ad ea reprehenderit Lorem tempor mollit amet cupidatat. Magna velit commodo eiusmod consequat nulla. Quis proident duis do dolore cillum ut quis qui nulla anim nisi officia cillum culpa.
                    
                    </div>

            
                </div>
                <div className='col-2'></div>

            </div>
        </div>
        )
    }
}

export default Home;