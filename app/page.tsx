'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Target, Eye, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
            <span className="text-lg md:text-2xl font-bold text-slate-900">Heed & Brim</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-slate-700 hover:text-teal-600 transition-colors">About Us</Link>
            <Link href="#mission" className="text-slate-700 hover:text-teal-600 transition-colors">Our Mission</Link>
            <Link href="#vision" className="text-slate-700 hover:text-teal-600 transition-colors">Our Vision</Link>
            <Link href="/contact" className="text-slate-700 hover:text-teal-600 transition-colors">Contact</Link>
          </nav>
          <div className="flex gap-2">
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-xs md:text-sm">Get Started</Button>
            <Link href="/contact" className="md:hidden">
              <Button size="sm" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-xs">Contact</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Empowering Lives Through
            <span className="text-teal-600"> Person-Centered Care</span>
          </h1>
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            At Heed & Brim Care Services, we believe that care is more than a service — it is an act of humanity, compassion, and respect.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 md:text-lg md:px-8">Learn More</Button>
            <Link href="/contact" className="w-full md:w-auto">
              <Button size="lg" variant="outline" className="w-full md:w-auto border-teal-600 text-teal-600 hover:bg-teal-50 md:text-lg md:px-8">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              At Heed & Brim Care Services, we believe that care is more than a service — it is an act of humanity, compassion, and respect. Based in Victoria, Australia, we are a trusted NDIS-registered provider dedicated to empowering individuals with disabilities to live meaningful, independent, and fulfilling lives.
            </p>

            <Card className="border-teal-200 bg-teal-50/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Target className="h-6 w-6 text-teal-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3 md:space-y-4 text-sm md:text-base">
                <p>
                  Our mission is to deliver consistent, person-centered, and unconditional support especially on the day it's needed most. We walk alongside each participant not ahead or behind ensuring that their voice and choices guide every decision. Through empathy and professionalism, we help participants build confidence, develop life skills, and experience genuine joy in their everyday routines.
                </p>
                <p>
                  We understand that no two journeys are alike. Every person carries their own story, dreams, and pace and our role is to listen deeply and respond with compassion. Whether it's daily personal care, community participation, supported accommodation, or respite support, our services are tailored to fit the individual, not the other way around.
                </p>
                <p>
                  At the heart of Heed & Brim lies a belief that true empowerment begins with choice. We ensure every participant has the freedom to direct their own life, make informed decisions, and achieve their goals with dignity. Our team of trained, compassionate support workers uphold these principles everyday valuing respect, consistency, and collaboration.
                </p>
                <p>
                  As an organisation, we go beyond providing physical support we cultivate belonging. We encourage laughter, creativity, and personal growth. We partner closely with families, guardians, and the broader community to ensure care remains holistic, transparent, and effective.
                </p>
                <p>
                  Heed & Brim Care Services was founded on integrity and purpose to fill the gap between service delivery and genuine human connection. We have built a culture where both participants and staff feel seen, valued, and supported. Every interaction from a morning check-in to long-term goal planning reflects our commitment to excellence and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-sky-50/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Eye className="h-6 w-6 text-sky-600" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 space-y-3 md:space-y-4 text-sm md:text-base">
                <p>
                  Our vision is to create an inclusive community where people of all abilities can live freely, confidently, and fully a community where disability is not a limitation but a different expression of ability. By embracing diversity, we create opportunities for everyone to thrive.
                </p>
                <p className="font-semibold text-slate-900">
                  We are proud to be more than a provider — we are a partner in people's journeys, a bridge between challenge and possibility, and a team that believes in Life on Your Terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-teal-600 to-sky-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Our Core Values</h2>
            <p className="text-base md:text-xl text-teal-50 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <Heart className="h-8 w-8 md:h-12 md:w-12 mb-4" />
                <CardTitle className="text-lg md:text-xl">Empathy & Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base text-teal-50">
                  We walk alongside each participant with understanding and genuine care
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <Users className="h-8 w-8 md:h-12 md:w-12 mb-4" />
                <CardTitle className="text-lg md:text-xl">Person-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base text-teal-50">
                  Your voice, your choices, your goals guide every decision we make
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <CheckCircle className="h-8 w-8 md:h-12 md:w-12 mb-4" />
                <CardTitle className="text-lg md:text-xl">Respect & Dignity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base text-teal-50">
                  We uphold the highest standards of professionalism and integrity
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get in touch with us today to learn how we can support you or your loved ones
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 md:text-lg md:px-12">Contact Us Today</Button>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-teal-400" />
                <span className="text-lg md:text-xl font-bold text-white">Heed & Brim</span>
              </div>
              <p className="text-sm md:text-base text-slate-400">NDIS-registered provider based in Victoria, Australia</p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="#about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link href="#mission" className="hover:text-teal-400 transition-colors">Our Mission</Link></li>
                <li><Link href="#vision" className="hover:text-teal-400 transition-colors">Our Vision</Link></li>
                <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-4">Contact</h3>
              <p className="text-sm md:text-base text-slate-400">Victoria, Australia</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 md:pt-8 text-center text-slate-500 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} Heed & Brim Care Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
