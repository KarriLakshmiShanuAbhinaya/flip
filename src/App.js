import './App.css';
import './bootstrap/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Topbar from './components/Topbar';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Products2 from './components/Products2';
import Users from './components/Users'
import { createContext, useState } from 'react';
export const store = createContext()

function App() {
  const [products, setProducts] = useState('./flipkartdb')
  return (
    <>
      <BrowserRouter>
      <store.Provider value={[products, setProducts]}>
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-md-12'>
            <Searchbar/>
            <div className='dmydiv'>
            <Topbar/>
            </div>
            <div className='dmydix'>
            <Banner />
            </div>

            {/* <div className='row dmydic'>
            <Products />
           </div> */}
           <div style={{color:"blue",display:"block"}} className='mt-5 mb-5'>
           <Forms/>
            </div>
            {/* <div className='row dmydic'>
            <Products2 />
           </div> */}
           </div>
           </div>
          </div>
          </store.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
