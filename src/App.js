
// import './App.css';
// import React from 'react';

// import {lazy,Suspense} from 'react';
// import Navbar from './Components/Navbar/Navbar';
//  import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Shop from './Pages/Shop';
// import ShopCategory from './Pages/ShopCategory';
// /* import Product from './Pages/Product'; */
// import Cart from './Pages/Cart';
// import LoginSignup from './Pages/LoginSignup'; 
// import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';
// import kid_banner from './Components/Assets/banner_kids.png'
// const Product=lazy(()=>import("./Pages/Product"));
// function App() {
//   return (
//     <div>
//        <BrowserRouter> 
//       <Navbar/>
//        <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
//         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
//         <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/> 
//         <Route path='/product' element={<Suspense fallback={<h1>Loading...</h1>}><Product/></Suspense>}>
//         <Route path=':productId' element={<Suspense fallback={<h1>Loading...</h1>}><Product/></Suspense>}/> 
//         </Route>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<LoginSignup/>}/>

//       </Routes>
//       <Footer/>
//       </BrowserRouter> 
        
      
//     </div>
//   );
// }

// export default App;



import './App.css';
import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

const Product = lazy(() => import('./Pages/Product'));

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route
            path="/product"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Product />
              </Suspense>
            }
          >
            <Route
              path=":productId"
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Product />
                </Suspense>
              }
            />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
