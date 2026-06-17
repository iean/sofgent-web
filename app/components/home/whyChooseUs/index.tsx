import React from 'react';
import { Shield, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Architecture Before Build",
    description: "We define data flow, system boundaries, and delivery risk early so the product can scale beyond the first release.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Zap,
    title: "One Team, Faster Delivery",
    description: "AI workflows, backend systems, frontend delivery, and integrations move together instead of across separate vendors.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: Trophy,
    title: "Built for Real Operations",
    description: "The goal is usable software that reduces manual effort, improves visibility, and keeps working after launch.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white pb-40">
      <div className="theme-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why operations teams choose SofGent
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We act like an engineering-led delivery partner, not a broad agency
            menu. The work stays focused on AI apps, internal tools, and
            production-ready SaaS systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${feature.bgColor} ${feature.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
