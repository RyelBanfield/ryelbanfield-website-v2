import { useTheme as useNextTheme } from 'next-themes';
import { motion } from 'framer-motion';

import {
  Grid, Row, Switch, User, useTheme,
} from '@nextui-org/react';

import { MoonIcon, SunIcon } from './SwitchIcons';

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Grid.Container>
      <Grid xs={10}>
        <User
          name="Ryel Banfield"
          src="/ProPic.png"
          size="xl"
          zoomed
          pointer
          description="Full-Stack Developer"
        />
      </Grid>

      <Grid xs={2}>
        <Row justify="flex-end" align="center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              iconOff={<SunIcon fill="currentColor" filled size={24} height={24} width={24} label="Sun" />}
              iconOn={<MoonIcon fill="currentColor" filled size={24} height={24} width={24} label="Moon" />}
            />
          </motion.div>
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default Header;
