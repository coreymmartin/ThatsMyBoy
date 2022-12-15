function Nav({ currentCategory, CategoryChange }) {
    return (
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a
                            href="#home"
                            onClick={() => CategoryChange("Home")}
                            className={
                                currentCategory === "Home" ? "nav-link active" : "nav-link"
                            }
                        >
                            Home
                        </a>
                    </li>
                    <li className="mx-2">
                        <a
                            href="#pictures"
                            onClick={() => CategoryChange("Pictures")}
                            className={
                                currentCategory === "Pictures" ? "nav-link active" : "nav-link"
                            }
                        >
                            Pictures
                        </a>
                    </li>
                    <li className="mx-2">
                        <a
                            href="#reviews"
                            onClick={() => CategoryChange("Reviews")}
                            className={
                                currentCategory === "Reviews" ? "nav-link active" : "nav-link"
                            }
                        >
                            Reviews
                        </a>
                    </li>
                    <li className="mx-2">
                        <a
                            href="#signup"
                            onClick={() => CategoryChange("SignUp")}
                            className={
                                currentCategory === "SignUp" ? "nav-link active" : "nav-link"
                            }
                        >
                            SignUp
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
