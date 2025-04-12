
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cloud, GitMerge, Zap, Server, BarChart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "aws-azure",
    icon: <Cloud className="h-12 w-12 text-vrahad-blue" />,
    title: "AWS & Azure Development",
    description: "Expert development and support services for AWS and Azure cloud platforms.",
    longDescription: "Our team provides comprehensive development, migration, and support services for AWS and Azure cloud platforms. We help businesses design, implement, and manage scalable cloud infrastructures tailored to their specific needs.",
    features: [
      "Cloud architecture design and implementation",
      "Infrastructure as Code (IaC) using Terraform/CloudFormation",
      "Serverless application development",
      "CI/CD pipeline integration",
      "Managed cloud services configuration",
      "Monitoring and alerting implementation"
    ]
  },
  {
    id: "data-migration",
    icon: <GitMerge className="h-12 w-12 text-vrahad-purple" />,
    title: "Data Migration",
    description: "Seamless data migration services ensuring zero data loss and minimal downtime.",
    longDescription: "We specialize in planning and executing complex data migrations across various platforms and environments. Our methodical approach ensures data integrity, security, and business continuity throughout the migration process.",
    features: [
      "Migration assessment and strategy development",
      "Data mapping and transformation planning",
      "ETL process design and implementation",
      "Validation and testing protocols",
      "Rollback planning and risk mitigation",
      "Post-migration support and optimization"
    ]
  },
  {
    id: "big-data",
    icon: <Database className="h-12 w-12 text-vrahad-teal" />,
    title: "Big Data Processing",
    description: "Process and analyze large volumes of data to extract valuable insights.",
    longDescription: "Our big data processing services enable organizations to handle massive datasets efficiently. We implement scalable solutions that transform raw data into actionable intelligence, driving informed business decisions.",
    features: [
      "Distributed processing architecture design",
      "Data lake and data warehouse implementation",
      "Batch and stream processing systems",
      "Real-time analytics solutions",
      "Data quality management frameworks",
      "Advanced analytics and machine learning integration"
    ]
  },
  {
    id: "databricks",
    icon: <Server className="h-12 w-12 text-vrahad-blue" />,
    title: "Databricks Support",
    description: "Comprehensive development and administrative support for Databricks.",
    longDescription: "As certified Databricks partners, we provide expert development, implementation, and administrative support for the Databricks platform. Our services help organizations maximize the value of their data by leveraging the full potential of Databricks.",
    features: [
      "Databricks workspace setup and configuration",
      "Delta Lake implementation and optimization",
      "MLflow integration for ML lifecycle management",
      "Spark job optimization and performance tuning",
      "Notebook development and automation",
      "Security and governance implementation"
    ]
  },
  {
    id: "genai",
    icon: <Zap className="h-12 w-12 text-vrahad-purple" />,
    title: "GenAI Solutions",
    description: "Cutting-edge generative AI solutions tailored to your business needs.",
    longDescription: "We develop and implement innovative generative AI solutions that transform business processes, enhance customer experiences, and drive competitive advantage. Our expertise spans across various GenAI technologies and use cases.",
    features: [
      "Custom large language model (LLM) implementation",
      "AI-powered content generation systems",
      "Conversational AI and chatbot development",
      "Computer vision and image generation solutions",
      "AI-driven predictive analytics",
      "Responsible AI governance frameworks"
    ]
  },
  {
    id: "cost-optimization",
    icon: <BarChart className="h-12 w-12 text-vrahad-teal" />,
    title: "Cost Optimization",
    description: "Strategic analysis and optimization of your technology costs.",
    longDescription: "Our cost optimization services help businesses identify inefficiencies and implement strategies to reduce technology expenses while maintaining or improving performance. We deliver actionable recommendations based on thorough analysis and industry best practices.",
    features: [
      "Cloud spending analysis and reporting",
      "Resource rightsizing and utilization planning",
      "Reserved instance and saving plans optimization",
      "License management and consolidation",
      "Storage tiering and data lifecycle management",
      "Performance-based optimization recommendations"
    ]
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-vrahad-blue/10 to-vrahad-purple/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-slate-700 text-lg max-w-3xl mx-auto mb-8">
            We offer comprehensive technology consulting services focused on data, cloud, and AI
            solutions to help businesses innovate and transform.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="mb-16 last:mb-0 scroll-mt-24"
              id={service.id}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-vrahad-blue/10 to-vrahad-purple/10 aspect-video flex items-center justify-center p-12">
                        <div className="bg-white rounded-full p-8 shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-slate-700 mb-6">{service.longDescription}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-vrahad-teal mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
                    <Link to="/contact">Request Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-vrahad-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Strategy?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Contact our team of experts for a personalized consultation on how our services can benefit your organization.
          </p>
          <Button asChild size="lg" className="bg-white text-vrahad-dark hover:bg-blue-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
