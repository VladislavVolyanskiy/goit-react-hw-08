import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { refreshUser } from "../../redux/auth/operations";

import "./App.css";

import HomePage from "../../pages/HomePage";
import RegistrationPage from '../../pages/RegistrationPage'
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import Layout from "../Layout/Layout";


function App() {

  const dispatch = useDispatch(refreshUser);
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route element={<RestrictedRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<div>404</div>} />
          </Route>

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
