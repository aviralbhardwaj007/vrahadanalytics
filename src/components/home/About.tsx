
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const about = {
  title: "Data-Driven Excellence",
  subtitle: "Why Choose Vrahad Analytics",
  description: "At Vrahad Analytics, we combine deep technical expertise with business acumen to deliver transformative data and AI solutions. Our team of experienced consultants works closely with you to understand your unique challenges and develop customized strategies.",
  features: [
    "Industry-leading expertise in AWS and Azure cloud platforms",
    "Specialized in data migration and transformation projects",
    "Advanced big data processing and analytics capabilities",
    "Certified Databricks development and administration team",
    "Proven cost optimization methodologies",
    "Cutting-edge GenAI implementation and integration"
  ],
  stats: [
    { value: "98%", label: "Client satisfaction" },
    { value: "150+", label: "Projects delivered" },
    { value: "40+", label: "Technology experts" },
    { value: "12+", label: "Years of experience" }
  ]
};

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-vrahad-blue/10 to-vrahad-purple/10 rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-8">
                  {about.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-vrahad-blue mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-vrahad-blue/20 to-vrahad-purple/20 rounded-2xl blur-lg transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-2">{about.title}</h2>
            <div className="text-vrahad-purple font-semibold mb-4">{about.subtitle}</div>
            <p className="text-slate-700 mb-6">{about.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {about.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-vrahad-teal mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
              <Link to="/about">About Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
