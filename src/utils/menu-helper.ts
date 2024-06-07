import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>['items'][number];

export const routeToKeyMap: { [key: string]: string } = {
    "/admin/dashboard": "1",
    "/admin/users": "2",
    "/admin/adoptions": "3",
    "/admin/my-animal-reports": "4",
};