import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import MeditationsHistory from '../components/MeditationsHistory';
import MeditationMinutesCalc from '../components/MeditationMinutesCalc';
import MeditationStreakCalc from '../components/MeditationStreakCalc';
import AddMeditation from './AddMeditation';  // Ensure this is the correct import path

function Meditations() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',  // Ensure this is a solid color
    border: '2px solid #000',     // Optional: adds a border
    boxShadow: 24,                // Optional: adds shadow to make modal stand out
    p: 4,                         // Padding inside the modal
  };

  return (
    <div>
      <h1>Meditations</h1>
      <Button onClick={handleOpen} style={{ margin: '20px', backgroundColor: '#1976d2', color: 'white' }}>
        Add Meditation
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>  // Apply the defined style here
          <AddMeditation />
        </Box>
      </Modal>
      <MeditationMinutesCalc />
      <MeditationStreakCalc />
      <MeditationsHistory />
    </div>
  );
}

export default Meditations;
