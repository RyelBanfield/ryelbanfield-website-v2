import { useTheme as useNextTheme } from 'next-themes';
import useMediaQuery from 'hooks/useMediaQuery';

import {
  Grid, Row, Spacer, Switch, useTheme,
} from '@nextui-org/react';

import NavLinks from './NavLinks';
import NavModal from './NavModal';
import { MoonIcon, SunIcon } from './SwitchIcons';

const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 415px)');

  return (
    <>
      <Spacer y={2} />
      <Grid.Container>
        <Grid xs={6}>
          <Row justify="flex-start" align="center">
            {isDesktop ? (<NavLinks />) : (<NavModal />)}
          </Row>
        </Grid>
        <Grid xs={6}>
          <Row justify="flex-end" align="center">
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              iconOff={<SunIcon fill="currentColor" filled size={36} height={36} width={36} label="Sun" />}
              iconOn={<MoonIcon fill="currentColor" filled size={36} height={36} width={36} label="Moon" />}
            />
          </Row>
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
    </>
  );
};

export default Header;
