import React,  {useState, Fragment} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import History from "./History.js";

var App = () => {
  const [descriptionVal,setDescriptionVal] = useState();
  const [description,setDescriptions] = useState();
  const [page, setPage] = useState(1);

  const getDate = (e) => {
    const description = e.target.value;
    setDescriptionVal(description);
  }
  const newPage = async (description, page) => {
    const result = await axios.get(`/events?q=${description}&_page=${page}`);
    setDescriptions(result.data);
    console.log(result.data);
  }
  const setNewPage = async(select) => {
    await setPage(select);
  }
  const setThePage = async (e) => {
    console.log('1st',e.selected);
    // var selected = e.selected + 1;
    // console.log('2nd',selected)
    // await setNewPage(selected)
    // console.log('3rd',page)
    var newPageS = e.selected + 1
    await newPage(descriptionVal, newPageS)
  }

  // ?q=a    _page

  return (
    <div id="pagination">
        <label>
          Enter a search term:
          <input onChange={getDate} type="text" name="date" />
        </label>
        <input type="submit" value="Submit" onClick={ (e) => { newPage(descriptionVal) }} />
      <History description={description}> </History>
      <ReactPaginate containerClassName={"newPage"} pageCount={10} pageRangeDisplayed={10} marginPagesDisplayed ={10} onPageChange={setThePage}/>
    </div>
  )
}

export default App;