import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children, ...rest }) {
  // react router dom v-6
  return { ...rest } ? (
    React.cloneElement(children, { user })
  ) : (
    // eslint-disable-next-line no-restricted-globals
    <Navigate to={{ pathname: ROUTES.LOGIN, state: { from: location } }} />
  );
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};





 //   react router dom v-5
  // <Route
  //   {...rest}
  //   render={({ location }) => {
  //     //   if user exit show other route
  //     if (user) {
  //         return React.cloneElement(children, { user });
  //     }

  //     // if user doesnt exit redirect to login
  //     if (!user) {
  //       return (
  //         <Navigate
  //           to={{ pathname: ROUTES.LOGIN, state: { from: location } }}
  //         />
  //       );
  //     }
  //     return null;
  //   }}
  // />