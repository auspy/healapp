import Image from "next/image"

export default function Home(){
  return (
    <>
    <div className='containers '>
 <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About us</a></li>
        <li><a>Surgeons</a></li>
        <li><a>Specialities</a></li>
        <li><a>Reviews</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">LA COLLINE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
        <li><a>About us</a></li>
        <li><a>Surgeons</a></li>
        <li><a>Specialities</a></li>
        <li><a>Reviews</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Talk To Us </a>
  </div>
</div>
<div className='containers flex'>
<div className='containers flex flex-col justify-center'>
  <h1 className='header'>Professional Care</h1>
  <div className='flex'>
  <h1 className='header'>with a personal touch<span className="full">.</span></h1>
  
  </div> 
  <p>A group of independent surgeons each with different speciality.</p>
  <div className='buttons flex'>
    <button className='btn btn-primary'>Get Free Consultation</button>
    <button className='btn btn-outline btn-primary'>Book Appointment</button>

  </div>
</div>
<div className='containers flex flex-col justify-center'>
  <h1>Here Image will come</h1>
  <h2>for fun sake</h2>
</div>
 
</div>
</div>

<div className='second_containers bg-primary-focus'>
  <div className='containers flex flex-col items-center'>
  <h2 className='subheader'>OUR DOCTORS</h2>
  <h1 className='header mb-10'>Our <span className='qualified'>highly qualified</span> doctors</h1>
 

  <div className="carousel rounded-box w-[70%]">

   

  <div className="carousel-item ml-10 ">
  <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
    <div className="cards flex">
    <figure><Image id= "image" src="/download.jpg" alt="im" height="200" width="200"></Image></figure>
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
    <button className="btn btn-primary"><Image src="/call.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/doc.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/search.png" height="20" width="20"></Image></button>
    </div>
  </div>
</div>
  
  </div> 
  <div className="carousel-item ml-10 ">
  <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
    <div className="cards flex">
    <figure><Image id= "image" src="/download.jpg" alt="im" height="200" width="200"></Image></figure>
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
    <button className="btn btn-primary"><Image src="/call.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/doc.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/search.png" height="20" width="20"></Image></button>
    </div>
  </div>
</div>
  
  </div> 
  <div className="carousel-item ml-10 ">
  <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
    <div className="cards flex">
    <figure><Image id= "image" src="/download.jpg" alt="im" height="200" width="200"></Image></figure>
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
    <button className="btn btn-primary"><Image src="/call.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/doc.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/search.png" height="20" width="20"></Image></button>
    </div>
  </div>
</div>
  
  </div> 
  <div className="carousel-item ml-10 ">
  <div className="card w-96 bg-base-100 shadow-xl overflow-hidden">
    <div className="cards flex">
    <figure><Image id= "image" src="/download.jpg" alt="im" height="200" width="200"></Image></figure>
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
    <button className="btn btn-primary"><Image src="/call.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/doc.png" height="20" width="20"></Image></button>
    <button className="btn btn-primary"><Image src="/search.png" height="20" width="20"></Image></button>
    </div>
  </div>
</div>
  
  </div> 
 
</div>
  
  </div>
  

</div>
    </>
  )
}