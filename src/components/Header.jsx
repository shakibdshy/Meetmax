import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ActionIcon, Avatar, Box, Container, createStyles, Group, Menu, Select, Text, TextInput, Title, UnstyledButton, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import Logo from '../assets/logo.png'
import LogoW from '../assets/logo-w.png'
import english from '../assets/english.png'
import french from '../assets/french.png'
import german from '../assets/german.png'
import italian from '../assets/italian.png'
import polish from '../assets/polish.png'
import { IconArrowLeft, IconArrowRight, IconChevronDown, IconMoonStars, IconSearch, IconSun } from '@tabler/icons';
import Link from 'next/link';
import { AuthContext } from '../context/AuthContext';

const data = [
    { label: 'English', image: english },
    { label: 'German', image: german },
    { label: 'Italian', image: italian },
    { label: 'French', image: french },
    { label: 'Polish', image: polish },
];
const useStyles = createStyles((theme, { opened }) => ({
    control: {
        width: 200,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
            }`,
        transition: 'background-color 150ms ease',
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[opened ? 5 : 6]
                : opened
                    ? theme.colors.gray[0]
                    : theme.white,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    label: {
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
    },

    icon: {
        transition: 'transform 150ms ease',
        transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
}));

const Header = () => {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const { asPath } = useRouter();
    const { state, dispatch } = useContext(AuthContext);
    const { user } = state;
    console.log(user);
    const signIn = asPath === '/signin';
    const signUp = asPath === '/signup';
    const [opened, setOpened] = useState(false);
    const { classes } = useStyles({ opened });
    const [selected, setSelected] = useState(data[0]);
    const items = data.map((item) => (
        <Menu.Item
            icon={<Image src={item.image} width={18} height={18} />}
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <>
            <header className='py-6'>
                <Container fluid>
                    <Group position="apart" align='center'>
                        <Box>
                            <Link href='/'>
                                <a>
                                    <Image src={dark ? LogoW : Logo} alt='Logo' width={150} height='45' />
                                </a>
                            </Link>
                        </Box>
                        {
                            !signIn && !signUp &&
                            <div className='grow max-w-xl'>
                                <TextInput
                                    icon={<IconSearch size={18} stroke={1.5} />}
                                    radius="xl"
                                    size="md"
                                    rightSection={
                                        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                                            {theme.dir === 'ltr' ? (
                                                <IconArrowRight size={18} stroke={1.5} />
                                            ) : (
                                                <IconArrowLeft size={18} stroke={1.5} />
                                            )}
                                        </ActionIcon>
                                    }
                                    placeholder="Search anything"
                                    rightSectionWidth={42}
                                />
                            </div>
                        }
                        <div>
                            <Group>
                                <ActionIcon
                                    size="xl"
                                    variant="default"
                                    onClick={() => toggleColorScheme()}
                                    title="Toggle color scheme"
                                >
                                    {dark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
                                </ActionIcon>
                                {
                                    !signIn && !signUp ?
                                        <Group
                                            spacing="sm"
                                            style={{

                                                background: dark ? '#212833' : 'transparent',
                                                borderRadius: '6px',
                                                paddingLeft: '15px',
                                                paddingTop: '2px',
                                                paddingBottom: '2px'
                                            }}>
                                            <Text size="md" weight='600'>
                                                {user?.name}
                                            </Text>
                                            <Avatar size={45} src='https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80' radius={6} />
                                        </Group>
                                        :
                                        <Menu
                                            onOpen={() => setOpened(true)}
                                            onClose={() => setOpened(false)}
                                            radius="md"
                                            width="target"
                                        >
                                            <Menu.Target>
                                                <UnstyledButton className={classes.control}>
                                                    <Group spacing="xs">
                                                        <Image src={selected.image} width={22} height={22} />
                                                        <span className={classes.label}>{selected.label}</span>
                                                    </Group>
                                                    <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
                                                </UnstyledButton>
                                            </Menu.Target>
                                            <Menu.Dropdown>{items}</Menu.Dropdown>
                                        </Menu>
                                }
                            </Group>
                        </div>
                    </Group>
                </Container>
            </header>

        </>
    )
}

export default Header