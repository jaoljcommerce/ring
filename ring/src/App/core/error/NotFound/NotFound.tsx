import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography } from '@mui/material';

import './NotFound.scss';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Grid
        className="NotFound-Container"
        container
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h4">{t('error.404')}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
