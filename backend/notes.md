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
