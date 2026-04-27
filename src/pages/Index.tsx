import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // JSON-LD for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibidapo Isaac",
    alternateName: ["Temzy Marketer", "Isaac Scaling"],
    jobTitle: "Digital Growth Architect",
    description:
      "Digital solutions expert helping African businesses, creators and Skool communities scale online with conversion-focused websites, marketing and community systems.",
    url: "https://temzymarketer.com",
    sameAs: [
      "https://www.instagram.com/temzymarketer",
      "https://www.fiverr.com/temzymarketer",
      "https://helpbnk.com/@temzymarketer",
      "https://www.skool.com/@temzy-marketer-7857",
      "https://www.pinterest.com/temzymarketer/",
    ],
    knowsAbout: [
      "Skool Community Management",
      "Shopify Design",
      "Digital Marketing",
      "Web Redesign",
      "YouTube Channel Setup",
      "Branding",
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
