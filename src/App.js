import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='text'>Pure Components</h1>
      <p className='text'>A React component is considered pure if it renders the same output for the same state and props.In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.</p>
      <h1 className='text'>High order Components</h1>
      <p className='text'> A higher-order component is a function that takes a component and returns a new component. <br /> <br /> Example:</p>
      <p>const EnhancedComponent = higherOrderComponent(WrappedComponent);</p>
    
    </div>
  );
}

export default App;