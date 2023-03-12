import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Fab from "@mui/material/Fab";
import { Grid } from "@mui/material";

type Props = {
  handleSearch: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",

  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(2),
  //   width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

const NavBar = ({ handleSearch }: Props) => {
  return (
    <div>
      <AppBar position="static" sx={{ justifyContent: "" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{}}>
            <Grid
              margin="auto"
              maxWidth="100vw"
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Fab />
              </Box>
              <Box sx={{ m: "" }}>
                <Search sx={{ justifyContent: "", border: 1 }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={handleSearch}
                  />
                </Search>
              </Box>

              <Box sx={{}}>
                <Tooltip title="User settings">
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
