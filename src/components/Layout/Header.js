import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../images/logo.png";

import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";

const useStyles = makeStyles({
  typoStyle: {
    color: "goldenrod",
    flexGrow: 1,
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "#1A1A19"}}>
        <Toolbar>
          <Typography
            className={classes.typoStyle}
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ marginTop: "6px", height: "80px", width: "100px" }}
            />
          </Typography>
          <Box>
            <ul className="navigation-menu">
              <li>
                <NavLink activeClassName="active" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
