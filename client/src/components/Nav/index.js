import React from "react";

function Nav() {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
      <a className="navbar-brand" href="/save">
        Save
      </a>
    </nav>
    </React.Fragment>
  );
}

export default Nav;
