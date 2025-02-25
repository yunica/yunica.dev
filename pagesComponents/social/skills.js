import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import { useMaterialUIController } from "/context";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

const ListSkill = ({ data }) => {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;

  const renderBody = (item) => {
    const { name, details } = item;

    if (details && details.length) {
      return (
        <>
          <MDTypography fontWeight="bold" variant="body2">
            {name}
          </MDTypography>
          <MDBox pl={2} color="null">
            <ul>
              {details.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>
          </MDBox>
        </>
      );
    }
    return <MDTypography variant="body2">{name}</MDTypography>;
  };

  if (!data) return null;

  return (
    <MDBox
      component="ul"
      width="100%"
      display="flex"
      flexDirection="column"
      m={0}
      sx={{ listStyle: "none" }}
      justifyContent="start"
    >
      {data.map((item, itemKey) => (
        <MDBox key={itemKey} component="li">
          <MDTypography
            component="label"
            variant="body2"
            fontWeight="regular"
            size="sm"
            textTransform="none"
            sx={({
              borders: { borderRadius },
              functions: { pxToRem },
              palette: { light },
              transitions,
            }) => ({
              display: "flex",
              alignItems: item.details ? "self-start" : "center",
              borderRadius: borderRadius.md,
              padding: `${pxToRem(8)} ${pxToRem(0)}`,
              transition: transitions.create("background-color", {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.shorter,
              }),

              // "&:hover": {
              //   backgroundColor: light.main,
              // },
            })}
          >
            <MDBox lineHeight={1} color={darkMode ? "white" : "dark"} mr={1}>
              {item.icon}
            </MDBox>
            <MDBox
              color={darkMode ? "white" : "dark"}
              fontSize="small"
              fontWeight={1}
            >
              {renderBody(item)}
              {item.links && (
                <MDBox component="label" color="null" pl={2}>
                  {item.links.map((link, k) => (
                    <MuiLink
                      key={k}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      download
                      mr={1}
                    >
                      <Tooltip title={`link ${k + 1}`}>
                        <Icon fontSize="medium">link</Icon>
                      </Tooltip>
                    </MuiLink>
                  ))}
                </MDBox>
              )}
            </MDBox>
          </MDTypography>
        </MDBox>
      ))}
    </MDBox>
  );
};

export default ListSkill;
