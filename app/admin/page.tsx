"use client";

import { useEffect, useState } from "react";
import { auth, firestore } from "../utils/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer, ToastPosition } from "react-toastify";
import { collection, DocumentData, getDocs } from "firebase/firestore";

export default function Admin() {
  const [signedIn, setSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (signedIn) {
      getDocs(collection(firestore, "Messages")).then((data) => {
        setMessages(data.docs.map((doc) => doc.data()));
      });
    }
  }, [signedIn]);

  const [toastPosition, setToastPosition] =
    useState<ToastPosition>("bottom-right");

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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });
  return (
    <div>
      {signedIn ? (
        <div>
          <header className="bg-[--theme-color] border-b-[5px] border-black">
            <div className="container flex justify-between items-center py-2">
              <h1 className="font-bold text-lg">Welcome Back, Husam! 👋</h1>
              <button
                className="btn bg-white"
                onClick={() => {
                  signOut(auth);
                  toast("Signed out!", {
                    type: "info",
                  });
                }}
              >
                Sign Out
              </button>
            </div>
          </header>
          <div className="container my-5">
            {messages.length > 0 ? (
              <div>
                <h2 className="text-center font-bold text-xl mb-5">Your Messages</h2>
                <div className="flex justify-center gap-5 flex-wrap">
                  {messages.map((doc, index) => (
                    <div key={index} className="shadowed p-3">
                      <h2 className="font-bold text-lg">From: {doc.name}</h2>
                      <p className="text-gray-700">{doc.message}</p>
                      <p className="text-sm text-gray-500">
                        Email: {doc.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        Received on: {doc.timestamp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <h1 className="text-center my-5">No messages found.</h1>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-[--theme-color]">
          <form
            className="bg-white flex flex-col justify-center items-center gap-3 my-10 shadowed p-5"
            onSubmit={(e) => {
              e.preventDefault();
              toast("Logging in...", {
                type: "info",
              });
              signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
              )
                .then(() =>
                  toast("Logged in!", {
                    type: "success",
                  })
                )
                .catch(() =>
                  toast("Error logging in!", {
                    type: "error",
                  })
                );
            }}
          >
            <h1 className="font-bold text-xl">Husam&apos;s Dashboard</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email..."
              className="border-2 border-gray-500 p-1 rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData((current) => ({
                  ...current,
                  email: e.target.value,
                }))
              }
            />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Your Password..."
              className="border-2 border-gray-500 p-1 rounded"
              value={formData.password}
              onChange={(e) =>
                setFormData((current) => ({
                  ...current,
                  password: e.target.value,
                }))
              }
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      )}

      <ToastContainer newestOnTop position={toastPosition} />
    </div>
  );
}
