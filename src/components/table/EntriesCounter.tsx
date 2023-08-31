import { useEffect, useState } from "react";

import "./table.css";

export default function EntriesCounter({
  resultLength,
  maxEntries,
  currentPage,
}: Props) {
  // Calculateindex of the first entry displayed
  const [firstEntryIndex, setFirstEntryIndex] = useState(0);

  useEffect(() => {
    if (currentPage == 1) {
      // if no entries, tell "Showing 0"
      if (resultLength == 0) setFirstEntryIndex(0);
      else setFirstEntryIndex(1);
    } else setFirstEntryIndex(currentPage * maxEntries - 9);
  });

  return (
    <div className="flex-start">
      <p>
        Showing <span>{firstEntryIndex} </span>
        to{" "}
        <span>
          {" "}
          {resultLength > currentPage * maxEntries
            ? currentPage * maxEntries
            : resultLength}
        </span>
        <span>
          {" "}
          of <span>{resultLength}</span>{" "}
        </span>{" "}
        entries
      </p>
    </div>
  );
}

interface Props {
  resultLength: number;
  maxEntries: number;
  currentPage: number;
}
