

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom components
import MDTypography from "/components/MDTypography";

function DefaultCell({ children }) {
  return (
    <MDTypography variant="button" fontWeight="regular" color="text">
      {children}
    </MDTypography>
  );
}

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultCell;
