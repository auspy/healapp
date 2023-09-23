import Image from 'next/image'

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
  <h1 className='header'>with a personal touch</h1>
  <h2 className='full'>.</h2>
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
  <h1 className='header'>Our <span className='qualified'>highly qualified</span> doctors</h1>
  <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src= {Image} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={Image} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
  </div>
</div>

  
  </div>
  

</div>
    </>
  )
}