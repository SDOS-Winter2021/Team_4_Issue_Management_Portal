import { useMediaPredicate } from "react-media-hook";
import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Navigation/Header";

function Support() {
  const notMobileView = useMediaPredicate("(min-width: 800px)");
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const page = "Support";

  const sidebarToggles = {
    notMobileView: notMobileView,
    showSidebar: showSidebar,
    sidebar: sidebar,
  };

  return (
    <>
      <Header
        {...sidebarToggles}
        page={page}
        setFilterState={() => {}}
        selectedFilters={{}}
        applyFilter={() => {}}
      />
      <div
        className="Instructions"
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          wordWrap: "break-word",
          width: "70%",
          marginLeft: 260,
          fontFamily: "Ubuntu",
          fontSize: 16,
        }}
      >
        <h2>General Instructions for Issue Management Portal</h2>
        <ul>
          <li>Always login onto the platform using a IIITD account.</li>
          <li>
            Kindly maintain the decorum of the portal by posting professional
            and relevant content.
          </li>
          <li>
            The Issue Management Portal is made with the intention of reducing
            the number of duplicate emails received by the administration
            regarding various issues faced by the students. Kindly make
            effective use of the portal and refrain from emailing the concerned
            authorities directly.
          </li>
          <li>
            Kindly be patient, the issues posted by you will be resolved by the
            concerned authority at the earliest.
          </li>
        </ul>
        <h2>Portal User Profiles</h2>
        <p>
          There are two types of users in the Issue Management Portal: students
          and administrative users. Users in these two profiles have the
          following permissions in the portal: <br /> <br /> A student can:
          <ul>
            <li>
              Create new issues and see whether their issues are resolved or are
              still pending.
            </li>
            <li>
              Like and comment on issues posted by them or other students.{" "}
            </li>
            <li>Comment on announcements posted by administrators.</li>
          </ul>
          An administrative user can:
          <ul>
            <li>Create new issues and announcements.</li>
            <li>Add new tags to the already existing set of tags.</li>
            <li>Edit the tags on existing issues and announcements.</li>
            <li>Resolve the issues posted by students on the portal.</li>
            <li>
              Close or Delete issues that are not relevant to the portal or have
              been resolved earlier.
            </li>
            <li>Add comments to issues or announcements.</li>
            <li>
              Block a student as a result of not following the instructions or
              for any sort of misbehaviour on the portal.
            </li>
          </ul>
        </p>
        <h2>Issues</h2>
        <ul>
          <li>
            On this page, you can view all the issues posted by you and your
            fellow students. The issues will be resolved by the concerned
            administration.
          </li>
          <br />
          <center>
            <img
              src={process.env.PUBLIC_URL + "/images/issue_pg.png"}
              width="80%"
              height="80%"
            />
          </center>
          <br />
          <br />
          <li>
            You can search for issues posted on the portal by writing some
            keywords of the issue into the search bar.
          </li>
        </ul>
        <h2>Announcements</h2>
        <ul>
          <li>
            On this page, you can view all the announcements posted by the
            administration.
          </li>
          <br />
          <center>
            <img
              src={process.env.PUBLIC_URL + "/images/announcement_pg.png"}
              width="80%"
              height="80%"
            />
          </center>
          <br />
          <br />
          <li>
            You can search for announcements posted on the portal by writing
            some keywords of the announcements into the search bar.
          </li>
        </ul>
        <h2>Tags</h2>
        <ul>
          <li>
            Issues and Announcements may have tags associated with them, which
            make them easier to identify, filter and search.
          </li>
          <li>
            There are four fields, each of which has a different meaning and a
            set of tags along with it :
            <ul>
              <li>
                Batch - This field is representative of the Academic Year of the
                students, i.e. the year of their joining IIIT-Delhi. Eg: 2018,
                2019, 2020, 2021.
              </li>
              <li>
                Department - This field is representative of the Branch of the
                students to which this issue concerns. Eg: CSE, CSAI, CSSS,
                CSAM, CSD, CSB, ECE.
              </li>
              <li>
                Administration - This field is representative of the concerned
                authorities for this issue. Eg: Academic, Financial, Placements,
                etc.
              </li>
              <li>
                Programme - This field is representative of the Programme of the
                students to which the issue concerns. Eg: B-Tech, M-Tech, PhD.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Creating Issues</h2>
        <ul>
          <li>
            Before creating an issue, search for the issue on the portal. It may
            already be present and resolved by an administrator. If a similar
            issue has been posted and not resolved, kindly wait for the
            administrator to resolve the same. Do NOT create a new issue in this
            case.
          </li>
          <li>
            If you feel that your issue is not present on the portal, you can
            create a new issue by clicking on the Create Issue button at the
            bottom of the issues page.
          </li>
          <li>
            <b>
              Please refrain from adding duplicate issues on the portal, failing
              to do so may result in facing strict consequences as decided by
              the administrator.
            </b>
          </li>
          <li>
            While adding an issue make sure to put in a suitable title and
            description of the issue. Additionally, you can add tags to the new
            issue. For example, if you are posting an issue that concerns the
            CSE branch, you can add CSE as a tag in the branch field. Similarly,
            you can add tags in other fields as well. The submit button, submits
            the issue to the portal.
          </li>
          <br />
          <center>
            <img
              src={process.env.PUBLIC_URL + "/images/issue_form.png"}
              width="60%"
              height="60%"
            />
          </center>
        </ul>

        <h2>Creating Announcements</h2>
        <b>*Only for administrative users</b>
        <ul>
          <li>
            On the announcements page, you can create a new announcement by
            clicking on the Create Announcement button at the bottom of the
            announcements page.
          </li>
          <br />
          <center>
            <img
              src={process.env.PUBLIC_URL + "/images/create_announcement.png"}
              width="80%"
              height="80%"
            />
          </center>
          <br />
          <br />
          <li>
            While adding an announcement make sure to put in a suitable title
            and description of the announcement. Additionally, you can add tags
            to the new announcement. For example, if you are posting an
            Announcement that concerns the CSE branch, you can add CSE as a tag
            in the branch field. Similarly, you can add tags in other fields as
            well.
          </li>
          <br />
          <center>
            <img
              src={process.env.PUBLIC_URL + "/images/announcement_form.png"}
              width="60%"
              height="60%"
            />
          </center>
        </ul>
      </div>
    </>
  );
}

export default Support;
