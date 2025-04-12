
import { ArrowRight, Database, Cloud, GitMerge, Zap, Server, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Cloud className="h-10 w-10 text-vrahad-blue" />,
    title: "AWS & Azure Development",
    description: "Expert development and support services for AWS and Azure cloud platforms to optimize your infrastructure."
  },
  {
    icon: <GitMerge className="h-10 w-10 text-vrahad-purple" />,
    title: "Data Migration",
    description: "Seamless data migration services ensuring zero data loss and minimal downtime for your business operations."
  },
  {
    icon: <Database className="h-10 w-10 text-vrahad-teal" />,
    title: "Big Data Processing",
    description: "Process and analyze large volumes of data to extract valuable insights for informed decision making."
  },
  {
    icon: <Server className="h-10 w-10 text-vrahad-blue" />,
    title: "Databricks Support",
    description: "Comprehensive development and administrative support for Databricks to maximize your data platform potential."
  },
  {
    icon: <Zap className="h-10 w-10 text-vrahad-purple" />,
    title: "GenAI Solutions",
    description: "Cutting-edge generative AI solutions tailored to your business needs for automation and innovation."
  },
  {
    icon: <BarChart className="h-10 w-10 text-vrahad-teal" />,
    title: "Cost Optimization",
    description: "Strategic analysis and optimization of your technology costs to improve efficiency and reduce overhead."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Services</h2>
          <p className="text-slate-600 text-lg">
            We deliver cutting-edge technology solutions to help businesses transform their data operations and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-vrahad-blue font-medium group-hover:text-vrahad-purple transition-colors"
                >
                  Learn more 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
