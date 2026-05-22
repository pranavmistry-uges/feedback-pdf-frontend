import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';

// ───────────────── THEME ─────────────────
const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
});

// ───────────────── STATIC ACTIVITIES ─────────────────
const initialActivities = [
  'DP Yard Column casting',
  'DP Yard Slab Erection',
  'Delivery of electrical accessories',
  'Trafo/CSS erection',
  'Installation of electrical accessories',
  'Earth pit marking',
  'Earth boring',
  'Earth rod installation',
  'Earthing strip laying',
  'LT cable Termination',
  'Hand rail fixing on Transformer Slab',
  'DP yard Completion',
  'Service lift platform',
  'EB Commissioning',
].map((activity, index) => ({
  id: index,
  name: activity,
  startDate: '',
  startPhoto: null,
  endDate: '',
  endPhoto: null,
  noOfDays: '',
}));

export const UssActivityTable = () => {
  const [data, setData] = useState(initialActivities);

  const handleDateChange = (index, field, value) => {
    const newData = [...data];

    newData[index][field] = value;

    // Auto calculate days
    if (field === 'startDate' || field === 'endDate') {
      const start = newData[index].startDate;
      const end = newData[index].endDate;

      if (start && end) {
        const s = new Date(start);
        const e = new Date(end);

        const diffTime = e - s;

        const diffDays = Math.ceil(
          diffTime / (1000 * 60 * 60 * 24)
        );

        newData[index].noOfDays =
          diffDays >= 0 ? diffDays : 0;
      } else {
        newData[index].noOfDays = '';
      }
    }

    setData(newData);
  };

  // ───────────────── FILE CHANGE ─────────────────
  const handleFileChange = (index, field, file) => {
    if (!file) return;

    const newData = [...data];

    newData[index][field] = file;

    setData(newData);
  };

  // ───────────────── FILE UPLOAD ─────────────────
  const FileUploadCell = ({ file, onChange }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Button
        variant="outlined"
        component="label"
        size="small"
        sx={{
          fontSize: '0.75rem',
          padding: '2px 8px',
          minWidth: 'auto',
          textTransform: 'none',
          borderColor: '#999',
          color: '#333',

          '&:hover': {
            borderColor: '#333',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        {file ? 'Change Photo' : 'Upload Photo'}

        <input
          type="file"
          hidden
          accept="image/*"
          onChange={onChange}
        />
      </Button>

      {file && (
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.65rem',
            maxWidth: '90px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'green',
          }}
        >
          {file.name}
        </Typography>
      )}
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          minHeight: '100vh',
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            width: 'max-content',
            maxWidth: '100%',
            boxShadow: 3,
            borderRadius: 1,
            overflowX: 'auto',
          }}
        >
          <Table
            size="small"
            sx={{
              borderCollapse: 'collapse',

              '& .MuiTableCell-root': {
                border: '1px solid #000',
                padding: '6px 12px',
              },
            }}
          >
            {/* ───────────────── HEADER ───────────────── */}
            <TableHead>
              <TableRow sx={{ backgroundColor: '#eef5fc' }}>
                <TableCell
                  align="left"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',

                  }}
                >
                  USS activity
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  Start
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  Photo
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  End
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  Photo
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                  }}
                >
                  No of Days
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>

                  {/* Activity Name */}
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: '#eef5fc',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      width: '280px',
                      color: '#000',
                    }}
                  >
                    {row.name}
                  </TableCell>

                  {/* Start Date */}
                  <TableCell align="center">
                    <TextField
                      type="date"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={row.startDate}
                      onChange={(e) =>
                        handleDateChange(
                          index,
                          'startDate',
                          e.target.value
                        )
                      }
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '4px 8px',
                          fontSize: '0.85rem',
                        },
                      }}
                    />
                  </TableCell>

                  {/* Start Photo */}
                  <TableCell align="center">
                    <FileUploadCell
                      file={row.startPhoto}
                      onChange={(e) =>
                        handleFileChange(
                          index,
                          'startPhoto',
                          e.target.files[0]
                        )
                      }
                    />
                  </TableCell>

                  {/* End Date */}
                  <TableCell align="center">
                    <TextField
                      type="date"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={row.endDate}
                      onChange={(e) =>
                        handleDateChange(
                          index,
                          'endDate',
                          e.target.value
                        )
                      }
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '4px 8px',
                          fontSize: '0.85rem',
                        },
                      }}
                    />
                  </TableCell>

                  {/* End Photo */}
                  <TableCell align="center">
                    <FileUploadCell
                      file={row.endPhoto}
                      onChange={(e) =>
                        handleFileChange(
                          index,
                          'endPhoto',
                          e.target.files[0]
                        )
                      }
                    />
                  </TableCell>

                  {/* No Of Days */}
                  <TableCell align="center">
                    <TextField
                      type="number"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      value={row.noOfDays}
                      onChange={(e) =>
                        handleDateChange(
                          index,
                          'noOfDays',
                          e.target.value
                        )
                      }
                      placeholder="0"
                      sx={{
                        width: '60px',

                        '& .MuiInputBase-input': {
                          padding: '4px 8px',
                          fontSize: '0.9rem',
                          textAlign: 'center',
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default UssActivityTable;