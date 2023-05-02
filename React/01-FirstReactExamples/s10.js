class Car extends React.Component {
    render() {
        return (
            <h2>I am a {this.props.info.make} {this.props.info.model}</h2>
        );
    }
}

class App extends React.Component {
    render(){
        const car1={make:"Toyota", model:"Corolla"};
        return(
            <div>
                <h1>We have two cars:</h1>
                <Car info={car1}/>
            </div>
        )
    }
}