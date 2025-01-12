/** useMemo , useCallBack hooks for memoization and callback function */

import React, {  useMemo } from "react";

// In ExpCal.js
const ExpCal = ({ num }) => {
    // Use num here
    const compute = useMemo(() => num * 2, [num])
    return (
        // Your component JSX
        <div>
            <h1>{compute}</h1>
        </div>
    );
};

export default ExpCal;
