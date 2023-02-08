import { useState } from "react";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header d-flex align-items-center justify-content-between">
      {/* title */}
      <div className="header-title">Pokhara Hotel</div>
      <div className="menu-list">
        <ul>
          <ol>Home</ol>
          <ol>About</ol>
          <ol>Contact</ol>
          <ol>About</ol>
          <ol>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
