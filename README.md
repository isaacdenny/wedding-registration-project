# Wedding Registration Project
A simple application for registering attendees for our wedding!

## Project Summary

This project is built to be a tool for registering your party members, letting
us know who is coming to the wedding! It allows invitees to go online via a QR code,
enter their party name and invitation ID to then select who in their party is coming.

We did not want to pay a bunch of money for a simple registration app, so I build one!

## Technologies

### Front-End UI
- [ReactJS](https://reactjs.org/) User Interface
- [NodeJS](https://nodejs.org/en/) Runtime Environment

### Back-End API
- [NodeJS](https://nodejs.org/en/)

### Database
- [MySQL](https://www.mysql.com/)

### Deployment
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)

## Try Out The Project
See section "Contributing To The Project" for local development instructions.
1. Clone this repo with `git clone <repo-url-here>` and `cd` into the repo directory.
2. Make sure you have [Docker](https://www.docker.com/) AND [Docker-Compose](https://docs.docker.com/compose/) installed
5. Navigate to the main project directory andrun the command `docker-compose up`
6. Invite People To Your Event!

## Contributing To The Project
See more detailed [instructions here](https://www.tomasbeuzen.com/post/git-fork-branch-pull/)
1. From the [main project page](https://github.com/isaacdenny/wedding-registration-project) click "Fork" near the top right to create your own variation of the project.
2. Once your fork is created, click the green "Code" button on your fork's Github page and copy the HTTP link to your clipboard.
3. Open a terminal and navigate to the folder you would like your project to be in (ie, a folder called "Projects").
4. Once in the folder, use `git clone <your-fork-repo-url-here>` to create a clone of the project in that directory.
5. Add a remote repository called "upstream" pointing to the original repository with the command `git remote add upstream <original-repo-url-here>`
6. Create a new branch with the name "new_branch" with the command `git checkout -b new_feature`
7. Make your desired changes to the project and add them to a commit with `git add -A` and commit your changes with `git commit -m "Descriptive commit message here"`
8. If changes are made to the upstream project, you will want to update your fork with those changes to avoid merge conflicts. Do this with `git checkout main` and then `git pull upstream main`
9. Now that your fork has been updated, you should update your current "new_feature" branch with `git checkout new_feature` and `git merge main`
10. When you believe your feature is production ready, push your branch to your fork with `git push origin new_feature`
11. Open a pull request in Github to have your feature reviewed and hopefully merged!
