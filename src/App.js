import { BrowserRouter as Router } from "react-router-dom";
import useRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <Header />
      <main>{routes}</main>
      <Footer />
    </Router>
  );
}

export default App;
