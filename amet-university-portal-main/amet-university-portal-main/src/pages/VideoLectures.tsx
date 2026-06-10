import React from 'react';
import Layout from '../components/Layout';
import { Play, Video, ExternalLink, User, Clock } from 'lucide-react';

const VideoLectures: React.FC = () => {
  const departments = [
    {
      name: 'Nautical Science',
      color: 'from-blue-600 to-cyan-600',
      lectures: [
        {
          title: 'IALA System of Buoyage',
          instructor: 'Capt. V. Chandrasekhar',
          designation: 'Professor',
          videos: [
            { title: 'Part 1', url: 'https://youtu.be/rd8CBW0aRMY' },
            { title: 'Part 2', url: 'https://youtu.be/cEswGL3TrQs' }
          ]
        }
      ]
    },
    {
      name: 'Marine Engineering',
      color: 'from-green-600 to-teal-600',
      lectures: [
        {
          title: 'Fuel Injection System',
          instructor: 'Chief Engineer, Bhoopathy Bhaskaran',
          designation: 'Professor',
          videos: [
            { title: 'Part 1', url: 'https://youtu.be/MIU1gCfyBbo' },
            { title: 'Part 2', url: 'https://youtu.be/au59KJE3PIc' }
          ]
        }
      ]
    },
    {
      name: 'Naval Architecture',
      color: 'from-purple-600 to-indigo-600',
      lectures: [
        {
          title: 'Floating Body and its Stability',
          instructor: 'Mr. Akshar Patel',
          designation: 'Assistant Professor',
          videos: [
            { title: 'Part 1', url: 'https://youtu.be/AcZ9wVCdb2U' },
            { title: 'Part 2', url: 'https://youtu.be/EuxkVlDMQ5Q' }
          ]
        },
        {
          title: 'Welding Parameters',
          instructor: 'Mr. Himanshu Uppal',
          designation: 'Assistant Professor',
          videos: []
        }
      ]
    },
    {
      name: 'Petroleum Engineering',
      color: 'from-orange-600 to-red-600',
      lectures: [
        {
          title: 'Well Control',
          instructor: 'Mr. Anand Ramamurthy',
          designation: 'Associate Professor',
          videos: [
            { title: 'Session 1', url: 'https://youtu.be/32yZ23S9Vr8' },
            { title: 'Session 2', url: 'https://youtu.be/lVzyQHtqABc' }
          ]
        }
      ]
    }
  ];

  const totalVideos = departments.reduce((total, dept) => 
    total + dept.lectures.reduce((lectureTotal, lecture) => lectureTotal + lecture.videos.length, 0), 0
  );

  return (
    <Layout title="Video Lectures - AMET University">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Video className="h-6 w-6" />
              <span className="font-medium">Digital Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Video Lectures
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Access expert faculty lectures across multiple engineering disciplines with comprehensive video content designed for enhanced learning
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  <span className="font-medium">{totalVideos} Video Lectures</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{departments.length} Departments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Departmental Video Lectures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive video lectures delivered by experienced faculty members across various engineering disciplines
              </p>
            </div>

            <div className="space-y-12">
              {departments.map((department, deptIndex) => (
                <div key={deptIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${department.color} text-white p-4 rounded-xl`}>
                        <Video className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {department.name}
                        </h3>
                        <p className="text-gray-600">
                          Department of {department.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {department.lectures.map((lecture, lectureIndex) => (
                      <div key={lectureIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {lecture.title}
                          </h4>
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="h-4 w-4" />
                            <span className="font-medium">{lecture.instructor}</span>
                            <span className="text-gray-400">•</span>
                            <span>{lecture.designation}</span>
                          </div>
                        </div>

                        {lecture.videos.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lecture.videos.map((video, videoIndex) => (
                              <div
                                key={videoIndex}
                                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group"
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className={`bg-gradient-to-br ${department.color} text-white p-2 rounded-lg`}>
                                      <Play className="h-4 w-4" />
                                    </div>
                                    <span className="font-medium text-gray-900">{video.title}</span>
                                  </div>
                                  <Clock className="h-4 w-4 text-gray-400" />
                                </div>
                                
                                <a
                                  href={video.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`w-full bg-gradient-to-r ${department.color} text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                                >
                                  <ExternalLink className="h-4 w-4 group-hover/btn:animate-pulse" />
                                  Watch on YouTube
                                </a>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                            <Video className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-500 font-medium">Video content coming soon</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Benefits */}
            <div className="mt-16 bg-gradient-to-br from-aemet-blue to-purple-600 text-white rounded-2xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <Video className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">
                  Enhanced Digital Learning
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Our video lecture series provides comprehensive coverage of essential engineering topics, 
                  delivered by expert faculty with practical insights and real-world applications.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Expert Faculty
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Practical Applications
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    24/7 Access
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    Multi-Part Series
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoLectures;