import { useTranslations } from "next-intl";
import { Button } from "../../../components/ui/Button";
import React from "react";
import PageLayout from "@/src/components/PageLayout";

export default function Projects() {
  const t = useTranslations("ContactPage");

  return (
    <PageLayout>
      <section className="py-24">
        <div className="container max-w-3xl">
          <h1 className='font-bold'>{t('description')}</h1>
          <Button>Primary Button</Button>
        </div>
      </section>
    </PageLayout>
  );
}
