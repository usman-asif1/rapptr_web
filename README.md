## Requirements

For development, you will only need Node.js installed on your environement. And please use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Node

Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.


```
$ node --version
v12.14.1

$ npm --version
6.14.4
```

### Node installation on OS X
You will need to use a Terminal. On OS X, you can find the default terminal in `/Applications/Utilities/Terminal.app`.

Please install Homebrew if it's not already done with the following command.
```
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```
If everything when fine, you should run
```
brew install node
```
### Node installation on Linux
```
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```
### Install
```
$ npm install
```

### Start & watch
```
$ npm start
```

## Note

- Implemented the Landing page with pixel perfect UI, also added newsletter subscription functionality which only accepts email.
- Added Signup and Login functionality with proper UI and required fields.
- Used API end points to ensure user authentication.
- Added notification for newsletter subscription, signup and login functionality using react-toastify
- I have used reac scss, eslint and prettier.
- Code is properly structured and divided to improve code reusability.
- For API calls I have used axios package.
- For future we can use used react-redux, redux-thunk, fontawesome and redux-form for better performance.
- Time breakdown:
  * Spent 4-5 hours on UI to work on its pixel-perfection.
  * Spent 2 hours for react code structure and breaking the UI into multiple reusable components.
  * Spent 1 hour for configuring baseURL, eslint and prettier for code consistency throughout the code.
