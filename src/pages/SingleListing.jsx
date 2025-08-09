import { useParams, Link } from "react-router-dom";

function SingleListing() {
  const { id } = useParams();

  // Dummy listing data
  const listings = [
    {
      id: "1",
      title: "Modern Family Home",
      price: "$450,000",
      description: "A beautiful modern family home with 4 bedrooms, 3 bathrooms, and a spacious backyard.",
      image: "https://source.unsplash.com/800x600/?house,modern"
    },
    {
      id: "2",
      title: "Luxury Villa with Pool",
      price: "$1,200,000",
      description: "A stunning villa featuring an infinity pool, ocean views, and 6 bedrooms.",
      image: "https://source.unsplash.com/800x600/?villa,pool"
    },
    {
      id: "3",
      title: "Cozy Country Cottage",
      price: "$320,000",
      description: "A charming countryside cottage with a rustic feel and gorgeous gardens.",
      image: "https://source.unsplash.com/800x600/?cottage,house"
    }
  ];

  const listing = listings.find(l => l.id === id);

  if (!listing) {
    return <p style={{ padding: "20px" }}>Listing not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#007BFF" }}>← Back to Home</Link>
      <h1>{listing.title}</h1>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{listing.price}</p>
      <img src={listing.image} alt={listing.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }} />
      <p>{listing.description}</p>
    </div>
  );
}

export default SingleListing;
