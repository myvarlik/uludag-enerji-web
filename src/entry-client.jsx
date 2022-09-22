import './setup/axiosConfig';

import { App } from './App'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'trim-redux';
import ReactDOM from 'react-dom'
import { clientCreateStore } from "./setup/store";

const store = clientCreateStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)