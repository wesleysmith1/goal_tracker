import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import MeditationsHistory from '../components/MeditationsHistory';
import MeditationMinutesCalc from '../components/MeditationMinutesCalc';
import MeditationStreakCalc from '../components/MeditationStreakCalc';
import AddMeditation from './AddMeditation';

function Meditations() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <AddMeditation onClose={handleClose} />
        </Box>
      </Modal>
      <MeditationMinutesCalc />
      <MeditationStreakCalc />
      <MeditationsHistory />
    </div>
  );
}

export default Meditations;
