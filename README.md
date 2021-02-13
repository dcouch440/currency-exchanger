# Currency Exchanger 💰
#### Created By: David Couch

#### *Currency Exchange App*

* * *
## Description  
Currency exchange app using the exchange rate api. Users can enter an amount and see comparable prices to the amount entered!

* * *

## Technologies used
* HTML
* CSS
* Git and Github
* JavaScript
### Dev Dependencies
* webpack ```4.39.3```
* babel ```7.6.4```
* eslint ```6.3.0```
* dotenv-webpack: ```6.0.0```
* css-loader: ```3.2.0```
* html-loader: ```0.5.5```
* file-loader: ```1.1.6```

# Recourses 
* This app uses a currency exchange api by the name of ExchangeRate-Api.
* see (https://www.exchangerate-api.com/) for more info. 

* * *
# Specs

## About Babel:
  #### This app:
  *  Babel is used in this application for converting imports.
  #### What is Babel?
  *  From [wikipedia]( https://en.wikipedia.org/wiki/Babel_(transcompiler) ) : \
    "Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language."
***
## About ESLint:
  #### This app:
  *    ESLint is used in this application to keep syntax in order.
  #### What is ESLint?
  *  From [wikipedia]( https://en.wikipedia.org/wiki/ESLint ) : \
    "ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It was created by Nicholas C. Zakas in 2013. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues."
***
## About webpack:
  #### This app:
  * webpack is used in this application to bundle these technologies.
  #### What is webpack?
  *  From [wikipedia]( https://en.wikipedia.org/wiki/Webpack ) : \
    "webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules."
## About html-loader:
  #### This app
  * html-loader is used to handle images in the html file.
## About file-loader:
  #### This app
  * file-loader is used to handle image imports within the javascript.
## About css-loader:
  #### This app
  * css-loader is used to handle the css while bundling webpack.
## About dotenv-webpack:
  #### This app
  * dotenv-webpack is used to create an environmental variable to be able to use api keys or sensitive data without revealing it within the commit history.

***
## Installation :

###  Heads Up! This app requires an api key to function please fallow the instructions closely!


* Go to ( https://github.com/dcouch440/currency-exchanger ).

*  Navigate to the code button on the github website.\
![Code button](/img/README/code.PNG)

* Click on the code button to open the menu.\
![Github Repo Example](/img/README/HTTPS.png)

- Copy the HTTPS code by clicking the clipboard next to the link.

- Within your Bash terminal navigate to your desired location by using cd fallowed by your desired directory.

```bash
 cd Desktop
``` 

- Once you have chosen your desired directory use the command.

```bash 
git clone https://github.com/dcouch440/currency-exchanger.git
```

<div 
  style="
    background-color: #d1ecf1; 
    color: grey; padding: 6px; 
    font-size: 9px; 
    border-radius: 5px; 
    border: 1px solid #d4ecf1; 
    margin-bottom: 12px"
> 
  <span 
    style="
      font-size: 12px; 
      font-weight: 600; 
      color: #0c5460;"
  >
    ⓘ
  </span>
  <span 
    style="
      font-size: 12px; 
      font-weight: 900; 
      color: #0c5460;
      margin-bottom: 24px"
  >
    Note : 
  </span> 
  If you have any problems make sure your HTTPS code is correct! The example above might not be the most recent HTTPS code!
</div>

* Then after the process is completed use the command.

``` bash
code .
```
Now visit ( https://www.exchangerate-api.com/ ).

* Fallow these instructions after you have your key 
* After you have your key make a file named .env in the main directory of this app 

* within the .env do the fallowing.

```
API_KEY=Key-Here
```
* Add your Api key after the = and nothing else. Check to make sure there are no quotes, brackets or braces of any kind!

* Now run the fallowing code in the terminal you started with or feel free to use the terminal of the code editor you are using. Just make sure you are within the project directory! 

```bash
npm install
```
* Then run

```bash
npm run start
```

* Thats it your ready to go!
# Addition Comments:
* Created on 2/12/21

### `npm install`
Installs the dependencies listed in the package.json file

### `npm run build`
Bundles your new app

### `npm run start`
Starts up your application using a node server.

### `npm run test`
Launches jest test runner.

### Packages used during development

```node
$ npm install webpack@4.39.3 --save-dev --save-exact

$ npm install webpack-cli@3.3.8 --save-dev

$ npm install style-loader@1.0.0 css-loader@3.2.0 --save-dev

$ npm install html-webpack-plugin@3.2.0 --save-dev

$ npm install clean-webpack-plugin@3.0.0 --save-dev

$ npm install webpack-dev-server@3.8.0 --save-dev

$ npm install eslint@6.3.0 --save-dev

$ npm install eslint-loader@3.0.0 --save-dev

$ npm install @babel/core@7.6.4 --save-dev

$ npm install @babel/plugin-transform-modules-commonjs@7.6.0 --save-dev

$ npm install dotenv-webpack --save-dev

npm install file-loader@1.1.6 --save-dev

npm install html-loader@0.5.5 --save-dev
```
* * *

## License:
> *&copy; David Couch, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_David Couch: [Email](dcouch440@gmail.com)_

