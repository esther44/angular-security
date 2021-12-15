## Angular Security MasterClass - Web Security Fundamentals Course

This repository contains the code of the [Angular Security MasterClass - Web Security Fundamentals Course](https://angular-university.io/course/angular-security-course).

![Angular Security MasterClass - Web Security Fundamentals Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png)

IMPORTANT: please use Node 14 (Long-term support version) to take this course.

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server, and it uses HTTPS.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200, but you need to use HTTPS - [https://localhost:4200](https://localhost:4200)

This application uses a self-signed certificate, so you will need to accept it using the browser. If you are using Chrome, you will need to click Advanced and then choose "Proceed to localhost".
