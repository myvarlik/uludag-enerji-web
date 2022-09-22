import Footer from './components/footer';
import Header from './components/header';
import React from 'react';
import Router from './partial/router/Router';
import ScrollToTop from './components/scrollToTop';

export function App() {
  return (
    <>
      <div className="wrapper">
        <ScrollToTop>
          <Header />
          <Router />
          <Footer />
        </ScrollToTop>
      </div>
    </>
  )
}
