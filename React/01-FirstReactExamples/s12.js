class Counter extends React.Component {
    constructor(props) {
        //super React.Component in constructor metodunun çağrılmasını sağlar
        super(props);
        //bileşenin durumunu 'this.state' saklar
        this.state = {
            //burada counterValue ve timeout olmak üzere iki özellik tanımlandı
            //bu özellikler bileşenin calısma zamanında takip edilmesi gereken özelliklerdir
            //props parametresi bileşene dışarıdan sağlanan özellikleri içerir Burada porps lu değerler ile set edilir
            counterValue: props.initialValue,//bileşenin başlangıç değeri
            timeout: props.timeout //beklenilecek süre
        };
    }
    /*render() yöntemi, React bileşeninin görüntüsünü oluşturmak için kullanılan özel bir yöntemdir. Bu yöntem, bileşenin iç durumunu ve/veya dış özelliklerini (props) kullanarak bir JSX (JavaScript XML) ağacı oluşturur ve bu ağacı ekranda gösterir. JSX, HTML benzeri bir sözdizimi kullanarak JavaScript kodu yazmamıza olanak tanır.

    React, bir bileşenin render yöntemini herhangi bir özellik değiştiğinde ve/veya iç durumu değiştirdiğinde otomatik olarak çağırır. Bu nedenle, bileşenin iç durumunu güncellemek veya yeniden render etmek istediğimizde, render() yöntemini kullanırız. */

    //Gets called after the component is rendered.
    //At that point we would like to set the time interval so that we can star incrementing the value of the counter

    componentDidMount() {
        this.timerId = setInterval(this.Increment, this.state.timeout);
    }
    // Gets called before the component is to be removed from the DOM
    // At that point, we have to stop the timer
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    Increment = () => {
        this.setState({ counterValue: this.state.counterValue + 1 });
    }
    render() {
        return (
            <h2>Counter value: {this.state.counterValue}</h2>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Counter initialValue={100} timeout={1000} />
                <Counter initialValue={500} timeout={500} />
                <Counter initialValue={750} timeout={250} />
            </div>
        );
    }
}
ReactDOM.render(<App currTime="100" />, document.getElementById('root'));