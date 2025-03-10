"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    images: [
      '/images/worker_accommodation_1.jpg',
    ]
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
    images: [
      '/images/commercial_space_1.jpg'
    ]
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
    images: [
      '/images/luxury_1.jpg',
      '/images/luxury_2.jpg',
      '/images/luxury_3.jpg',
    ]
  },
];

// 图片轮播组件
function ImageCarousel({ images, name, onImageClick }: { images: string[], name: string, onImageClick: (src: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 每5秒切换一次
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // 切换到上一张图片
  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // 切换到下一张图片
  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  return (
    <div className="relative w-full h-48 overflow-hidden" onClick={() => onImageClick(images[currentIndex])}>
      {/* 当前图片 */}
      <img
        src={images[currentIndex]}
        alt={`${name} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
      />
      
      {/* 导航按钮 */}
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
        onClick={prevSlide}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
        onClick={nextSlide}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* 指示器 */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // 恢复背景滚动
  };

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
              <ImageCarousel 
                images={product.images} 
                name={product.name} 
                onImageClick={openModal} 
              />
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

      {/* 图片放大模态框 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
} 