"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const people = [
  {
    name: "Zack",
    role: "Graphic Designer",
    image: "/assets/images/Zack.png",
    description:
      "Zack shapes the visual language of Pocket Bard, turning fantasy audio tools into an interface that feels playful, readable, and full of character.",
    focus: "Brand, illustration, interface polish",
  },
  {
    name: "Chase",
    role: "Composer",
    image: "/assets/images/Chase.png",
    description:
      "Chase writes expressive music that can sit quietly under a scene or swell when the table turns toward danger.",
    focus: "Themes, transitions, emotional pacing",
  },
  {
    name: "Janette",
    role: "Creative Producer",
    image: "/assets/images/Janette.png",
    description:
      "Janette helps connect the team’s ideas into a cohesive experience, keeping the product useful for real game masters at the table.",
    focus: "Creative direction, production, content flow",
  },
  {
    name: "Jason",
    role: "App Developer",
    image: "/assets/images/Jason.png",
    description:
      "Jason builds the app experience behind the scenes, making sure scene changes, audio controls, and session tools stay fast and reliable.",
    focus: "App architecture, interaction, performance",
  },
  {
    name: "Nick",
    role: "Audio Designer",
    image: "/assets/images/Nick.png",
    description:
      "Nick crafts detailed ambiences and sound effects that help locations feel inhabited, specific, and ready for improvisation.",
    focus: "Ambience, sound effects, scene texture",
  },
];

const Crew = () => {
  const [current, setCurrent] = useState(0);
  const featured = people[current];

  const nextPerson = () => {
    setCurrent((prev) => (prev + 1) % people.length);
  };

  const previousPerson = () => {
    setCurrent((prev) => (prev - 1 + people.length) % people.length);
  };

  return (
    <section className="bg-gradient-to-r from-amber-500/35 to-amber-700/60 px-6 py-16 text-stone-950 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-amber-800">
                Meet the crew
              </p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                The people behind the music, art, and app magic
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-800">
                Pocket Bard is built by a small team of artists, composers, and
                makers who care about keeping game night immersive without
                making the tools get in the way.
              </p>
            </div>

            <div className="hidden rounded-lg bg-white/75 p-5 shadow-sm lg:block">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-800">
                Featured focus
              </p>
              <p className="mt-3 text-2xl font-bold">{featured.focus}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[440px] overflow-hidden rounded-lg bg-orange-300 shadow-2xl">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(min-width: 1024px) 36vw, (min-width: 768px) 44vw, 100vw"
                className="object-cover object-top"
                priority={current === 0}
              />
            </div>

            <div className="flex flex-col rounded-lg bg-white p-6 text-stone-950 shadow-2xl">
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                  {featured.role}
                </p>
                <h3 className="mt-2 text-4xl font-bold">{featured.name}</h3>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                  {featured.description}
                </p>

                <div className="mt-6 rounded-lg bg-orange-100 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-800">
                    Focus
                  </p>
                  <p className="mt-2 text-lg font-bold">{featured.focus}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-5">
                <div className="text-sm text-stone-500">
                  {current + 1} of {people.length}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={previousPerson}
                    aria-label="Previous crew member"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 transition-colors hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextPerson}
                    aria-label="Next crew member"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {people.map((person, index) => {
            const isActive = index === current;

            return (
              <button
                key={person.name}
                onClick={() => setCurrent(index)}
                aria-pressed={isActive}
                className={`group overflow-hidden rounded-lg border text-left transition-all focus:outline-none focus:ring-2 focus:ring-amber-700 ${
                  isActive
                    ? "border-amber-700 bg-white text-stone-950"
                    : "border-white/60 bg-white/70 text-stone-950 hover:border-amber-700"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-orange-300">
                  <Image
                    src={person.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 50vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold">{person.name}</p>
                  <p
                    className={`mt-1 text-sm ${
                      isActive ? "text-stone-700" : "text-stone-600"
                    }`}
                  >
                    {person.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Crew;
