import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

/**
 * Object that holds details of everything that is rendered in the
 * sidebar.
 */
export const SidebarData = [
  {
    title: "Issues",
    path: "/issues",
    icon: <FaIcons.FaExclamationCircle />,
  },
  {
    title: "Announcements",
    path: "/announcements",
    icon: <FaIcons.FaBullhorn />,
  },
  {
    title: "Filters",
    path: "#",
    icon: <FaIcons.FaFilter />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiCheckboxCircleFill style={{ color: "#81de8d" }} />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

const getFilterNames = (dbfilters) => {
  var filtersName = [];
  for (var key in dbfilters) {
    var filter_i = { title: key, filterDetails: [] };
    for (var i = 0; i < dbfilters[key].length; i++) {
      var fil = { title: dbfilters[key][i], isChecked: false };
      filter_i.filterDetails.push(fil);
    }
    filtersName.push(filter_i);
  }
  return filtersName;
};

const tags = {
  Batch: ["2017", "2018", "2019", "2020"],
  Department: [
    "CSE",
    "ECE",
    "CSAM",
    "CSD",
    "CSB",
    "CSSS",
    "CSAI",
    "CB",
    "HCD",
    "Maths",
    "SSH",
  ],
  Programs: ["B-Tech", "M-Tech", "PhD"],
  Administration: [
    "Academic Section",
    "HOD",
    "Program Coordinator",
    "Placements",
    "Hostel and Mess",
    "Co-Curricular",
    "SG/CW",
    "Finance",
    "Mentorship Program",
  ],
};
export const filtersName = getFilterNames(tags);
