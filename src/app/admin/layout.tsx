import { AppBreadcrumb, AppFooter, AppHeader, AppSideMenu } from "@/components";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

export default function AdminLayout({ children }: {
  readonly children: React.ReactNode;
}) {
  return (
        <Layout>
            <AppHeader/>
            <Layout hasSider>
              <Sider
                theme="light"
                style={{
                  position: "fixed",
                  top: 64,
                  left: 0,
                  marginRight: "1px solid #f1f1f1",
                  height: "calc(100vh - 64px)"
                 }}
              >
                <AppSideMenu/>
              </Sider>
              <Layout style={{ marginLeft: 200 }}>
                <AppBreadcrumb/>
                <Content
                  style={{
                      padding: "16px",
                      minHeight: "calc(100vh - 64px)"
                    }}
                >
                  <div
                    style={{
                      padding: 24,
                      minHeight: 360,
                      background: "#ffff",
                      borderRadius: 20,
                    }}
                  >
                    {children}
                  </div>
                </Content>
                <AppFooter/>
              </Layout>
            </Layout>
          </Layout>
  );
}
