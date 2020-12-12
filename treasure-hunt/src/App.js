import SigninButton from "./buttons/SigninButton";
import SignupButton from "./buttons/SignupButton";
import { BiLogInCircle } from "react-icons/bi";
import authStore from "./stores/authStore";

function App() {
  return (
    <div className="App">
      {authStore.user ? (
        <>
          <p> Hi , {authStore.user.username} </p>
          <BiLogInCircle />
        </>
      ) : (
        <>
          <SigninButton />
          <SignupButton />
        </>
      )}
    </div>
  );
}

export default App;
