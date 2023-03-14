import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import ContactCard from "./Components/ContactCard/ContactCard";
import { createTheme } from "@mui/system";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = (): JSX.Element => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserList(json))
      .catch((error) => console.log(error));
  }, []);

  const [searchFilter, setSearchFilter] = useState("");

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchFilter(event.target.value);
  };

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <div>
        <NavBar handleSearch={handleSearch} />
      </div>
      <div>
        <ContactCard userList={userList} searchFilter={searchFilter} />
      </div>
    </div>
  );
};

export default App;
