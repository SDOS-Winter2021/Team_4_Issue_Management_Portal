# Team_4_Issue_Management_Portal

## 1. Overview

This project aims to build a centralized system to discuss all the students' issues that require administrative help. This way, all the important information and discussions will be stored in one place and referred to by anyone in the future. One of the major functions of this system is to avoid facing duplicate emails from the users regarding various topics.

## 2. Functionalities

This portal will have the following major functionalities.

* Issue creation

* Provision for making announcements by the administration so that it gets to the required student body.

* Tagging the issue with appropriate labels.

* Filtering the issues based on tag.

* Resolving/deleting issues.

* Comment section for discussion on issue and announcements.

* Ways to control duplicate and unnecessary issues.

* Authentication using IIITD account.

* Email notification when new announcement is posted or liked issues are updated.

* Users have the option to sort the issues based on the tags present in the issues/announcements.

* The administration is able to modify the roles of the Email IDs registered on the platform.

* The administration is able to add/delete filters present on the portal.




## 3. Instructions

To get a local copy up and running follow these simple steps.

1. Clone the repository.

2. Add your Google Client ID in `imap-frontend/src/Key.js`

Note: For generating a Google Client ID, refer to this [link](https://developers.google.com/adwords/api/docs/guides/authentication).

3. Navigate to `imap-frontend`.

4. Run `npm install`

5. Run `npm start`

6. Create a dedicated gmail account which will be used for sending emails to the users.

7. Generate your MongoDB URI.

Note: For generating a Mongo URI, refer to this [link](https://docs.mongodb.com/guides/server/drivers/)

8. Navigate to `imap-backend/` in a separate command prompt.

```
$ vim .env
```

```
MONGO_URI = YOUR_MONGO_URI
GOOGLE_OAUTH = YOUR_GOOGLE_CLIENT_ID
NODE_ENV = development
EMAIL_PASSWORD = DEDICATED_EMAIL_PASSWORD
```

9. Run `npm install`

10. Run `npm start`

Navigate to http://localhost:3000 to view the client side.
