import React, { useState } from "react";

function ReleaseDate() {
  const [allReleases, setAllReleases] = useState(true);
  return (
    <div className="filter">
      <h3 className="release-date-heading">Release Dates</h3>
      <label>
        <input
          type="checkbox"
          name="all-releases"
          value="true"
          id="all-releases"
          className="availability-input"
          checked={allReleases ? "checked" : ""}
          onChange={() => setAllReleases(!allReleases)}
        />
        <label htmlFor="all-releases" className="ml">
          Search all Releases?
        </label>
      </label>

      {/* show only when user checks search all releases */}
      {/* <label>
        <input
          type="checkbox"
          name="all-release-countries"
          className="availability-input"
          value="true"
          id="all-release-countries"
        />
        <label htmlFor="all-release-countries" className="ml">
          Search all countries?
        </label>
      </label> */}

      {/* date starts from here */}

      {/* date ends from here */}
    </div>
  );
}

export default ReleaseDate;
