function Counter(props) {
    const [counterValue, setCounter] = React.useState(props.initialValue);
    return (
        <diV style={{ fontSize: '20px' }}>
            <strong>Counter Value:</strong> {counterValue}
            <button onClick={() => { setCounter(counterValue + 1) }}>Increment</button>{' '}
            <button onClick={() => { setCounter(counterValue - 1) }}>Decrement</button>
            <hr />
        </diV>
    )
}
function App() {
    return (
        <div>
            <Counter initialValue={50} />
            <Counter initialValue={100} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));