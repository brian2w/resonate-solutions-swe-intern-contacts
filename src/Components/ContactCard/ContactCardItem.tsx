import React, { useState } from "react";
import Card from "@mui/material/Card";
import { ContactObj } from "../../types";
import { Stack } from "@mui/material/";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions, Button, Tooltip, Link, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import LaunchIcon from "@mui/icons-material/Launch";

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
          sx={{
            padding: "10px",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: "15px",
          }}
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

        <DialogTitle sx={{ paddingBottom: 2, fontWeight: "bold" }}>
          Contact Details
        </DialogTitle>

        <DialogContent sx={{ padding: 3 }}>
          <Tooltip title="Send email">
            <Stack direction="row" spacing={1}>
              <MailOutlineIcon />
              <Link
                component="a"
                href={`mailto:${contactObj.email}`}
                underline="hover"
                color="inherit"
              >
                <Typography>{contactObj.email}</Typography>
              </Link>
            </Stack>
          </Tooltip>
          <Tooltip title={`Call ${contactObj.phone}`} sx={{ marginTop: 1 }}>
            <Stack direction="row" spacing={1}>
              <PhoneIcon />
              <Link
                component="a"
                href="tel:PHONE_NUM"
                underline="hover"
                color="inherit"
              >
                <Typography>{contactObj.phone}</Typography>
              </Link>
            </Stack>
          </Tooltip>
          <Tooltip title={`${contactObj.website}`} sx={{ marginTop: 1 }}>
            <Stack direction="row" spacing={1}>
              <LaunchIcon />
              <Link
                component="a"
                href={`http://${contactObj.website}`}
                underline="hover"
                color="inherit"
              >
                <Typography>{contactObj.website}</Typography>
              </Link>
            </Stack>
          </Tooltip>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContactCardClick}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactCardItem;
