import Image from "next/image";
import { Layers, Music2, Sparkles } from "lucide-react";

const features = [
  {
    src: "/assets/features/features1.gif",
    title: "Shape the Mood",
    text: "Move from quiet travel to rising tension without hunting through playlists.",
    alt: "Pocket Bard mood controls changing a fantasy scene",
    icon: Music2,
  },
  {
    src: "/assets/features/features2.gif",
    title: "Run Scenes Fast",
    text: "Keep music, ambience, and one-shots within reach while the table stays focused.",
    alt: "Pocket Bard scene controls for tabletop audio",
    icon: Layers,
  },
  {
    src: "/assets/features/features3.gif",
    title: "Build the Moment",
    text: "Layer sound effects and ambience so big story beats land exactly when they should.",
    alt: "Pocket Bard sound effects and ambience controls",
    icon: Sparkles,
  },
];

const stats = [
  ["47+", "free and subscription locations"],
  ["55+", "one-shots and ambiences"],
  ["1 tap", "to change the whole scene"],
];

const InfoSection = () => {
  const [primaryFeature, ...supportingFeatures] = features;

  return (
    <section className="bg-orange-300 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-amber-900">
              Built for live sessions
            </p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Soundscapes that move as quickly as your table does
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-800">
              Pocket Bard keeps the app surface focused on the decisions game
              masters actually make in the moment: where the party is, how
              intense the scene feels, and what sound should land right now.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="grid grid-cols-[44px_1fr] gap-4 rounded-lg bg-white/85 p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-700 text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="mt-1 leading-relaxed text-gray-700">
                        {feature.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
            <article className="overflow-hidden rounded-lg bg-white shadow-lg">
              <Image
                className="w-full bg-stone-100"
                src={primaryFeature.src}
                alt={primaryFeature.alt}
                width={432}
                height={768}
                unoptimized
              />
            </article>

            <div className="grid gap-4">
              <div className="rounded-lg bg-amber-950 p-5 text-white shadow-lg">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-200">
                  At a glance
                </p>
                <dl className="mt-5 grid gap-5">
                  {stats.map(([value, label]) => (
                    <div key={label}>
                      <dt className="text-3xl font-bold">{value}</dt>
                      <dd className="mt-1 text-sm text-stone-300">{label}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {supportingFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="overflow-hidden rounded-lg bg-white shadow-md"
                >
                  <Image
                    className="aspect-[16/10] w-full object-cover object-top bg-stone-100"
                    src={feature.src}
                    alt={feature.alt}
                    width={432}
                    height={768}
                    unoptimized
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
