## Contributing.md

### Getting started

This site is powered by Node.js. MERN stack is used as the technical stack for this project.
Check out the existing issues before creating your own issue.
If you wish to make a change, discuss it first by creating an issue.

The code documentation can be found [here](https://sdos-winter2021.github.io/Team_4_Issue_Management_Portal/).

### To make changes

1. Fork the repository.

This can be done using Github Desktop or using command line.

- How to set up the desktop: [see here](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop).

- After setting up the desktop, follow this [link](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop) to fork repository.

- Fork repo using command line : [see here](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository).

2. Make respective changes in the file. After you are done, submit a pull request for organizers to review your changes.

3. Follow Coding style Guidelines.

   - After making the changes, use the following commands in the root directory to run [prettier](https://prettier.io/).

   ```
   npm install
   npm run lint
   ```

4. After careful analysis of the changes proposed, they will be merged if these changes do not conflict with existing files.



### Deploying (only for admins)
1. Login to the renote server and pull the changes. Build the latest changes in imap-frontend.
   ```
   git pull origin main
   npm run build
   ```
2. Run the following commands to restart nginx and verify the same.
   ```
   sudo systemctl restart nginx
   sudo systemctl status nginx
   ```
3. Run the following commands to restart pm2 and verify the same.
   ```
   pm2 restart imap-app
   pm2 status
   ```

List of other useful commands:
   ```
   vim /etc/nginx/sites-available/default
   pm2 start imap-backend/src/index-server.js --name "imap-app"
   ```

Debugging:
   ```
   pm2 logs
   ```
