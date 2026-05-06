import React from 'react';
import { Shield, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Unwavering Quality",
    description: "Every project is built to perform, with meticulous attention to detail and future scalability in mind.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Zap,
    title: "On-Time Delivery",
    description: "Experience rapid solutions with our cutting-edge technology and streamlined processes.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: Trophy,
    title: "Tailored Solutions",
    description: "We adapt to the specifics of your industry, aligning technology to your strategy for unmatched value.",
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
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations.
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