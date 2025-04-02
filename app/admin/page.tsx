"use client";

import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer, ToastPosition } from "react-toastify";

export default function Admin() {
  const [signedIn, setSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    <div className="bg-[--theme-color]">
      {signedIn ? (
        <h1>SignedIn</h1>
      ) : (
        <div className="flex justify-center items-center h-screen">
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
            <h1 className="font-bold text-xl">Husam's Dashboard</h1>
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
