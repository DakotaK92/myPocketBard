const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Start running atmospheric sessions right away.",
    features: [
      "Fantasy Essentials scenes",
      "Core music and ambience controls",
      "One-shots for common table moments",
    ],
    color: "bg-gray-200",
  },
  {
    title: "Open Worlds",
    price: "$6.99/mo",
    description: "Unlock the larger library for long campaigns and new genres.",
    features: [
      "Everything in Free",
      "30+ additional locations",
      "Sci-Fi, Horror, Desert, and more",
      "New music, ambience, and one-shots over time",
    ],
    color: "bg-orange-200",
  },
];

const Price = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Start free, expand when your world does
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Keep the essentials forever, or subscribe for the full sound library.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`flex flex-col rounded-lg p-6 shadow-md ${plan.color}`}
            >
              <h3 className="text-3xl font-bold">{plan.title}</h3>
              <p className="mt-3 text-4xl font-bold">{plan.price}</p>
              <p className="mt-3 text-gray-700">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
