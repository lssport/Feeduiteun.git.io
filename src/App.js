import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
class App extends React.Component {
constructor() {
 super();
}

render() {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
      <h1 className='fw-bold'>FEEDUITEUN APPS</h1>
      <hr className='w-75 mx-auto'/>
      <h2 className='fw-bold'>Rp.1.500.000,-</h2>
      <span className='title-md'>sisa uang kamu tersisa 75% lagi</span>

    <div className='row'>
      <div className='col-6'>
        <div className='card-wrapper p-4'>
          <div className='icon-wrapper mb-1'>
            <i class="bi bi-wallet2"></i>
            <span className='title-sm'>pemasukan</span>
            <h3 className='fw-bold'>Rp.2.000.000,-</h3>
            <span className='title-sm text-ungu fw-bold'>50</span>
            <span className='title-sm'>transaksi</span>
            <div className='row'>
              <div className='col-6'>
<div className='card-wrapper p-4'>
  <div className='icon-wrapper mb-1'>
    <i class="bi bi-cash-stack"></i>
    <span className='title-sm'>pengeluaran</span>
    <h3 className='fw-bold'>Rp.1.000.000,-</h3>
<span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'>transaksi</span>
            <div className='row mt-5'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <h4>ringkasan transaksi</h4>
                <div className='wrapper-button'>
                  <button className='button btn-ungu px-3 py-2 me-2'>pemasukan<i class="bi bi-plu-circle-fill"></i></button>
                  <button className='button btn-pink px-3 py-2'>pengeluaran<i class="bi bi-dash-circle-fill"></i></button>
                  <div className='row mt-5'>
                    <div classsName='col-12 d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-item-center'>
                        <div className='icon-wrapper'>
                          <i class="bi bi-wallet2"></i>
  <div className='transaction ms-2 d-flex-column'>
    <h6>Menerima Gaji</h6>
    <span className='title-sm'>1 july 2022</span>
    <h5 className='text-money-in'>Rp.1.000.000,</h5>
    <h5 className='text-money-out'>Rp.20.000,</h5>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </div> 
  </div>
  </div>
  </div>
  </div>
  </div>
  </div> 
  </div> 
  </div>
   </div>
    </div>
     </div>
  );
}
}
export default App;