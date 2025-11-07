'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Heart, Mail, MessageSquare, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-teal-600" />
            <span className="text-lg md:text-2xl font-bold text-slate-900">Heed & Brim</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-slate-700 hover:text-teal-600 transition-colors">About Us</Link>
            <Link href="/#mission" className="text-slate-700 hover:text-teal-600 transition-colors">Our Mission</Link>
            <Link href="/#vision" className="text-slate-700 hover:text-teal-600 transition-colors">Our Vision</Link>
            <Link href="/contact" className="text-teal-600 font-semibold">Contact</Link>
          </nav>
          <Link href="/">
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-xs md:text-sm">Back Home</Button>
          </Link>
        </div>
      </header>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Get In Touch
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions or want to learn more about our services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Contact us during business hours</p>
                <p className="text-sm text-slate-500 mt-2">Available Monday - Friday, 9am - 5pm</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Send us an email</p>
                <p className="text-sm text-slate-500 mt-2">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Based in Victoria</p>
                <p className="text-sm text-slate-500 mt-2">Serving the local community</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-teal-200">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-slate-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(03) 1234 5678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-slate-300 focus:border-teal-600 focus:ring-teal-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-slate-300 focus:border-teal-600 focus:ring-teal-600 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-base">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-8 md:py-12 px-4 mt-12">
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
                <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
                <li><Link href="/#about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link href="/#mission" className="hover:text-teal-400 transition-colors">Our Mission</Link></li>
                <li><Link href="/#vision" className="hover:text-teal-400 transition-colors">Our Vision</Link></li>
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
