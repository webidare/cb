import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Droplet, Phone, Mail, MapPin, Clock, CheckCircle, Menu, X, Award, Users, Clock24, ThumbsUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Droplet className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">Sebby Pump Services</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "Gallery", "Why Us", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get a Quote</Button>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              {["Home", "Services", "Gallery", "Why Us", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Get a Quote</Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Expert Plumbing Services in Yogyakarta</h1>
            <p className="text-xl mb-8">Fast, reliable, and professional pump and plumbing solutions</p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
              Get a Free Quote
            </Button>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Pump Installation",
                "Pipe Repair",
                "Drain Cleaning",
                "Water Heater Services",
                "Leak Detection",
                "Emergency Plumbing"
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600">Professional and reliable {service.toLowerCase()} services for your home or business.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Pump installation" },
                { src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Pipe repair" },
                { src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", alt: "Drain cleaning" }
              ].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="h-12 w-12 text-blue-600 mb-4" />,
                  title: "Expert Team",
                  description: "Our highly skilled and certified plumbers bring years of experience to every job."
                },
                {
                  icon: <Clock24 className="h-12 w-12 text-blue-600 mb-4" />,
                  title: "24/7 Service",
                  description: "We're available round the clock for all your emergency plumbing needs."
                },
                {
                  icon: <ThumbsUp className="h-12 w-12 text-blue-600 mb-4" />,
                  title: "Quality Guaranteed",
                  description: "We stand behind our work with a 100% satisfaction guarantee on all services."
                },
                {
                  icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
                  title: "Customer-Centric",
                  description: "Your needs come first. We prioritize clear communication and exceptional service."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Sebby Pump Services</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                Sebby Pump Services is Yogyakarta's premier plumbing company, specializing in pump installations and repairs. 
                With years of experience and a team of skilled professionals, we deliver top-notch plumbing solutions to residential 
                and commercial clients throughout the region.
              </p>
              <p className="text-lg mb-6">
                Our commitment to quality workmanship, customer satisfaction, and use of the latest plumbing technologies 
                sets us apart from the competition. Trust Sebby Pump Services for all your plumbing needs.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+62 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>info@sebbypumpservices.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>123 Plumber Street, Yogyakarta, Indonesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Mon-Fri: 8am-6pm, Sat: 9am-3pm</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Sebby Pump Services. All rights reserved.</p>
          <p className="mt-2">Providing top-quality plumbing services in Yogyakarta</p>
        </div>
      </footer>
    </div>
  )
}
