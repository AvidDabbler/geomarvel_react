import './App.css';



function App() {
  console.log(process.env)
  return (
    <div className="App">
      <p>{process.env.API_URL}</p>
    </div>
  );
}

export default App;
