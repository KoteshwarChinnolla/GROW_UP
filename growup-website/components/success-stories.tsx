"use client";

import { useState } from "react";

interface SuccessStory {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}

interface SuccessStoriesProps {
  title?: string;
  subtitle?: string;
  stories: SuccessStory[];
  sectionId?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function SuccessStories({
  title = "Success Stories",
  subtitle = "See how we've helped professionals achieve their career goals.",
  stories,
  sectionId = "success-stories",
  bgColor = "bg-white",
  textColor = "text-gray-900",
  accentColor = "text-indigo-600",
}: SuccessStoriesProps) {
  return (
    <section id={sectionId} className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {story.name}
                  </h4>
                  <p className="text-indigo-600 font-medium">{story.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{story.testimonial}"
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < story.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {story.rating}/5 Rating
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
