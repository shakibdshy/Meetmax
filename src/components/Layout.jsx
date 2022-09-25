import { Container, Group } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import Header from './Header'
import PrimaryHeader from './PrimarySidebar'
import SecondarySidebar from './SecondarySidebar'

const Layout = ({ children }) => {
    const { asPath } = useRouter();
    const home = asPath === '/';
    const signIn = asPath === '/signin';
    const signUp = asPath === '/signup';
    return (
        <>
            <Header />
            <Container fluid>
                <main>
                    <Group>
                        {
                            !signIn && !signUp && <PrimaryHeader />
                        }
                        <div className='grow'>
                            {children}
                        </div>
                        {
                            home && <SecondarySidebar />
                        }
                    </Group>
                </main>
            </Container>
        </>
    )
}

export default Layout