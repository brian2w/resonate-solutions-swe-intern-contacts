import React, { useState } from "react";
import Card from "@mui/material/Card";
import { ContactObj } from "../../types";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions, Button, Tooltip, Link, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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
  height: "100px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  alignItems: "center",
  padding: 2,
  // border: 1,
};

const ContactCardItem = ({ contactObj: contactObj }: Props) => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const handleContactCardClick = () => {
    setContactDialogOpen(contactDialogOpen ? false : true);
  };
  return (
    <div>
      <Card sx={ContactCardItemSX} onClick={handleContactCardClick}>
        <Grid
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          container
        >
          <Grid
            display="flex"
            flex="2"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Grid flex="1">
              <Typography>{contactObj.name}</Typography>
            </Grid>
            <Grid flex="1">
              <Typography>{contactObj.phone}</Typography>
            </Grid>
          </Grid>

          <Grid flex="0">
            <Avatar sx={{ width: 70, height: 70 }} />
          </Grid>
        </Grid>
      </Card>
      <Dialog open={contactDialogOpen} onClose={handleContactCardClick}>
        <Grid
          container
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          sx={{ padding: "10px", flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid flex="1" container justifyContent="center" alignItems="center">
            <Avatar sx={{ height: "100px", width: "100px" }}></Avatar>
          </Grid>
          <Grid flex="1">
            <DialogTitle variant="h5" fontWeight="bold">
              {contactObj.name}
            </DialogTitle>
          </Grid>
        </Grid>

        <DialogTitle>Contact Details</DialogTitle>

        <DialogContent>
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
