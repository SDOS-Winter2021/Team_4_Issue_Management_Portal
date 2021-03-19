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
    iconOpened: <RiIcons.RiArrowUpSFill />,

    doublesubNav: [
      {
        title: "Batch",
        icon: <FaIcons.FaSquare />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
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
        title: "Branch",
        icon: <FaIcons.FaSquare />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
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
        title: "Department",
        icon: <FaIcons.FaSquare />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
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
        title: "Programme",
        icon: <FaIcons.FaSquare />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "B.Tech",
            isChecked: false,
          },
          {
            title: "M.Tech",
            isChecked: false,
          },
          {
            title: "PHD",
            isChecked: false,
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
