import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
