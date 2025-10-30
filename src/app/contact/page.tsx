// Contact Page Component
"use client";

import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <button className="text-sm">shop ▼</button>
            <button className="text-sm">learn ▼</button>
            <button className="text-sm">subscribe</button>
          </div>

          <h1 className="text-3xl font-bold tracking-wider">HIPPEAS</h1>

          <div className="flex items-center gap-6">
            <button className="text-sm">find a store</button>
            <button className="text-sm">account</button>
            <button className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 text-6xl font-bold text-white">GET IN TOUCH</h2>
          <p className="mx-auto max-w-2xl text-xl text-white">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-500">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Email Us</h3>
              <p className="mb-3 text-gray-600">Our team is here to help</p>
              <div className="font-semibold text-teal-500">
                hello@hippeas.com
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Call Us</h3>
              <p className="mb-3 text-gray-600">Mon-Fri from 8am to 5pm</p>
              <div className="font-semibold text-orange-500">
                +1 (234) 567-890
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-500">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold">Visit Us</h3>
              <p className="mb-3 text-gray-600">Come say hello at our office</p>
              <p className="font-semibold text-purple-500">
                123 Pea Street
                <br />
                Austin, TX 78701
              </p>
            </div>

            {/* Social Media */}
            <div className="rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-white">Follow Us</h3>
              <div className="flex gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                  <Instagram size={24} className="text-orange-500" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                  <Facebook size={24} className="text-orange-500" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
                  <Twitter size={24} className="text-orange-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
              <h3 className="mb-2 text-3xl font-bold">Send us a message</h3>
              <p className="mb-8 text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-teal-400 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-teal-400 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-teal-400 focus:outline-none"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-teal-400 focus:outline-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full resize-none rounded-lg border-2 border-gray-200 px-4 py-3 transition focus:border-teal-400 focus:outline-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-teal-600 hover:to-teal-700 hover:shadow-xl"
                >
                  Send Message
                  <Send size={20} />
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-96 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
            <MapPin size={48} className="mx-auto mb-4 text-teal-500" />
            <h3 className="mb-2 text-2xl font-bold">Visit Our Office</h3>
            <p className="mb-4 text-gray-600">
              123 Pea Street, Austin, TX 78701
            </p>
            <button className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600">
              Get Directions
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h3>
          <p className="mb-8 text-xl text-white">
            Can't find what you're looking for? Check out our FAQ page
          </p>
          <button className="rounded-lg bg-white px-8 py-4 font-bold text-orange-600 transition hover:bg-gray-100">
            View FAQs
          </button>
        </div>
      </div>
    </div>
  );
}
