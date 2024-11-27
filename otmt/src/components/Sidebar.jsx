import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>Admin Dashboard</h2>
            <nav>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/manage-technology">Manage Technology</Link>
                
            </nav>
        </aside>
    );
};

export default Sidebar;
