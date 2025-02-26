'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Locale, usePathname, useRouter, routing } from '../i18n/routing';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from './ui/DropdownMenu';
import { useTransition } from 'react';
import { cn } from '@/src/lib/utils';
import { DownOutlined } from "@ant-design/icons"


export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const changeLocale = (nextLocale: string) => {
    console.log('chamou', { nextLocale });
    nextLocale = nextLocale as Locale;
    startTransition(() => {
      router.replace(
        { pathname },
        { locale: nextLocale }
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'relative px-1 focus-visible:outline-none',
          isPending && 'transition-opacity [&:disabled]:opacity-30'
        )}
      >
         <span className='text-sm'>{t('locale', { locale })}</span>
        <DownOutlined className="inline-block ml-2 align-middle" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={locale} >
          {routing.locales.map((mappedLocale) => (
            <DropdownMenuRadioItem key={mappedLocale} value={mappedLocale} onSelect={() => changeLocale(mappedLocale)}>
              {t('locale', { locale: mappedLocale })}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
