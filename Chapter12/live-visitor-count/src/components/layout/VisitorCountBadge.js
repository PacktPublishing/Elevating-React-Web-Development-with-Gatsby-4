import React from "react";
import { useStats } from "../../context/stats-context";

const VisitorCountBadge = () => {
  const { liveVisitorCount, connected } = useStats();
  return (
    <p className={`${connected? "bg-blue-200" :"bg-red-200"} px-2 py-1 inline-block rounded`}>
     Visitors: {liveVisitorCount}
    </p>
  );
};

export default VisitorCountBadge;
