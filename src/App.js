import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

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
