import React, { Component } from 'react'
import Header from './header'
import icon1 from '../img/icon-process.png'
import icon2 from '../img/icon-price.png'
import icon3 from '../img/icon-check.png'
import facebook from '../img/icon-facebook-blue.png'
import google from '../img/icon-google.png'
import apple from '../img/icon-apple.png'

const Login=()=>{
    return(
        <div>
            <Header/>
            <div style={{justifyContent:'space-around', alignItems:'center', margin:'120px', flexDirection:'row', display:'flex'}}>
                <div>
                    <div style={{flexDirection:'row', display:'flex', alignItems:'center', letterSpacing:'normal'}}>
                        <div>
                            <img src={icon1} style={{width:'72px', height:'72px'}} alt=""/>
                        </div>
                        <div style={{marginLeft:20}}>
                            <p style={{fontWeight:'bold'}}>Proses Transaksi Otomatis Tersimpan</p>
                            <p>Simpan dan selesaikan transaksi pembelian Orbit tanpa <br/> harus membuat ulang pesanan Anda untuk tiap pembelian</p>
                        </div>
                    </div>
                    <br/>
                    <p style={{border:'0.2px solid gray', borderColor:'gray'}}></p>
                    <br/>
                    <div style={{flexDirection:'row', display:'flex', alignItems:'center', letterSpacing:'normal'}}>
                        <div>
                            <img src={icon2} style={{width:'72px', height:'72px'}} alt=""/>
                        </div>
                        <div style={{marginLeft:20}}>
                            <p style={{fontWeight:'bold'}}>Lihat Status Order</p>
                            <p>Cek status order modem Orbit dengan mudah di mana saja</p>
                        </div>
                    </div>
                    <br/>
                    <p style={{border:'0.2px solid gray', borderColor:'gray'}}></p>
                    <br/>
                    <div style={{flexDirection:'row', display:'flex', alignItems:'center', letterSpacing:'normal'}}>
                        <div>
                            <img src={icon3} style={{width:'72px', height:'72px'}} alt=""/>
                        </div>
                        <div style={{marginLeft:20}}>
                            <p style={{fontWeight:'bold'}}>Cek Status Pengiriman</p>
                            <p>Cek informasi status pengirim modem Orbit real time</p>
                        </div>
                    </div>
                </div>
                <div style={{justifyContent:'center', alignItems:'center', padding:'40px'}} className='shadow'>
                    <p style={{fontSize:'34px', fontWeight:'bold', textAlign:'center'}}>Login Orbit</p>
                    <p style={{fontSize:'24px'}}>Masukan Email Anda</p>
                    <input type="text" placeholder='Alamat Email' style={{border:'none', marginTop:'20px'}}/>
                    <p style={{border:'1px solid #b1b1b1'}}></p>
                    <br/>
                    <br/>
                    <button className='btn btn' style={{backgroundColor:'#ff4c47', color:'white', width:'100%', height:'48px', borderRadius:'24px', fontSize:'16px', fontWeight:'bold'}} title='Lanjut'>Lanjut</button>
                    <div style={{marginTop:'40px', justifyContent:'center', alignItems:'center'}}>
                        <p style={{textAlign:'center', fontSize:'18px'}}>Atau login melalui</p>
                        <div style={{flexDirection:'row', display:'flex', justifyContent:'center'}}>
                            <div style={{justifyContent:'center', alignItems:'center', marginRight:'30px'}}>
                                <div className='shadowFacebook' style={{textAlign:'center'}}>
                                    <img src={facebook} style={{width:'25px', height:'25px', marginTop:'13px'}} alt=""/>
                                </div>
                            </div>
                            <div style={{justifyContent:'center', alignItems:'center'}}>
                                <div className='shadowFacebook' style={{textAlign:'center'}}>
                                    <img src={google} style={{width:'25px', height:'25px', marginTop:'13px'}} alt=""/>
                                </div>
                            </div>
                            <div style={{justifyContent:'center', alignItems:'center', marginLeft:'30px'}}>
                                <div className='shadowFacebook' style={{textAlign:'center'}}>
                                    <img src={apple} style={{width:'25px', height:'25px', marginTop:'11px'}} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='background' style={{transform:'translate(0,-230px)'}}>

            </div>
        </div>
    )
}

export default Login