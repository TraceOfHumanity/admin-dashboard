// import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";

import React, { useState } from "react";

import { Menu, menuClasses, MenuItem, Sidebar } from "react-pro-sidebar";
import { v4 as uuidv4 } from "uuid";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";

const menuItems = [
  {
    items: [
      {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },
  {
    typography: "Data",
    items: [
      { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    typography: "Pages",
    items: [
      { title: "Profile Form", to: "/form", icon: <PersonOutlinedIcon /> },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      { title: "FAQ Page", to: "/faq", icon: <HelpOutlineOutlinedIcon /> },
    ],
  },
  {
    typography: "Charts",
    items: [
      { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon /> },
      { title: "Pie Chart", to: "/pie", icon: <PieChartOutlineOutlinedIcon /> },
      { title: "Line Chart", to: "/line", icon: <TimelineOutlinedIcon /> },
      { title: "Geography Chart", to: "/geography", icon: <MapOutlinedIcon /> },
    ],
  },
];

console.log(menuItems);

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        position: "relative",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      href={to}
      // component="div"
      rootStyles={{
        ["." + menuClasses.button]: {
          "&:hover": {
            backgroundColor: `transparent !important`,
            color: `${colors.blueAccent[300]} !important`,
          },
        },
      }}
      // to={to}
    >
      <Typography>{title}</Typography>
      {/* <Link
        to={to}
        // state={{
        //   // position: "absolute",
        //   top: "0",
        //   left: "0",
        //   width: "100%",
        //   height: "100%",
        //   backgroundColor: `${colors.blueAccent[300]} !important`,
        // }}
      /> */}
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    // <Box
    //   sx={{
    //     "& .pro-sidebar-inner": {
    //       // background: `${colors.primary[500]} !important`,
    //       backgroundColor: `${colors.primary[500]} !important`,
    //     },
    //     "& .pro-icon-wrapper": {
    //       backgroundColor: "transparent !important",
    //     },
    //     "& .pro-inner-item": {
    //       padding: "5px 35px 5px 20px !important",
    //     },
    //     "& .pro-inner-item:hover": {
    //       color: "#868dfb !important",
    //     },
    //     "& .pro-menu-item.active": {
    //       color: "#6870fa !important",
    //     },
    //   }}
    //   // height="100vh"
    // >
    <Sidebar
      transitionDuration={700}
      collapsed={isCollapsed}
      backgroundColor={colors.primary[400]}
      style={{
        height: "100vh",
      }}
      // rootStyles={{
      //   background: `linear-gradient(180deg, ${colors.primary[900]}, ${colors.primary[100]}`,
      // }}
    >
      <Menu iconShape="square">
        {/* LOGO AND MENU ICON */}

        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[500],

            // backgroundColor: "red",
          }}
          rootStyles={{
            ["." + menuClasses.button]: {
              "&:hover": {
                backgroundColor: `transparent !important`,
              },
            },
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.jpg`}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Alexander
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[400]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          {menuItems.map((item, index) => (
            <div key={uuidv4()}>
              <Typography
                // key={index}
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                {item.typography?.toUpperCase() || ""}
              </Typography>
              {item.items.map((subItem) => (
                <Item
                  key={uuidv4()}
                  title={subItem.title}
                  to={subItem.to}
                  icon={subItem.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          ))}
        </Box>
        {/* <Box paddingLeft={isCollapsed ? undefined : "10%"}> */}
        {/* <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}

        {/* <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography> */}
        {/* <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}

        {/* <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Pages
          </Typography> */}
        {/* <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}

        {/* <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Charts
          </Typography> */}
        {/* <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          /> */}
        {/* </Box> */}
      </Menu>
    </Sidebar>
    // </Box>
  );
};

export default SidebarComponent;
