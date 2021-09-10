# Notes on using Sanity with Next.js

## Build Sanity.io Backend Database
1. npm install -g @sanity/cli && sanity init
2. Go through prompt to set-up Sanity in project folder
3. sanity start
4. go to http://localhost:3333 to view 
5. build out schemas. See https://www.sanity.io/docs/schema-types
6. import schemas into /schemas/schemas.js
7. add data to database

## Link to Front End
1. Keep backend sanity.io database running
2. create new directory for front end development
3. npx create-next-app
4. sanity.js code
5. npm i next-sanity
6. Create .env file and add dataset and project-id keys that are found in the sanity.json folder in the backend
7. npm run dev to run in development mode
