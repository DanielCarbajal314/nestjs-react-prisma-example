import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Flex, Layout, Menu } from 'antd';
import { router } from './pages';
import { RouterProvider } from 'react-router-dom';
import { Content, Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import { ContactModal } from './components';

const queryClient = new QueryClient();
function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <QueryClientProvider client={queryClient}>
            <ContactModal {...{ isOpen, setIsOpen }} />
            <Layout>
                <Header>
                    <Menu
                        style={{ justifyContent: 'end' }}
                        theme="dark"
                        mode="horizontal"
                        items={[
                            {
                                key: 1,
                                label: 'Posts',
                                onClick: () => (window.location.pathname = ''),
                            },
                            {
                                key: 2,
                                label: 'Contact',
                                onClick: () => setIsOpen(true),
                            },
                        ]}
                    />
                </Header>
            </Layout>
            <Content style={{ padding: '2rem' }}>
                <Flex wrap="wrap" gap="large" align="center" justify="center">
                    <RouterProvider router={router} />
                </Flex>
            </Content>
        </QueryClientProvider>
    );
}

export default App;
