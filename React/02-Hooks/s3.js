const Foo = () => { //ARROW function type component
    console.log('Foo rendering...')
    const [fname, setFname] = React.useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('First name is: ', fname)
    } // end-onSubmit

    return (
        <div>
            <form>
                <label>First name: </label>
                <input onChange={(e) => setFname(e.target.value)} value={fname} />
                <br />
                <button onClick={(e) => submitHandler(e)}>Submit</button>
            </form>
        </div>

    );
}
function App() {
    return (
        <div>
            <Foo />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));