// prop-types is a library for typechecking of props
import PropTypes from "prop-types"; // @mui material components
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Timeline context
import { useTimeline } from "/examples/Timeline/context";

// Custom styles for the TimelineItem
import timelineItem from "/examples/Timeline/TimelineItem/styles";

function TimelineItem({
  color,
  icon,
  title,
  dateTime,
  description,
  details,
  lastItem,
}) {
  const isDark = useTimeline();

  return (
    <MDBox
      position="relative"
      mb={3}
      sx={(theme) => timelineItem(theme, { lastItem, isDark })}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </MDBox>
      <MDBox ml={5.75} pt={description ? 0.7 : 0.5} maxWidth="30rem">
        <MDTypography
          variant="body2"
          fontWeight="bold"
          color={isDark ? "white" : "dark"}
        >
          {title}
        </MDTypography>
        <MDBox mt={0.5} lineHeight={0}>
          <MDTypography variant="caption" color={isDark ? "secondary" : "text"}>
            {dateTime}
          </MDTypography>
        </MDBox>
        <MDBox mt={1} mb={1.5}>
          {description && (
            <MDTypography
              variant="button"
              component="p"
              color={isDark ? "white" : "dark"}
            >
              {description}
            </MDTypography>
          )}
          {details && details.length && (
            <MDTypography
              component="div"
              variant="button"
              color={isDark ? "white" : "dark"}
            >
              <ul>
                {details.map((i, k) => (
                  <li key={k}>{i}</li>
                ))}
              </ul>
            </MDTypography>
          )}
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "dark",
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  details: PropTypes.array,
  lastItem: PropTypes.bool,
};

export default TimelineItem;
