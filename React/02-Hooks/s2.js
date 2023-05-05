function Foo(props) {
    const [counterValue, setCounter] = React.useState(props.initialValue);
    const [fruit, setFruit] = React.useState("apple");
    const [items, setItems] = React.useState([{ id: 1, title: "ITEM 1" }, { id: 2, title: 'Item 2' }]);
    const addNewItem = () => {
        const newId = items.length + 1;
        const newItem = { id: newId, title: "Item " + newId };
        //dizinin sonuna yeni bir öğe eklemek icin kullanılan bir js teknigi
        //items: dizi , newItem:değişken
        //... spread operatörü ve bir diziyi tek tek elemanlara ayrı ayrı alır ve yeni dizi olusturur
        //Sonuç olarak, newItems dizisi, items dizisinin tüm elemanlarına ve sonuna newItem öğesine sahip olacak şekilde genişletilmiş bir dizi olacaktır
        const newItems = [...items, newItem];
    }
    return (
        <div>
            <p><strong>Counter Value:</strong> {counterValue}</p>
            <button onClick={() => { setCounter(counterValue + 1) }}>Increment</button>{' '}
            <button onClick={() => { setCounter(counterValue - 1) }}>Decrement</button>
            <hr />
            <strong>Fruit:</strong>{fruit}{' '}
            <button onClick={() => { setFruit('orange') }}>Set fruit to orange</button>
            <hr />
            <h3>Items</h3>
          
            {items.map((item, index) =>
            (
                //
                <p key={index} style={{ padding: '0', margin: '0' }}>{item.title}</p>
            ))}
            <button onClick={addNewItem}>Add New Item</button>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));