import React,{useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';
import axios from "axios";

const Edit = (props) => {
  const init = {
    invoicecurrency: props.ic,
    customerpaymentterm: props.cpt,
  }

  const [open, setOpen] = React.useState(true);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   if (open === true) {
  //     handleClickOpen();
  //   }
  // });

    const [values,setvalues] = useState(init);

    const handleinputchange = (e) => {
      const { name, value } = e.target
      setvalues({
          ...values,
          [name]: value
      })
    }

  const reset = () =>{
    setvalues(init);
  }

  const editdata = () =>{
    try {
      axios
        .post(
          `http://localhost:8082/HRC60554WK-Backend/EditServlet?invoice_currency=${values.invoicecurrency}&cust_payment_terms=${values.customerpaymentterm}&sl_no=${props.delArr}`,
          0
        );
    } catch (Exception) {
      console.log(Exception);
    }
  }

  const editfunction = () =>{
      editdata();
      handleClose();
  }


  const cancelfunction = () =>{
    reset();
    handleClose();
  }
  
    return (
      <Dialog open={open}
      onClose={handleClose}
      fullWidth 
      maxWidth="xs" PaperProps={{style:{backgroundColor:'#283a46',color:'white'},}}>
          <DialogTitle>{"Edit"}</DialogTitle>
          <DialogContent>
            <div >
              <form>

                  <div style={{padding:'10px'}}>
                      <TextField
                      name='invoicecurrency'
                      label='Invoice Currency'
                      value={values.invoicecurrency}
                      onChange={handleinputchange}
                      autoComplete='off'
                      style={{marginRight:'15px',background:'white',borderRadius:'3px',width:'48%'}}
                      />

                      <TextField
                          name='customerpaymentterm'
                          label='Customer Payment Terms'
                          value={values.customerpaymentterm}
                          onChange={handleinputchange}
                          autoComplete='off'
                          style={{background:'white',borderRadius:'3px',width:'48%'}}
                      />
                  </div>

              </form>
            </div>
          </DialogContent>
          <DialogActions>
            <span style={{textDecoration:'none',width:'50%'}}>
              <Button style={{width:'100%',border:'2px solid white',color:'white',borderWidth:'thin'}}  placeholder="Add" onClick={editfunction} >
                Edit
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

export default Edit;