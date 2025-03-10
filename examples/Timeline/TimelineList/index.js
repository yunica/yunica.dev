// prop-types is a library for typechecking of props
import PropTypes from "prop-types"; // @mui material components
import Card from "@mui/material/Card";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Custom components
import { useMaterialUIController } from "/context";

// Timeline context
import { TimelineProvider } from "/examples/Timeline/context";

function TimelineList({ shadow, title, index, dark, children }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TimelineProvider value={dark}>
      <Card sx={{ boxShadow: !shadow && "none" }}>
        <MDBox
          bgColor={dark ? "dark" : "white"}
          variant="gradient"
          borderRadius="xl"
          sx={{
            background: ({ palette: { background } }) =>
              darkMode && background.card,
          }}
        >
          <MDBox pt={3} px={3}>
            <MDTypography
              variant="h6"
              fontWeight="medium"
              color={dark ? "white" : "dark"}
              textTransform="uppercase"
            >
              <MDTypography variant="span" fontWeight="bold" opacity={0.7}>
                {index}{" "}
              </MDTypography>
              {title}
            </MDTypography>
          </MDBox>
          <MDBox p={2}>{children}</MDBox>
        </MDBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
  shadow: true,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
};

export default TimelineList;
