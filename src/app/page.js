"use client";
import Image from "next/image";
import Colors from "./colors";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div
        className=""
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: Colors.lGreen,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingInline: 30,
        }}
      >
        <div
          className="w-full relative"
          style={{
            maxWidth: 1260,
            flex: 1,
          }}
        >
          <div style={{ position: "absolute", top: 0 }} className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  style={{ backgroundColor: Colors.lGreen }}
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Surgeons</a>
                  </li>
                  <li>
                    <a>Specialities</a>
                  </li>
                  <li>
                    <a>Reviews</a>
                  </li>
                </ul>
              </div>
              <a
                className=" text-xl"
                style={{
                  letterSpacing: 3.92,
                }}
              >
                HEAL<span style={{ color: Colors.green }}>PAL</span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Surgeons</a>
                </li>
                <li>
                  <a>Specialities</a>
                </li>
                <li>
                  <a>Reviews</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a
                className="btn btn-primary"
                style={{
                  backgroundColor: Colors.green,
                  border: "unset",
                  boxShadow: "0px 10px 10px 0px rgba(7, 187, 152, 0.15)",
                }}
              >
                Talk To Us{" "}
              </a>
            </div>
          </div>
          <div className="h-full flex flex-col lg:flex-row gap-10 mt-20 lg:mt-0">
            <div className="gap-10 flex flex-col justify-center">
              <div className="flex gap-6 flex-col justify-center">
                <div>
                  <h1 className="header">Professional Care</h1>
                  <div className="flex">
                    <h1 className="header">with a personal touch</h1>
                    <h2 className="full">.</h2>
                  </div>
                </div>
                <p>
                  A group of independent surgeons each with different
                  speciality.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={50}
                    style={{ backgroundColor: Colors.lGreen }}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (
                        email.length < 5 ||
                        email.includes(" ") ||
                        !email.includes("@gmail.com") ||
                        email.length > 70
                      ) {
                        alert(
                          "Please enter a valid email. Mail must include @gmail.com"
                        );
                        return;
                      }
                      alert(
                        "Thank you for your interest. We will get back to you soon at mail: " +
                          email
                      );
                    }}
                    style={{
                      boxShadow: "0px 10px 10px 0px rgba(108, 32, 221, 0.15)",
                    }}
                  >
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
            <div className="relative flex" style={{ flex: 1 }}>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <Image
                  src={"/doctor.png"}
                  alt="doctors"
                  height={547}
                  priority
                  width={734}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="second_ bg-primary-focus">
        <div className=" flex flex-col items-center">
          <h2 className="subheader">OUR DOCTORS</h2>
          <h1 className="header">
            Our <span className="qualified">highly qualified</span> doctors
          </h1>
          <div className="carousel rounded-box">
            <div className="carousel-item">
              <img src={Image} alt="Burger" />
            </div>
            <div className="carousel-item">
              <img src={Image} alt="Burger" />
            </div>
            <div className="carousel-item">
              <img
                src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                alt="Burger"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
