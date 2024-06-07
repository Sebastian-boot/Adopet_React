import { Footer } from 'antd/es/layout/layout'
import React from 'react'

export const AppFooter = () => {
  return (
    <Footer className='text-center'>
      Adopet ©{new Date().getFullYear()}
    </Footer>
  )
}
