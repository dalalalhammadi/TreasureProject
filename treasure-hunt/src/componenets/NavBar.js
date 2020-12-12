import React from "react";
import authStore from "../stores/authStore";
import SigninButton from "../buttons/SigninButton";
import SignupButton from "../buttons/SignupButton";
import { BiLogInCircle } from "react-icons/bi";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <SigninButton />
          <SignupButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
//     <div>
//       {authStore.user ? (
//         <>
//           <p> Hi , {authStore.user.username} </p>
//           <BiLogInCircle />
//         </>
//       ) : (
//         <>
//           <SigninButton />
//           <SignupButton />
//         </>
//       )}
//     </div>
//   );
// };
