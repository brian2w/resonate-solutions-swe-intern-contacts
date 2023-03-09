import React from "react";
import Card from "@mui/material/Card";

interface ContactObj {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const ContactCard: React.FC = (): JSX.Element => {
  return (
    <div>
      <Card sx={{ width: 275 }}>ContactCard</Card>
    </div>
  );
};

export default ContactCard;
