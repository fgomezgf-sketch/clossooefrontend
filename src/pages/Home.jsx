import { Link } from "react-router-dom";

function Home() {
  const dummyListings = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$450,000",
      image: "https://source.unsplash.com/400x300/?house,modern"
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: "$1,200,000",
      image: "https://source.unsplash.com/400x300/?villa,pool"
    },
    {
      id: 3,
      title: "Cozy Country Cottage",
      price: "$320,000",
      image: "https://source.unsplash.com/400x300/?cottage,house"
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x600/?real-estate,house')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          color: "#fff",
          textAlign: "center"
        }}
      >
        <h1>Find Your Dream Home with Closied</h1>
        <p>Browse thousands of listings from top real estate agents</p>
        <Link
          to="/listings"
          style={{
            background: "#ff5a5f",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "#fff",
            textDecoration: "none"
          }}
        >
          View Listings
        </Link>
      </section>

      {/* Dummy Listings */}
      <section style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Featured Listings</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          {dummyListings.map((listing) => (
            <div
              key={listing.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                background: "#fff"
              }}
            >
              <img
                src={listing.image}
                alt={listing.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: "0 0 10px" }}>{listing.title}</h3>
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{listing.price}</p>
                <Link
                  to={`/listing/${listing.id}`}
                  style={{
                    background: "#007BFF",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    color: "#fff",
                    textDecoration: "none"
                  }}
                >
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
