function Counter(props) {
    const [counterValue, setCounterValue] = React.useState(props.initialValue);
    //gets called right after the componenet is rendered
    React.useEffect(() => {
        //update the document title using the browser API
        document.title = `Counter Value: ${counterValue}`;
    });
    return (
        <div style={{ fontSize: '20px' }}>
            <p><b>Counter Value:</b> {counterValue} </p>
            <button onClick={() => { setCounterValue(counterValue + 1) }}>Increment</button>{' '}
            <button onClick={() => { setCounterValue(counterValue - 1) }}>Decrement</button>
        </div>
    );
}
function App() {
    return (
        <div>
            <Counter initialValue={50} />
        </div>
    );
} // end-App

// Render the App component on the screen
ReactDOM.render(<App />, document.getElementById('root'));