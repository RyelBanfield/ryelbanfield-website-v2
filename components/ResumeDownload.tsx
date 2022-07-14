import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';

import { Button, Grid } from '@nextui-org/react';

const ResumeDownload = () => {
  const handleDownload = () => {
    saveAs(
      '/RyelBanfield-Resume.pdf',
      'RyelBanfield-Resume.pdf',
    );
  };

  return (
    <Grid.Container>
      <Grid xs={12} justify="center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Button shadow onClick={() => handleDownload()}>Resume</Button>
        </motion.div>
      </Grid>
    </Grid.Container>
  );
};

export default ResumeDownload;
