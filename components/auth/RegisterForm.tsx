'use client';
import React from 'react';
import BackButton from '@/components/BackButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email',
    }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  confirmPassword: z.string().min(1, {
    message: 'Password is required',
  }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const router = useRouter();
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push('/');
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Sign up by entering the info below</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Form {...form}>
            <form
              className='space-y-6'
              onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='dark:bg-slate-500 bg-slate-100 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                        placeholder='Enter Name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='dark:bg-slate-500 bg-slate-100 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                        placeholder='Enter Email'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='dark:bg-slate-500 bg-slate-100 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                        placeholder='Enter Password'
                        {...field}
                        type='password'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='dark:bg-slate-500 bg-slate-100 border-0 focus-visible:ring-offset-0 text-black dark:text-white'
                        placeholder='Confirm Password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='w-full'>Sign in</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default RegisterForm;
