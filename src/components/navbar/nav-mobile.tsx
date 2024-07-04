import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';

import { Links } from '@/types/links';

interface MobileNavProps {
  links: Links[]
}

export default function MobileNav({ links }: MobileNavProps) {
  return (
    <div className='flex md:hidden'>
      <Sheet
      >
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'ghost'}>
            <Menu size={24} className='stroke-leaf' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} style={
          {
            borderRadius: '0 24px 24px 0'
          }
        }>
          <SheetHeader>
          </SheetHeader>
          <div className='flex flex-col items-start gap-3'>
            {
              links.map((link, index) => (
                <Button
                  asChild
                  variant={'ghost'}
                  key={index}
                  className='text-lg transition-all duration-200 ease-in-out hover:text-leaf hover:underline-offset-2'
                >
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </Button>
              ))
            }

          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
