## Angular Security MasterClass - Web Security Fundamentals Course

This repository contains the code of the [Angular Security MasterClass - Web Security Fundamentals Course](https://angular-university.io/course/angular-security-course).

![Angular Security MasterClass - Web Security Fundamentals Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png)

IMPORTANT: please use Node 14 (Long-term support version) to take this course.

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-security-course.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:

    cd angular-security-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server, and it uses HTTPS.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200, but you need to use HTTPS - [https://localhost:4200](https://localhost:4200)

This application uses a self-signed certificate, so you will need to accept it using the browser. If you are using Chrome, you will need to click Advanced and then choose "Proceed to localhost".

# Installing branches other than master

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a

  The remote branches have their starting in origin, such as for example au-input.

We can checkout the remote branch and start tracking it with a local branch that has the same name, by using the following command:

      git checkout -b au-input origin/au-input
