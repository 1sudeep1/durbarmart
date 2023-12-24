import React from 'react'
import Top from './Component/Top'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ScrollToTop from './Component/ScrollTop'
function App() {

  return (
    <div>
      <ScrollToTop/>
      <Top/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
