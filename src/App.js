import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage />
    </div>
  );
}

export default App;
