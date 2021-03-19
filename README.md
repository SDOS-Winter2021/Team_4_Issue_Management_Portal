# Team_4_Issue_Management_Portal

## 1. Overview

This project aims to build a centralized system to discuss all the students' issues that require administrative help. This way, all the important information and discussions will be stored in one place and referred to by anyone in the future.


## 2. Functionalities

This portal will have the following major functionalities.

1.  Issue creation
    
2.  Provision for making announcements by the administration so that it gets to the required student body.

3.  Tagging the issue with appropriate labels.

4.  Filtering the issues based on tag.

5.  Resolving/deleting issues.

6.  Comment section for discussion on issue and announcements.
    
7.  Ways to control duplicate and unnecessary issues.

9.  Authentication using IIITD account.

10.  Email notification when new announcement is posted or liked issues are updated.

## 3. Instructions

To get a local copy up and running follow these simple steps.

1. Clone the repository.

2. Add your Google Client ID in `imap-frontend/src/Key.js`

Note: For generating a Google Client ID, refer to this [link](https://developers.google.com/adwords/api/docs/guides/authentication).

3. Navigate to `imap-frontend`.

4. Run `npm install` 

5. Run `npm start`

6. Generate your MongoDB URI.

Note: For generating a Mongo URI, refer to this [link](https://docs.mongodb.com/guides/server/drivers/)

7. Navigate to `imap-backend/` in a separate command prompt.

  ```
  $ vim .env
  ```
  ```
  PORT = 5000
  MONGO_URI = YOUR_MONGO_URI
  GOOGLE_OAUTH = YOUR_GOOGLE_CLIENT_ID
  ```

8. Run `npm install`

9. Run `npm start`

Navigate to http://localhost:3000 to view the client side.
 
