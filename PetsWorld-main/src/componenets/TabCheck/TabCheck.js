import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Profile from "../../pages/Profile/Profile";
import AddPet from "../../pages/AddPet/AddPet";
import AdsStatus from "../../pages/AdsStatus/AdsStatus";
import "./TabCheck.css";
import Mydaycarerequests from "../../pages/Mydaycarerequests/Mydaycarerequests";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GiveError from "../../componenets/GiveError/GiveError";
import SellIcon from "@mui/icons-material/Sell";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";

import AppointmentsStatus from "../../pages/AppointmentsStatus/AppointmentsStatus";

import VaccinesIcon from "@mui/icons-material/Vaccines";

const auth = localStorage.getItem("user");

function TabCheck() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(parseInt(storedTab));
    }
  }, []);

  const handleTabChange = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  };

  if (!auth) {
    return <GiveError />;
  }

  return (
    <div className="App">
      <ToastContainer />
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <Tab>
            <div style={{ display: "flex" }}>
              <PersonIcon />
              <div style={{ marginBottom: "7px" }}>
                <p style={{ marginLeft: "7px" }}>Profile</p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div style={{ display: "flex" }}>
              <PetsIcon />

              <div style={{ marginBottom: "7px" }}>
                <p style={{ marginLeft: "7px" }}>Add Pet</p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div style={{ display: "flex" }}>
              <FavoriteBorderIcon />

              <div style={{ marginBottom: "7px" }}>
                <p style={{ marginLeft: "7px" }}>Daycare</p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div style={{ display: "flex" }}>
              <SellIcon />

              <div style={{ marginBottom: "7px" }}>
                <p style={{ marginLeft: "7px" }}>Ads</p>
              </div>
            </div>
          </Tab>

          <Tab>
            <div style={{ display: "flex" }}>
              <VaccinesIcon />

              <div style={{ marginBottom: "7px" }}>
                <p style={{ marginLeft: "7px" }}>Appointments</p>
              </div>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>
          <AddPet />
        </TabPanel>
        <TabPanel>
          <Mydaycarerequests />
        </TabPanel>
        <TabPanel>
          <AdsStatus />
        </TabPanel>
        <TabPanel>
          <AppointmentsStatus />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabCheck;
