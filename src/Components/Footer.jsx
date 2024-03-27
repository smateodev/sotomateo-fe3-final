import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {state} = useContextGlobal()
  return (
    <footer style={{background: state.theme.background, color:state.theme.font}}>
        <div className='poweredby'>
          <p>Powered by</p>
          <img src="/images/DH.png" alt='DH-logo' />
        </div>
        <div className='socialNetworks'>
          <a href="#"><img src="/images/ico-facebook.png" alt="" style={{width: 40}}/></a>
          <a href="#"><img src="/images/ico-instagram.png" alt="" style={{width: 40}}/></a>
          <a href="#"><img src="/images/ico-tiktok.png" alt="" style={{width: 40}}/></a>
          <a href="#"><img src="/images/ico-whatsapp.png" alt="" style={{width: 40}}/></a>
        </div>
    </footer>
  )
}

export default Footer