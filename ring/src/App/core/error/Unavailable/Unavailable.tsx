import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography } from '@mui/material';

import './Unavailable.scss';

const Unavailable = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Grid
        className="Unavailable-Container"
        container
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h4">{t('error.503')}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Unavailable;
