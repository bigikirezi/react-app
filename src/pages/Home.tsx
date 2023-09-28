import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="flex gap-4 justify-center items-center min-h-[70vh] ">
        <div className="text-center">
          <h2 className="text-5xl mb-5 font-bold">Shop with Us as quick as possible</h2>
          <p className="mb-5">The price is the customers answer 😎</p>
        <NavLink
          to="/products"
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          
        >
         Shop now
        </NavLink> 
        </div>
      </div>
  );
}
export default Home;
