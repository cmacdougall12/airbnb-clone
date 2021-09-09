import { sanityClient, urlFor} from "../sanity";

const Home = ({ properties }) => {
  console.log(properties);
  return (
    <>
      {properties && (
        <div className="main">
          <div className="feed-container">
            <h1>Places to Stay near you</h1>
            <div className="feed">
              {properties.map((property, index)=>{
                <div key={property._id} className="card">
                  <img src={urlFor(property.mainImage)}/>
                </div>
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]';
  const properties = await sanityClient.fetch(query);

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: { properties },
    };
  }
};

export default Home;
