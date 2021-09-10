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

## Next.js notes...

### getStaticProps (Static Generation)
- Fetch data at build time.\
` export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}`

#### When?
- The data required to render the page is available at build time ahead of a user’s request.
- The data comes from a headless CMS.
- The data can be publicly cached (not user-specific).
- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


### getStaticPaths (Static Generation)
- Specify dynamic routes to pre-render pages based on data.
- If a page has dynamic routes (documentation) and uses getStaticProps it needs to define a list of paths that have to be rendered to HTML at build time. \
`export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true, false, or 'blocking' // See the "fallback" section below
  };
}`\

#### When?
- You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes.



### getServerSideProps (Server-side Rendering)
- Fetch data on each request.
- If you export an async function called getServerSideProps from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.\
`export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}`\

#### When?
- You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.

- If you don’t need to pre-render the data, then you should consider fetching data on the client side.

