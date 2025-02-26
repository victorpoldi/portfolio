import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Projects () {
  const t = useTranslations("ProjectsSection");

  return (
    <div className="flex flex-col justify-center m-4">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="text-xl mt-4">{t("description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image src="https://placehold.co/600x400" width={600} height={600} alt="Project 1" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{t("project1")}</h2>
            {/* <p className="mt-2">{t("project1.description")}</p> */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image src="https://placehold.co/600x400" width={600} height={600} alt="Project 2" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{t("project2")}</h2>
            {/* <p className="mt-2">{t("project2.description")}</p> */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image src="https://placehold.co/600x400" width={600} height={600} alt="Project 3" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-2xl font-bold">{t("project3")}</h2>
            {/* <p className="mt-2">{t("project3.description")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
