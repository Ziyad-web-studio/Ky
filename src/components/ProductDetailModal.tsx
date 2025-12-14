import { X, Star, ShoppingCart, Package, Shield, RefreshCw } from 'lucide-react';
import { Product } from '../types/product';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div>
            <div className="relative rounded-xl overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.stock < 20 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                  Only {product.stock} left!
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                <Package className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-600">Free</p>
                  <p className="text-sm font-semibold text-gray-900">Shipping</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-xs text-gray-600">Buyer</p>
                  <p className="text-sm font-semibold text-gray-900">Protection</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-cyan-50 p-3 rounded-lg">
                <RefreshCw className="h-5 w-5 text-cyan-600" />
                <div>
                  <p className="text-xs text-gray-600">30 Days</p>
                  <p className="text-sm font-semibold text-gray-900">Returns</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-4">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-500 line-through">${(product.price * 1.2).toFixed(0)}</span>
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                  Save 20%
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold">In Stock ({product.stock} available)</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2">Description</h4>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2">Seller</h4>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {product.seller.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{product.seller}</p>
                  <p className="text-sm text-gray-500">Verified Seller</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="w-full bg-gray-100 text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
