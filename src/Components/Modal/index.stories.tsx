import { useState } from 'react';

import Modal from './Modal';

import { Button } from 'Components/Button';
import { FlexView } from 'Components/View';
import { Colors } from 'Styles/Theme';

export default { title: 'Modal' };

export const Modals = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <FlexView>
        <Button
          css={{ backgroundColor: Colors.danger, padding: 10 }}
          fit
          onClick={() => setVisible((value) => !value)}
        >
          Modal
        </Button>
        <Modal
          visible={visible}
          onDismiss={() => setVisible((value) => !value)}
        >
          test
        </Modal>
      </FlexView>
    </>
  );
};
