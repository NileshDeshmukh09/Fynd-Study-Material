## Requirements gathering
- Decide features and be clear with how the user will use the features. The features should solve some problem (can be a small problem).
- Data modeling - Decide the data to capture - created ER diagram (collections and relationships)

## Design
- What is clear (how to implement), and not is what clear?
    - For things that are not clear - Explore, read articles, watch YouTube video, discuss with other people and become clear. Seek out suggestions.
- Create a high-level design for features in the app.

## Before you start developing
- Prioritize your features - arrange in terms of importance from highest to lowest
- Pick one-by-one, and build out both frontend and backend.
    for( i = 0; i < featuresSortedByPriority.length; i++ ) {
        - When you pick up a feature
            - Get the basic functionality working
            - Then do error handling and improve UX
            - Test out all cases
            - Then we are DONE
    }

## Start developing
- Design the UI for the entire app based on your features
    - What screens are there?
    - How should every screen look like?
    - How is the app navigation?
    - Any top-level menu? If so, what does it have?
- Before you build any features in the backend
    - Create your schema, models
- Now start picking up features based on priority and build out the frontend and backend
    - Backend
        - Create a server, connect to DB, setup the folders, basic files with basic setup, error-handling setup, install libraries
        - Start building the APIs
            - For example, for the feature : visit assessments -> start assessment takes to assessmdnt page
            - When the user starts taking the assessment (every assessment has a duration)
                - POST /api/assessments -> Generate a unique id
            - When user goes to take test page...
                - GET /api/questions/:id -> Get a question by id
            - When user posts an answer
                - POST /api/questions/:id/answer -> Provide an answer for question with given id
                    - Either error / answer is right
                    - {
                        status: 'wrong',
                        data: '2 Test cases out of 5 passed'
                    }
    - Frontend
        - Basic project setup using Vue CLI
            - Decide the route on which the relevant pages will show up. Update the router file.
                - localhost:3000/assessments -> Assessments page
                - localhost:3000/assessments/:id -> Single assessment
            - Decide the components to build for each of the pages
                - Assessments page
                    - AvailableAssessments
                - Single assessment page
                    - Assessment component
                        - Question component
                        - Answer component
                        - Feedback component
                    - decide what data to store in which component
