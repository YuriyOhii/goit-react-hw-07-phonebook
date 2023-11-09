import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'components/GlobalStyles';
import { Layout } from 'components/Layout.styled';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = {
  colors: {
    grey: '#212121',
    red: 'red',
    white: 'white',
    yellow: 'yellow',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <App />
          <GlobalStyles />
        </Layout>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
