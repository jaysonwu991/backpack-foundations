import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm5.56-12.44a1.5 1.5 0 0 0-2.12-2.12l-4.94 4.939-1.94-1.94a1.5 1.5 0 0 0-2.12 2.122l3 3a1.5 1.5 0 0 0 2.12 0l6-6z" /></svg>);