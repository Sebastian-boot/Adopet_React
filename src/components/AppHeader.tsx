import { RadarChartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

export const AppHeader = () => {
  return (
    <Header className='!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10'>
      <div className='flex items-center gap-2'>
        <RadarChartOutlined className='text-3xl' />
        <span>Adopet</span>
      </div>
      <div className='flex items-center gap-2'>
        <Avatar size={36} icon={<UserOutlined />} />
        <span>John Doe</span>
      </div>
    </Header>
  )
}
