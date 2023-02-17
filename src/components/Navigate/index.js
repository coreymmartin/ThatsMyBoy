function Nav({ currentCategory, CategoryChange }) {
    return (
        <header className="flex-row px-1">
            <nav className="topnav">

                <a
                    href="#home"
                    onClick={() => CategoryChange("Home")}
                    className={
                        currentCategory === "Home" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>

                <a
                    href="#pictures"
                    onClick={() => CategoryChange("Pictures")}
                    className={
                        currentCategory === "Pictures" ? "nav-link active" : "nav-link"
                    }
                >
                    Pictures
                </a>

                <a
                    href="#reviews"
                    onClick={() => CategoryChange("Reviews")}
                    className={
                        currentCategory === "Reviews" ? "nav-link active" : "nav-link"
                    }
                >
                    Reviews
                </a>

                <a
                    href="#signup"
                    onClick={() => CategoryChange("SignUp")}
                    className={
                        currentCategory === "SignUp" ? "nav-link active" : "nav-link"
                    }
                >
                    SignUp
                </a>


            </nav>
        </header>
    );
}

export default Nav;
