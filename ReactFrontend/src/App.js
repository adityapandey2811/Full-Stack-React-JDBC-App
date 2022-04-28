import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Add from './Services/Add';
import AdvanceSearch from './Services/AdvanceSearch';
import Delete from './Services/Delete';
import Edit from './Services/Edit';
import Grid from './Services/Grid';
import Footer from './Components/Footer';

function App() {

  const [q,setQ] = useState('')

  const init = {
    deleteArr : [],
    invoicecurrency : '',
    custpaymentterms : '',
    documentid : '',
    invoiceid : '',
    customernumber : '',
    buisnessyear : '',
  }
  const [data,setData] = useState(init);

  function getChildData(receivedData) {
    setData({
      deleteArr:receivedData.delArr,
      invoicecurrency:receivedData.ic,
      custpaymentterms:receivedData.cpt,
      documentid:receivedData.docid,
      invoiceid:receivedData.invid,
      customernumber:receivedData.custnum,
      buisnessyear:receivedData.buisnessyear,
    });
 }


 function getQuery(query) {
  console.log(query)
  setQ(query)
}


  return (
    <Router>
      <Navbar getQuery = {getQuery}/>
      <Grid getChildData = {getChildData} queryString = {q}/>
      <Routes>
        <Route path='/' exact element={<></>}/>
        <Route path='/Add' element={<Add/> } />
        <Route path='/AdvanceSearch' element={<AdvanceSearch docid={data.documentid} invid={data.invoiceid} custnum={data.customernumber} buisnessyear={data.buisnessyear}/>} />
        <Route path='/Delete' element={<Delete deleteThisArray = { data.deleteArr }/>} />
        <Route path='/Edit' element={<Edit delArr = { data.deleteArr[0] } ic = {data.invoicecurrency} cpt = { data.custpaymentterms }/>} />
      </Routes>
      <Footer/>
    </Router>
  )
};


export default App;