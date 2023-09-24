import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function Home() {
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/");
  }
  return (
    <h1><button onClick={logOut}>Log out</button></h1>
  );
}