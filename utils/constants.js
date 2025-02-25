import {
  Public,
  DatasetLinked,
  PieChartOutline,
  Code,
  FilterDrama,
  Terminal,
  AutoFixHigh,
  School,
  Campaign,
  VideoCameraFrontOutlined,
  SatelliteAltOutlined,
  Storage,
  Api,
  LocalTaxi,
  Coronavirus,
  LocalHospital,
} from "@mui/icons-material";

// skate

export const experience = [
  {
    icon: "notifications",
    title: "Geospatial Data Engineer | Geo Compas AI",
    dateTime: "2024 - Present",
    details: [
      <p key={1}>
        Implemented <b>real-time data pipelines</b> for vehicle tracking using
        <b> Kafka and AWS Lambda</b>.
      </p>,
      <p key={2}>
        Developed a real-time monitoring interface and a client application for
        location streaming.
      </p>,
      <p key={3}>
        Built applications using <b> PostGIS, Python, and ReactJS </b>for
        geospatial data visualization.
      </p>,
    ],
  },
  {
    icon: "data_object",
    title: "Geospatial Data Engineer | Developmentseed",
    dateTime: "2019 - 2024",
    details: [
      <p key={1}>
        Developed and optimized <b> cloud-based ETL processes </b> for
        geospatial data processing using{" "}
        <b> Python, NodeJs, Airflow, Docker and AWS</b>.
      </p>,
      <p key={2}>
        Created tools for <b> Machine Learning </b> in GIS, including training
        data generation from satellite images.
      </p>,
      <p key={3}>
        Implemented custom algorithms for raster data transformation and
        georeferencing.
      </p>,
      <p key={4}>
        Contributed to <b> OpenStreetMap</b>, including developing advanced
        plugins for JOSM.
      </p>,
      <p key={5}>
        Presented projects and advancements at international conferences such as
        <b>State of the Map and Mapping USA 2022</b>.
      </p>,
    ],
  },
  {
    icon: "data_object",
    title: "Backend & GIS Developer | Freelance",
    dateTime: "2018 - Present",
    details: [
      <p key={1}>
        Developed <b>APIs and geospatial web applications</b> using{" "}
        <b>
          Mapbox, Leaflet,Python, ReactJS, Docker, Geodjango, and OpenLayers
        </b>
        .
      </p>,
      <p key={2}>
        Automated GIS workflows with <b>Python, Bash, and Docker</b>.
      </p>,
      <p key={3}>
        Created <b> web scraping and backend processing </b> for geospatial data
        analysis.
      </p>,
    ],
  },
  {
    icon: "school",
    title: "Systems Engineer",
    dateTime: "2012 - 2018 ",
    description: "Universidad Nacional de San Cristóbal de Huamanga.",
  },
];

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 3,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    tooltipDelay: 0,
    outlineColour: "#0000",
    wheelZoom: false,
  },
};

export const expertice = [
  {
    type: "collapse",
    name: "Geospatial process (raster and vector data)",
    key: "Geospatial",
    icon: <Public fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Extract, transform and load (ETL)",
    key: "etl",
    icon: <DatasetLinked fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Data visualization",
    key: "data-visualization",
    icon: <PieChartOutline fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Backend and API Developer",
    key: "backend-developer",
    icon: <Api fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Cloud services",
    key: "cloud-services",
    icon: <FilterDrama fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bash and Docker Fan",
    key: "bash-fan",
    icon: <Terminal fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Programming and Scripting",
    key: "script-fan",
    icon: <Code fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Database Development and Management",
    key: "database-fan",
    icon: <Storage fontSize="medium" color="inherit" />,
    noCollapse: true,
  },
];

export const contribution = [
  {
    type: "collapse",
    name: "Real-Time Vehicle Tracking",
    details: [
      <p key={1}>
        Designed and implemented an <b>ETL process</b> for
        <b> real-time vehicle tracking </b>
        using <b> Kafka</b>.
      </p>,
      <p key={2}>
        Developed an <b> admin interface </b> for monitoring vehicle movements.
      </p>,
      <p key={3}>
        Built a client application enabling users to send and visualize live
        locations.
      </p>,
      <p key={4}>
        Technologies:
        <b> Kafka, AWS Lambda, PostGIS, ReactJS, Python, Docker, Socket</b>.
      </p>,
    ],
    key: "real-time-vehicle",
    icon: <LocalTaxi fontSize="medium" color="inherit" />,
    links: [],
  },
  {
    type: "collapse",
    name: "AtlasArena Dashboard",
    key: "atlas-arena",
    details: [
      <p key={1}>
        Platform for modeling <b>Arena Virus</b> distribution based on
        <b> Species Distribution Models (SDMs)</b>.
      </p>,
      <p key={2}>
        Technologies: <b>GIS, Python, ReactJS, Docker, Mapbox</b>.
      </p>,
    ],

    icon: <Coronavirus fontSize="medium" color="inherit" />,
    links: ["https://atlasarena.surge.sh/explore"],
  },
  {
    type: "collapse",
    name: "Peru Schools App",
    details: [
      <p key={1}>
        Application for <b> mobile signal</b> coverage analysis in{" "}
        <b>Peruvian educational institutions</b>.
      </p>,
      <p key={2}>
        Technologies: <b>ReactJS, Python, Mapbox, Docker, GDAL, Bash, AWS</b>.
      </p>,
    ],
    key: "peru-school-app",
    icon: <School fontSize="medium" color="inherit" />,
    noCollapse: true,
    links: [
      "https://developmentseed.org/peru-mobile-signal-schools/",
      "https://github.com/developmentseed/peru-mobile-signal-schools",
      "https://www.linkedin.com/posts/juniorflores_coberturamaejvil-educaciaejn-ayacucho-activity-7103837157366063104-QwW-?utm_source=share&utm_medium=member_desktop",
    ],
  },
  {
    type: "collapse",
    name: "Urban Public Services Inaccessibility",
    details: [
      <p key={1}>
        Tool for analyzing <b> population distribution</b> and
        <b> access to basic services </b> from{" "}
        <b>Viet Nam, Lao, Myanmar, Nepal, Afghanistan and Pakistan</b>.
      </p>,
      <p key={2}>
        Technologies:{" "}
        <b> ReactJS, Python, Mapbox, Docker, GDAL, Bash, AWS, OpenStreetMap</b>.
      </p>,
    ],
    key: "urban-public-service",
    icon: <LocalHospital fontSize="medium" color="inherit" />,
    noCollapse: true,
    links: ["https://yunica.dev/mapfest_mapmaking_challenge_2024/"],
  },

  {
    type: "collapse",
    name: "SAM Plugin - JOSM",
    details: [
      <p key={1}>
        Integration of <b> Segment Anything Model (SAM)</b> into the
        <b> OpenStreetMap ecosystem</b>.
      </p>,
      <p key={2}>
        Technologies: <b> Java, JOSM, OpenStreetMap, Gradle, OpenCv</b>.
      </p>,
    ],
    key: "josm-sam-plugin",
    icon: <AutoFixHigh fontSize="medium" color="inherit" />,
    noCollapse: true,
    links: [
      "https://github.com/developmentseed/JosmMagicWand",
      "https://josm.openstreetmap.de/wiki/Plugins",
    ],
  },

  {
    type: "collapse",
    name: "Speaker at the State of the Map Brasil 2023 (SOTM - BR), where I talked about my contribution and the integration of the meta model segment anything(SAM) to the JOSM plugin.",
    key: "data-visualization",
    icon: <Campaign fontSize="medium" color="inherit" />,
    noCollapse: true,
    links: [
      "https://sotm-br.github.io/2023",
      "https://twitter.com/developmentseed/status/1707874763585237218",
    ],
  },
  {
    type: "collapse",
    name: "Speaker at Mapping USA 2022, where I talked about my creation of the Josm Magic Wand, focused on the use of image processing",
    key: "mapping-usa-",
    icon: <VideoCameraFrontOutlined fontSize="medium" color="inherit" />,
    noCollapse: true,
    links: [
      "https://openstreetmap.us/events/mapping-usa/2022/",
      "https://twitter.com/OpenStreetMapUS/status/1610658065388376066",
    ],
  },
];
