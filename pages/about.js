import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import MDButton from "/components/MDButton";

// pages/api/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Custom components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Custom examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";

// Overview page components
import Header from "/pagesComponents/pages/profile/components/Header";
import TimelineList from "/examples/Timeline/TimelineList";
import TimelineItem from "/examples/Timeline/TimelineItem";

// Data
import { experience, expertice, contribution } from "/utils/constants";
import { useMaterialUIController } from "/context";

// Images
import SocialContact from "/pagesComponents/social/contact";
import ListSkill from "/pagesComponents/social/skills";

export async function getStaticProps() {
  const markdownDirectory = path.join(process.cwd(), "public", "markdown");
  const filenames = fs.readdirSync(markdownDirectory);

  const dataPromises = filenames.map(async (filename) => {
    const filePath = path.join(markdownDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      filename,
      ...data,
    };
  });
  const data = await Promise.all(dataPromises);

  // data.sort((a, b) => (a.date > b.date ? -1 : 1));
  return { props: { data } };
}

function About({ data }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const renderTimelineItems = experience.map(
    ({ color, icon, title, dateTime, description, details }, k) => (
      <TimelineItem
        key={title + color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        details={details}
        lastItem={k === experience.length - 1}
      />
    )
  );

  const slugs = [...new Set([].concat(...data.map((i) => i.category)))];
  const renderTechSkill = slugs.map((i) => (
    <MDButton
      key={i}
      size="small"
      color={darkMode ? "white" : "dark"}
      circular
      variant="outlined"
      sx={{ margin: "4px" }}
    >
      {i.replace("dot", ".").replace("amazon", "amazon ")}
    </MDButton>
  ));

  const years = new Date().getFullYear() - 2021;

  const renderAbout = () => (
    <>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h2"
          sx={{ fontSize: "1rem" }}
          fontWeight="medium"
          textTransform="uppercase"
        >
          <MDTypography variant="span" fontWeight="bold" opacity={0.7}>
            01{" "}
          </MDTypography>
          About me
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox>
          <MDTypography variant="body2" color={darkMode ? "white" : "dark"}>
            Data Engineer specialized in{" "}
            <b>GIS and geospatial data processing</b> with over{" "}
            <b>{years} years of experience</b> in designing, developing, and
            optimizing <b>real-time data pipelines</b>, satellite image
            processing, and automating ETL workflows. With experience in{" "}
            <b>
              Big Data, Machine Learning, cloud services (AWS/GCP), and
              geospatial application development
            </b>
            . Recognized for implementing custom algorithms for geospatial
            analysis and developing high-impact platforms used by government
            institutions and international organizations.
          </MDTypography>
        </MDBox>
      </MDBox>
    </>
  );
  const renderExpertise = () => (
    <>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h2"
          sx={{ fontSize: "1rem" }}
          fontWeight="medium"
          textTransform="uppercase"
        >
          <MDTypography variant="span" fontWeight="bold" opacity={0.7}>
            02{" "}
          </MDTypography>
          my expertise
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox lineHeight={1}>
          <ListSkill data={expertice} />
        </MDBox>
      </MDBox>
    </>
  );
  const renderTechskills = () => (
    <>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h2"
          sx={{ fontSize: "1rem" }}
          fontWeight="medium"
          textTransform="uppercase"
        >
          <MDTypography variant="span" fontWeight="bold" opacity={0.7}>
            03{" "}
          </MDTypography>{" "}
          Tech skills
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox>{renderTechSkill}</MDBox>
      </MDBox>
    </>
  );
  const renderHighlightedProjects = () => (
    <>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h2"
          sx={{ fontSize: "1rem" }}
          fontWeight="medium"
          textTransform="uppercase"
        >
          <MDTypography variant="span" fontWeight="bold" opacity={0.7}>
            04{" "}
          </MDTypography>
          Highlighted Projects
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox lineHeight={1}>
          <ListSkill data={contribution} />
        </MDBox>
      </MDBox>
    </>
  );
  const renderMyCarrer = () => (
    <TimelineList title="MY CAREER" index="05" dark={darkMode} shadow={false}>
      {renderTimelineItems}
    </TimelineList>
  );
  const renderGetInTouch = () => (
    <>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography
          variant="h2"
          sx={{ fontSize: "1rem" }}
          fontWeight="medium"
          textTransform="uppercase"
        >
          <MDTypography variant="span" fontWeight="bold" opacity={0.7}>
            06{" "}
          </MDTypography>{" "}
          get in touch
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <SocialContact />
      </MDBox>
    </>
  );
  return (
    <DashboardLayout>
      <Header>
        <MDBox mt={2} mb={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                {renderAbout()}
                {renderExpertise()}
                {renderTechskills()}
              </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <Card sx={{ height: "100%", boxShadow: "none" }}>
                {renderHighlightedProjects()}
              </Card>
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              {renderMyCarrer()}
              {renderGetInTouch()}
            </Grid>
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default About;
