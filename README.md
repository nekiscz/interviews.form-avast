# Avast test
This repo includes JavaScript (so far) solution for Avast interview test. 

## JavaScript
- page object
- webdriver.io
- mocha and chai
- ES6 with babel compilation
- dot reporter

### How to run
As prerequisites you need to have [node.js](https://nodejs.org/en/download/) installed on computer.
1. clone this repo
2. navigate to `JavaScript` subfolder in comand line
3. run `npm install`
4. run `npm test`

## C#
- page object
- page factory
- NUnit
- NUnitOrange

### How to run
1. clone this repo
2. build project and install packages
3. run `runall.bat` in `interviews.form-avast\CSharp\Interviews.Form-Avast\Interviews.Form-Avast\bin\{buildsettings}\Framework\Console`

## Possible test scenarios
1. message for not matching passwords
2. twice entered email and username throw error
3. invalid date can't be entered, like 31. 2. 2000 (it can be and its bug...)
4. invalid files throw errors
5. new account can log in

These are the most basic and obvious I can provide without having any documentation (AC or functional).