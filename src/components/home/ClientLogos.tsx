
import { useEffect, useState } from "react";

const clients = [
  {
    name: "Amazon Web Services",
    industry: "Cloud Computing",
  },
  {
    name: "Microsoft Azure",
    industry: "Cloud Services",
  },
  {
    name: "Google Cloud",
    industry: "Cloud Platform",
  },
  {
    name: "Oracle",
    industry: "Database Solutions",
  },
  {
    name: "IBM",
    industry: "Technology",
  },
  {
    name: "Databricks",
    industry: "Data Analytics",
  },
  {
    name: "Snowflake",
    industry: "Data Warehouse",
  },
  {
    name: "Tableau",
    industry: "Data Visualization",
  }
];

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("client-logos");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="client-logos" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We've partnered with top companies across industries to deliver exceptional data and AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`
                flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-slate-100 p-6 rounded-lg w-full flex items-center justify-center h-24">
                <h3 className="text-xl font-bold text-slate-700">{client.name}</h3>
              </div>
              <p className="text-slate-600 text-sm mt-2">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
