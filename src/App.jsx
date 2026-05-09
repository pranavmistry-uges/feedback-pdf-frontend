import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

export default function App() {
  const feedbackCategories = [
    'Knowledge and Command UGES',
    'Time/ Schedule Compliance',
    'Quality of Service',
    'Clarification of queries',
    'EHS Practices and Compliances',
    'Reporting Structure',
  ];

  const tableBorderStyles = {
    border: '1px solid black',
    '& th, & td': {
      border: '1px solid black',
      borderColor: 'black',
      py: 1,
      px: 1.5,
      fontSize: '0.85rem',
      fontFamily: 'Arial, sans-serif'
    },
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#e0e0e0', py: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper 
        elevation={4} 
        sx={{ 
          width: '100%', 
          maxWidth: '850px', 
          p: { xs: 2, sm: 4 }, 
          backgroundColor: '#fff',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Header Table */}
        <TableContainer sx={{ mb: 2 }}>
          <Table sx={tableBorderStyles} size="small">
            <TableBody>
              <TableRow>
                <TableCell width="20%" align="center">
                  <Typography variant="h5" fontWeight="bold" sx={{ color: '#003366', letterSpacing: 1 }}>
                    UGES
                  </Typography>
                </TableCell>
                <TableCell width="50%" align="center">
                  <Typography variant="h6" fontWeight="bold">
                    <b>FEEDBACK FORM</b>
                  </Typography>
                </TableCell>
                <TableCell width="30%" sx={{ '&.MuiTableCell-root': { p: 0, verticalAlign: 'top' } }}>
                  <Box sx={{ borderBottom: '1px solid black', py: 0.6, px: 1.5 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#2c3e50' }}>
                      Doc. No. : UGES-MR-F-19
                    </Typography>
                  </Box>
                  <Box sx={{ borderBottom: '1px solid black', py: 0.6, px: 1.5 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#2c3e50' }}>
                      Rev. No.: 00
                    </Typography>
                  </Box>
                  <Box sx={{ borderBottom: '1px solid black', py: 0.6, px: 1.5 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#2c3e50' }}>
                      Eff. Dt.: 01/08/2020
                    </Typography>
                  </Box>
                  <Box sx={{ py: 0.6, px: 1.5 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem', color: '#2c3e50' }}>
                      Page <Box component="span" sx={{ fontWeight: 'normal', color: '#555' }}>1 of 1</Box>
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Section A */}
        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
          <b>A. General Details:</b>
        </Typography>
        <TableContainer sx={{ mb: 3 }}>
          <Table sx={tableBorderStyles} size="small">
            <TableBody>
              <TableRow>
                <TableCell width="50%">
                  <b>Name of Assignment:</b>
                </TableCell>
                <TableCell width="50%">
                  <b>Date:</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Customer Employee:</b>
                </TableCell>
                <TableCell>
                  <b>Site Name:</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>UGES Employee:</b>
                </TableCell>
                <TableCell>
                  <b>Location/Country:</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Section B */}
        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
          <b>B. Type of Services: (Please ☑ whichever is applicable)</b>
        </Typography>
        <TableContainer sx={{ mb: 3 }}>
          <Table sx={tableBorderStyles} size="small">
            <TableBody>
              <TableRow>
                <TableCell width="33.33%">Factory Inspection</TableCell>
                <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                <TableCell width="33.33%">Wind farm audits </TableCell>
                <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                <TableCell width="33.33%">Inspection &amp; Testing</TableCell>
                <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Project Management Services</TableCell>
                <TableCell></TableCell>
                <TableCell>Training</TableCell>
                <TableCell></TableCell>
                <TableCell>Design Review</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Engineering Consulting</TableCell>
                <TableCell></TableCell>
                <TableCell>Conditional monitoring</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Box display="flex" alignItems="flex-end">
                    Operations &amp; Maintenance:
                  </Box>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box display="flex" alignItems="flex-end">
                    Other (Specify)
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Section C */}
        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
          <b>C. Guidelines for Feedback Evaluation:</b>
        </Typography>
        <TableContainer sx={{ mb: 3 }}>
          <Table sx={tableBorderStyles} size="small">
            <TableBody>
              <TableRow>
                <TableCell>Not up to the mark</TableCell>
                <TableCell><b>2</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Poor</TableCell>
                <TableCell><b>4</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Acceptable</TableCell>
                <TableCell><b>6</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Meeting Expectations</TableCell>
                <TableCell><b>8</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Exceeding Expectations</TableCell>
                <TableCell><b>10</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Section D */}
        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
          <b>D. Feedback Section:</b>
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          <Table sx={tableBorderStyles} size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
                <TableCell><b>Title/ Description:</b></TableCell>
                <TableCell align="center" width="10%"><b>2</b></TableCell>
                <TableCell align="center" width="10%"><b>4</b></TableCell>
                <TableCell align="center" width="10%"><b>6</b></TableCell>
                <TableCell align="center" width="10%"><b>8</b></TableCell>
                <TableCell align="center" width="10%"><b>10</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbackCategories.map((category) => (
                <TableRow key={category}>
                  <TableCell>{category}</TableCell>
                  {[2, 4, 6, 8, 10].map((val) => (
                    <TableCell align="center" key={val}></TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={6} sx={{ py: 2 }}>
                  <Box display="flex" alignItems="flex-end">
                    <Typography variant="body2" fontWeight="bold">Average of overall Feedback:</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Footer section */}
        <Typography variant="body2" align="center" sx={{ mb: 3, fontStyle: 'italic', fontWeight: 'bold' }}>
          (In case of confidential feedback: you may write to "enquiry@uges.co.in")
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Box display="flex" alignItems="flex-end" sx={{ mb: 3 }}>
            <Typography variant="body2" fontWeight="bold">Name of Participants (Optional):</Typography>
          </Box>

          <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
            Please Give below your Suggestions for Improvement (*Mandatory if assessment is below 6):
          </Typography>
          <Box sx={{ border: '1px solid black', height: '80px', width: '100%', mb: 4 }} />

          <Box sx={{ borderBottom: '2px solid black', width: '850px' }} />

          <Box display="flex" alignItems="flex-end" sx={{ mt: 0 }}>
            <Typography variant="body2" fontWeight="bold"><b>Name/Sign/Stamp/Date:</b></Typography>
          </Box>
        </Box>

      </Paper>
    </Box>
  );
}