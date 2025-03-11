"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Logo from '@/assets/logo-white.svg'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import React from 'react'
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Bg from './../../assets/contact-bg.png';
import Link from "next/link"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name is required",
    }),
    lastname: z.string().min(2, {
        message: "Last name is required",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
})

export default function page() {
    const [mailed, setMailed] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: '',
            email: '',
            phone: '',

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setMailed(!mailed)
        }, 2500)
    }

    return (
        <main>
            <section className="flex items-center h-screen px-6 md:px-14 lg:pr-0 pt-32 pb-12">
                <div className="grid w-full lg:grid-cols-2 gap-14 items-center">
                    <div className="space-y-9">
                        <h4 className='text-5xl font-medium'>Contact us</h4>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
                                <FormField
                                    control={form.control}
                                    name="firstname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Felix"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last name</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Brown"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="mail@example.com"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="+1 234 567 89" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-[#32CD32] py-3 block w-full h-fit text-lg md:text-xl text-[#1A1A1A] font-semibold">
                                    {
                                        loading ?
                                            <span className="flex items-center justify-center gap-3">
                                                <Loader2 className="animate-spin" />Please wait
                                            </span> : 'Submit Details'
                                    }
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="lg:block hidden relative">
                        <Image
                            src={Bg}
                            alt="Background"
                            sizes='100%'
                            className="h-full w-full object-center object-cover"
                        />
                    </div>
                </div>
            </section>
            {
                mailed && (
                    <div className="fixed inset-0 px-6 bg-black/80 backdrop-blur-2xl z-50 flex items-center justify-center">
                        <div className="max-w-lg border-[0.5px] border-[#32CD32] px-6 py-10 text-center flex items-center justify-center gap-5 flex-col">
                            <Image
                                src={Logo}
                                alt='Logo'
                                sizes='100%'
                                className='h-16'
                            />
                            <p className='text-lg'>A member of our team will reach out to you for more
                                details and information! Thank for choosing us for
                                all your rental car needs</p>
                            <Link href={'/'}
                                className='inline-block bg-[#32CD32] py-3 px-10 max-w-sm w-full md:max-w-[250px] text-lg text-black font-medium rounded-lg'
                            >
                                Back to home
                            </Link>
                        </div>
                    </div>
                )
            }
        </main>
    )
}

