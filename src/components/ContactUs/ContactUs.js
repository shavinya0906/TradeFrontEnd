import React, { useState } from "react";
import "./contactUs.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = encodeURIComponent(formData.name);
    const email = encodeURIComponent(formData.email);
    const message = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:tradejournal96@gmail.com?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

    // Open user's email client with pre-filled email content
    window.location.href = mailtoLink;

    // Prevent the default form submission
    e.preventDefault();
  };

  return (
    <section style={styles.section}>
      <div className="container-fluid" style={styles.container}>
        <div className="row p-3" style={styles.row}>
          <div className="col-12 col-md-7" style={styles.leftColumn}>
            <p className="About" style={styles.heading}>
              Contact <span id="Us">Us</span>
            </p>
            <p className="message1" style={styles.message}>
              Have questions, feedback, or need assistance? We’re here to help!
              Feel free to reach out to us using the contact information
              provided below:
            </p>
            <div className="row " style={styles.twoboxrow}>
              <div className="col-12 col-md-5" style={styles.contactInfo}>
                <div className="between1">
                  <p>
                    <i className="fa-solid fa-phone" /> +91 0000000000
                  </p>
                  <p>
                    <i className="fa-solid fa-envelope" />{" "}
                    support@mytradejournal.in
                  </p>
                  <div className="font12" style={styles.socialIcons}>
                    <i
                      className="fa-brands fa-square-twitter"
                      style={styles.icon}
                    />
                    <i
                      className="fa-brands fa-square-instagram"
                      style={styles.icon}
                    />
                    <i className="fa-brands fa-linkedin" style={styles.icon} />
                    <i
                      className="fa-brands fa-square-facebook"
                      style={styles.icon}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-5 bet-two"
                style={styles.chatSection}
              >
                <div className="between2" style={styles.between2}>
                  <p className="imgman" style={styles.imgman}>
                    <img
                      src="img/Figure.png"
                      alt="Figure"
                      style={styles.image}
                    />
                    <span id="fig1">
                      <img
                        src="img/Whatsapp.png"
                        alt="WhatsApp"
                        style={styles.image}
                        onClick={() =>
                          window.open("https://web.whatsapp.com/", "_blank")
                        }
                      />
                    </span>
                  </p>
                  <div
                    className="fig2"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open("https://web.whatsapp.com/", "_blank")
                    }
                  >
                    Live Chat With <br />
                    <span className="exp" style={styles.expert}>
                      Expert <i className="exp bi-arrow-down-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5" style={styles.rightColumn}>
            <div className="form2" style={styles.formContainer}>
              <p className="send" style={styles.send}>
                Send Your Message to us
              </p>
              <p className="put" style={styles.put}>
                Put up your query below
              </p>
              <div className="contactform" id="connn" style={styles.contactForm}>
                <form onSubmit={handleSubmit} className="forr">
                  <label className="form-title" style={styles.formTitle}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                  />
                  <label className="form-title" style={styles.formTitle}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="me@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                  />
                  <label className="form-title" style={styles.formTitle}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...styles.input, height: 75 }}
                  />
                  <div className="random">
                    <button
                    className="buttonn"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "20px",
    fontFamily: "popins, sans-serif",
    color: "#333",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  leftColumn: {
    padding: "20px",
  },
  rightColumn: {
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  message: {
    marginBottom: "20px",
    color: "gray",
    textAlign: "center",
  },
  contactInfo: {
    padding: "35px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  socialIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  icon: {
    margin: "0 5px",
    fontSize: "30px",
  },
  chatSection: {
    padding: "35px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  imgman: {
    display: "flex",
    alignItems: "center",
  },
  between2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  twoboxrow: {
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    maxWidth: "100%",
  },
  fig2: {
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "bold",
  },
  expert: {
    display: "inline-block",
    marginLeft: "5px",
  },
  formContainer: {
    padding: "20px",
    backgroundColor: "#1b1e31",
    borderRadius: "5px",
  },
  send: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#FFFFFF",
    fontFamily: "inter",
    textAlign: "center",
  },
  put: {
    marginBottom: "20px",
    color: "gray",
    textAlign: "center",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    padding: "5%",
  },
  formTitle: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "gray",
  },
  input: {
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    backgroundColor: "#f4f4f4",
  },
  button: {
    padding: "5px",
    backgroundColor: "#f4f4f4",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "50%",
    textAlign: "center",
  },
};

export default ContactUs;
