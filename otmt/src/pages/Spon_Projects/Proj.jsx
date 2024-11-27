import React, { useState } from 'react';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Proj.css';

const rowsPerPageOptions = [5, 10, 15]; // Options for the number of rows per page

const ProjTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset the page to 0 when rows per page is changed
  };

  const iprData = [
    { sNo: 1, title: 'IIIT D_NVF contract', pi: 'Dr. Tarini Shankar Ghosh', agency: 'NEW VENTURE FUND', end: '30-09-2025', dur: '2.5 Years' },
    { sNo: 2, title: 'avISense: Design and Prototype of NavIC Signal Processing Accelerator on Heterogeneous System-on-Chip for Remote Sensing” under Chips to Startup Programme', pi: 'Dr. Sumit Darak', agency: 'MEITY', end: '17.05.2028', dur: '5 Years' },
    { sNo: 3, title: 'RNA velocity independent direction resolved trajectory inference from scRNA-seq data', pi: 'Dr. Debarka Sen Gupta', agency: 'SERB', end: '02.07.2026	', dur: '3 Year' },
    { sNo: 4, title: 'Carbon footprint optimizer for data and computational science workflow', pi: 'Dr. Vivek Kumar', agency: 'Shell India Market Pvt Ltd', end: '29.06.2025	', dur: '2 Years' },
    { sNo: 5, title: 'Quantum Key Distribution based Ultra- Secure and Reliable optical Networks using shared fiber toplogy', pi: 'Dr. Anand Srivastava', agency: 'MEITY', end: '31.03.2024', dur: '9 months' },
    { sNo: 6, title: 'Digital Management of the reproductive Body in India: Exploring Gendered Consequenece of Self tracking via Fetmtech mobile Phone app', pi: 'Dr. Paro Mishra', agency: 'ICSSR', end: '20.03.2024', dur: '12 months' },
    { sNo: 7, title: 'Purse 2023 Program', pi: '	Dr. Sanjit Kaul', agency: '	DST', end: '02.08.2027', dur: '4 Years' },
    { sNo: 8, title: 'Improve Texture and Shape Bias in OCR', pi: 'Prof. Rajiv Ratn Shah', agency: 'IIIT- CAI', end: '15.01.2024', dur: '5 months' },
    { sNo: 9, title: 'Efficient Deep Learning for Green and Sustainable AI', pi: 'Dr. A V Subramanyam', agency: 'IIIT- CAI', end: '09.02.2024', dur: '6 months' },
    { sNo: 10, title: 'AI for Space Situational Awareness', pi: 'Dr. Sanat K Biswas', agency: 'IIIT- CAI', end: '09.08.2024', dur: '1 Years' },
    { sNo: 11, title: 'App for medical screening in general public', pi: 'Prof. Angshul Majumdar', agency: 'Infosys center for Artificial Intelligence', end: '15.11.2023', dur: '6 months' },
    { sNo: 12, title: 'Community AI platform for cancer research', pi: 'Dr.Anubha Gupta', agency: 'IIIT- CAI', end: '09.08.2024', dur: '1 years' },
    { sNo: 13, title: 'Autonomous Urban Mobility', pi: 'Dr. Saket Anand', agency: 'IIIT- CAI', end: '09.08.2024', dur: '1 years' },
    { sNo: 14, title: 'Radar enhanced rapid beam alignment for millimetre wave vehicular communications', pi: 'Dr. Shobha Sundar Ram', agency: 'TiHan _IITH', end: '02.03.2025', dur: '18 Month' },
    { sNo: 15, title: 'Licensing of Spaces for digital Advertisement', pi: 'Dr. Pravesh Biyani', agency: '-', end: '-', dur: '3 Months' },
    { sNo: 16, title: '(AOC)Advanced Optical Communication (C-DOT)', pi: 'Dr. Abhijit Mitra', agency: 'DOT(Dept. of telecommunication', end: '26.12.2025', dur: '2.5 years' },
    { sNo: 17, title: 'A Real Time rendering system for interactive placement of lights', pi: 'Dr. Ojaswa Sharma', agency: 'TCS', end: '30.09.2023', dur: '4 months' },
    { sNo: 18, title: 'Development of an innovative low-cost deployable AI-based diagnostic tool (BCanDL tool) for hematopoietic cancers and creation of blood cancer cell atlas (BCanCell Atlas', pi: 'Prof. Anubha Gupta', agency: 'ICMR', end: '15.10.2024', dur: '1 Year' },
    { sNo: 19, title: 'DEPARTMENT OF BIOTECHNOLOGY - CONSORTIUM ON CELIAC DISEASE', pi: 'Dr. Arjun Ray', agency: 'DBT', end: '03.09.2028	', dur: '5 Years' },
    { sNo: 20, title: 'Scalable Federated Learning', pi: 'Dr. Bapi Chatterjee', agency: 'IIIT- CAI', end: '26.03.2026', dur: '3 Years' },
    { sNo: 21, title: 'Emotional Modulation of Visual Distractor-Filtering Brain Structure and Behavioral correlates of Anxiety', pi: 'Dr. Mrinmoy Chakrabarty', agency: 'SERB', end: '18.09.2026', dur: '3 Years' },
    { sNo: 22, title: 'Federated Automated Deep Learning', pi: 'Dr. Bapi Chatterjee', agency: 'DST', end: '11.06.2026	', dur: '3 Years' },
    { sNo: 23, title: 'Coding for Multiparty Interactive Communication', pi: 'Dr. Manuj Mukherjee', agency: 'SERB', end: '08.10.2025	', dur: '2 years' },
    { sNo: 24, title: 'SAFE-ICU An open big data and Reproducible AI Resource for early prediction of intensive care outcomes', pi: 'Dr. Tavpritesh Sethi', agency: 'ICMR', end: '31.10.2023	', dur: '1 Year' },
    { sNo: 25, title: 'Research project for avifona conservation', pi: 'Dr. Pankaj jalote', agency: 'IIIT-Delhi(Pankaj jalote)', end: '20.10.2026', dur: '3 Years' },
    { sNo: 26, title: 'National Network Project of Dr. B. R Ambedkar centre for Biometric Research', pi: 'Dr. Tavpritesh Sethi', agency: 'DBT', end: '13.09.2028', dur: '5 Years' },
    { sNo: 27, title: 'Classification of Symatric Norms on B(H)', pi: 'Dr. Satish Kumar Pandey', agency: 'ICMR', end: '17.10.2026', dur: '3 Years' },
    { sNo: 28, title: 'Alleviating the Shortage of GPUs using smart usage of CPUs for machine learning training', pi: 'Dr. Dhruv Kumar', agency: 'SERB', end: '09.10.2025', dur: '2 Years' },
    { sNo: 29, title: 'Vaibhav Global Limited', pi: 'Dr. Debarka Sen Gupta', agency: 'VGL', end: '20.08.2024', dur: '1 Year' },
    { sNo: 30, title: 'A nationwide assessment of water conservation structures’ impacts on community resilience using geospatial data analysis-Evaluating the impact of artificial lakes, ponds and tanks on local livelihoods across India – reg.', pi: 'Dr. Gaurav Arora', agency: 'Dept. of Rural Development', end: '19.05.2025', dur: '18 Month' },
    { sNo: 31, title: 'AI based virtual screning and De Nova compounds design toolbox for acceleration drug discovery projects', pi: 'Dr. Arul Murugan and Dr. Arjun Ray', agency: 'SERB', end: '09.11.2026', dur: '3 Years' },
    { sNo: 32, title: 'Deciphering the mechano-chemical insights into ATP binding induced conformation changes in ABCAI contributing towards cholesterol efflux in the Reverse Cholesterol Pathway', pi: 'Dr. Arjun Ray Dr. Arul Murugan', agency: 'SERB', end: '12.12.2026	', dur: '3 Years' },
    { sNo: 33, title: 'Control Co-Design of Distributed parameter System', pi: 'Dr. Prasad Vilas Chanekar', agency: 'SERB', end: '02.12.2025', dur: '2 Years' },
    { sNo: 34, title: 'Transformation formulas associated to a divisor function of Wigert and a problem related to overpartition', pi: 'Dr. Debika Banerjee', agency: 'SERB', end: '', dur: '' },
    { sNo: 35, title: 'Efficient Enumeration of the feasible solution to Combinatorial Optimization problems', pi: 'Dr. Diptapriyo Majumdar', agency: 'SERB', end: '16.11.2025', dur: '2 Years' },
    { sNo: 36, title: 'Effects of Emotions and Anxiety on Visual Perceptual Decision Making', pi: 'Dr. Mrinmoy Chakrabarty', agency: 'DST', end: '12.03.2027', dur: '3 Years' },
  ];

  const paginatedData = iprData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="proj-container">
      <h1 className="proj-title">Sponsored Research Projects</h1>
      <table className="proj-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Project Title</th>
            <th>Name of the PI</th>
            <th>Funding Agencies</th>
            <th>End Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((proj) => (
            <tr key={proj.sNo}>
              <td>{proj.sNo}</td>
              <td>{proj.title}</td>
              <td>{proj.pi}</td>
              <td>{proj.agency}</td>
              <td>{proj.end}</td>
              <td>{proj.dur}</td>
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

      {/* Explore More Button */}
      <div className="exp-moree">


       <a
          href="https://iiitd.ac.in/research/projects/srp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="exp_btnn">Explore More</button>
        </a> 
        
          
        
      </div>
    </div>
  );
};

export default ProjTable;
