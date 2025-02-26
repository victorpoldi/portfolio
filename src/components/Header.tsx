import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            VP
          </Link>
        </div>

        <ul className='flex gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/about'>{t('About')}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>{t('Projects')}</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>{t('Contact')}</Link>
          </li>
        </ul>

        <div>
          <LocaleSwitcher />
          <ThemeToggle label={t('theme')}/>
        </div>
      </nav>
    </header>
  )
}