import toast from "react-hot-toast";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const { pathname } = useLocation();
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const onLogout = () => {
    localStorage.removeItem(storageKey);

    setTimeout(() => {
      location.replace(pathname);
      toast.success("Logged out successfully", {
        position: "bottom-center",
        duration: 1500,
        style: {
          backgroundColor: "black",
          color: "white",
          width: "fit-content",
        },
      });
    }, 1500);
  };

  return (
    <nav className="max-w-lg mx-auto mt-7 mb-20 px-3 py-5 rounded-md bg-indigo-800 ">
      <ul className="flex items-center justify-between">
        <li className="text-white duration-200 font-semibold text-lg">
          <NavLink to="/">Home</NavLink>
        </li>
        {userData ? (
          <div className="text-white space-x-2 flex items-center justify-center">
            <li className="text-white duration-200 text-md">
              <NavLink to="/Profile">Profile</NavLink>
            </li>
            <li className="text-white duration-200 text-md">
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <Button
              className="bg-indigo-500 cursor-pointer"
              size={"sm"}
              onClick={onLogout}
            >
              log out
            </Button>
          </div>
        ) : (
          <p className="flex items-center space-x-3">
            <li className="text-black duration-200 font-semibold text-lg">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="text-black duration-200 font-semibold text-lg">
              <NavLink to="/login">Login</NavLink>
            </li>
          </p>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
