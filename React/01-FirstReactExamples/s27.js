class MyComponent extends React.Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            border: "2px solid black"
        };

        return (
            <div>
                <h1 style={{ color: "red", backgroundColor: "lightgray" }}>Hello Style!</h1>
                <p style={mystyle}>This paragraph has another style </p>
                <div className="container">
                    <p>This is a paragraph inside a container</p>
                </div>
            </div >
        )
    }
}
ReactDOM.render(<MyComponent />, document.getElementById('root'));