// import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout";
import Home from "./routes/home"
import Profile from "./routes/profile"
import Login from "./routes/login";
import LoadingScreen from "./components/loading-screen";
import CreateAccount from "./routes/create-account";
import { Children, useState } from "react";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "./routes/firebase";
import ProtectedRoute from "./routes/protected-route";
// import ProtectedRoute from "./routes/protected-route";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  }
])

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setLoading] = useState(false);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App
