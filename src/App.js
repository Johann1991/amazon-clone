import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductsDetails from "./components/ProductsDetails";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            {/* use exact to ensure this page only displays when the route maxes exactly*/}
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductsDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
