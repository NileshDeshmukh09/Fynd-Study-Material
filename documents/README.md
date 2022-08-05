## Milestone 1
- Be clear with the features.

### Deadline: Monday, Aug 9, 9:00 AM - submit it in Dropbox folder that will be shared

### Deliverables
1. Give a max 1 page write up describing the project and its features

For example,
People can register, and login. There is an admin role and normal user. Admin will be able to approve new members. Members can login, and create new meetings and teams. ...

Features:
    - registration
    - login
    - create meetings
    - add new members to meetings
    - excuse yourself from meeting

2. ER diagram
Think about the data you want to capture in your app, and come up with an ER diagram
    - What are the collections?
    - What are the fields in a document of the collections?
    - What are the relationships?

3. User stories
    - registration - user will navigate to /register. Fill out the username, password, confirm password. On submit, the form is validated. If errors then they are shown. Else it is submitted. THe backend would return a success on adding to DB. If something goes wrong the backend sends an error (username already exists, db errors). On success, the frontend redirects to /login. On error, it displays an error on the page.