import React from "react";
import "./Home.css";
import CustomButton from "../../CustomButton/CustomButton";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
function Home() {
  return (
    <div>
      <div className="custombutton">
        <Link to="/banner">
          <CustomButton backgroundcolor=" #008000" buttonText="Add Banner" />
        </Link>
      </div>
      <header className="bg-gray-200 text-black p-4 mt-10">
        <div className="flex ">
          <h1 className="text-lg font-semibold ml-2">image</h1>
          <h1 className="text-lg font-semibold ml-20">heading</h1>
          <h1 className="text-lg font-semibold ml-20">description</h1>
          <h1 className="text-lg font-semibold ml-20">status</h1>
        </div>
      </header>
      <div className="w-700 h-200 bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-between mt-4">
        <img
          src={logo}
          alt="Card Image"
          className="w-1/8 h-full object-cover rounded-md"
        />
        <h2 className=" mb-4 mt-2">Card Heading</h2>
        <p className="text-gray-600 mb-4 mt-2">Card Description goes here.</p>
        <button className="bg-red-500 text-white px-4 py-1 rounded-md mr-2">
          inActive
        </button>
        <span className="text-white bg-blue-500 p-1 ">
          <i className="fas fa-edit"></i>
        </span>
        <span className=" bg-red-500 text-gray-500 p-0.5">
          <i className="fas fa-trash-alt text-white"></i>
        </span>
      </div>
      <div className="w-700 h-200 bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-between mt-4">
        <img
          src={logo}
          alt="Card Image"
          className="w-1/8 h-full object-cover rounded-md"
        />
        <h2 className=" mb-4 mt-2">Card Heading</h2>
        <p className="text-gray-600 mb-4 mt-2">Card Description goes here.</p>
        <button className="bg-green-500 text-white px-4 py-1 rounded-md mr-2">
          Active
        </button>
        <span className="text-white bg-red-500 p-1 ">
          <i className="fas fa-edit"></i>
        </span>
        <span className=" bg-red-500 text-gray-500 p-0.5">
          <i className="fas fa-trash-alt text-white"></i>
        </span>
      </div>
    </div>
  );
}

export default Home;
