import { saveAs } from 'file-saver';

import { Button } from '@nextui-org/react';

const ResumeDownload = () => {
  const handleDownload = () => {
    saveAs(
      '/RyelBanfield-Resume.pdf',
      'RyelBanfield-Resume.pdf',
    );
  };

  return (
    <Button size="sm" shadow onClick={() => handleDownload()}>Resume</Button>
  );
};

export default ResumeDownload;
