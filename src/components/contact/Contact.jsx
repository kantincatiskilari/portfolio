import emailjs from "@emailjs/browser";
import "./contact.css";
import { useRef, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState();
  const form = useRef();

  setTimeout(() => {
    setResult();
  }, 3000);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8a4epou",
        "template_yy34fme",
        form.current,
        "PID1Hk5prvPj40QMI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(true);
        },
        (error) => {
          console.log(error.text);
          setResult(false);
        }
      );
  };
  return (
    <div className="contact">
      {result && (
        <div className="resultDiv success">Thank you for reaching me.</div>
      )}
      {result === false && (
        <div className="resultDiv failure">E-mail could not be sent.</div>
      )}
      <div className="contactDesc">
        <div className="contactDescTitle">GET IN TOUCH.</div>
        <div className="contactDescSubtitle">LET'S WORK TOGETHER.</div>
      </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <div className="contactFormElement">
          <input
            className="contactFormInput"
            type="text"
            placeholder="Your name"
            name="user_name"
          />
          <div></div>
        </div>
        <div className="contactFormElement">
          <input
            className="contactFormInput"
            type="text"
            placeholder="Your email"
            name="user_email"
          />
          <div></div>
        </div>
        <div className="contactFormElement">
          <textarea
            className="contactFormInput"
            type="text"
            placeholder="What is it for?"
            name="message"
          />
          <div></div>
        </div>
        <div className="contactFormElement">
          <button
            className="contactFormBtn"
            type="submit"
            placeholder="Your name"
            value="send"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
