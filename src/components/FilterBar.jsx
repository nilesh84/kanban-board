import React, { useState } from "react";
import { ReactComponent as DisplayIcon } from "../images/display.svg";
import { ReactComponent as ArrowIcon } from "../images/down.svg";

const FilterBar = () => {
  const [popup, setPopup] = useState(false);

  const popupOpen = () => {
    setPopup(!popup);
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar-box">
        <div
          className="filter-display-button inline-flex align-center"
          onClick={popupOpen}
        >
          <DisplayIcon className="filter-display m-r-8" />
          <span className="font-14 font-weight-600">Display</span>
          <ArrowIcon className="filter-down" />
        </div>

        {popup && (
          <div className="filter-popup flex flex-column">
            <div className="flex align-center justify-between m-b-10">
              <label
                className="filter-label font-14 font-weight-600"
                htmlFor="grouping"
              >
                Grouping:
              </label>
              <select id="grouping" className="filter-select">
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="flex align-center justify-between">
              <label
                className="filter-label font-14 font-weight-600"
                htmlFor="sorting"
              >
                Ordering:
              </label>
              <select id="sorting" className="filter-select">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
