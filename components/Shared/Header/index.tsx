import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes';

import {
  Grid, Row, Switch, User, useTheme,
} from '@nextui-org/react';

import DelayedFadeIn from '../DelayedFadeIn';
import { MoonIcon, SunIcon } from './SwitchIcons';

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const router = useRouter();

  return (
    <Grid.Container>
      <Grid xs={10}>
        <User
          name="Ryel Banfield"
          description="Full Stack Developer"
          src="/ProPic.png"
          size="xl"
          zoomed
          pointer
          onClick={() => router.push('/')}
        />
      </Grid>
      <Grid xs={2}>
        <Row justify="flex-end" align="center">
          <DelayedFadeIn>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              iconOff={<SunIcon fill="currentColor" filled size={24} height={24} width={24} label="Sun" />}
              iconOn={<MoonIcon fill="currentColor" filled size={24} height={24} width={24} label="Moon" />}
            />
          </DelayedFadeIn>
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default Header;
