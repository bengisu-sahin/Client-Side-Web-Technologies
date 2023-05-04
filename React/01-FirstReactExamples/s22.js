class App extends React.Component {
    state = {
        name: "Bengisu",
        age: 23
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const el1 = document.getElementById("name");
        const el2 = document.getElementById("age");
        this.setState({
            name: el1.value,
            age: el2.value
        });
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
                            id="name"
                        />
                    </label>
                    <br></br>
                    <br /><br /> 
                    <label>Age:
                        <input
                            type="number"
                            name="age"
                            id="age"
                        />
                    </label>
                    <br></br><br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));