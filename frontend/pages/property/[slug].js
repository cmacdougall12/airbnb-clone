import { sanityClient } from "../../sanity";
import { isMultiple } from "../../utils";
import Image from "../../components/Image";
import Review from "../../components/Review";
import Map from "../../components/Map";
import Link from "next/link";

export const Property = ({
  title,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  description,
  host,
  reviews,
}) => {
  const reviewAmount = reviews.length;

  return (
    <div className="container">
      <h1>
        <b>{title}</b>
      </h1>
      <p>
        {reviewAmount} review{isMultiple(reviewAmount)}
      </p>
      <div className="images-section">
        <Image identifier="main-image" alt="" image={mainImage} />
        <div className="sub-images-section">
          {images.map((_key, image) => (
            <Image identifier="image" alt="" key={_key} image={image} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="information">
          <h2>
            <b>
              {propertyType} hosted by {host?.name}
            </b>
          </h2>
          <h4>
            <b>
              {bedrooms} bedroom{isMultiple(bedrooms)} * {beds} bed
              {isMultiple(beds)}
            </b>
          </h4>
          <hr />
          <h4>
            <b>Enhanced Clean</b>
          </h4>
          <p>This host is commited to an enhanced cleaning process</p>
          <h4>
            <b>Amentities</b>
          </h4>
          <p>Everything needed for a long term stay</p>
          <h4>
            <b>House Rules</b>
          </h4>
          <p>No parties or smoking</p>
        </div>
        <div className="price-box">
          <h2>${pricePerNight}</h2>
          <h4>
            {reviewAmount} review{isMultiple(reviewAmount)}
          </h4>

          <Link href="/">
            <div className="button">Change Dates</div>
          </Link>
        </div>
      </div>
      <hr />
      <h4>{description}</h4>
      <h2>
        {" "}
        {reviewAmount} review{isMultiple(reviewAmount)}
      </h2>
      {reviewAmount > 0 &&
        reviews.map((review) => <Review key={review.key} review={review} />)}

      <hr />

      <h2>Location</h2>
      <Map location={location}></Map>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
      _id,
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }
  }`;

  const property = await sanityClient.fetch(query, { pageSlug });

  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
      },
    };
  }
};

export default Property;
