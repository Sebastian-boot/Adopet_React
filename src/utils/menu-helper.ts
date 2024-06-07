import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>['items'][number];

export const routeToKeyMap: { [key: string]: string } = {
    "/dashboard": "1",
    "/users": "2",
    "/adoptions": "3",
    "/my-animal-reports": "4",
};