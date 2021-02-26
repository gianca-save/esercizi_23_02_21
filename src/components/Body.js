import React from 'react';
import Product from './Product.js'

//non ho effettutato decostruzione delle props per lasciare le funzioni cover, title, description, che rendono il render più pulito

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showProducts: false
        }
    }

    makeVisible() {
        this.setState({ showProducts: true });
    }

     productsCards() {
        return this.state.showProducts ? (<div className='Products_Container'><ul>{(this.products).map((product) => { return (<li> <Product title={product.title} /> </li>)})}</ul></div>) : (<button onClick={this.makeVisible}>Mostra Prodotti</button>)
    }

    cover() {
        return <img className='banner' src={this.props.cover} alt=""/>
    }

    title() {
        return <h1>{this.props.title}</h1>
    }

    description() {
        return <h2>{this.props.description}</h2>
    }

   

    render() {
        return (
            <main className='main_card'>
                {this.cover()}
                {this.title()}
                {this.description()}
                {this.productsCards()}
            </main>
        )
    }

}

export default Body