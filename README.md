# SSHing to git repo
create an ssh folder and use this keygen command

### `mkdir .ssh && cd .ssh/ && ssh-keygen -t rsa -b 4096 -C "email@gmail.com"`

Then go to your git account's settings and add the .pub to you ssh keys. To add to git repo on https and not ssh make sure to run these 2 commands first:

### `sudo chown 600 ~/.ssh/ssh_key.pub && git remote set-url origin git@github.com:User/Reponame.git && ssh-add ~/.ssh/ssh_key`

# Running React in ubuntu 22 on AWS
First thing's first, react doesn't do well with ubuntu unless you have the binary instance for node which you can get from this website https://github.com/nodesource/distributions.  Select the one that works best for you and run the commands they tell you.  Then install npm with: 

### `npm install`

Run any updates they suggest as well.  Next run a build:

### `npm run build`

If the output spits back and updates needed run those commands as well.  The last command you need to run terminalwise is a redirect.  Npm redirects port 80 to port 3000 and aws needs to be configured for that on the terminal side it looks like:

### `sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000`

On the AWS console side, just make sure both port 3000 and 80 are open to all.  Yes both need to be open.  Now all you need is to run:

### `npm start`

And put either <http://public_ip> or <http://public_ip:3000> in your browser.  You should be able to see your react website that way :)

# Adding DNS to React App/EC2 Node

Go to https://www.noip.com/, create an account and create a hostname, attach the public ip to entry.  From there start the react app and put the dns name in the the browser 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
