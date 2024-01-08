'use client'
// shadcn
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation"

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from "@/components/Contexts/AuthContext"

import { useSession, signIn, signOut } from "next-auth/react"

const formSchema = z.object({
    username: z.string().min(4),
    password: z.string().min(8),
    role: z.string().min(1)
})

const LoginForm: React.FC = () => {
    const { login } = useAuth()

    const { data: session } = useSession()
    console.log(session)

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
            role: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        login(values);
        router.push('/')
    }


    return (
        <>
            <div className='h-full'>
                <div>
                    <div className='lg:bg-white lg:border lg:rounded lg:w-1/3 px-6 py-10 lg:shadow-lg mx-auto lg:my-10'>
                        <div>
                            <img src='/svg/login.svg' className='w-4/6 lg:w-4/12 mx-auto mb-6' />
                            <Form {...form}>
                                <div className='bg-'>
                                    <div className='text-center mb-5'>
                                        <h1 className='text-xl font-bold'>Bem vindo de volta!</h1>
                                    </div>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                        <FormField
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Usuário, email ou telefone" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Senha" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="role"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Select onValueChange={field.onChange}>
                                                            <SelectTrigger className="w-[180px]">
                                                                <SelectValue placeholder="Cargo" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Cliente">Cliente</SelectItem>
                                                                <SelectItem value="Lojista">Lojista</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='text-right text-sm'>
                                            <Link href="/auth/reset" className="text-blue-600 hover:underline">Esqueceu a senha?</Link>
                                        </div>
                                        <Button className='w-full' type="submit">Entrar</Button>
                                    </form>
                                </div>
                            </Form>
                        </div>
                        <div className='flex flex-col justify-center flex-wrap items-center mt-3 z-10'>
                            <div className='text-xs mb-3'>Ou entre com</div>
                            <Button onClick={(e) => signIn('github')} variant="outline" className="w-12 h-12 flex items-center justify-center shadow-sm rounded-full p-0">
                                <Image src="/svg/github.svg" width={32} height={32} alt="" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/svg/loginFooter.svg" className='w-full fixed bottom-0 -z-10' />
        </>
    )
}

export default LoginForm