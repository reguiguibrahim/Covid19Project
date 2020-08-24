import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Search() {
  const [nameSearch, setNameSearch] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <input onChange={(e) => setNameSearch(e.target.value)} />
      <Button variant="outline-success">
        <Link to={`/Search/${nameSearch}`} style={{ color: "white", marginTop: "8px" }}>Search</Link>
      </Button>
    </div>
  );
}

export default Search;
