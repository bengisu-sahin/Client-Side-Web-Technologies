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

                <style>
                    {
                        `
                        .container {
                            margin: auto;
                            padding: 10px;
                            width: 50%;
                            background-color: lightgrey;
                            color: red;
                            border: 1px dashed black;
                        }
                      `
                    }
                </style>
            </div>
        );
    } //end-render
} //end-MyComponent

ReactDOM.render(<MyComponent />, document.getElementById('root'));