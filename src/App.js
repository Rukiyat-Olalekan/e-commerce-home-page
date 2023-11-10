import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/menu/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
