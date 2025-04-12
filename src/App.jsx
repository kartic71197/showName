import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [showName, setShowName] = useState(false);

  return (
    <>
      <h1>Full Name Display</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowName(true);
        }}
      >
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          id="first_name"
          value={name.firstName}
          onChange={(e) => {
            setShowName(false);
            setName((prev) => ({ ...prev, firstName: e.target.value }));
          }}
        />
        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          id="last_name"
          value={name.lastName}
          onChange={(e) => {
            setShowName(false);
            setName((prev) => ({ ...prev, lastName: e.target.value }));
          }}
        />
        <button type="submit">Submit</button>
      </form>

      {showName && (
        <div>
          <p>
            Full name: {name.firstName} {name.lastName}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
