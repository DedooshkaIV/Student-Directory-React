import logo from "../assets/logo(1).png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="StudentPortal Logo"
                        width="40"
                        height="40"
                        className="d-inline-block align-text-center me-2"
                    />
                    StudentPortal
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMenu">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Students</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Reports</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav ms-auto me-lg-3 mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Settings
                            </a>

                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                        />

                        <button className="btn btn-primary" type="submit">
                            Search
                        </button>
                    </form>

                </div>

            </div>
        </nav>
    );

}

export default Navbar;