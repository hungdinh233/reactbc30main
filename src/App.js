import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-light text-dark nav-link" : "nav-link text-white"
            }
            style={({ isActive }) => (isActive ? { borderRadius: "5px" } : {}) }
            to=""
          >
            CYBERSOFT
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-light text-dark nav-link" : "nav-link"
                  }
                  to="/home"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-light text-dark nav-link" : "nav-link"
                  }
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-light text-dark nav-link" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-light text-dark nav-link" : "nav-link"
                  }
                  to="/reactform"
                >
                  React Form
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ minHeight: 600 }}>
        <Outlet />
      </div>
      <footer className="bg-dark text-white">Footer</footer>
    </div>
  );
}

export default App;
