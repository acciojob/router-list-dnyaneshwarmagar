
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>

        <Routes>
          <Route path="/" element={<ItemList/>}>
            <Route path="/items/:id" element={<ItemDetail/>}></Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
