import "./App.css";

function App() {
  const getHomepageText = async () => {
    fetch(`http://localhost:8080`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  getHomepageText();
  return (
    <>
      <div className="App">Hello World!</div>
    </>
  );
}

export default App;
