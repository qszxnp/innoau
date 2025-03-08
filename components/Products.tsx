const products = [
  {
    id: 1,
    name: 'Worker Accommodation',
    description: 'Affordable and durable container homes perfect for worker accommodation and construction sites.',
    features: [
      'Durable construction',
      'Basic amenities',
      'Quick installation',
      'Cost-effective',
    ],
    image: '/worker-accommodation.jpg'
  },
  {
    id: 2,
    name: 'Commercial Space',
    description: 'Versatile container units ideal for offices, shops, and commercial applications.',
    features: [
      'Flexible layout',
      'Modern design',
      'Professional finish',
      'Customizable space',
    ],
    image: '/commercial-space.jpg'
  },
  {
    id: 3,
    name: 'Luxury Modular Home',
    description: 'High-end container homes with premium finishes and modern amenities.',
    features: [
      'Premium materials',
      'Full amenities',
      'Architectural design',
      'Luxury finishes',
    ],
    image: '/luxury-home.jpg'
  },
];

export default function Products() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="products">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Container Homes</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our range of high-quality container homes, all designed to meet Australian standards.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{product.description}</p>
                </div>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 