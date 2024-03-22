import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Corrected import statement
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ShoppingIndex from './components/ShoppingIndex';
import JQueryAjaxDemo from './components/JQueryAjaxDemo';
import NetflicsRegistration from './components/NetflicsRegistration';
import DataBindingComponent from './components/DataBindingComponent';
import ShoppingComponent from './components/ClassComponent/ShoppingComponent';
import BindingExample from './components/BindingExample';
import TwoWayBinding from './components/TwoWayBinding';
import BootStrap from './components/BootStrap';
import StatesInClassComponent from './components/ClassComponent/StatesInClassComponent';
import StyleBinding from './components/StyleBinding';
import ClassBinding from './components/ClassBinding';
import FormComponent from './components/FormComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidations from './components/FormikValidations';
import YupValidationComponent from './components/YupValidationComponent';
import MountAndUnmount from './components/ClassComponent/MountAndUnmount';
import ContextHookDemo from './components/ContextHookDemo';
import { CookiesProvider } from 'react-cookie'; 
import CookiesDemo from './components/CookiesDemo'; // Make sure this file exists
import DemoOfRedux from './components/DemoOfRedux';
import UseCustomCapchaInLogin from './components/UseCustomCapchaInLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ShoppingIndex/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
