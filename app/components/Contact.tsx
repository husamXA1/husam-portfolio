"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="py-20">
      <div className="container flex max-md:flex-col gap-5 items-center">
        <div className="form w-full">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <p className="mb-2">
            Feel free to reach out for collaborations or just to say hi!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(formData);
              console.log("Sending...");
              // TODO: Send to firebase backend
              // TODO: Display success/error message
            }}
            className="flex flex-col gap-2 items-start"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 p-2 border border-gray-700 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData((curr) => ({ ...curr, name: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-1/2 p-2 border border-gray-700 rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData((curr) => ({ ...curr, email: e.target.value }))
              }
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-24 p-2 border border-gray-700 rounded"
              value={formData.message}
              onChange={(e) =>
                setFormData((curr) => ({ ...curr, message: e.target.value }))
              }
            ></textarea>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
        <div className="contact-info flex flex-col gap-2 w-full">
          <h3 className="text-xl font-bold">Contact Info</h3>
          <div className="flex gap-2 items-center">
            <FaPhone size={24} />
            <p>+249 11 705 0461</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope size={24} />
            <p>husamxm0@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationDot size={24} />
            <p>Khartoum, Sudan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
