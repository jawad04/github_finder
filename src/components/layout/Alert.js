import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
// import PropTypes from "prop-types";

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div>
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      </div>
    )
  );
}

// Alert.propTypes = {
//   alert: PropTypes.object.isRequired
// };

export default Alert;
