'use client'

import React, { useEffect, useState } from 'react'

import Product from "@/interfaces/Product"

// shadcn
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from '@/components/ui/label';

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image';


const formSchema = z.object({
    id: z.number(),
    title: z.string().min(5),
    image: z.string(),
    price: z.string().min(3),
    description: z.string().min(10)
})

const ProductFormRegister = () => {
    const [products, setProducts] = useState<Product[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: 0,
            title: '',
            image: '',
            price: '',
            description: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        values.id = products.length + 1
        setProducts([...products, values])
    }

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div>
            <div>
                <Form {...form}>
                    <div className='p-5'>
                        <div className='text-center mb-5'>
                            <h1 className='text-xl font-bold'>Cadastrar produto</h1>
                        </div>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label>Nome do produto:</Label>
                                        <FormControl>
                                            <Input placeholder="Ex: Camiseta casual" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label>Imagem do produto (URL):</Label>
                                        <FormControl>
                                            <Input placeholder="https://exemplo.com/imagem.jpg" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label>Preço:</Label>
                                        <FormControl>
                                            <Input type="number" placeholder="Ex: 10.00" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label>Descrição:</Label>
                                        <FormControl>
                                            <Textarea placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className='w-full' type="submit">Cadastrar</Button>
                        </form>
                    </div>
                </Form>
            </div>
            <div className='p-5'>
                {products.length > 0 ? (
                    <>
                        {products.map((product) => (
                            <div key={product.id} className='border-b mb-2'>
                                <div className='flex'>
                                    <div className='w-1/4 border rounded bg-gray-100 p-3 me-2 mb-2'>
                                        <img src={product?.image} className='' alt='' />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>{product.title}</p>
                                        <div className='text-sm'>
                                            <span>Preço: </span>
                                            <span>R$ {product.price}</span>
                                        </div>
                                        <div>
                                            {product.description}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </>
                ) :
                    <div className="text-xl font-bold text-center">Lista vazia</div>
                }

            </div>
        </div>
    )
}

export default ProductFormRegister