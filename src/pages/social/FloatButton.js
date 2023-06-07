import React from 'react';
import { IconButton, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingButton() {
  const [showButton, setShowButton] = React.useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Zoom in={showButton}>
      <IconButton
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </IconButton>
    </Zoom>
  );
}
