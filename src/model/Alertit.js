import React, { useState } from 'react';
import { Alert } from 'reactstrap';

function Alertit({message}) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
     mymerragefbewo fn
    </Alert>
  );
}

export default Alertit;