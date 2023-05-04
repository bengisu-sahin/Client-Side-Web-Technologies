class App extends React.Component {
    state = {
        text: ""
    }
    handleChange = (e) => {
        const name = e.target.name
        this.setState({ [name]: e.target.value })
        console.log("Text: ", e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Text: ", this.state.text)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter Text Here:
                    <br />
                    <textarea
                        name="text"
                        rows="10"
                        cols="50"
                        value={this.state.text || " "}
                        onChange={this.handleChange}
                    />
                </label>
                <br /><br />
                <button>Submit</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));