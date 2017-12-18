# Avast test
This repo includes JavaScript and C# solutions for Avast interview test. 

## JavaScript
- page object
- webdriver.io
- mocha and chai
- ES6 with babel compilation
- dot reporter

### How to run
As prerequisites you need to have [node.js](https://nodejs.org/en/download/) installed on computer.
1. clone this repo
2. navigate to `JavaScript` subfolder in command line
3. run `npm install`
4. run `npm test`

## C#
- page object
- page factory
- NUnit
- NUnitOrange

### How to run
1. clone this repo
2. build C# project and install packages
3. run `runall.bat` in `interviews.form-avast\CSharp\Interviews.Form-Avast\Interviews.Form-Avast\bin\{buildsettings}\Framework\Console`

or 

1. clone this repo
2. build C# project in Visual Studio
3. go to Test/Windows/Test Explorer in Visual Studio
4. in Test Explorer click on Run all

## Bugs
These are bugs according to me, but it is really hard to tell without any documentation. Also these are only ones I found during writing tests.

1. unrealistic date can be set in date picker (aka 31. 2. 2000)
2. when first name is not filled and form is submitted, no error message is displayed (that is why my automation test are failing)
3. password strength indicator is flaky at best, sometimes when I fill Week password, indicator shows Very week and changes after some time

## Possible test scenarios
1. message for not matching passwords
2. twice entered email and username throw error
3. invalid date can't be entered, like 31. 2. 2000 
4. invalid files throw errors
5. new account can log in

These are the most basic and obvious I can provide without having any documentation (AC or functional).