import React from 'react';
import { createRoot } from 'react-dom';
import App from './component/Home/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducer/store';
import { ThemeProvider } from './component/themes/theme';

const root = createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>     
    
  </React.StrictMode>
);
