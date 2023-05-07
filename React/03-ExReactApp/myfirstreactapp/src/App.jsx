import React from 'react';
import './css/App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
        <Counter initialValue={100} timeout={1000}/>
        <Counter initialValue={500} timeout={500}/>
        <Counter initialValue={750} timeout={250}/>
    </div>
  );
}

export default App;
