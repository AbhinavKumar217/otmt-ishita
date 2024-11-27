import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Home from "./pages/Home/Home";
import OurServices from "./pages/Our_services/OurServices";
import FacInn from "./pages/Facillitate_innovation/FacInn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tam from "./pages/Tech_assessment/Tam";
import Tech from "./pages/Technology/Tech";
import Res from "./pages/Resources/Res";
import Coll from "./pages/Collaborate/Coll";
import Eve from "./pages/Events/Eve";
import Cont from "./pages/Contact/Cont";
import Lisc from "./pages/Liscensing/Lisc";
import IPR_man from "./pages/IPR/IPR_man";
import Startup from "./pages/Startup_new/Start";
import Tech_res from "./pages/Tech_Research/Tech_res";
import Tech_tech from "./pages/Tech_Technology/Tech_tech";
import Fac_Res from "./pages/Fac_Resources/Fac_Res";
import Ipr_Table from "./pages/IPR_TABLE/Ipr_Table";

import Up_eve from "./pages/Up_Events/Up_eve";
import All_tech from "./pages/All_Techno/All_tech";
import Stu_Res from "./pages/Student_Resources/Stu_Res";
import Par_Res from "./pages/Partner_Resources/Par_Res";
import Past from "./pages/Past_events/Past";
import Proj from "./pages/Spon_Projects/Proj";

import Login from "./components/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./components/Dashboard";
import ManageTechnology from "./components/ManageTechnology";
import Sidebar from "./components/Sidebar";





function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
      
        <Route path='/' element={<Home />}/> 
        <Route path="/service" element={<OurServices />} />
        <Route path="/facinn" element={<FacInn />} />
        <Route path="/tam" element={<Tam />} />
        <Route path="/technology" element={<Tech />} />
        <Route path="/resources" element={<Res />} />
        <Route path="/collaborate" element={<Coll />} />
        <Route path="/events" element={<Eve />} />
        <Route path="/contact" element={<Cont />} />
        <Route path="/Lisc" element={<Lisc />} />
        <Route path="/Ipr" element={<IPR_man />} />
        <Route path="/Startup" element={<Startup />} />
        <Route path="/Tech_res" element={<Tech_res />} />
        <Route path="/Tech_tech" element={<Tech_tech />} />
        <Route path="/Fac_Res" element={<Fac_Res />} />
        <Route path="/Ipr_Table" element={<Ipr_Table />} />
        <Route path="/all_tech" element={<All_tech />} />
        <Route path="/up_eve" element={<Up_eve />} />
        <Route path="/stu_res" element={<Stu_Res />} />
        <Route path="/par_res" element={<Par_Res />} />
        <Route path="/Past" element={<Past />} />
        <Route path="/Proj" element={<Proj />} />


        <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="manage-technology" element={<ManageTechnology />} />
                    <Route path="sidebar" element={<Sidebar />} />


                    </Route>




      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
