import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import LoginForm from './sign-form'
import { getServerSession } from 'next-auth'
import { AuthOpations } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function SignInPage() {
  const session = await getServerSession(AuthOpations)
  if (session) {
    return redirect('/')
  }

  return (
    <div className='flex items-center justify-center my-28 w-full '>
      <Card className='max-w-[500px] min-w-[350px] xl:w-[500px]'>
        <CardHeader className='items-center'>
            <Image src="" alt="" />
            
          <CardTitle className='text-leaf font-semibold text-lg'>
            Masuk Akun Anda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center gap-4'>
            <LoginForm />
            <p className='text-sm'>
              <span className='mr-1'>Belum punya akun?</span>
              <Link href='/auth/sign-up'
                className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>
                Daftar
              </Link>
            </p>
            <Separator className='mt-2 w-[80%]' />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
