import React, { useState } from "react";
import Card from "@mui/material/Card";
import { ContactObj } from "../../types";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Avatar from "@mui/material/Avatar";

type Props = {
  contactObj: ContactObj;
};

const ContactCardItemSX = {
  "&:hover": {
    color: "gray",
    backgroundColor: "lightblue",
  },
  margin: "10px",
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
        <DialogContent>Contact Details Here</DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactCardItem;
