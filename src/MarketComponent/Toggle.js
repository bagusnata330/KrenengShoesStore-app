import React from "react";

function Toggle() {
  return (
    <div className="row Normal-mode-align">
      <div>
        <h5
          style={{
            marginLeft: "2px",
            marginRight: "5px",
            marginTop: "2px",
            marginBottom: "2px",
          }}
        >
          Dark Mode
        </h5>
      </div>
      <div className="toggle-switch toggle-align">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </div>
  );
}

export default Toggle;
