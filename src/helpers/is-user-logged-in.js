import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

export default function IsUserLoggedIn({
  user,
  loggedInPath,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return React.cloneElement(children, { user });
        }

        if (user) {
          return (
            <Navigate
              to={{ pathname: loggedInPath, state: { from: location } }}
            />
          );
        }
        return null;
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
