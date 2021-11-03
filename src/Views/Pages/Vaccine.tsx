import { Container, Divider, Paper, Stack } from '@mui/material';

import { VaccineLineGraph, VaccineStatus, WorkerVaccineList } from './Graph';

export default () => (
  <Container sx={{ pt: 5 }}>
    <Paper
      style={{ boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)' }}
      sx={{ flex: 1, p: 2, mb: 3 }}
    >
      <Stack direction="row" mt={2} spacing={2}>
        <VaccineLineGraph />
        <Divider orientation="vertical" flexItem />
        <VaccineStatus hideTitle />
      </Stack>
    </Paper>
    <WorkerVaccineList />
  </Container>
);
