import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <Title />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
