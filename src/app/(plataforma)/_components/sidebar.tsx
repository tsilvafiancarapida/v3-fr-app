'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import clsx from 'clsx';
import {
  Banknote,
  ChevronLeft,
  ChevronRight,
  FileBadge2,
  FileTerminal,
  Home,
  List,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '../../../../public/logo.svg';
import Image from 'next/image';
import { Collapsible } from '@/components/ui/collapsible';
import { CollapsibleContent } from '@radix-ui/react-collapsible';

export function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className='flex'>
      <aside
        className={clsx(
          'flex flex-col border-r bg-background transition-all duration-300 p-3 h-full',
          {
            'w-20': isCollapsed,
            'w-64': !isCollapsed,
            'hidden md:flex md:fixed': true,
          }
        )}
      >
        <div className='flex justify-center gap-4'>
          {isCollapsed && (
            <Image
              src={Logo}
              alt='Logo Fiança Rápida'
              priority
              quality={100}
              className='w-12 h-auto mb-8'
            />
          )}
          {!isCollapsed && (
            <div className='flex items-center gap-2 mb-6 mt-4'>
              <Image
                src={Logo}
                alt='Logo Fiança Rápida'
                priority
                quality={100}
                className='w-8 h-auto'
              />
              <span className='font-black text-xl text-primary'>
                FIANÇA RÁPIDA
              </span>
            </div>
          )}
        </div>
        <Button
          className='bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed ? (
            <ChevronLeft className='w-12 h-12' />
          ) : (
            <ChevronRight className='w-12 h-12' />
          )}
        </Button>
        {isCollapsed && (
          <nav className='flex flex-col items-center gap-1 overflow-hidden mt-2'>
            <SidebarLink
              href='/'
              icon={<Home />}
              label='Dashboard'
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            <SidebarLink
              href='/simulacoes'
              icon={<FileTerminal />}
              label='Simulações'
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
            <SidebarLink
              href='/propostas'
              icon={<FileBadge2 />}
              label='Propostas'
              pathname={pathname}
              isCollapsed={isCollapsed}
            />
          </nav>
        )}

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className='flex flex-col gap-1 overflow-hidden'>
              <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                Menu
              </span>
              <SidebarLink
                href='/'
                icon={<Home />}
                label='Dashboard'
                pathname={pathname}
                isCollapsed={isCollapsed}
              />

              <span className='text-sm text-gray-400 font-medium mt-1 uppercase'>
                Propostas
              </span>
              <SidebarLink
                href='/simulacoes'
                icon={<FileTerminal />}
                label='Simulações'
                pathname={pathname}
                isCollapsed={isCollapsed}
              />

              <SidebarLink
                href='/propostas'
                icon={<FileBadge2 />}
                label='Propostas'
                pathname={pathname}
                isCollapsed={isCollapsed}
              />
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </aside>
      <div
        className={clsx('flex flex-1 flex-col transition-all duration-300', {
          'md:ml-20': isCollapsed,
          'md:ml-64': !isCollapsed,
        })}
      >
        <header className='md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-10 sticky top-0 bg-white'>
          <Sheet>
            <div className='flex items-center gap-4'>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  className='md:hidden'
                  onClick={() => setIsCollapsed(false)}
                >
                  <List className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <h1 className='text-base md:text-lg font-semibold'>
                Menu Fiança Rápida
              </h1>
            </div>
            <SheetContent
              side='right'
              className='sm:max-w-xs text-black px-4 py-2'
            >
              <SheetTitle>Fiança Rápida</SheetTitle>
              <SheetDescription>Menu</SheetDescription>
              <nav className='grid gap-2 text-base pt-5'>
                <SidebarLink
                  href='/'
                  icon={<Home />}
                  label='Dashboard'
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
                <SidebarLink
                  href='/simulacoes'
                  icon={<FileTerminal />}
                  label='Simulações'
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
                <SidebarLink
                  href='/propostas'
                  icon={<FileBadge2 />}
                  label='Propostas'
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className='flex-1 py-4 px-2 md:p-6'>{children}</main>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsed: boolean;
}

function SidebarLink({
  href,
  icon,
  label,
  pathname,
  isCollapsed,
}: SidebarLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          'flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors',
          {
            'bg-primary text-white': pathname === href,
            'hover:bg-primary/50 text-gray-700': pathname === href,
          }
        )}
      >
        <span className='w-6 h-6'>{icon}</span>
        {!isCollapsed && <span className='font-semibold'>{label}</span>}
      </div>
    </Link>
  );
}
