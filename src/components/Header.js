import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div className="flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black/80 to-transparent z-10 h-auto w-full">
      {/* Main logo section with gradient background */}
      <img src="./images/logo.png" alt="logo" className="w-48" />

      {user && (
        /* Sign out section */
        <div className="flex p-2 m-2 items-center gap-4">
          <img src={user.photoURL} alt="user" className="w-12 h-12 rounded-full" />
          <p className="text-white font-medium">{user.displayName}</p>
          <button
            onClick={handleSignOut}
            className="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
