import { Link } from "react-router-dom";

function Home() {
  const dummyListings = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      price: "$350,000",
      image: "https://via.placeholder.com/300x200",
      description: "2 bed, 2 bath apartment with stunning city views."
    },
    {
      id: 2,
      title: "Cozy Suburban Home",
      price: "$450,000",
      image: "https://via.placeholder.com/300x200",
      description: "4 bed, 3 bath family home in a quiet neighborhood."
    },
    {
      id: 3,
      title: "Luxury Beachfront Villa",
      price: "$2,500,000",
      image: "https://via.placeholder.com/300x200",
      description: "Exclusive 5 bed, 6 bath villa with private beach access."
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section style={{
        backgroundImage: "url('https://via.placeholder.com/1200x400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Find Your Dream Home
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Explore listings from the comfort of your home.
        </p>
        <Link to="/listings" style={{
          padding: "12px 20px",
          backgroundColor: "#17a2b8",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "18px"
        }}>
          View Listings
        </Link>
      </section>

      {/* Featured Listings */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Featured Listings
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {dummyListings.map((listing) => (
            <div key={listing.id} style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}>
              <img src={listing.image} alt={listing.title} style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }} />
              <div style={{ padding: "15px" }}>
                <h3>{listing.title}</h3>
                <p style={{ color: "#28A745", fontWeight: "bold" }}>{listing.price}</p>
                <p>{listing.description}</p>
                <Link to={`/listing/${listing.id}`} style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none"
                }}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
