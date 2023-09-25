"use client";
import Colors from "../colors";

const page = () => {
  return (
    <div className="flex flex-col mt-20 lg:mt-[120px]">
      <h1 className="text-4xl text-center">Book an Appointment</h1>
      <div className="form-control w-full">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            maxLength={50}
            style={{ backgroundColor: Colors.lGreen }}
            type="text"
            placeholder="Enter Name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            maxLength={50}
            style={{ backgroundColor: Colors.lGreen }}
            type="text"
            placeholder="Enter Phone"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input
            maxLength={50}
            style={{ backgroundColor: Colors.lGreen }}
            type="text"
            placeholder="Enter Message"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            maxLength={50}
            style={{ backgroundColor: Colors.lGreen }}
            type="date"
            placeholder="Enter Date"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Time</span>
          </label>
          <input
            maxLength={50}
            style={{ backgroundColor: Colors.lGreen }}
            type="time"
            placeholder="Enter Time"
            className="input input-bordered w-full"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            alert("Appointment booked");
          }}
          style={{
            boxShadow: "0px 10px 10px 0px rgba(108, 32, 221, 0.15)",
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default page;
