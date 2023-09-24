import { GithubAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import styled from "styled-components"
import { auth } from "../routes/firebase";
import { useNavigate } from "react-router-dom";

export default function GitHubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  const Button = styled.span`
    cursor: pointer;
    margin-top: 50px;
    background-color: white;
    width: 100%;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  `;
  const Logo = styled.img`
    height: 25px;
  `;
  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg" />
      Continue with GitHub
    </Button>
  )
}