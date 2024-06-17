// import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";
// import clsx from "clsx";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export default function AuthNav() {
//   return (
//     <div>
//       <NavLink className={buildLinkClass} to="/register">
//         Register
//       </NavLink>
//       <NavLink className={buildLinkClass} to="/login">
//         Log In
//       </NavLink>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <nav>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default AuthNav;
