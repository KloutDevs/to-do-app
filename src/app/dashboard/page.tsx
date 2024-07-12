"use client";

import SectionComponent from "@/app/_components/SectionComponent";
import TasksComponent from "@/app/_components/TasksComponent";
import CompletedComponent from "@/app/_components/CompletedComponent";


export default async function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          To <span className="text-[hsl(280,100%,70%)]">Do</span> App
        </h1>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-8">
            <button className="rounded-lg bg-rose-400 p-3 text-white">
              <span>Añadir seccion</span>
              <input></input>
            </button>
            <button className="rounded-lg bg-rose-400 p-3 text-white">
              <span>Añadir tarea</span>
            </button>
          </div>
          <div className="flex flex-row space-x-8">
            <SectionComponent />
            <TasksComponent tasks={["Tarea 1", "Tarea 2"]} />
            <CompletedComponent
              completeds={["Tarea completada 1", "Tarea completada 2"]}
            />
          </div>
        </div>
      </div>
    </main>
  );


}
