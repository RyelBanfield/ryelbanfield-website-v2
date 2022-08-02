import { Grid, Spacer } from '@nextui-org/react';

import ConfettiButton from './ConfettiButton';
import NavLinks from './NavLinks';

const Header = () => (
  <>
    <Spacer y={2} />
    <Grid.Container justify="space-between">
      <Grid>
        <NavLinks />
      </Grid>
      <Grid>
        <ConfettiButton />
      </Grid>
    </Grid.Container>
    <Spacer y={2} />
  </>
);
export default Header;
