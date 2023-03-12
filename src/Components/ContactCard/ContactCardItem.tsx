import React, { useState } from "react";
import Card from "@mui/material/Card";
import { ContactObj } from "../../types";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions, Button, Tooltip, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

type Props = {
  contactObj: ContactObj;
};

const ContactCardItemSX = {
  "&:hover": {
    scale: "102%",
    color: "gray",
    backgroundColor: "lightblue",
  },
  transition: "all 0.06s linear",
  marginTop: 1,
  marginBottom: 1,
  width: "100%",
};

const ContactCardItem = ({ contactObj: contactObj }: Props) => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const handleContactCardClick = () => {
    setContactDialogOpen(contactDialogOpen ? false : true);
  };
  return (
    <div>
      <Card sx={ContactCardItemSX} onClick={handleContactCardClick}>
        <Avatar />
        <div>{contactObj.name}</div>
        <div>{contactObj.phone}</div>
      </Card>
      <Dialog open={contactDialogOpen} onClose={handleContactCardClick}>
        <DialogTitle>{contactObj.name}</DialogTitle>
        <DialogContent>
          <Avatar></Avatar>
          <Typography>Contact Details</Typography>
          <Tooltip title="Send email">
            <Link component="a" href={`mailto:${contactObj.email}`}>
              <Typography>{contactObj.email}</Typography>
            </Link>
          </Tooltip>
          <Typography>{contactObj.phone}</Typography>
          <Typography>{contactObj.website}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContactCardClick}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactCardItem;
