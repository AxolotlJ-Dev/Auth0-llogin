import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
// import LoginButton from "./Components/LoginButton";
// import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";
import LoginId from "./Components/LoginId";

function App() {

  const {  isLoading } = useAuth0(); // isAuthenticated,

  if(isLoading) return <h1> Loading... </h1>

  return (
    <div className="App">
      <LoginId />
      <Profile />
      {/* {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      } */}
    </div>
  );
}

export default App;
