import React from "react";
import Select from "react-select";

const DropDown = ({ popularitySort }) => {
  return (
    <Select
      options={popularitySort}
      className="select-style"
      isSearchable={false}
    />
  );
};
export default DropDown;
