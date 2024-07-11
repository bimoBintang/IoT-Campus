// 'use client'

// import { getDataUser } from '@/hooks/getData'
// import { HeartIcon, LogOut, ShoppingBag, UserIcon } from 'lucide-react'
// import { signOut, useSession } from 'next-auth/react'
// import Link from 'next/link'
// import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
// import { Skeleton } from '../ui/skeleton'
// import UserAvatar from './user-avatar'

// export default function UserAccountNav() {
//   const { data: session } = useSession()
//   const {
//     users,
//     error,
//     isLoading,
//   } = getDataUser()

//   if (isLoading) return <Skeleton className='w-28 h-10 rounded-xl' />

//   if (error) return null

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className='outline-none'>
//         <UserAvatar user={{
//           image: users?.image || null,
//           name: users?.name || null,
//         }}
//           className='ring-2 ring-from-leaf ring-offset-2 ring-offset-background rounded-full w-10 h-10 overflow-hidden bg-background hover:ring-leaf transition-all duration-300 ease-in-out cursor-pointer'
//         />
//       </DropdownMenuTrigger>

//       <DropdownMenuContent className='bg-white' align='end'>
//         <div className='flex items-center justify-center gap-2 p-2'>
//           <div className='flex flex-col space-y-1 leading-none'>
//             <p className='text-sm font-medium'>{session?.user.name}</p>
//             <p className='w-[200px] truncate text-xs text-muted-foreground'>
//               {users?.email}
//             </p>
//           </div>
//         </div>

//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem asChild className='cursor-pointer'>
//             <Link href='/account'>
//               <UserIcon className='mr-2 h-4 w-4' aria-hidden='true' />
//               Akun
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem asChild className='cursor-pointer'>
//             <Link href='/history'>
//               <ShoppingBag className='mr-2 h-4 w-4' aria-hidden='true' />
//               Riwayat 
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem
//           onClick={() => signOut()}
//           className='cursor-pointer'
//           asChild
//         >
//           <div className='text-rose-500'>
//             <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
//             Keluar
//           </div>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
