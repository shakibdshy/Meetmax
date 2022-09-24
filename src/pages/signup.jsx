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
    Anchor,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IconAt, IconCalendar, IconLockOpen, IconMoodSmile, IconMoodSmileBeam } from '@tabler/icons';
import Link from 'next/link';
import axios from 'axios';

export default function Signup(props) {
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            username: '',
            password: '',
            birth: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    console.log(form.values);

    const handleSubmit = async e => {
        e.preventDefault();

        const url = "https://meetmax-server.cyclic.app/api/auth/signup";
        const { data } = await axios.post(url, form.values);

        console.log(data);
    }

    return (
        <>
            <Container size={620} my={40}>
                <Title
                    align="center"
                    className='text-white'
                >
                   Getting Started
                </Title>
                <Text color="dimmed" size="sm" align="center" mt={5}>
                    Already have an account?{' '}
                    <Link href="/signin">
                        <a>Sign In</a>
                    </Link>
                </Text>

                <Paper radius="md" p={40} mt={30} style={{ background: "var(--clr-black-600)" }}>
                    <form onSubmit={handleSubmit}>
                        <Stack>
                            <TextInput
                                required
                                size='lg'
                                radius='md'
                                placeholder="Your name"
                                icon={<IconMoodSmileBeam size={20} />}
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                styles={(theme) => ({
                                    input: {
                                        background: "transparent",
                                    }
                                })}
                            />
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

                            <TextInput
                                required
                                size='lg'
                                radius='md'
                                placeholder="hello@email.com"
                                icon={<IconAt size={20} />}
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                error={form.errors.email && 'Invalid email'}
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

                            <DatePicker
                                inputFormat="YYYY-MM-DD"
                                value={form.values.birth}
                                onChange={(event) => form.setFieldValue('birth', event.toLocaleDateString())}
                                placeholder="Pick date"
                                size='lg'
                                radius='md'
                                icon={<IconCalendar size={20} />}
                                styles={(theme) => ({
                                    input: {
                                        background: "transparent",
                                    }
                                })}
                            />

                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Button fullWidth size="md" type="submit">Register</Button>
                        </Group>
                    </form>
                </Paper>
            </Container>
        </>
    );
}