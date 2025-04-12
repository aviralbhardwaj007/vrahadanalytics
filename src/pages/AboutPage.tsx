
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, Users, Lightbulb } from "lucide-react";

const founders = [
  {
    name: "Dr. Rahul Sharma",
    role: "CEO & Co-Founder",
    bio: "Dr. Sharma has over 15 years of experience in data science and cloud technologies. Before founding Vrahad Analytics, he was the Chief Data Officer at a Fortune 500 company, where he led major digital transformation initiatives.",
    education: "Ph.D. in Computer Science, Stanford University",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Priya Patel",
    role: "CTO & Co-Founder",
    bio: "Priya is a cloud architecture expert with deep experience in AWS and Azure platforms. She previously worked as a Principal Cloud Architect at Microsoft, guiding enterprise clients through complex migrations and implementations.",
    education: "M.S. in Cloud Computing, MIT",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "COO & Co-Founder",
    bio: "Michael brings operational expertise from his previous role as Operations Director at a leading data analytics firm. He specializes in optimizing business processes and ensuring seamless delivery of technical solutions.",
    education: "MBA, Harvard Business School",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  }
];

const timeline = [
  {
    year: "2015",
    title: "Foundation",
    description: "Vrahad Analytics was founded with a vision to bridge the gap between data technology and business outcomes."
  },
  {
    year: "2017",
    title: "Growth Phase",
    description: "Expanded service offerings to include advanced cloud solutions and big data processing capabilities."
  },
  {
    year: "2019",
    title: "Strategic Partnerships",
    description: "Formed strategic partnerships with leading cloud providers and technology companies, becoming a certified partner."
  },
  {
    year: "2021",
    title: "International Expansion",
    description: "Expanded operations internationally, opening offices in Europe and Asia to better serve global clients."
  },
  {
    year: "2023",
    title: "GenAI Pioneer",
    description: "Launched innovative generative AI solutions, establishing Vrahad as a pioneer in enterprise GenAI applications."
  },
  {
    year: "Present",
    title: "Industry Leader",
    description: "Recognized as an industry leader in data analytics and cloud technology consulting services."
  }
];

const values = [
  {
    icon: <Award className="h-10 w-10 text-vrahad-blue" />,
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in every project and service we provide."
  },
  {
    icon: <Users className="h-10 w-10 text-vrahad-purple" />,
    title: "Collaboration",
    description: "We believe in working closely with our clients, understanding their unique needs and challenges."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-vrahad-teal" />,
    title: "Innovation",
    description: "We continuously explore new technologies and methodologies to provide cutting-edge solutions."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-vrahad-blue" />,
    title: "Integrity",
    description: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions."
  }
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-vrahad-blue/10 to-vrahad-purple/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vrahad Analytics</h1>
          <p className="text-slate-700 text-lg max-w-3xl mx-auto mb-8">
            We are a team of passionate technology experts dedicated to helping businesses harness the full potential of their data.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
              <a href="#founders">Meet Our Founders</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#our-story">Our Story</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-vrahad-blue">Mission</h3>
                <p className="text-slate-700">
                  To empower organizations through innovative data and AI solutions that drive transformative business outcomes. We aim to bridge the gap between complex technology and practical business value, making advanced data capabilities accessible and actionable for all businesses.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-vrahad-purple">Vision</h3>
                <p className="text-slate-700">
                  We envision a world where every organization can harness the full potential of their data through intuitive, efficient, and responsible technology solutions. Our goal is to be the trusted partner that enables this data-driven future across industries and geographies.
                </p>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100"
                >
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section id="our-story" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-slate-600">
              Since our founding in 2015, Vrahad Analytics has grown from a small data consultancy to a global leader in technology solutions. Here's a look at our journey over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-vrahad-blue via-vrahad-purple to-vrahad-teal rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-white border-4 border-vrahad-blue flex items-center justify-center">
                      <Clock className="h-4 w-4 text-vrahad-blue" />
                    </div>
                  </div>
                  
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="md:w-1/2 p-6"></div>
                    <div className="md:w-1/2 p-6">
                      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-slate-100">
                        <div className="font-bold text-vrahad-blue mb-1">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Founders</h2>
            <p className="text-slate-600">
              The visionary leaders behind Vrahad Analytics bring decades of combined experience in data science, cloud technology, and business strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold">{founder.name}</h3>
                      <p className="text-blue-200">{founder.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-700 mb-4">{founder.bio}</p>
                  <div className="text-vrahad-blue font-medium">{founder.education}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6 max-w-3xl mx-auto">
              Our leadership team is complemented by a diverse group of technology experts, data scientists, and business consultants who share our passion for innovation and excellence.
            </p>
            <Button asChild className="bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
              <Link to="/contact">Connect With Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-vrahad-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on the Journey</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Partner with Vrahad Analytics to transform your data operations and drive innovation within your organization.
          </p>
          <Button asChild size="lg" className="bg-white text-vrahad-dark hover:bg-blue-100">
            <Link to="/contact">Start Your Data Journey</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
