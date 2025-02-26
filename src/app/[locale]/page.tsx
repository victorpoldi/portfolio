import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/src/components/PageLayout';
import Intro from '@/src/components/sections/Intro';
import Projects from '@/src/components/sections/Projects';
import About from '@/src/components/sections/About';
import Contact from '@/src/components/sections/Contact';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </PageLayout>
  );
}