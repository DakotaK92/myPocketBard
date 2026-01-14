import React from "react";

const features = [
  {
    title: "Free Version",
    features: [
      "Access to basic tools",
      "Limited storage",
      "Community support",
    ],
    color: "bg-gray-200",
  },
  {
    title: "Paid Version",
    features: [
      "All free features",
      "Unlimited storage",
      "Priority support",
      "Advanced analytics",
    ],
    color: "bg-orange-200",
  },
];

const Price = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 p-8 bg-gray-50">
      {features.map((plan) => (
        <div
          key={plan.title}
          className={`flex-1 p-6 rounded-xl shadow-md ${plan.color} flex flex-col`}
        >
          <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
          <ul className="flex-1 space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-xl"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Price;
