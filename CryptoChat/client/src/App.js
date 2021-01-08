import React,  {useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import History from "./History.js";
import Chart from 'chart.js';


var App = () => {

  return (
    <div>
      <History/>
    </div>
  )
}

export default App;