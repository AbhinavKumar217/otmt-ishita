import React from "react";
import Sidebar from "../../components/Sidebar"; // Ensure Sidebar component exists in this path
import Dashboard from "../../components/Dashboard"; // Ensure Dashboard component exists in this path
import { Outlet } from "react-router-dom";
import "./AdminDashboard.css";
 // Assuming you have the styles defined for this file

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            {/* Sidebar Section */}
            <aside className="sidebar">
                <Sidebar />
            </aside>

            {/* Main Content Section */}
            <div className="main-content">
                {/* You can add a Dashboard component here if needed */}
                <Dashboard />
                {/* Outlet for dynamic content */}
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
