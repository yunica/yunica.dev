import { useRef, useState, useEffect } from "react";
// @mui material components

import MDBox from "/components/MDBox";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
// Images
import Grid from "@mui/material/Grid";
import Globe from "/pagesComponents/globe";

function Main() {
  return (
    <DashboardLayout>
      <Grid
        templateColumns={{ sm: "4fr 1fr", xl: "1.2fr 1fr" }}
        maxWidth="100%"
        width="100%"
      >
        <MDBox
          minWidth="700px"
          height="80%"
          position="absolute"
          right="15px"
          top="5%"
          display={{ sm: "none", md: "block" }}
        >
          <Globe />
        </MDBox>
        <MDBox direction="column" zIndex="0">
          <Grid container spacing={0}>
            <Grid item xs={8} md={7} xl={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} xl={12}>
                  
                </Grid>
                <Grid item xs={12} md={12} xl={12}>
                  <h2> Junior G. Flores Martinez</h2>
                  <h3> Geospatial data engineer</h3>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </Grid>
    </DashboardLayout>
  );
}

export default Main;
