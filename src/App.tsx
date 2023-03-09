import React, { useState, useEffect } from "react";
import ContactCard from "./Components/ContactCard/ContactCard";

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

const App: React.FC = (): JSX.Element => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserList(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div>
        {userList.map((contactObj, i) => (
          <ContactCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
