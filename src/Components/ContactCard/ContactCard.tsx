import React from "react";
import Card from "@mui/material/Card";
import ContactCardItem from "./ContactCardItem";
import { ContactObj } from "../../types";
import Box from "@mui/material/Box";

type Props = {
  userList: ContactObj[];
  searchFilter: string;
};

const ContactCard = ({ userList, searchFilter }: Props) => {
  let searchFilterRegex = new RegExp(searchFilter.toLowerCase());
  return (
    <div style={{ border: 1 }}>
      <Box
        sx={{
          maxHeight: "calc(100vh - 86px)",
          maxWidth: "1000px",
          overflow: "auto",
          overflowY: "auto",
          m: "auto",
          padding: "10px",
        }}
      >
        {userList
          .sort((user1, user2) => user1.name.localeCompare(user2.name))
          .filter((user) => user.name.toLowerCase().match(searchFilterRegex))
          .map((contactObj, i) => (
            <ContactCardItem key={i} contactObj={contactObj} />
          ))}
      </Box>
    </div>
  );
};

export default ContactCard;
