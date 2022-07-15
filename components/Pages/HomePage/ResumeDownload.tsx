import { saveAs } from 'file-saver';

import { Button, Grid } from '@nextui-org/react';

import DelayedFadeIn from '@/components/Shared/DelayedFadeIn';

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
        <DelayedFadeIn>
          <Button shadow onClick={() => handleDownload()}>Resume</Button>
        </DelayedFadeIn>
      </Grid>
    </Grid.Container>
  );
};

export default ResumeDownload;
