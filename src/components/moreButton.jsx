import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


// import DialogTitle from "@mui/material/DialogTitle";
// import Dialog from "@mui/material/Dialog";
   
   
// import Dialog from "@material-ui/core/Dialog";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";
// const [open, setOpen] = React.useState(false);
// const handleClickToOpen = () => {
//   setOpen(true);
// };

// const handleToClose = () => {
//   setOpen(false);
// };
const moreButton = () => {
  const handleIconClick = () => {
    
{/* <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"WE HAVE NOT IMPLEMENTED THIS BUTTON YET"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        WANT TO KNOW ABOUT ME VISIT QUICKSELL, I'LL BE THERE AFTER FEW MONTHS.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog> */}
//             const [openDialog, handleDisplay] = React.useState(false);
//             const handleClose = () => {
//               handleDisplay(false);
//            };
        
//            const openDialogBox = () => {
//               handleDisplay(true);
//            };
//    const divStyle = {
//     display: "flex",
//     felxDirection: "row",
//     position: "absolute",
//     right: "0px",
//     bottom: "0px",
//     // padding: "1rem",
//  };
//  const confirmButtonStyle = {
//     width: "5rem",
//     height: "1.5rem",
//     fontsize: "1rem",
//     backgroundColor: "grey",
//     color: "black",
//     margin: "5px",
//     borderRadius: "10px",
//     border: "1px solid black",
//  };
//  <Dialog onClose = {handleClose} open = {openDialog}>
//             <DialogTitle> WE HAVE NOT IMPLEMENTED THIS BUTTON YET !</DialogTitle>
//             <div style = {divStyle}>
//                <button style = {confirmButtonStyle} onClick = {handleClose}>
//                   Close
//                </button>
//             </div>
//          </Dialog>

    alert("More Button: WE HAVE NOT IMPLEMENTED THIS BUTTON YET ! ");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon style={{ fontSize: 18 }} />
    </IconButton>
  );
};

export default moreButton;
