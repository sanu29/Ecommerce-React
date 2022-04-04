import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoriesContextProvider } from "./context/categories-context";
import { ProductContextProvider } from "./context/products-context";
import { FilterContextProvider } from "./context/filter-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContextProvider>  
    <FilterContextProvider>
        <CategoriesContextProvider>
        <App />
        </CategoriesContextProvider>
        </FilterContextProvider>
        </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
