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

export const filtersName = [
  {
    title: "Batch",
    filterDetails: [
      {
        title: "2020",
        isChecked: false,
      },
      {
        title: "2019",
        isChecked: false,
      },
      {
        title: "2018",
        isChecked: false,
      },
      {
        title: "2017",
        isChecked: false,
      },
    ],
  },
  {
    title: "Department",
    filterDetails: [
      {
        title: "CSE",
        isChecked: false,
      },
      {
        title: "CSD",
        isChecked: false,
      },
      {
        title: "CSSS",
        isChecked: false,
      },
      {
        title: "ECE",
        isChecked: false,
      },
      {
        title: "CSAI",
        isChecked: false,
      },
    ],
  },
  {
    title: "Administration",
    filterDetails: [
      {
        title: "Academics",
        isChecked: false,
      },
      {
        title: "Finance",
        isChecked: false,
      },
      {
        title: "Placement",
        isChecked: false,
      },
    ],
  },
  {
    title: "Programs",
    filterDetails: [
      {
        title: "Btech",
        isChecked: false,
      },
      {
        title: "Mtech",
        isChecked: false,
      },
      {
        title: "PhD",
        isChecked: false,
      },
    ],
  },
];
