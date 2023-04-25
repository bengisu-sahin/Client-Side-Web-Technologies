function Car(props) {
    return (
        <h2>I am a {props.make} {props.model}</h2>
    );

}
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>We have two cars:</h1>
                <Car make="Toyota" model="Corolla" />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));