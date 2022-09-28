import React, { useContext, useEffect } from 'react'
import { Container, Group } from '@mantine/core'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router';
import Header from './Header'
import PrimaryHeader from './PrimarySidebar'
import SecondarySidebar from './SecondarySidebar'

const Layout = ({ children }) => {
    const router = useRouter();
    const { state, dispatch } = useContext(AuthContext);
    const { user } = state;

    useEffect(() => {
        if (!user) {
            router.push('/signin?redirect=' + router.asPath);
        }
    }, []);

    const home = router.asPath === '/';
    const signIn = router.asPath === '/signin';
    const signUp = router.asPath === '/signup';
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