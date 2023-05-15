# Object-Oriented Programming: Team Profile Generator

## Object-Oriented Programming

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

## Project Description

This is a Node.js application that takes in information about employees on a team and generates an HTML webpage that displays employee information for each person. This application uses Inquirer and Jest. It will be invoked by using the following command:

```bash
npm test 
```

## Installation

Requirements:

* Install Inquirer
* Install Jest

## Criteria

```bash
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Inquirer

Inquirer is a collection of common interactive command line user interfaces.

* providing error feedback
* asking questions
* parsing input
* validating answers
* managing hierarchical prompts

## Jest

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

* Zero configuration required.
* Fast interactive watch mode runs only test files related to changed files and is optimized to give signal quickly.
* Works with TypeScript, Babel, SystemJS, webpack, and more.
* Rich configuration of the test suite: you can easily create custom global setups, globals, and other stuff that Jest doesn't use by default.
* Snapshot testing.
* Great extensibility: add new matchers or even use the expect interface in your test code.
* Well-documented migration guides for most of the major JavaScript frameworks.
* Sandboxed test files and automatic global state resets for every test so no two tests conflict with each other.
* Built-in code coverage reports.

## FS

The FS module can be used to read/write content from and to files.

## Made by

[aalexandr6](https://github.com/aalexandr6) at aalexanderp6@gmail.com
