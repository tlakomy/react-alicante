import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

const Signature = styled.span`
  position: fixed;
  bottom: 30px;
  left: 12px;
`;

ReactDOM.render(<div><Presentation /><Signature>🐦 @tlakomy</Signature></div>, document.getElementById('root'));
registerServiceWorker();
