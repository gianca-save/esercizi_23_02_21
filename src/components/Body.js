import React from 'react';

class Body extends React.Component {
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
            </main>
        )
    }

}

export default Body