import React, { useState, useEffect } from "react";
import video4 from '/home/gambi/P3/P3-project/front-end/src/assets/video4.mp4'

const Catalogue = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [newMotorcycle, setNewMotorcycle] = useState({
    image_url: "",
    brand: "",
    model: "",
    category: "",
    price: "",
    rating: "",
    release_date: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMotorcycles(); // Fetch motorcycles on component mount
  }, []);

  const fetchMotorcycles = () => {
    fetch("http://127.0.0.1:8000/catalogues") // Adjust URL as per your FastAPI endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch motorcycles");
        }
        return response.json();
      })
      .then((data) => {
        setMotorcycles(data.catalogues); // Assuming the data is in the expected format
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMotorcycle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/catalogues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMotorcycle),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save new motorcycle");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New Motorcycle saved:", data);
        setNewMotorcycle({
          image_url: "",
          brand: "",
          model: "",
          category: "",
          price: "",
          rating: "",
          release_date: "",
        }); // Clear form fields after successful save
        fetchMotorcycles(); // Refresh the list of motorcycles after adding a new item
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return (
      <p style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        Loading motorcycles...
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ fontSize: 18, color: "red", textAlign: "center" }}>
        Error: {error}
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(221, 221, 221, 0.8)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="contact-us-container">
        <video autoPlay loop muted className="video-background">
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Motorcycles
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {motorcycles.map((motorcycle) => (
            <li
              key={motorcycle.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {motorcycle.brand} {motorcycle.model}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  margin: 0,
                }}
              >
                {motorcycle.category}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  margin: 0,
                }}
              >
                Price: {motorcycle.price}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  margin: 0,
                }}
              >
                Rating: {motorcycle.rating}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  margin: 0,
                }}
              >
                Release Date: {motorcycle.release_date}
              </p>
            </li>
          ))}
        </ul>

        {/* <h2
          style={{
            padding: "20px",
          }}
        >
          Add New Motorcycle
        </h2>
        <form
          style={{
            padding: "20px",
          }}
          onSubmit={handleFormSubmit}
        >
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Image URL:
            <input
              type="text"
              name="image_url"
              value={newMotorcycle.image_url}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Brand:
            <input
              type="text"
              name="brand"
              value={newMotorcycle.brand}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Model:
            <input
              type="text"
              name="model"
              value={newMotorcycle.model}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Category:
            <input
              type="text"
              name="category"
              value={newMotorcycle.category}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Price:
            <input
              type="text"
              name="price"
              value={newMotorcycle.price}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Rating:
            <input
              type="text"
              name="rating"
              value={newMotorcycle.rating}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
            }}
          >
            Release Date:
            <input
              type="text"
              name="release_date"
              value={newMotorcycle.release_date}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                height: "30px",
                padding: "10px",
                fontSize: 14,
                border: "1px solid #ccc",
              }}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{
              width: "100%",
              height: "30px",
              padding: "10px",
              fontSize: 14,
              fontWeight: "bold",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Catalogue;
