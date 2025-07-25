import React from 'react';
import { ShoppingBasket, Home, Sparkles, Square, Heart, DollarSign, Menu } from 'lucide-react';
import './globals.css'
const AeroZelHomepage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl md:text-3xl font-black text-purple-600 tracking-wide">
          AeroZel
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 hover:scale-105 transform">Products</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 hover:scale-105 transform">About</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 hover:scale-105 transform">Home</a>
          <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 hover:scale-105 transform">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        {/* CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Get in Touch
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-300 to-rose-400 px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 md:mb-6 leading-tight">
              Elevate Your Space with<br />
              <span className="text-purple-700">Everyday Freshness.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-4 font-medium leading-relaxed">
              Premium quality laundry care,<br />
              home care liquids, air fresheners,<br />
              and sanitizing solutions.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 flex items-center justify-center lg:justify-start font-medium">
              Made in India with <Heart className="w-5 h-5 text-purple-600 mx-2 fill-current animate-pulse" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Explore Products
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                WhatsApp Us
              </button>
            </div>
          </div>
          
          {/* Product Categories Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm lg:max-w-md xl:max-w-lg flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <ShoppingBasket className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="font-bold text-black text-sm lg:text-base">Laundry Care</p>
            </div>
            <div className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Home className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="font-bold text-black text-sm lg:text-base">Home Care</p>
            </div>
            <div className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="font-bold text-black text-sm lg:text-base">Air Fresheners</p>
            </div>
            <div className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Square className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="font-bold text-black text-sm lg:text-base">Sani Cubes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Why Choose <span className="text-purple-600">AeroZel</span> ?</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We&apos;re committed to bringing you the finest quality
            home and personal care products, crafted with
            natural ingredients and modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <div className="text-white text-2xl">🌿</div>
            </div>
            <h3 className="text-xl font-black text-black mb-4">Eco-Friendly Formula</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              Biodegradable ingredients that are safe for your family and the environment.
              Non-toxic, natural, and effective cleaning power.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <div className="w-8 h-5 bg-orange-500 relative rounded-sm">
                <div className="w-full h-1 bg-white absolute top-1 rounded"></div>
                <div className="w-full h-1 bg-green-600 absolute bottom-1 rounded"></div>
                <div className="w-3 h-3 bg-blue-800 rounded-full absolute left-1 top-1 flex items-center justify-center">
                  <div className="w-2 h-2 border border-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-black text-black mb-4">Made In India</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              Proudly manufactured in India with the highest quality standards. Supporting
              local manufacturing with global quality benchmarks.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-black text-black mb-4">Affordable Premium</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              Premium quality products at prices that don&apos;t break the bank. Direct-to-consumer model means better value for you.
            </p>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="bg-gradient-to-br from-rose-300 to-rose-400 py-12 md:py-16 px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Our Product Range</h2>
          <p className="text-base md:text-lg text-gray-800 font-semibold">Complete home and personal care solutions for modern Indian families</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-40 md:h-48 rounded-xl mb-6 group-hover:from-purple-700 group-hover:to-purple-900 transition-all duration-300 flex items-center justify-center">
              <ShoppingBasket className="w-16 h-16 text-white opacity-30" />
            </div>
            <h3 className="text-xl font-black text-black mb-2">Laundry Care</h3>
            <p className="text-gray-600 text-sm font-medium mb-4 leading-relaxed">Premium detergents, fabric softeners, and stain removers for all your laundry needs.</p>
            <a href="#" className="text-purple-600 font-bold hover:text-purple-800 hover:underline flex items-center transition-colors duration-300 group-hover:translate-x-2">
              View Products →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-40 md:h-48 rounded-xl mb-6 group-hover:from-purple-700 group-hover:to-purple-900 transition-all duration-300 flex items-center justify-center">
              <Home className="w-16 h-16 text-white opacity-30" />
            </div>
            <h3 className="text-xl font-black text-black mb-2">Home Care Liquids</h3>
            <p className="text-gray-600 text-sm font-medium mb-4 leading-relaxed">Premium detergents, fabric softeners, and stain removers for all your laundry needs.</p>
            <a href="#" className="text-purple-600 font-bold hover:text-purple-800 hover:underline flex items-center transition-colors duration-300 group-hover:translate-x-2">
              View Products →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-40 md:h-48 rounded-xl mb-6 group-hover:from-purple-700 group-hover:to-purple-900 transition-all duration-300 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white opacity-30" />
            </div>
            <h3 className="text-xl font-black text-black mb-2">Car & Home Air Fresheners</h3>
            <p className="text-gray-600 text-sm font-medium mb-4 leading-relaxed">Long-lasting fragrances for your car and home. Available in multiple refreshing scents.</p>
            <a href="#" className="text-purple-600 font-bold hover:text-purple-800 hover:underline flex items-center transition-colors duration-300 group-hover:translate-x-2">
              View Products →
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Trusted by <span className="text-purple-600">Thousands</span></h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">Join the growing family of satisfied customers across India</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
            <p className="text-gray-600 font-semibold">Happy Customers</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <p className="text-gray-600 font-semibold">Products</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <p className="text-gray-600 font-semibold">Cities Served</p>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
            <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-12 md:py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Experience <span className="text-yellow-300">AeroZel</span>?</h2>
        <p className="text-base md:text-lg text-purple-100 mb-6 md:mb-8 font-medium max-w-2xl mx-auto">Get in touch with us for bulk orders, custom requirements, or just to say hello!</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            WhatsApp Now
          </button>
          <button className="bg-yellow-400 text-purple-800 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            View Catalog
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-8 md:py-12 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black mb-4 text-purple-300">AeroZel</h3>
            <p className="text-gray-300 max-w-md font-medium leading-relaxed">
              Founded by Harshil Bhanushali, PureCare is a D2C brand committed to bringing premium quality
              home and personal care products to Indian families at affordable prices.
            </p>
          </div>
          
          <div className="text-center lg:text-right">
            <h4 className="text-xl font-black mb-4 text-purple-300">Contact Info</h4>
            <div className="space-y-3">
              <p className="flex items-center justify-center lg:justify-end hover:text-purple-300 transition-colors duration-300 font-medium">
                <span className="mr-3 text-lg">📧</span>
                hello@Aerozel.in
              </p>
              <p className="flex items-center justify-center lg:justify-end hover:text-purple-300 transition-colors duration-300 font-medium">
                <span className="mr-3 text-lg">📱</span>
                +91 98769 43210
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm font-medium">© 2025 AeroZel. All rights reserved. Made with 💜 in India</p>
        </div>
      </footer>
    </div>
  );
};

export default AeroZelHomepage;