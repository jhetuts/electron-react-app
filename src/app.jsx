import * as React from 'react';
import { createRoot } from 'react-dom/client';
import MainWrapper from './Components/Layout/MainWrapper/index.jsx';

const root = createRoot(document.querySelector('#root'))
root.render(<MainWrapper />);