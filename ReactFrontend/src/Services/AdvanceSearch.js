import React, { useState, useEffect } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';
import axios from "axios";

const AdvanceSearch = (props) => {

  const init = {
    documentid: props.docid,
    invoiceid: props.invid,
    customernumber: props.custnum,
    buisnessyear: props.businessyear,
  }

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

  const [values, setvalues] = useState(init);

  const handleinputchange = (e) => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    })
  }

  const reset = () => {
    setvalues(init);
  }
  let advsrc = [];
  const advancesearchdata = async () => {
    try {
      // console.log(values.documentid, " ", values.invoiceid, " ", values.customernumber, " ", values.buisnessyear)
      axios
        .get(
          `http://localhost:8082/HRC60554WK-Backend/AdvanceSearch?document_id=${values.documentid}&invoice_id=${values.invoiceid}&customer_number=${values.customernumber}&business_year=${values.buisnessyear}`,
          0
        ).then(function (response) {
          advsrc = response.data[0];
          console.log(advsrc);       //use this reponse to show advance search results
          alert("Sl No. " + advsrc.sl_no + ", Business Code "+advsrc.business_code+", Customer No.  "+advsrc.cust_number+", Clear Date "+advsrc.clear_date+", Business year "+advsrc.buisness_year+", Document ID "+advsrc.doc_id+", Posting Date "+advsrc.posting_date+", Document Create Date "+advsrc.document_create_date+", Due Date "+advsrc.due_in_date+", Invoice Currency "+advsrc.invoice_currency+", Document Type "+advsrc.document_type+", Posting ID "+advsrc.posting_id+", Total Open Amount "+advsrc.total_open_amount+", Baseline Create Date "+advsrc.baseline_create_date+", Customer Payment Terms "+advsrc.cust_payment_terms+", Invoice ID "+advsrc.invoice_id);
        });
    } catch (Exception) {
      console.log(Exception);
    }
  }

  const advancesearchfunction = () => {
    advancesearchdata();
    handleClose()
  }


  const cancelfunction = () => {
    reset();
    handleClose()
  }
  return (
    <Dialog open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs" PaperProps={{ style: { backgroundColor: '#283a46', color: 'white' }, }}>
      <DialogTitle>{"Advance Search"}</DialogTitle>
      <DialogContent>
        <div >
          <form>

            <div style={{ padding: '10px' }}>
              <TextField
                name='documentid'
                label='Document ID'
                value={values.documentid}
                onChange={handleinputchange}
                autoComplete='off'
                size='small'
                style={{ marginRight: '15px', background: 'white', borderRadius: '3px', width: '48%' }}
              />

              <TextField
                name='invoiceid'
                label='Invoice ID'
                value={values.invoiceid}
                onChange={handleinputchange}
                autoComplete='off'
                size='small'
                style={{ background: 'white', borderRadius: '3px', width: '48%' }}
              />
            </div>
            <div style={{ padding: '10px' }}>
              <TextField
                name='customernumber'
                label='Customer Number'
                value={values.customernumber}
                onChange={handleinputchange}
                autoComplete='off'
                size='small'
                style={{ marginRight: '15px', background: 'white', borderRadius: '3px', width: '48%' }}
              />

              <TextField
                name='buisnessyear'
                label='Business Year'
                value={values.buisnessyear}
                onChange={handleinputchange}
                autoComplete='off'
                size='small'
                style={{ background: 'white', borderRadius: '3px', width: '48%' }}
              />
            </div>

          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <span style={{ textDecoration: 'none', width: '50%' }}>
          <Button style={{ width: '100%', border: '2px solid white', color: 'white', borderWidth: 'thin' }} placeholder="Add" onClick={advancesearchfunction} >
            Search
          </Button>
        </span>

        <Link to="/" style={{ textDecoration: 'none', width: '50%' }}>
          <Button style={{ width: '100%', border: '2px solid white', color: 'white', borderWidth: 'thin' }} onClick={cancelfunction}>
            Cancel
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}

export default AdvanceSearch;