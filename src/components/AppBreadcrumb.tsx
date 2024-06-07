import { Breadcrumb } from 'antd';
import React from 'react'


const items = [
    {title: 'Home'},
    {title: <a href="">Application Center</a>},
    {title: <a href="">Application List</a>,},
    {title: 'An Application'},
]

export const AppBreadcrumb = () => {
  return (
    <Breadcrumb style={{ margin: '16px' }} items={items}></Breadcrumb>
  )
}
