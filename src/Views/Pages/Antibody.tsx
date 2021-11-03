import { Container, Divider, Paper, Stack } from '@mui/material';

import { AntibodyPieGraph, AntibodyStatus, WorkerAntibodyList } from './Graph';

export default () => (
  <Container sx={{ pt: 5 }}>
    <Paper
      style={{ boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)' }}
      sx={{ flex: 1, p: 2, mb: 3 }}
    >
      <Stack direction="row" mt={2} spacing={2}>
        <AntibodyStatus />
        <Divider orientation="vertical" flexItem />
        <AntibodyPieGraph />
      </Stack>
    </Paper>
    <WorkerAntibodyList />
  </Container>
);
