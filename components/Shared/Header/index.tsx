import { useTheme as useNextTheme } from 'next-themes';

import {
  Grid, Row, Switch, useTheme,
} from '@nextui-org/react';

import DelayedFadeIn from '../DelayedFadeIn';
import FullScreenModal from './FullScreenModal';
import { MoonIcon, SunIcon } from './SwitchIcons';

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Grid.Container>
      <Grid xs={6}>
        <Row justify="flex-start" align="center">
          <DelayedFadeIn>
            <FullScreenModal />
          </DelayedFadeIn>
        </Row>
      </Grid>
      <Grid xs={6}>
        <Row justify="flex-end" align="center">
          <DelayedFadeIn>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              iconOff={<SunIcon fill="currentColor" filled size={36} height={36} width={36} label="Sun" />}
              iconOn={<MoonIcon fill="currentColor" filled size={36} height={36} width={36} label="Moon" />}
            />
          </DelayedFadeIn>
        </Row>
      </Grid>
    </Grid.Container>
  );
};

export default Header;
