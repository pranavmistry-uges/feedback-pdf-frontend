import React, { useState } from 'react';

import {
  Box,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { PDFViewer } from '@react-pdf/renderer';

import ServiceReportPDF from './components/ServiceReportPDF';
import UssActivityTable from './components/UssActivityTable';

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMenuClick = (index) => {
    setTabValue(index);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <AppBar position="static" sx={{backgroundColor: '#0f172a',}} >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              flexGrow: 1,
            }}
          >
            UGES Dashboard
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)} >
        <Box sx={{width: 260,}} >
          <Box
            sx={{
              p: 2,
              fontSize: 20,
              fontWeight: 700,
              borderBottom: '1px solid #e5e7eb',
            }}
          >
            Menu
          </Box>

          <List>

            <ListItemButton
              selected={tabValue === 0}
              onClick={() => handleMenuClick(0)}
            >
              <ListItemText primary="USS Activity Table" />
            </ListItemButton>

            <ListItemButton
              selected={tabValue === 1}
              onClick={() => handleMenuClick(1)}
            >
              <ListItemText primary="Service Report PDF" />
            </ListItemButton>


          </List>
        </Box>
      </Drawer>

      {tabValue === 0 && (
        <Box
          sx={{
            p: 2,
            height: 'calc(100vh - 112px)',
            overflow: 'auto',
          }}
        >
          <UssActivityTable />
        </Box>
      )}

      {tabValue === 1 && (
        <PDFViewer
          style={{
            width: '100%',
            height: 'calc(100vh - 112px)',
            border: 'none',
          }}
        >
          <ServiceReportPDF />
        </PDFViewer>
      )}
    </Box>
  );
}

export default App;