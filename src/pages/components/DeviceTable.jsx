import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Switch,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import minus from "../../assets/minus.svg";
import androidImage from "../../assets/android.png";
import appleImage from "../../assets/apple.png";
import minusCheck from "../../assets/minusCheck.png";
import plusCheck from "../../assets/plusCheck.png";
import multiple from "../../assets/multiple.png";

const DeviceTable = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenAssigned, setIsDropdownOpenAssigned] = useState(false);
  const [isAutoAddEnabled, setIsAutoAddEnabled] = useState(false);

  const [assignedDevices, setAssignedDevices] = useState([
    {
      id: 1,
      Name: "Apple",
      Version: "11.0",
      Type: "Private",
      UDID: "A1B2C3D4E5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "1",
    },
    {
      id: 2,
      Name: "Android",
      Version: "10.0",
      Type: "Local",
      UDID: "F1G2H3I4J5",
      HostedBy: "Google Inc.",
      Status: "Offline",
      Teams: "2",
    },
    {
      id: 3,
      Name: "Apple",
      Version: "12.0",
      Type: "Private",
      UDID: "K1L2M3N4O5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "3",
    },
    {
      id: 4,
      Name: "Android",
      Version: "9.0",
      Type: "Local",
      UDID: "P1Q2R3S4T5",
      HostedBy: "Google Inc.",
      Status: "Offline",
      Teams: "1",
    },
    {
      id: 5,
      Name: "Apple",
      Version: "13.0",
      Type: "Private",
      UDID: "U1V2W3X4Y5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "2",
    },
    {
      id: 6,
      Name: "Android",
      Version: "8.0",
      Type: "Local",
      UDID: "Z1A2B3C4D5",
      HostedBy: "Google Inc.",
      Status: "Offline",
      Teams: "3",
    },
    {
      id: 7,
      Name: "Apple",
      Version: "14.0",
      Type: "Private",
      UDID: "E1F2G3H4I5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "1",
    },
    {
      id: 8,
      Name: "Android",
      Version: "7.0",
      Type: "Local",
      UDID: "J1K2L3M4N5",
      HostedBy: "Google Inc.",
      Status: "Offline",
      Teams: "2",
    },
    {
      id: 9,
      Name: "Apple",
      Version: "15.0",
      Type: "Private",
      UDID: "O1P2Q3R4S5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "3",
    },
    {
      id: 10,
      Name: "Apple",
      Version: "15.0",
      Type: "Private",
      UDID: "O1P2Q3R4S5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "3",
    },
    {
      id: 11,
      Name: "Apple Phone",
      Version: "15.0",
      Type: "Local",
      UDID: "O1P2Q3R4S5",
      HostedBy: "Apple Inc.",
      Status: "Online",
      Teams: "3",
    },
  ]);
  const [unassignedDevices, setUnassignedDevices] = useState([]);

  const moveToUnassigned = (id) => {
    const selectedRow = assignedDevices.find((row) => row.id === id);
    setUnassignedDevices([...unassignedDevices, selectedRow]);
    setAssignedDevices(assignedDevices.filter((row) => row.id !== id));
  };

  const moveToAssigned = (id) => {
    const selectedRow = unassignedDevices.find((row) => row.id === id);
    setAssignedDevices([...assignedDevices, selectedRow]);
    setUnassignedDevices(unassignedDevices.filter((row) => row.id !== id));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownAssigned = () => {
    setIsDropdownOpenAssigned(!isDropdownOpenAssigned);
  };

  const handleAutoAddSwitch = (event) => {
    setIsAutoAddEnabled(event.target.checked);
  };

  const dummyData = [];

  return (
    <div>
      {/* Assigned Devices */}
      <Box className="box-border flex flex-col items-start p-0 w-full md:w-1294 h-209 bg-white border border-gray-200 shadow-xs rounded-lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="1294px"
          style={{ margin: "1.5rem", padding: 0 }}
        >
          <div className="relative flex flex-row items-center">
            <span
              className="bg-[#1018281A] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg absolute right-4 top-1/2 transform -translate-y-1/2"
              style={{ marginRight: "0.5rem" }}
            >
              1
            </span>
            <h2 className="flex flex-row items-center p-0 gap-8 w-967 flex-none order-0 self-stretch flex-grow-1 pl-4 pr-16">
              Assigned Devices
            </h2>
          </div>

          <div>
            <button className="items-start p-0">
              <span className="box-border flex flex-row items-center justify-center p-10px16px gap-2 text-gray-700 text-sm font-semibold bg-white border border-gray-300 shadow-xs rounded-lg flex-none order-0 flex-grow-1 leading-20 h-[44px] w-[207px]">
                <img
                  className="h-5 w-5 text-gray-400"
                  src={minus}
                  alt="minus.png"
                />
                Unassign All Devices
              </span>
            </button>

            <IconButton onClick={toggleDropdown}>
              {isDropdownOpen ? (
                <ArrowDropUpIcon
                  style={{ fontSize: "40px" }}
                  className="box-border flex flex-row justify-center border border-gray-300 rounded"
                />
              ) : (
                <ArrowDropDownIcon
                  style={{ fontSize: "40px" }}
                  className="box-border flex flex-row justify-center border border-gray-300 rounded"
                />
              )}
            </IconButton>
          </div>
        </Box>
        {isDropdownOpen ? (
          <TableContainer
            component={Paper}
            className="flex flex-row items-start p-0 w-full h-116 bg-white rounded-b-lg"
            style={{ width: "100%" }}
          >
            <div
              style={{
                height: "320px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Table aria-label="simple table">
                <TableHead style={{ position: "sticky", top: 0 }}>
                  <TableRow className="box-border flex flex-row items-center p-3 gap-3 bg-gray-50 border-b-2 border-gray-200 h-[44px]">
                    {[
                      "Name",
                      "Version",
                      "Type",
                      "UDID",
                      "HostedBy",
                      "Status",
                      "Teams",
                      "Actions",
                    ].map((col, index) => (
                      <TableCell key={index}>{col}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assignedDevices.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <TableCell
                        className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white h-[72px]"
                        component="th"
                        scope="row"
                      >
                        {row.Name}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {row.Name === "Android" ? (
                            <img
                              src={androidImage}
                              width="20"
                              height="20"
                              alt="Android Icon"
                              style={{ marginRight: "8px" }}
                            />
                          ) : (
                            <img
                              src={appleImage}
                              width="20"
                              height="20"
                              alt="Apple Icon"
                              style={{ marginRight: "8px" }}
                            />
                          )}
                          {row.Version}
                        </div>
                      </TableCell>

                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        {row.Type}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        {row.UDID}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        {row.HostedBy}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <span
                          style={{
                            backgroundColor:
                              row.Status === "Online" ? "#ECFDF3" : "#F9E2E2",
                            color:
                              row.Status === "Online" ? "#027A48" : "#7E3D3D",
                            padding: "2px 8px",
                            borderRadius: "16px",
                          }}
                        >
                          {row.Status}
                        </span>
                      </TableCell>

                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={multiple}
                            width="20"
                            height="20"
                            alt="Team Icon"
                            style={{ marginRight: "8px" }}
                          />
                          {row.Teams}
                        </span>
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={minusCheck}
                            width="20"
                            height="20"
                            alt="Team Icon"
                            style={{ marginRight: "8px" }}
                            onClick={() => moveToUnassigned(row.id)}
                          />
                          {/* {row.Teams} */}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={8}>
                      <div className="flex flex-col items-start p-4 gap-20 h-[64px] w-[1295px]">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={isAutoAddEnabled}
                              onChange={handleAutoAddSwitch}
                              color="primary"
                            />
                          }
                          label="Automatically add new public device(s) to this team"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        ) : (
          <div className="flex flex-col items-start p-4 gap-20 w-1295 h-[64px]">
            <FormControlLabel
              control={
                <Switch
                  checked={isAutoAddEnabled}
                  onChange={handleAutoAddSwitch}
                  color="primary"
                />
              }
              label="Automatically add new public device(s) to this team"
            />
          </div>
        )}
      </Box>
      &nbsp;
      {/* UnAssigned Devices */}
      <Box className="box-border flex flex-col items-start p-0 w-full md:w-1294 h-209 bg-white border border-gray-200 shadow-xs rounded-lg overflow-hidden">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="1294px"
          style={{ margin: "1.5rem", padding: 0 }}
        >
          <div className="relative flex flex-row items-center">
            <span
              className="bg-[#1018281A] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg absolute right-4 top-1/2 transform -translate-y-1/2"
              style={{ marginRight: "0.5rem" }}
            >
              1
            </span>
            <h2 className="flex flex-row items-center p-0 gap-8 w-967 flex-none order-0 self-stretch flex-grow-1 pl-4 pr-16">
              Unassigned Devices
            </h2>
          </div>

          <div>
            <button className="items-start p-0">
              <span className="box-border flex flex-row items-center justify-center p-10px16px gap-2 text-gray-700 text-sm font-semibold bg-white border border-gray-300 shadow-xs rounded-lg flex-none order-0 flex-grow-1 leading-20 h-[44px] w-[207px]">
                <img
                  className="h-5 w-5 text-gray-400"
                  src={minus}
                  alt="minus.png"
                />
                Assign All Devices
              </span>
            </button>

            <IconButton onClick={toggleDropdownAssigned}>
              {isDropdownOpenAssigned ? (
                <ArrowDropUpIcon
                  style={{ fontSize: "40px" }}
                  className="box-border flex flex-row justify-center border border-gray-300 rounded"
                />
              ) : (
                <ArrowDropDownIcon
                  style={{ fontSize: "40px" }}
                  className="box-border flex flex-row justify-center border border-gray-300 rounded"
                />
              )}
            </IconButton>
          </div>
        </Box>
        {isDropdownOpenAssigned ? (
          <TableContainer
            component={Paper}
            className="flex flex-row items-start p-0 w-full h-116 bg-white rounded-b-lg"
            style={{ width: "100%" }}
          >
            <div
              style={{
                height: "320px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Table aria-label="simple table">
                <TableHead style={{ position: "sticky", top: 0 }}>
                  <TableRow
                    className="box-border flex flex-row items-center p-3 gap-3 bg-gray-50 border-b-2 border-gray-200 h-44px"
                    style={{
                      width: "100%",
                      display: "table",
                      tableLayout: "fixed",
                    }}
                  >
                    {[
                      "Name",
                      "Version",
                      "Type",
                      "UDID",
                      "HostedBy",
                      "Status",
                      "Teams",
                      "Actions",
                    ].map((col, index) => (
                      <TableCell
                        key={index}
                        style={{ width: `${100 / 8}%`, display: "table-cell" }}
                      >
                        {col}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {unassignedDevices.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <TableCell
                        className="box-border flex flex-row items-center p-4 w-273px border-b-2 border-gray-200 bg-white h-[72px]"
                        component="th"
                        scope="row"
                      >
                        {row.Name}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 border-b-2 border-gray-200 bg-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {row.Name === "Android" ? (
                            <img
                              src={androidImage}
                              width="20"
                              height="20"
                              alt="Android Icon"
                              style={{ marginRight: "8px" }}
                            />
                          ) : (
                            <img
                              src={appleImage}
                              width="20"
                              height="20"
                              alt="Apple Icon"
                              style={{ marginRight: "8px" }}
                            />
                          )}
                          {row.Version}
                        </div>
                      </TableCell>

                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        {row.Type}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        {row.UDID}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        {row.HostedBy}
                      </TableCell>
                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <span
                          style={{
                            backgroundColor:
                              row.Status === "Online" ? "#ECFDF3" : "#F9E2E2",
                            color:
                              row.Status === "Online" ? "#027A48" : "#7E3D3D",
                            padding: "2px 8px",
                            borderRadius: "16px",
                          }}
                        >
                          {row.Status}
                        </span>
                      </TableCell>

                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={multiple}
                            width="20"
                            height="20"
                            alt="Team Icon"
                            style={{ marginRight: "8px" }}
                          />
                          {row.Teams}
                        </span>
                      </TableCell>

                      <TableCell className="box-border flex flex-row items-center p-4 w-273 border-b-2 border-gray-200 bg-white">
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={plusCheck}
                            width="20"
                            height="20"
                            alt="Team Icon"
                            style={{ marginRight: "8px" }}
                            onClick={() => moveToAssigned(row.id)}
                          />
                          {row.Teams}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={8}>
                      <div className="flex flex-col items-start p-4 gap-20 h-[64px] w-[1295px]">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={isAutoAddEnabled}
                              onChange={handleAutoAddSwitch}
                              color="primary"
                            />
                          }
                          label="Automatically add new public device(s) to this team"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        ) : (
          <div className="flex flex-col items-start p-4 gap-20 w-1295 h-[64px]">
            <FormControlLabel
              control={
                <Switch
                  checked={isAutoAddEnabled}
                  onChange={handleAutoAddSwitch}
                  color="primary"
                />
              }
              label="Automatically add new public device(s) to this team"
            />
          </div>
        )}
      </Box>
    </div>
  );
};

export default DeviceTable;
