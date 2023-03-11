import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Parrrent from "./components/callback/Parrrent";

const App = () => {



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Parrrent />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
