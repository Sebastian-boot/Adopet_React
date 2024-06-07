"use client";
import { MenuItem, routeToKeyMap } from '@/utils/menu-helper';
import { IconHeartStar, IconPaw, IconUsersGroup } from '@tabler/icons-react';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'



export const AppSideMenu = () => {
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    const key = Object.keys(routeToKeyMap).find(route => pathname.startsWith(route)) || "1";
    setSelectedKey([routeToKeyMap[key]]);
  }, [pathname]);

  const menuItems: MenuItem[] = [
    {
      label: <Link href="/dashboard">Dashboard</Link>,
      key: "1",
      icon: <IconUsersGroup stroke={1} size={16} />
    },
    {
      label: <Link href="/users">Usuarios</Link>,
      key: "2",
      icon: <IconUsersGroup stroke={1} size={16} />
    },
    {
      label: <Link href="/adoptions">Adopciones</Link>,
      key: "3",
      icon: <IconPaw stroke={1} size={16} />
    },
    {
      label: <Link href="/my-animal-reports">Mis Reportes</Link>,
      key: "4",
      icon: <IconHeartStar stroke={1} size={16} />
    },
  ];

  return (
    <Menu mode='inline' items={menuItems} selectedKeys={selectedKey}></Menu>
  );
}