export const Menu = () => {
    return (
        <nav
            className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
            data-spy="affix"
            data-offset-top={510}
        >
            <div className="container">
                <button
                    className="navbar-toggler ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse mt-sm-20 navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item last-item">
                            <a href="#contact" className="nav-link">Freelance</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav brand">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQGDktuZflzItw/profile-displayphoto-shrink_800_800/B56ZPUE7V7GkAc-/0/1734429882726?e=1741219200&v=beta&t=f7_DGrVq5rF7Dbr4w1WxAJ9eYsWNTjHOh6s6EFD1cTk"
                            alt=""
                            className="brand-img"
                        />
                        <li className="brand-txt">
                            <h5 className="brand-title">Willy Kristianto</h5>
                            <div className="brand-subtitle">Tech Lead | Software Engineer</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}