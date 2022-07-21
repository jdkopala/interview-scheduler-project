# Interview Scheduler

Interview Scheduler is a SPA made with React, Axios, Webpack SASS and Node.js that displays a week worth of days (Monday to Friday), and allows users to schedule, edit and delete appointments.
Other frameworks for testing include Jest, Storybook, React Testing Library, and Cypress!


## Screenshots

!["App view"](https://github.com/jdkopala/interview-scheduler-project/blob/master/DOCS/DayViewNoMouseover.png)
!["App view, hover over an appointment"](https://github.com/jdkopala/interview-scheduler-project/blob/master/DOCS/DayViewHighlit.png)
!["Create new appointment form"](https://github.com/jdkopala/interview-scheduler-project/blob/master/DOCS/CreateNewApptForm.png)
!["Edit existing appointments"](https://github.com/jdkopala/interview-scheduler-project/blob/master/DOCS/EditApptForm.png)

## Dependencies

- Axios
- classnames
- normalize.css
- react
- react-dom
- react scripts

## Setup

Install dependencies with `npm install`.
Start the server with `npm start` from the interview-scheduler directory, and run the app in your web browser.

# API setup

Additionally, you need to clone the scheduler api from [HERE](https://github.com/lighthouse-labs/scheduler-api).
From the directory you create run `npm install` to install dependencies. Then, in a second terminal run `npm start` to boot up the API server.

**There is more information available in the scheduler-api readme**

## Use

- Navigate to different days using the sidebar on the left, the selected day will be highlit when the user clicks.

- Add an appointment by clicking the "+" button in an empty appointment, user will type their name and select an interviewer. Click on **Save** to confirm and save the appointment, click **Cancel** to return to the empty appointment view.

- When an appointment is booked, the user can **EDIT** or **DELETE** using the buttons in the bottom right corner of the appointment.

- To **EDIT**, the user will click on the **EDIT** button and enter a new name in the text input, and/or selects a new interviewer and can then click **SAVE** to commit the changes, or **CANCEL** to return to the booked appointment view.

- To **DELETE**, the user clicks on the **DELETE** button and will be given a prompt to confirm whether or not they would like to delete the appointment. Click **CONFIRM** to commit and delete the appointment, or click **CANCEL** to return to the book ed appointment view.
