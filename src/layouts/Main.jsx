import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
// import { ComponentType, ReactNode } from "react";
// import { useSelector } from "react-redux";
import {
//   RouteProps,
  Route,
  NavLink,
//   RouteChildrenProps,
} from "react-router-dom";
// import { allData } from "../store";
import BarChartIcon from '@mui/icons-material/BarChart';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Main = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          flowGrow: 1,
        }}
      >
        <AppBar position="sticky">
          <Toolbar style={{backgroundColor:"#8f8aea21"}}>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Typography variant="h6" color={'white'}>EasyCoach Assignment!</Typography>
              </Grid>
              <Grid item>
                <NavLink to="/">
                  <Button
                    style={{ color: "white" }}
                    variant="outlined"
                    startIcon={<BarChartIcon />}
                  >
                    Graphs
                  </Button>
                </NavLink>
                <NavLink to="/Pitch">
                  <Button
                    style={{ color: "white" }}
                    variant="outlined"
                    startIcon={<SportsSoccerIcon />}
                  >
                    Pitch
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <>{children}</>
    </>
  );
};

const MainLayoutWrapper = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Main {...props}>
          <Component {...props} />
        </Main>
      )}
    />
  );
};

export default MainLayoutWrapper;
