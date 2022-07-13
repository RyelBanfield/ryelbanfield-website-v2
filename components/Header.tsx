import { useTheme as useNextTheme } from 'next-themes';

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
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            iconOff={<SunIcon filled size={24} height={24} width={24} label="Sun" />}
            iconOn={<MoonIcon filled size={24} height={24} width={24} label="Moon" />}
          />
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default Header;
