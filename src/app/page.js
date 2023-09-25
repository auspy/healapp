"use client";
import Image from "next/image";
import Colors from "./colors";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row gap-10 mt-20 lg:mt-0">
        <div className="gap-10 flex flex-col justify-center">
          <div className="flex gap-6 flex-col justify-center">
            <div>
              <h1 className="header max-w-[449px]">
                Professional Care with a personal touch
                <span style={{ color: Colors.green }}>.</span>
              </h1>
            </div>
            <p>
              A group of independent surgeons each with different speciality.
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
                placeholder="Enter email"
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
      {/* section 2 */}
      {/* <div className="second_containers bg-primary-focus">
        <div className="containers flex flex-col items-center">
          <h2 className="subheader">OUR DOCTORS</h2>
          <h1 className="header mb-10">
            Our <span className="qualified">highly qualified</span> doctors
          </h1>

          <div className="carousel rounded-box w-[70%]">
            <div className="carousel-item ml-10 ">
              <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
                <div className="cards flex">
                  <figure>
                    <Image
                      id="image"
                      src="/download.jpg"
                      alt="im"
                      height="200"
                      width="200"
                    ></Image>
                  </figure>
                  <div className="cards flex flex-col w-48 justify-center items-center">
                    <h1>MBBS</h1>
                    <h1>MD</h1>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">Dr. Phunsukh Wangdu</h2>
                  <div className="specialization-container flex">
                    <div className="badge badge-secondary mr-2">Spine</div>
                    <div className="badge badge-secondary mr-2">Spine</div>
                  </div>
                  <p>lorem ipsum dolor sit aet god knows what...</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <Image src="/call.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/doc.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/search.png" height="20" width="20"></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ml-10 ">
              <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
                <div className="cards flex">
                  <figure>
                    <Image
                      id="image"
                      src="/download.jpg"
                      alt="im"
                      height="200"
                      width="200"
                    ></Image>
                  </figure>
                  <div className="cards flex flex-col w-48 justify-center items-center">
                    <h1>MBBS</h1>
                    <h1>MD</h1>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">Dr. Phunsukh Wangdu</h2>
                  <div className="specialization-container flex">
                    <div className="badge badge-secondary mr-2">Spine</div>
                    <div className="badge badge-secondary mr-2">Spine</div>
                  </div>
                  <p>lorem ipsum dolor sit aet god knows what...</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <Image src="/call.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/doc.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/search.png" height="20" width="20"></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ml-10 ">
              <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
                <div className="cards flex">
                  <figure>
                    <Image
                      id="image"
                      src="/download.jpg"
                      alt="im"
                      height="200"
                      width="200"
                    ></Image>
                  </figure>
                  <div className="cards flex flex-col w-48 justify-center items-center">
                    <h1>MBBS</h1>
                    <h1>MD</h1>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">Dr. Phunsukh Wangdu</h2>
                  <div className="specialization-container flex">
                    <div className="badge badge-secondary mr-2">Spine</div>
                    <div className="badge badge-secondary mr-2">Spine</div>
                  </div>
                  <p>lorem ipsum dolor sit aet god knows what...</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <Image src="/call.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/doc.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/search.png" height="20" width="20"></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ml-10 ">
              <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
                <div className="cards flex">
                  <figure>
                    <Image
                      id="image"
                      src="/download.jpg"
                      alt="im"
                      height="200"
                      width="200"
                    ></Image>
                  </figure>
                  <div className="cards flex flex-col w-48 justify-center items-center">
                    <h1>MBBS</h1>
                    <h1>MD</h1>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">Dr. Phunsukh Wangdu</h2>
                  <div className="specialization-container flex">
                    <div className="badge badge-secondary mr-2">Spine</div>
                    <div className="badge badge-secondary mr-2">Spine</div>
                  </div>
                  <p>lorem ipsum dolor sit aet god knows what...</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <Image src="/call.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/doc.png" height="20" width="20"></Image>
                    </button>
                    <button className="btn btn-primary">
                      <Image src="/search.png" height="20" width="20"></Image>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
