"use client";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { ToastContainer, toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const db = getFirestore(app);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [toastPosition, setToastPosition] = useState<ToastPosition>("bottom-right");

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth < 768) {
        setToastPosition("top-center");
      } else {
        setToastPosition("bottom-right");
      }
    };

    updatePosition(); // Set initial position
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container flex max-md:flex-col gap-5 items-center">
        <div className="form w-full">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <p className="mb-2">
            Feel free to reach out for collaborations or just to say hi!
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // Send to firebase backend
              try {
                setSending(true);
                toast("Sending your message...", {
                  type: "info",
                });
                await addDoc(collection(db, "Messages"), {
                  ...formData,
                  timestamp: new Date().toISOString(),
                });
                toast("Message sent!", {
                  type: "success",
                });
                setFormData({
                  name: "",
                  email: "",
                  message: "",
                });
              } catch (e) {
                toast("Error sending message!", {
                  type: "error",
                });
                console.error(e);
              } finally {
                setSending(false);
              }
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
            <button
              type="submit"
              className={`${
                sending
                  ? "shadowed px-4 py-2 font-semibold lg:text-lg opacity-25"
                  : "btn"
              }`}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
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
      <ToastContainer
        newestOnTop
        position={toastPosition}
      />
    </section>
  );
}
