import React, { useState, useEffect } from "react";
import { TablePagination } from "@mui/material";
import "./all_tech.css";
import { apiFetch } from "../../util/API";
import Cookies from "js-cookie"; 

const rowsPerPageOptions = [5, 10, 15];

const All_tech = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

    const [trlSearch, setTrlSearch] = useState("");
    const [sectorSearch, setSectorSearch] = useState("");
    const [nameSearch, setNameSearch] = useState("");
    const [user, setUser] = useState(null);
    const [table_data, setTable_data] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiFetch("/api/tech");
                setTable_data(data);
                console.log("Fetched Data:", data);
            } catch (error) {
                console.error("Error fetching table data:", error);
            }
        };

        const storedUser = Cookies.get("user");  // Assuming user data is stored in 'user' cookie
        if (storedUser) {
            setUser(JSON.parse(storedUser));  // Parse and set the user if exists
        }

        fetchData();
    }, []);

    const filteredData = table_data.filter(
        (tech) =>
            (trlSearch === "" || tech.trl === parseInt(trlSearch)) &&
            (sectorSearch === "" ||
                tech.sector.toLowerCase().includes(sectorSearch.toLowerCase())) &&
            (nameSearch === "" ||
                tech.name.toLowerCase().includes(nameSearch.toLowerCase()))
    );

    const indexOfLastItem = page * rowsPerPage + rowsPerPage;
    const indexOfFirstItem = page * rowsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleTrlSearchChange = (event) => {
        setTrlSearch(event.target.value);
        setPage(0);
    };

    const handleSectorSearchChange = (event) => {
        setSectorSearch(event.target.value);
        setPage(0);
    };

    const handleNameSearchChange = (event) => {
        setNameSearch(event.target.value);
        setPage(0);
    };

    const handleDelete = async (objectId) => {
        try {
            await apiFetch(`/api/tech/${objectId}`, { method: "DELETE" });
            setTable_data((prevData) => prevData.filter((item) => item.objectId !== objectId));
            window.location.reload();
            console.log(`Deleted tech with ID: ${objectId}`);
        } catch (error) {
            console.error(`Error deleting tech with ID ${objectId}:`, error);
        }
    };

    const handleUpdate = async (objectId) => {
        const currentTech = table_data.find((item) => item.objectId === objectId);

        if (!currentTech) {
            console.error(`No tech found with ID ${objectId}`);
            return;
        }

        const updatedDetails = {
            objectId: currentTech.objectId,
            id: currentTech.id,
            name: prompt("Enter new tech name:", currentTech.name) || currentTech.name,
            detail: prompt("Enter new tech detail:", currentTech.detail) || currentTech.detail,
            trl: parseInt(prompt("Enter new TRL value:", currentTech.trl), 10) || currentTech.trl,
            sector: prompt("Enter new sector:", currentTech.sector) || currentTech.sector,
            tech: prompt("Enter new technology:", currentTech.tech) || currentTech.tech,
            link: prompt("Enter new link:", currentTech.link) || currentTech.link,
        };

        try {
            const updatedData = await apiFetch(`/api/tech/${objectId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedDetails),
            });

            setTable_data((prevData) =>
                prevData.map((item) => (item.objectId === objectId ? { ...item, ...updatedDetails } : item))
            );
            window.location.reload();
            console.log(`Updated tech with ID: ${objectId}`, updatedData);
        } catch (error) {
            console.error(`Error updating tech with ID ${objectId}:`, error);
        }
    };

    const handleAddTech = async () => {
        const newTech = {
            id: parseInt(prompt("Enter tech id:"), 10),
            name: prompt("Enter tech name:"),
            detail: prompt("Enter tech details:"),
            trl: parseInt(prompt("Enter TRL value:"), 10),
            sector: prompt("Enter sector:"),
            tech: prompt("Enter technology:"),
            link: prompt("Enter link:"),
        };

        try {
            const addedTech = await apiFetch(`/api/tech`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTech),
            });

            setTable_data((prevData) => [...prevData, addedTech]);
            window.location.reload();
            console.log("Added new tech:", addedTech);
        } catch (error) {
            console.error("Error adding new tech:", error);
        }
    };

    return (
        <div className="all">
            <h1 className="techno_title">All Technology</h1>

            <div className="search-bar">
                <input
                    type="number"
                    placeholder="Search by TRL"
                    value={trlSearch}
                    onChange={handleTrlSearchChange}
                />
                <input
                    type="text"
                    placeholder="Search by Sector"
                    value={sectorSearch}
                    onChange={handleSectorSearchChange}
                />
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={nameSearch}
                    onChange={handleNameSearchChange}
                />
            </div>

            <table className="techno_table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Tech Name</th>
                        <th>Tech Details</th>
                        <th>TRL</th>
                        <th>Sector</th>
                        <th>Technology</th>
                        <th>More Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((tech, index) => (
                        <tr key={tech.objectId}>
                          {console.log(tech)}
                            <td>{tech.id}</td>
                            <td>{tech.name}</td>
                            <td>{tech.detail}</td>
                            <td>{tech.trl}</td>
                            <td>{tech.sector}</td>
                            <td>{tech.tech}</td>
                            <td>
                                <a href={tech.link}>View</a>
                            </td>
                            <td>
                                <button className="btn btn-update" onClick={() => handleUpdate(tech.objectId)}>Update</button>
                                <button className="btn btn-delete" onClick={() => handleDelete(tech.objectId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <TablePagination
                component="div"
                count={filteredData.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
            />

            {user && (
                <button className="add-tech-button" onClick={handleAddTech}>
                    Add Tech
                </button>
            )}
<br />
            <a href="https://forms.gle/EQZQJUwk25dnm34n9" className="submit-button">
                Submit Your Technology
            </a>
        </div>
    );
};

export default All_tech;