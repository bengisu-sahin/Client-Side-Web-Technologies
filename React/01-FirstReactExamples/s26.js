class App extends React.Component {
    state = {
        myCar: "Volvo"
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected: ", this.state.myCar);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select>
                        name="myCar"
                        value={this.state.myCar}
                        onChange={this.handleChange}
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                    <br /><br />
                    <button>Submit</button>
                </form>
            </div>)
    }
}
ReactDOM.render(<App />, document.getElementById('root'));