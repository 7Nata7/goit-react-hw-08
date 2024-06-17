// import { useEffect, lazy } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { Layout } from "./components/Layout";
// import { PrivateRoute } from "./components/PrivateRoute";
// import { RestrictedRoute } from "./components/RestrictedRoute";
// import { refreshUser } from "./redux/auth/operations";
// import { useAuth } from "./hooks";

// const HomePage = lazy(() => import("./pages/Home"));
// const RegisterPage = lazy(() => import("./pages/Register"));
// const LoginPage = lazy(() => import("./pages/Login"));
// const ContactsList = lazy(() => import("./pages/Contacts"));
// const Profile = lazy(() => import("./pages/Profile"));

// export default function App() {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route
//             path="/register"
//             element={
//               <RestrictedRoute
//                 redirectTo="/contacts"
//                 component={<RegisterPage />}
//               />
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <RestrictedRoute
//                 redirectTo="/contacts"
//                 component={<LoginPage />}
//               />
//             }
//           />
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute redirectTo="/login" component={<ContactsList />} />
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <PrivateRoute redirectTo="/login" component={<Profile />} />
//             }
//           />
//         </Route>
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
