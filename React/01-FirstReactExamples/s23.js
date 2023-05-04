class App extends React.Component {
    state = {
        name: "Bengisu",
        age: 23
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleSubmit = (e) => {
        // Bu işlem, formun sunucuya gönderilmesi veya veritabanına kaydedilmesi gerektiğinde kullanılabilir.
        e.preventDefault();

        console.log("Name: ", this.state.name);
        console.log("Age: ", this.state.age);
    }
    render() {
        <div>
            <h2>My name is {this.state.name}</h2>
            <h2>My age is {this.state.age}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input
                        //"||" operatörü JavaScript'te "veya" anlamına gelir. Bu örnekte, "value" özelliğindeki "this.state.name" değeri null ya da undefined ise, yerine boş bir dize "" atanır.
                        type="text"
                        value={this.state.name || ""}
                        onChange={this.handleNameChange}
                    />
                </label>
                <br /><br />
                <label>Age:
                    <input
                        type="number"
                        value={this.state.age || ""}
                        onChange={this.handleAgeChange}
                    />
                </label>
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'));