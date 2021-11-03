import { WorkerProvider } from 'Context';
import * as Layout from 'Views/Layout';

export default () => (
  <Layout.Root>
    <WorkerProvider>
      <Layout.Header />
      <Layout.Main />
      {/* <Layout.Footer /> */}
    </WorkerProvider>
  </Layout.Root>
);
