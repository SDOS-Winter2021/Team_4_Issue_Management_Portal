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
    title: "Profile",
    path: "/profile",
    icon: <FaIcons.FaUser />,
  },
  {
    title: "Issues",
    path: "/issues",
    icon: <FaIcons.FaExclamationCircle style={{ paddingTop: "1px" }} />,
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

export const getFilterNames = (dbfilters) => {
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
