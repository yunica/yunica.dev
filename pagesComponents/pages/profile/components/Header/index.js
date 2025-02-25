import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types"; // @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Custom components
import MDBox from "/components/MDBox";

// Custom base styles
import breakpoints from "/assets/theme/base/breakpoints";

// Images
// import backgroundImage from "/assets/images/bg-profile.jpg";

function Header({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  return (
    <MDBox position="relative" mb={5}>
      <Card
        sx={{
          position: "relative",
        }}
      >
        <Grid container alignItems="center"></Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
