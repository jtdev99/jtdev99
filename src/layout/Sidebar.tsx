import { Link, NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaUser, FaBlogger } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside>
            {/* Logo */}
            <div className="sidebar-logo">
                <Link to="/">Jt</Link>
            </div>
            {/* Nav */}
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <NavLink to="/" end>
                            <GoHomeFill />
                            <span className="capitalize">home</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to="/about">
                            <FaUser />
                            <span className="capitalize">about</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to="/blog">
                            <FaBlogger />
                            <span className="capitalize">blog</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to="/contact">
                            <MdContacts />
                            <span className="capitalize">contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
