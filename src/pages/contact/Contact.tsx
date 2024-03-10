import { useSidebar } from "../../hooks";
import { useState } from "react";
import "./contact.css";

export const Contact = () => {
  const { isSidebarOpen } = useSidebar();

  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <main className={isSidebarOpen ? "space-toggle" : ""}>
      <section className="contact">
        <h2 className="heading">
          Contact <span>Us!</span>
        </h2>
        <form
          action="https://getform.io/f/a6ac45b2-9f36-4abd-a7a9-57f4b58b7508"
          method="POST"
        >
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            name="message"
            cols={10}
            rows={3}
            required
          />
          <div className="btn ">
            <input type="submit" className=" button" value="Send Message" />
          </div>
        </form>
      </section>
    </main>
  );
};
