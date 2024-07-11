import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "./sign-form";




export default function SignUpPage() {
    return (
        <div>
            <Card className='max-w-[500px] min-w-[350px] xl:w-[500px]'>
                <CardHeader className='items-center'>
                <CardTitle className='text-leaf font-semibold text-lg'>
                    Buat Akun Baru
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className='flex flex-col items-center gap-4'>
                    <RegisterForm />
                    <p className='text-sm'>
                    <span className='mr-1'>Sudah punya akun?</span>
                    <Link href='/sign-in' className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>Masuk</Link>
                    </p>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}