import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from 'react-router-dom';
import axios from "axios";

const Delete = (props) => {

  const [open, setOpen] = React.useState(true);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    try {
      for(let i = 0 ;i < props.deleteThisArray[0].length;i++){
        axios
        .post(
          `http://localhost:8082/HRC60554WK-Backend/DeleteServlet?sl_no=${props.deleteThisArray[0][i]}`,
          0
        );
      }
    } catch (Exception) {
      console.log(Exception);
    }
    // console.log(props.deleteThisArray[0].length);//Delete this sequence of sl no's from the database using delete servlet
    
      // console.log(props.deleteThisArray[0][i]);
  }

  const deleteFunction = () => {
    deleteData();
    handleClose();
  }

  // useEffect(() => {
  //     setOpen(false);
  // },[open]);


  return (
    <Dialog open={open} onClose={handleClose}
      fullWidth
      maxWidth="xs" PaperProps={{ style: { backgroundColor: '#283a46', color: 'white' }, }}>
      <DialogTitle>{"Delete Records ?"}</DialogTitle>
      <DialogContent>
        Are you sure you want to delete these record[s] ?
      </DialogContent>
      <DialogActions>
        <Link to="/" style={{ textDecoration: 'none', width: '50%' }}>
          <Button style={{ width: '100%', border: '2px solid white', color: 'white', borderWidth: 'thin' }} onClick={handleClose}>
            Cancel
          </Button>
        </Link>

        <span style={{ textDecoration: 'none', width: '50%' }}>
          <Button style={{ width: '100%', border: '2px solid white', color: 'white', borderWidth: 'thin' }} onClick={deleteFunction}>
            Delete
          </Button>
        </span>

      </DialogActions>


    </Dialog>
  );
};

export default Delete;