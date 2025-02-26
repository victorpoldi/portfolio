import { useTranslations } from "next-intl";
import React from "react";

export default function Contact () {
  const t = useTranslations("ContactSection");

  return (
    <div className="flex flex-col justify-center m-4">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="text-xl mt-4">{t("description")}</p>
    </div>
  );
}
