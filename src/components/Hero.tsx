import { ArrowRight, TrendingUp, Shield, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Products Daily
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop from thousands of verified sellers and get the best deals on electronics, fashion, home goods, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Best Prices</p>
                  <p className="text-sm text-gray-600">Guaranteed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Secure</p>
                  <p className="text-sm text-gray-600">Payments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fast</p>
                  <p className="text-sm text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shopping"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-blue-600 rounded-xl shadow-xl p-4 text-white">
              <p className="text-sm font-semibold">Special Offer</p>
              <p className="text-2xl font-bold">-50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
