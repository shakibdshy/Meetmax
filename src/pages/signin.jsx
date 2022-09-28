import React, { useContext, useEffect } from 'react';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Checkbox,
    Container,
    Title,
    Stack,
} from '@mantine/core';
import { IconLockOpen, IconMoodSmile } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookies from "js-cookie";
import { AuthContext } from '../context/AuthContext';

const Signin = () => {
    const form = useForm({
        initialValues: {
            username: '',
            password: '',
        }
    });
    const router = useRouter();
    const { redirect } = router.query;
    const { state, dispatch } = useContext(AuthContext);
    const { user } = state;

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, []);

    // console.log(form.values);

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const url = "https://meetmax-server.cyclic.app/api/auth/signin";
            const { data } = await axios.post(url, form.values);
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
            // Cookies.set("user", data);
            router.push(redirect || '/');
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }

    return (
        <>
            <Container size={620} my={40}>
                <Title
                    align="center"
                    className='text-white'
                >
                    Welcome back!
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    You haven't any account?{' '}
                    <Link href="/">
                        <a>Sign Up</a>
                    </Link>
                </Text>

                <Paper radius="md" p={40} mt={30} style={{ background: "var(--clr-black-600)" }}>
                    <form onSubmit={handleSubmit}>
                        <Stack>
                            <TextInput
                                required
                                size='lg'
                                radius='md'
                                placeholder="Your Username"
                                icon={<IconMoodSmile size={20} />}
                                value={form.values.username}
                                onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                                styles={(theme) => ({
                                    input: {
                                        background: "transparent",
                                    }
                                })}
                            />

                            <PasswordInput
                                required
                                size='lg'
                                radius='md'
                                placeholder="Your password"
                                icon={<IconLockOpen size={16} />}
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                error={form.errors.password && 'Password should include at least 6 characters'}
                                styles={(theme) => ({
                                    input: {
                                        background: "transparent",
                                    }
                                })}
                            />

                            <Checkbox
                                label="Remember me"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Button fullWidth size="md" type="submit">Sign In</Button>
                        </Group>
                        {/* {
                            error && <Text color="red" size="sm" align="center" mt={5}></Text>
                        } */}
                    </form>
                </Paper>
            </Container>
        </>
    );
}

export default Signin;