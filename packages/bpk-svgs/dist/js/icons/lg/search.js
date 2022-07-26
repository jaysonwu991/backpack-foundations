import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM2 10.5a8.5 8.5 0 1 1 15.176 5.262l4.531 4.53a1 1 0 0 1-1.414 1.415l-4.531-4.531A8.5 8.5 0 0 1 2 10.5z" /></svg>);