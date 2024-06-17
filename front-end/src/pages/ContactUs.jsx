import React from "react";
import Navbar from "../components/Navbar";
import video4 from '/home/gambi/P3/P3-project/front-end/src/assets/video4.mp4'
import "./ContactUs.css";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function ContactUs() {
  return (
    <ErrorBoundary>
      <Navbar />
      <div className="contact-us-container">
        <video autoPlay loop muted className="video-background">
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="contact-us-container">
          <h2 className="contact-us-title">Contact Us</h2>
          <form className="contact-us-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-us-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-us-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="contact-us-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-us-textarea"
            ></textarea>
            <button type="submit" className="contact-us-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default ContactUs;
