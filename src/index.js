import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/Home/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './component/themes/theme';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>      
    </React.StrictMode>    
);