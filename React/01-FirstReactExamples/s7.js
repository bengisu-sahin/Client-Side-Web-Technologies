class Car extends React.Component {
    render(){
        return <h2>Hi, I am a Car!</h2>;
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>We have two cars:</h1>
                <Car/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));