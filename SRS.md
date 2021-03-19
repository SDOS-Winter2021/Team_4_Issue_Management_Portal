# Software Requirement Specification

## Issue Management Portal

### Version - 1.0.0

| Mentors                                      | Team Members                                                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Sheetu Ahuja <br /> Student Senate President | Nandini (2018056) <br /> Pruthwiraj Nanda (2018075) <br /> Tanya Kumar (2018109) <br /> Dibya Gautam (2018282) |

<br />

## Table of contents

- Introduction

  - 1.1 Purpose
  - 1.2 Overview
  - 1.3 Intended Users
  - 1.4 Project Scope
  - 1.5 Glossary
  - 1.6 Abbreviations

- Specific Requirements
  - 2.1 Features
  - 2.2 Operating Environment
  - 2.3 Functional Requirements
  - 2.4 External Interfaces
  - 2.5 Performance Requirements
  - 2.6 Design Requirements

# 1. Introduction

## 1.1 Purpose

Each semester, students come across some issues that require the attention of the college administration. More often than not, these issues are repetitive, which means a group of students have very similar problems and need to contact the administration separately. This leads to concerned authorities having to go through tens or hundreds of emails just to tackle the same problem again and again.

This usually happens because there is no way for students to determine if their issue has already been discussed by someone else. This platform, called the Issue Management portal, will help ease the process both for the administration and the student body. With this centralized system, students can look up for their issues in a list of previously discussed sections and find their answers faster and in an easier way. The administration doesn't have to deal with the same issue again and again. This platform will be specially tailored for IIITD to meet the needs of our student body and college administration.

## 1.2 Overview

This project aims to build a centralized system to discuss all the students' issues that require administrative help. This way, all the important information and discussions will be stored in one place and referred to by anyone in the future.

This platform will allow the students to find answers to the issues that have already been raised in the past. It also lets them make the administration aware of any new issues. Moreover, students can communicate the urgency of an unresolved issue by upvoting it so that the administration can get to it quickly.

Administration can discuss the issue with the students and forward it to different departments as required. They can also resolve the issue on the portal itself. Moreover, they can make announcements on the topics that need to be communicated to the entire (or selective) student body.

## 1.3 Intended Users

1.  Students
2.  College Administration: Financial department, Academic department, Placement cell, etc.
3.  Student Senate

## 1.4 Project Scope

The scope of the project is a web application hosted on IIITD server. It will be using frontend and backend technologies. Frontend for UI and backend for database handling and querying.

## 1.5 Glossary

| Terms      | Meaning                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| Frontend   | The part of the application with which the user interacts.                                              |
| Backend    | It is the server side of the application.                                                               |
| React      | A JavaScript library for building user interfaces.                                                      |
| Node JS    | Node.js is a backend web application framework and is used for server-side scripting.                   |
| Express JS | Express is a back end web application framework and is designed for building web applications and APIs. |
| MongoDB    | It is a document database used to store data in JSON format.                                            |

## 1.6 Abbreviations

| Abbreviation | Explanation                       |
| ------------ | --------------------------------- |
| HTML         | Hypertext Markup Language         |
| CSS          | Cascading Style Sheets            |
| UI           | User Interface                    |
| JS           | Javascript                        |
| API          | Application Programming Interface |

# 2. Specific Requirements

## 2.1. Features

The Issue Management Portal has the following features for all its users:

(The 2 stakeholders (student and administration) have a different set of features.)

### Student

#### 1. Query

- A student can post an issue on the portal.
- They can view all public issues posted by other students.

#### 2. Filter

- Option to sort/view the issues based on department, programme (B-Tech/M-Tech/PhD), Batch year or query type (Academic/ Non-Academic).

#### 3. Tags

- issues posted by the students can be marked as public/private. If marked as private, the query can only be seen by the admins.
- issues can be labelled based on concerned departments and programmes. (It will be used in filtering as mentioned in point 2)

#### 4. Avoiding duplicate issues

- While entering a query, if the student’s query matches with an existing query in the database, then the student will be shown the past query and its reply (if any).
- If the student feels that his/her query is still unresolved, he will be allowed to post his/her query. But to avoid misuse of this feature, admins hold rights to block a student who repeatedly asks the issues which have already been answered.

#### 5. Upvoting & Commenting on an issue

- A student can react on issues posted by other students as well as comment on announcements made by the admins.

### Administration

#### 1. Posting an Announcement

- Admins can post announcements on the portal. They can choose to announce to all students or a particular set (based on department/ batch/ programme type).
- Whenever an announcement is posted, the targeted students are sent a mail so that they do not miss out on any important announcements.
- They can edit/delete the announcements.

#### 2. Visibility of Issues

- Admins can see all the issues (public and private) posted by the students and can reply or delete (report) the issues.

#### 3. Filter

- Option to sort/view the issues based on department, programme (B-Tech/M-Tech/PhD), Batch year or query type (Academic/ Non-Academic).

#### 4. Preventing misuse of the portal

- Admins can block students (if the student misbehaves or misuses the portal).

Note: All users will have a profile page where their personal information like

his/her activities on the portal.

## 2.2 Operating Environment

1.  The web application will be supported on all web browsers (Chrome / firefox) and across all operating systems (Android / Mac OS / Linux / Windows etc.)
2.  A valid IIIT-Delhi google account to login.

## 2.3 Functional Requirements

|     | High Priority                                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | The users (student and administration) are able to sign in and sign up to the platform.                                    |
| 1.2 | The students are able to post issues on the portal only when a similar query has not been asked.                           |
| 1.3 | The admin can resolve the issues posted by the students and has the authority to close an issue and edit /delete the same. |
| 1.4 | The admin is able to make announcements on the platform which is notified to every student present on the platform.        |

---

|     | Medium Priority                                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1 | The admin has the authority to suspend the account of a user.                                                                                           |
| 2.2 | The admin has the authority to approve the admission of other users / admins into the Issue Management Portal.                                          |
| 2.3 | Admin can edit the profile of a student on the platform.                                                                                                |
| 2.4 | Admins can block students (if the student misbehaves or misuses the portal).                                                                            |
| 2.5 | Students have the option to sort/view the issues based on department, programme (B-Tech/M-Tech/PhD), Batch year or query type (Academic/ Non-Academic). |

---

|     | Low Priority                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 3.1 | A student can react to issues posted by other students as well as comment on announcements made by the admins.     |
| 3.2 | The students are able to access all public issues on the portal as well as the announcements posted by the admins. |

---

## 2.4 External Interfaces

### 2.4.1 User Interfaces

1.  Log-in/Sign-Up Page
2.  Home Page

- Announcements

- Public Issues
- Profile / My Account

### 2.4.2 Hardware Interfaces

1.  All hardware must be able to connect to the Internet in order to access the application.

2.  There will be support for all browsers including mobile browsers.

### 2.4.3 Software Interfaces

1.  The user must have a valid IIIT-Delhi google account to enable sign-in/sign-up.

## 2.5 Performance Requirements

1.  The response time should not exceed 100 ms about 90% of the time.
2.  Database with enough storage capacity to handle the login details of the entire student body and college administration, and all the issues created over time.

## 2.6 Design Constraints

1.  The requirement of this project is to avoid duplicate issues. However, we cannot completely restrict the user from posting an issue, but can only decrease the possibility of duplicacy and spamming.

- By showing a list of existing issue that matches the issue the user is creating.
- By revoking his/her access to the functionalities of the portal for violating any protocol adhered to the website.

# 3. Summary of Meetings with Sponsors

### Meeting 1: Jan 30, 2021

#### Attendees

Team members: Dibya, Tanya, Nandini, Pruthwi

Sponsors: Yash Gupta (Student senate president), Sheetu Ahuja

Duration: 30 minutes

### Points of Discussion

#### Functionalities:

1.  Issue creation
2.  Private/public modes for issue creation
3.  Provision for making announcements by the administration so that it gets to the required student body.
4.  Detection of duplicate issues
5.  Ways to control duplicate and unnecessary issues.

#### UI requirements:

1.  Tags will be used to mark issues by students. Different colors for different tags to be used for better visibility.
2.  Easy to use system

#### Technologies to be used:

1.  Anything as per developers preferences.
2.  We plan to use react.js (front end), node.js and express.js (backend) to build the website.
3.  We plan to use mongoDB to store data.

### Timings

Estimate of how much of the duration the sponsor/users spoke in the meeting: 15 minutes

Estimate of how much of the duration you/your team members spoke in the meeting: 15 minutes

---
