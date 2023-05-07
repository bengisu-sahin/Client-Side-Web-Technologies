/**
 * Çoğu durumda, bir giriş öğesinin değerini yalnızca bir düğmeye basıldığında almak isteriz (örneğin, bu giriş öğesinin içinde bulunduğu formun, formun gönderme işleyicisi çağrılarak gönderildiğinde olduğu gibi). Bu gibi durumlarda, useRef kullanmak en iyisidir. useRef ile ilgili fikir, bir referansı bir HTML öğesiyle ilişkilendirmektir.
 */
const Foo = () => {
    const fnameRef = React.useRef(null);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Firs name is: ", fnameRef.current.value);
    }
    return (
        <div>
            <form>
                <label>First name: </label>
            //input alanına bir referans eklemek icin kullanılan syntax
                <input ref={fnameRef} />
                <br />
                <button onClick={(e) => submitHandler(e)}>Submit</button>
            </form>
        </div>
    )
};
function App() {
    return (
        <div>
            <Foo />
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById('root'));