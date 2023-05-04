class App extends React.Component {
    state = {
        name: "John",
        age: 30
    }
    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", this.state.name);
        console.log("Age: ", this.state.age);
    }
    render() {
        return (
            <div>
                <h2>My name is {this.state.name}</h2>
                <h2>My age is {this.state.age}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name || ""}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br /><br />
                    <label>Age:
                        <input
                            type="number"
                            name="age"
                            value={this.state.age || ""}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br /><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));