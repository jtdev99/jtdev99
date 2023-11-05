import { Link, NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaUser, FaBlogger } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            {/* Logo */}
            <div className="sidebar-logo">
                <Link
                    className="text-4xl font-bold text-black dark:text-white"
                    to="/"
                >
                    Jt
                </Link>
            </div>
            {/* Nav */}
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <NavLink className="sidebar-link" to="/" end>
                            <span className="sidebar-link-icon">
                                <GoHomeFill />
                            </span>
                            <span className="sidebar-link-text">home</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className="sidebar-link" to="/about">
                            <span className="sidebar-link-icon">
                                <FaUser />
                            </span>
                            <span className="sidebar-link-text">about</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className="sidebar-link" to="/blog">
                            <span className="sidebar-link-icon">
                                <FaBlogger />
                            </span>
                            <span className="sidebar-link-text">blog</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className="sidebar-link" to="/contact">
                            <span className="sidebar-link-icon">
                                <MdContacts />
                            </span>
                            <span className="sidebar-link-text">contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
