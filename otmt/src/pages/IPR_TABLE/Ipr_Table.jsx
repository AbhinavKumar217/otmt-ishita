import React, { useState } from 'react';
import { TablePagination } from '@mui/material';
import './Ipr_Table.css';

const rowsPerPageOptions = [5, 10, 15]; // Options for the number of rows per page

const IPRTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const iprData = [
    { sNo: 1, title: 'Photoreceiver enabled smart phone', appNo: '201911032080', inventors: 'Dr. Abhijeet Mitra, Prof. Anand Srivastava, Prof. Visveshwaran, Arshan Zaman', phase: 'National' },
    { sNo: 2, title: 'A NFC POWERED SMART WEARABLE HYGIENE PRODUCT', appNo: '1/45340/2019-DEL', inventors: 'Dr. Aman Parnami & Manideepa Mukherjee', phase: 'National' },
    { sNo: 3, title: 'Gene Panel for Detecting the Presence of Blood based Genetic Markers of Non small Lung Cancer', appNo: 'TEMP/E-1/46638/2020-DEL', inventors: 'Dr. Debarka Sengupta, Chitrita Goswami & Smriti Chawla', phase: 'National' },
    { sNo: 4, title: 'Hybrid Cache Coherence Protocol for Multicore Processors', appNo: 'TEMP/E-1/60400/2020-DEL', inventors: 'Harsha Narayan Gade and Dr. Sujay Deb', phase: 'National' },
    { sNo: 5, title: 'A Device and System for Biometric Template Protection', appNo: '1917/DEL/2015', inventors: 'Donghoon Chang, Surabhi Garg, Neha Gupta', phase: 'National' },
    { sNo: 6, title: 'Touchless Blood Pressure and Heart Rate Estimation', appNo: '201611028804', inventors: 'Monika Jain, A V Subramanyam, Sujay Deb and Angshul Majumdar', phase: 'National' },
    { sNo: 7, title: 'Smartphone Based Health Monitoring Using the Inbuilt Camera', appNo: '201611028803', inventors: 'Monika Jain, Sujay Deb and Angshul Majumdar', phase: 'National' },
    { sNo: 8, title: 'Escort Bot System and Method', appNo: '201711013219', inventors: 'Pushpendra Singh, Shubham Sinha; Kartik Maji; Tarunvar Aggarwal', phase: 'National' },
    { sNo: 9, title: 'System and Method for Minimal Residual Disease (MRD) Detection in Acute Lymphoblastic Leukemia', appNo: '201611031953', inventors: 'Dr. Anubha Gupta, Dr. Ritu Gupta, Naushad Ansari', phase: 'National' },
    { sNo: 10, title: 'WEARABLE DEVICE AND METHOD OF SLAYING INSECTS', appNo: '201811025230', inventors: 'Himanshu Chandana (Student) & Aman Parnami', phase: 'National' },
    { sNo: 11, title: 'Wearable Device and Method of Operating the Same to Perform Multiple Functions Seamlessly', appNo: '201811025231', inventors: 'Sagar Khurana (Student), Paras Jain (Student), Harshit Verma (Student) & Aman Parnami', phase: 'National' },
    { sNo: 12, title: 'A system and method for energy harvesting during analog signal sampling', appNo: '201811008597', inventors: 'Neha Jain, Dr. Vivek Bohara, Dr. Anubha Gupta', phase: 'National' },
    { sNo: 13, title: 'A method and system for Multi-frequency DC- Feed Network Design', appNo: '201611028802', inventors: 'M.A. Maktoomi & M.S. Hashmi', phase: 'National' },
    { sNo: 14, title: 'Generic tri-frequency impedance transformation network for RF/microwave active and passive circuits, components and systems', appNo: '201611022038', inventors: 'M.A. Maktoomi & M.S. Hashmi', phase: 'National' },
    { sNo: 15, title: 'Capacitive energy harvester from ac power lines', appNo: '201811033277', inventors: 'Manoj Gulati, Dr. Amarjeet Singh, Prof. Shwetak N. Patel', phase: 'National' },
    { sNo: 16, title: 'Non-Invasive Method and system for Blood pressure & Heart rate estimation using ECG and Photoplethysmogram (PPG)', appNo: '201711016814', inventors: 'Monika Jain, Sujay Deb and Angshul Majumdar', phase: 'National' },
    { sNo: 17, title: 'Finding Rare Samples in a Given Dataset', appNo: '201811042117', inventors: 'Dr. Debarka, Ashi Jindal, Prashant Gupta, Prof. Jayadeva', phase: 'National' },
    { sNo: 18, title: 'Method and System for Post Silicon Validation', appNo: '201911006527', inventors: 'Dr. Sujay, Siddharth Sankar Rout', phase: 'National' },
    { sNo: 19, title: 'Eyewear, System and Method to Facilitate Reading for the Visually Impaired', appNo: '201911020013', inventors: 'Raunak Srikant Mokhasi, Shaidh Nawaz Khan, Anjanay Kirti Gour, Bharath Kumar Thulasidoss', phase: 'National' },
    { sNo: 20, title: 'Kidney Biopsy Assessment System and Method', appNo: '201811043770', inventors: 'Dr. Rajiv Ratn Shah, Dr. Shree Gopal Sharma, Meghna P Ayyar, Puneet Mathur', phase: 'National' },
  ];

  const paginatedData = iprData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="ipr-container">
      <h1 className="ipr-title">Our IPRs</h1>
      <table className="ipr-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Application No./Published No.</th>
            <th>Inventors</th>
            <th>Filing Phase National or International</th>
            <th>Interested</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((ipr) => (
            <tr key={ipr.sNo}>
              <td>{ipr.sNo}</td>
              <td>{ipr.title}</td>
              <td>{ipr.appNo}</td>
              <td>{ipr.inventors}</td>
              <td>{ipr.phase}</td>
              <td>
                <a
                  href={`https://docs.google.com/forms/d/e/1FAIpQLSfD1c1Sja4jG8Qjkj_pJnp5SNqS2ZcI1ZoTeFgN0yKEV2zjDQ/viewform?usp=pp_url&entry.2005620554=${encodeURIComponent(ipr.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Form
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        component="div"
        count={iprData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  );
};

export default IPRTable;
