import React from "react";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function SectionComponent() {

  async function getSections() {
    const session = await getServerAuthSession();
    if (!session?.user) return null;
  
    let sections = await api.section.getSections();
    return sections;
  }

  let sections = await getSections();

  return (
    <div className="max-w-xs overflow-hidden bg-gray-800 shadow-md">
      <div className="bg-gray-700 px-4 py-2 text-xl font-bold text-white">
        Secciones
      </div>
      <ul className="divide-y divide-gray-600">
{/*       {sections?.map((item) => (
          <li key={item.id} className="px-4 py-3">
            <span className="text-white">{item.name}</span>
          </li>
        ))} */}
      </ul>
    </div>
  );
}