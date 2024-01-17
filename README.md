# CS260 Startup

## Elevator Pitch
Nobody likes the hassle of performance reviews with managers. The inconvenience of finding time to meet, filling out documents with goals and metrics, sharing documents, and getting signatures. The goal of my start-up application is to simplify the process of a performance review/check-in for both managers, and employees. The end product will provide a seamless experience for the manager, who is able to track the progress of his employees as they fill out web-forms and rate their own performance. The employee will find the experience to be quick and simple, which will hopefully lead to improved performance and less worry about performance reviews.

## Key Features
- **Home screen** : The homescreen will display information about the app, and allow users to sign up/log in. When signing up, users will determine if they are an employee or manager. If employee, they will select who their manager is (assuming the manager signed up first).

- **Manager Dashboard** : The manager will be able to view a dashboard with the current progress of all his employees on the performance review form. When the employee has gotten to a certain stage in the review, the manager will be able to access his/her information, review it together with  them, and provide their own feedback.

- **Performance Review Form** : Employees will not have access to the manager dashboard, but instead a form (in the future, hopefully customizable by the manager) where they are able to personally review their goals and progress from the last quarter or trimester.

## Technology Descriptions
- **HTML:** I will use HTML to input all the text and formatting necessary to build a simple but effective homescreen, dashboard, and form.

- **CSS**: CSS will be important in making the UI as friendly as possible for both manager and employee. The goal is to have the dashboard and form be intuitive and simple, meaning one would be able to traverse their way around the web-app without needing a guide. I hope to implement color minimally but effectively.

- **Javascript**: Javascript will be vital in transferring data from the front end of the web-app to the back-end, and then to the database. I'll use it to fetch user data from the database so that the manager/employee is always seeing their data.

- **Database**: For the database, I imagine I will need a couple different schemas or pre-set data types. One for an employee, and one for a manager. The employee data type will be responsible for tracking who the manager is, and their answers/progress on the form. The manager data type must contain who their employees are, which gives them access to all their information as well.

## Design
![App Design](designs.jpeg)
