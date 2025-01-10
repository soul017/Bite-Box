  import { useContext } from "react";
  import UserContext from "../utils/UserContext";

  
  const Footer = () => {
    const currYear = new Date().getFullYear();
    const {loggedInUser}=useContext(UserContext);
    return (
      <footer className="footer  bg-pink-100  h-7 shadow-md  fixed bottom-0 w-full flex items-center justify-center">
        <p>
        @Copyright &copy; {currYear}, Made with 💗 by <strong>{loggedInUser}</strong>
        </p>
      </footer>
    );
  };
  export default Footer;