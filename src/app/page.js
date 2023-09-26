"use client";
import Image from "next/image";
import Colors from "./colors";
import { useState ,  useEffect } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const mont = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const [email, setEmail] = useState("");

  var heightDim,widthDim;
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if(windowSize.innerWidth > 1280){
    heightDim = 543;
    widthDim = 746;
  }
  else{
    heightDim= 250;
    widthDim = 350;
  }

  console.log(windowSize);
  return (
    <>
      <div className="" style={{
          height: "100vh",
          backgroundColor: Colors.lGreen,
        }}
      >
        <div className="w-full relative">
          <div className="h-full flex flex-col lg:flex-row gap-10 mt-20 lg:mt-0">
            <div className="gap-10 flex flex-col justify-center mx-10">
              <div className="flex gap-6 flex-col justify-center">
                <div>
                  <h1 className="headers max-w-[449px]">
                    Professional Care with a personal touch
                    <span style={{ color: Colors.green }}>.</span>
                  </h1>
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
              <div className="containers flex justify-center items-center w-[100%]">
                <Image
                className="image "
                  src={"/doctor.png"}
                  alt="doctors"
                  height={heightDim}
                  priority
                  width={widthDim}
                  id="doctors"
                />
              </div> 
              
            </div>
          </div>
        </div>
      </div>
    


 
      <div className="second_containers bg-primary-focus" id="second" >
        <div className="containers flex flex-col items-center">
          <h2 className="subheader">OUR DOCTORS</h2>
          <h1 className="header mb-10">
            Our <span className="qualified">highly qualified</span> doctors
          </h1>

          <div className="carousel rounded-box w-[70%]">
          <div className="carousel-item ml-10 ">
              <div className="card sm:w-64 lg:w-96 bg-base-100 shadow-xl overflow-hidden">
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
              <div className="card sm:w-64 lg:w-96 bg-base-100 shadow-xl overflow-hidden">
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
              <div className="card sm:w-64 lg:w-96 bg-base-100 shadow-xl overflow-hidden">
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
              <div className="card sm:w-64 lg:w-96 bg-base-100 shadow-xl overflow-hidden">
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
              <div className="card sm:w-64 lg:w-96 bg-base-100 shadow-xl overflow-hidden">
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
      </div>





      <div className="third_containers" id="third">
        <div className="containers flex flex-col items-center my-10">
          <p>Our Specialization</p>
          <h1 className="header sm:mb-20">Every surgeon has a speciality</h1>


          <div className="card lg:card-side w-[75%] sm:w-[50%] shadow-xl" id="details">
  <figure><img src="/shoulder.jpg" alt="Album"/></figure>
  <div className="card-body lg:w-[50%]">
    <h2 className="card-title">Shoulder and Elbow Pain</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Specialist</button>
    </div>
  </div>
</div>
<div className="card lg:card-side w-[75%]  sm:w-[50%] shadow-xl" id="details">
  <figure><img src="/shoulder.jpg" alt="Album"/></figure>
  <div className="card-body lg:w-[50%]">
    <h2 className="card-title">Shoulder and Elbow Pain</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Specialist</button>
    </div>
  </div>
</div>
<div className="card lg:card-side w-[75%] sm:w-[50%] shadow-xl" id="details">
  <figure><img src="/shoulder.jpg" alt="Album"/></figure>
  <div className="card-body lg:w-[50%]">
    <h2 className="card-title">Shoulder and Elbow Pain</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Specialist</button>
    </div>
  </div>
</div>
<div className="card lg:card-side w-[75%] sm:w-[50%] shadow-xl" id="details">
  <figure><img src="/shoulder.jpg" alt="Album"/></figure>
  <div className="card-body lg:w-[50%]">
    <h2 className="card-title">Shoulder and Elbow Pain</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Specialist</button>
    </div>
  </div>
</div>
<div className="card lg:card-side w-[75%]  sm:w-[50%] shadow-xl" id="details">
  <figure><img src="/shoulder.jpg" alt="Album"/></figure>
  <div className="card-body lg:w-[50%]">
    <h2 className="card-title">Shoulder and Elbow Pain</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Specialist</button>
    </div>
  </div>
</div>










        </div>

        
        
      </div>





      <div className="fourth_container bg-primary-focus flex flex-col items-center" id="fourth">
        <h1 className="header my-10">Our Patients Reviews</h1>
      <div className="w-[75%] h-[100%] carousel rounded-box flex items-center justify-center lg:ml-40 ">
      <div className="carousel-item w-full">
    <div className="card w-[75%] bg-base-100 shadow-xl" id="cards">
  <div className="card-body">
  <div className="details flex">
        <figure><Image className= "mask mask-circle"src="/old.jpg" height={100} width={100} alt="old"></Image></figure>
        <div className="detail flex flex-col w-48  justify-center">
          <h1 >Vijaya Shankar</h1>
      
        </div>
      </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

  </div>
</div>
  </div> 
  <div className="carousel-item w-full">
    <div className="card w-[75%] bg-base-100 shadow-xl" id="cards">
  <div className="card-body">
  <div className="details flex">
        <figure><Image className= "mask mask-circle"src="/old.jpg" height={100} width={100} alt="old"></Image></figure>
        <div className="detail flex flex-col w-48 justify-center">
          <h1 >Vijaya Shankar</h1>
        </div>
      </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

  </div>
</div>
  </div> 
  <div className="carousel-item w-full">
    <div className="card w-[75%] bg-base-100 shadow-xl" id="cards">
  <div className="card-body">
  <div className="details flex">
        <figure><Image className= "mask mask-circle"src="/old.jpg" height={100} width={100} alt="old"></Image></figure>
        <div className="detail flex flex-col w-48 justify-center ">
          <h1 >Vijaya Shankar</h1>
      
        </div>
      </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

  </div>
</div>
  </div>
  <div className="carousel-item w-full">
    <div className="card w-[75%] bg-base-100 shadow-xl" id="cards">
  <div className="card-body">
  <div className="details flex">
        <figure><Image className= "mask mask-circle"src="/old.jpg" height={100} width={100} alt="old"></Image></figure>
        <div className="detail flex flex-col w-48  justify-center">
          <h1 >Vijaya Shankar</h1>
      
        </div>
      </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

  </div>
</div>
  </div> 
  <div className="carousel-item w-full">
    <div className="card w-[75%] bg-base-100 shadow-xl" id="cards">
  <div className="card-body">
  <div className="details flex">
        <figure><Image className= "mask mask-circle"src="/old.jpg" height={100} width={100} alt="old"></Image></figure>
        <div className="detail flex flex-col w-48 justify-center">
          <h1 >Vijaya Shankar</h1>
        </div>
      </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

  </div>
</div>
  </div> 



</div>
      </div>



      <div className="fifth_container">
      <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <h1>HEAL<span style={{ color: Colors.green }}>PAL</span></h1>
    <p>ACME Hospital Ltd.<br/>Providing reliable healthcare</p>
  </aside> 
  <nav>
    <header className="footer-title">Developers</header> 
    <a className="link link-hover">Kshitij </a> 
    <a className="link link-hover">Satvik</a> 

  </nav> 
  <nav>
    <header className="footer-title">ML Developers</header> 
    <a className="link link-hover">Mokksh</a> 
    <a className="link link-hover">Vanshika</a> 
    <a className="link link-hover">Eesha</a> 
    <a className="link link-hover">Ishita</a>
  </nav> 
  <nav>
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
     
      </div>
    </>

  );
}
