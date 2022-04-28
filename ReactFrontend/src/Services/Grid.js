import React, {useState, useEffect} from 'react';
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {field: 'sl_no', headerName:'Sl No.', width: 70},
    {field: 'business_code', headerName: 'Business Code', width: 140,},
    {field: 'cust_number', headerName: 'Customer Number', width: 140},
    {field: 'clear_date', headerName: 'Clear Date', width: 140,},
    {field: 'buisness_year', headerName: 'Buisness Year', width: 140},
    {field: 'doc_id', headerName: 'Document Id', width: 140},
    {field: 'posting_date', headerName: 'Posting Date', width: 140},
    {field: 'document_create_date', headerName: 'Document Create Date', width: 140,},
    {field: 'due_in_date', headerName: 'Due Date', width: 140},
    {field: 'invoice_currency', headerName: 'Invoice Currency', width: 140},
    {field: 'document_type', headerName: 'Document Type', width: 140},
    {field: 'posting_id', headerName: 'Posting Id', width: 140},
    {field: 'total_open_amount', headerName: 'Total Open Amount', width: 140},
    {field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 140},
    {field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 140},
    {field: 'invoice_id', headerName: 'Invoice Id', width: 140},
  ];
    
function Grid(props) {
  const sendDataToMain = (deleteArr,invoicecurrency,customerpaymenttermt,documentid,invoiceid,customernumber,buisnessyear) => {
    var datagridtoapp = {
      delArr : deleteArr,
      ic : invoicecurrency,
      cpt : customerpaymenttermt,
      docid : documentid,
      invid : invoiceid,
      custnum : customernumber,
      businessyear : buisnessyear,
    }
    props.getChildData(datagridtoapp)
  }

  const [users, setUsers]  = useState([]) 
  const fetchData = async() => {
     try{
       const res = await fetch('http://localhost:8082/HRC60554WK-Backend/FetchServlet');
       const dataJson = await res.json();
       setUsers(dataJson);
     }
     catch(Exception)
     {
       console.log(Exception);
     }
  };

  useEffect(() => {
      fetchData()
  },[])
  const rowData = users?.map(user => {
      return { 
          sl_no:user?.sl_no,
          business_code:user?.business_code,
          cust_number:user?.cust_number,
          clear_date:user?.clear_date,
          buisness_year:user?.buisness_year,
          doc_id:user?.doc_id,
          posting_date:user?.posting_date,
          document_create_date:user?.document_create_date,
          due_in_date:user?.due_in_date,
          invoice_currency:user?.invoice_currency,
          document_type:user?.document_type,
          posting_id:user?.posting_id,
          total_open_amount:user?.total_open_amount,
          baseline_create_date:user?.baseline_create_date,
          cust_payment_terms:user?.cust_payment_terms,
          invoice_id:user?.invoice_id,
          id:user?.sl_no
      }
  })


  function search(rows){
    console.log(props.queryString);
      return rows.filter(row => row.cust_number.toString().indexOf(props.queryString) > -1)
  }

  return (
    <div style={{color:'white' , height: 500, width: '100%', backgroundColor: "#283d4a", }}>
      <DataGrid 
      sx={{m: 0,
        border: 0,
        backgroundColor:'#283d4a',
        color: 'white',
        hover: true,
        checked: true,
    }}
    checkboxSelection
      columns={columns} 
      loading={!rowData.length}
      rows={search(rowData)} 
      onSelectionModelChange={(newselection) => {
        const selectedIDs = new Set(newselection);
        const selectedRowData = rowData.filter((row) =>
          selectedIDs.has(row.id)
        );
        sendDataToMain([newselection],selectedRowData[0].invoice_currency,selectedRowData[0].cust_payment_terms,selectedRowData[0].doc_id,selectedRowData[0].invoice_id,selectedRowData[0].cust_number,selectedRowData[0].buisness_year)
      }}
     />
    </div>
  )
}
export default Grid;
