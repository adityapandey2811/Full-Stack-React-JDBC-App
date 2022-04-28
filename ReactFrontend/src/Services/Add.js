import React,{useState,useEffect} from 'react';
import { DialogContent, DialogTitle } from '@material-ui/core';
import {  Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { TextField } from '@material-ui/core';
import axios from "axios";


const init = {
  businesscode:'',
  customerno:'',
  cleardate:'',
  businessyear:'',
  documentid:'',
  postingdate:'',
  documentcreatedate:'',
  duedate:'',
  invoicecurrency:'',
  documenttype:'',
  postingid:'',
  totalopenamount:'',
  baselinecreatedate:'',
  customerpaymentterm:'',
  invoiceid:'',
}

function Add (){
  
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open === true) {
      handleClickOpen();
    }
  });


  const [values,setvalues] = useState(init);
  const [errors,seterrors] = useState({});
  

    const reset = () =>{
        setvalues(init);
        seterrors({})
    }
    
    const handleinputchange = (e) => {
        const { name, value } = e.target
        setvalues({
            ...values,
            [name]: value
        })
    }


    const validate = () =>{
        let temp ={}
        if(init.businesscode === values.businesscode){
          temp.businesscode = "Required*";
        }
        if(init.customerno === values.customerno){
          temp.customerno = "Required*";
        }
        if(init.cleardate === values.cleardate){
          temp.cleardate = "Required*";
        }
        if(init.businessyear === values.businessyear){
          temp.businessyear = "Required*";
        }
        if(init.documentid === values.documentid){
          temp.documentid = "Required*";
        }
        if(init.postingdate === values.postingdate){
          temp.postingdate = "Required*";
        }
        if(init.documentcreatedate === values.documentcreatedate){
          temp.documentcreatedate = "Required*";
        }
        if(init.duedate === values.duedate){
          temp.duedate = "Required*";
        }
        if(init.invoicecurrency === values.invoicecurrency){
          temp.invoicecurrency = "Required*";
        }
        if(init.documenttype === values.documenttype){
          temp.documenttype = "Required*";
        }
        if(init.postingid === values.postingid){
          temp.postingid = "Required*";
        }
        if(init.totalopenamount === values.totalopenamount){
          temp.totalopenamount = "Required*";
        }
        if(init.baselinecreatedate === values.baselinecreatedate){
          temp.baselinecreatedate = "Required*";
        }
        if(init.customerpaymentterm === values.customerpaymentterm){
          temp.customerpaymentterm = "Required*";
        }
        if(init.invoiceid === values.invoiceid){
          temp.invoiceid = "Required*";
        }
        seterrors({
            ...temp
        })

        console.log(Object.values(temp).every(x => x === ""));
        return Object.values(temp).every(x => x === "");
    }

    const adddata = () => {
  
      try {
        axios
          .post(
            `http://localhost:8082/HRC60554WK-Backend/AddServlet?business_code=${values.businesscode}&cust_number=${values.customerno}&clear_date=${values.cleardate}&buisness_year=${values.businessyear}&doc_id=${values.documentid}&posting_date=${values.postingdate}&document_create_date=${values.documentcreatedate}&due_in_date=${values.duedate}&invoice_currency=${values.invoicecurrency}&document_type=${values.documenttype}&posting_id=${values.postingid}&total_open_amount=${values.totalopenamount}&baseline_create_date=${values.baselinecreatedate}&cust_payment_terms=${values.customerpaymentterm}&invoice_id=${values.invoiceid}`,
            0
          );
      } catch (Exception) {
        console.log(Exception);
      }

    };


    const cancelfunction = () =>{
      reset();
      handleClose();
    }

    const addfunction = () =>{
      if(validate())
      {
        adddata();
        handleClose();
      }
      else{
        handleClickOpen();
      }
    }

    return (
      <Dialog open={open} onClose={handleClose} 
      fullWidth 
      maxWidth="lg" PaperProps={{style:{backgroundColor:'#283a46',color:'white'},}}>
          <DialogTitle>{"Add"}</DialogTitle>
          <DialogContent>
          <div >
            <form >

                <div style={{paddingLeft:'10px',paddingBottom:'10px'}}>
                    <TextField
                    error = {errors.businesscode}
                    helperText = {errors.businesscode}
                    name='businesscode'
                    label='Business Code'
                    value={values.businesscode}
                    onChange={handleinputchange}
                    autoComplete='off'
                    size='small'
                    style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        error = {errors.customerno}
                        helperText = {errors.customerno}
                        name='customerno'
                        label='Customer Number'
                        value={values.customerno}
                        onChange={handleinputchange}
                        autoComplete='off'
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        type={"date"}
                        name='cleardate'
                        label='Clear Date'
                        value={values.cleardate}
                        onChange={handleinputchange}
                        autoComplete='off'
                        error = {errors.cleardate}
                        helperText = {errors.cleardate}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        error = {errors.businessyear}
                        helperText = {errors.businessyear}
                        name='businessyear'
                        label='Business Year'
                        value={values.businessyear}
                        onChange={handleinputchange}
                        size='small'
                        autoComplete='off'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />
                </div>

                <div style={{paddingLeft:'10px',paddingBottom:'10px'}}>
                    <TextField
                    error = {errors.documentid}
                    helperText = {errors.documentid}
                    name='documentid'
                    label='Document id'
                    value={values.documentid}
                    onChange={handleinputchange}
                    autoComplete='off'
                    size='small'
                    style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        type={"date"}
                        name='postingdate'
                        label='Posting Date'
                        value={values.postingdate}
                        onChange={handleinputchange}
                        error = {errors.postingdate}
                        helperText = {errors.postingdate}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        type={"date"}
                        name='documentcreatedate'
                        label='Document Create Date'
                        value={values.documentcreatedate}
                        onChange={handleinputchange}
                        error = {errors.documentcreatedate}
                        helperText = {errors.documentcreatedate}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        type={"date"}
                        name='duedate'
                        label='Due Date'
                        value={values.duedate}
                        onChange={handleinputchange}
                        error = {errors.duedate}
                        helperText = {errors.duedate}
                        size='small'
                        autoComplete='off'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />
                </div>

                <div style={{paddingLeft:'10px',paddingBottom:'10px'}}>
                    <TextField
                    error = {errors.invoicecurrency}
                    helperText = {errors.invoicecurrency}
                    name='invoicecurrency'
                    label='Invoice Currency'
                    value={values.invoicecurrency}
                    onChange={handleinputchange}
                    autoComplete='off'
                    size='small'
                    style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        name='documenttype'
                        label='Document Type'
                        value={values.documenttype}
                        onChange={handleinputchange}
                        error = {errors.documenttype}
                        helperText = {errors.documenttype}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        name='postingid'
                        label='Posting Id'
                        value={values.postingid}
                        onChange={handleinputchange}
                        error = {errors.postingid}
                        helperText = {errors.postingid}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        name='totalopenamount'
                        label='Total open amount'
                        value={values.totalopenamount}
                        onChange={handleinputchange}
                        error = {errors.totalopenamount}
                        helperText = {errors.totalopenamount}
                        size='small'
                        autoComplete='off'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />
                </div>

                <div style={{paddingLeft:'10px',paddingBottom:'10px'}}>
                    <TextField
                    type={"date"}
                    name='baselinecreatedate'
                    label='Baseline Create Date'
                    value={values.baselinecreatedate}
                    onChange={handleinputchange}
                    error = {errors.baselinecreatedate}
                    helperText = {errors.baselinecreatedate}
                    size='small'
                    style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        name='customerpaymentterm'
                        label='Customer Payment Terms'
                        value={values.customerpaymentterm}
                        onChange={handleinputchange}
                        error = {errors.customerpaymentterm}
                        helperText = {errors.customerpaymentterm}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                    <TextField
                        name='invoiceid'
                        label='Invoice Id'
                        value={values.invoiceid}
                        onChange={handleinputchange}
                        error = {errors.invoiceid}
                        helperText = {errors.invoiceid}
                        size='small'
                        style={{marginRight:'10px',background:'white',borderRadius:'3px',width:'24%'}}
                    />

                </div>
            </form>
        </div>
      </DialogContent>
          <DialogActions>
            <span style={{textDecoration:'none',width:'50%'}}>
              <Button style={{width:'100%',border:'2px solid white',color:'white',borderWidth:'thin'}}  placeholder="Add" onClick={addfunction} >
                Add
              </Button>
            </span>
            
            <Link to="/" style={{textDecoration:'none',width:'50%'}}>
              <Button style={{width:'100%',border:'2px solid white',color:'white', borderWidth:'thin'}} onClick={cancelfunction}>
                Cancel
              </Button>
            </Link>
            
          </DialogActions>
      </Dialog>
    );
};

export default Add;