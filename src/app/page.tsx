import RecentProjects from "@/components/RecentProjects";
import { Vortex } from "@/components/Vortex";

export default function Home() {
  return (
    <main className="pt-32 bg-primary">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <p className="text-indigo-200 text-xs md:text-md max-w-xl uppercase mb-4 text-center">
          Web application built with Next.js
        </p>
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Software Engineer
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-4 text-center">
          Boris Damianov
        </p>
      </Vortex>
      <RecentProjects />
    </main>
  );
}
