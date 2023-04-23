import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page from './pages/Page';
import ErrorPage from './pages/ErrorPage';
import Header from './components/layout/Header';
import BlogArticlePage, { loader } from './pages/BlogArticlePage';
import BlogHome from './pages/BlogHome';
import Footer from './components/layout/Footer';
import Navigation from './components/layout/Nav';

const router = createBrowserRouter([
  {
    path: "/blog/:handle",
    element: <BlogArticlePage />,
    errorElement: <ErrorPage />,
    loader: loader
  },
  {
    path: "/blog/",
    element: <BlogHome />,
    errorElement: <ErrorPage />
  },
  {
    path: "/*",
    element: <Page key={window.location.key} />,
    errorElement: <ErrorPage />
  }
])  

function init() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Header />
      <Navigation />
      <RouterProvider router={router} role="main" />
      <Footer />
    </React.StrictMode>
  );
}

if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
    init();
  });
} else {
  init();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
