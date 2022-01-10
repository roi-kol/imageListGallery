import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'font-awesome/css/font-awesome.css';
import 'fontsource-heebo/index.css'
// import Gallery from './components/Gallery';
import reportWebVitals from './reportWebVitals';
import TabPanels from './components/Panel'
ReactDOM.render(
  <React.StrictMode>
    {/* <Gallery /> */}
    <div dir='rtl'>
      <TabPanels />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
