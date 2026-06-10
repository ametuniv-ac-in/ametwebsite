
import React from 'react';
import PlacementLayout from '@/components/placement/PlacementLayout';

const Assessment = () => {
  const assessmentAreas = [
    {
      title: "Technical Knowledge",
      description: "Assessment of maritime-specific technical knowledge relevant to the student's specialization.",
      components: ["Written Tests", "Practical Demonstrations", "Technical Interviews", "Problem-Solving Exercises"]
    },
    {
      title: "Professional Skills",
      description: "Evaluation of practical skills required for effective performance in maritime roles.",
      components: ["Simulators", "Hands-on Equipment Operation", "Safety Procedures", "Emergency Response"]
    },
    {
      title: "Soft Skills",
      description: "Assessment of interpersonal abilities and professional behaviors essential for workplace success.",
      components: ["Communication Assessment", "Leadership Exercises", "Team Collaboration", "Conflict Resolution"]
    },
    {
      title: "Aptitude & Reasoning",
      description: "Measurement of logical thinking, numerical ability, and problem-solving capacity.",
      components: ["Quantitative Aptitude", "Logical Reasoning", "Data Interpretation", "Spatial Understanding"]
    }
  ];

  return (
    <PlacementLayout title="Competency Assessment">
      <div className="container mx-auto py-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy mb-4">
              Competency Assessment Framework
            </h1>
            <p className="text-gray-700">
              AMET University implements a comprehensive competency assessment framework to evaluate students' readiness 
              for maritime careers. This structured approach ensures that our graduates meet industry standards and 
              possess the skills required for successful employment in the global maritime sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {assessmentAreas.map((area, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-aemet-blue">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Assessment Components:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {area.components.map((component, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="h-2 w-2 bg-aemet-blue rounded-full mr-2"></div>
                        <span className="text-sm">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">Assessment Process</h2>
            <div className="bg-gray-50 p-5 rounded-lg">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <h3 className="font-semibold">Initial Assessment (Semester 5)</h3>
                  <p className="text-sm text-gray-600 mt-1">Baseline evaluation to identify strengths and areas for improvement</p>
                </li>
                <li>
                  <h3 className="font-semibold">Development Plan</h3>
                  <p className="text-sm text-gray-600 mt-1">Personalized skill enhancement plan based on initial assessment results</p>
                </li>
                <li>
                  <h3 className="font-semibold">Focused Training</h3>
                  <p className="text-sm text-gray-600 mt-1">Targeted workshops, courses, and practical sessions to address identified gaps</p>
                </li>
                <li>
                  <h3 className="font-semibold">Progress Monitoring</h3>
                  <p className="text-sm text-gray-600 mt-1">Regular check-ins and interim assessments to track improvement</p>
                </li>
                <li>
                  <h3 className="font-semibold">Final Assessment (Semester 7)</h3>
                  <p className="text-sm text-gray-600 mt-1">Comprehensive evaluation of all competency areas before placement season</p>
                </li>
                <li>
                  <h3 className="font-semibold">Industry-Specific Preparation</h3>
                  <p className="text-sm text-gray-600 mt-1">Tailored preparation for specific company recruitment processes</p>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-bold text-aemet-blue mb-4">Assessment Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="h-16 w-16 bg-aemet-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-aemet-blue font-bold text-xl">1</span>
                </div>
                <h3 className="font-medium mb-2">Simulation Exercises</h3>
                <p className="text-sm text-gray-600">State-of-the-art simulators recreating real maritime scenarios</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="h-16 w-16 bg-aemet-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-aemet-blue font-bold text-xl">2</span>
                </div>
                <h3 className="font-medium mb-2">Digital Assessment Platform</h3>
                <p className="text-sm text-gray-600">Online tests with industry-benchmarked questions and scenarios</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg text-center">
                <div className="h-16 w-16 bg-aemet-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-aemet-blue font-bold text-xl">3</span>
                </div>
                <h3 className="font-medium mb-2">Practical Skill Stations</h3>
                <p className="text-sm text-gray-600">Hands-on evaluation of technical abilities using actual equipment</p>
              </div>
            </div>
          </div>
          
          <div className="bg-aemet-blue/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-aemet-navy mb-4">Industry Validation</h2>
            <p className="mb-4">
              Our competency assessment framework is developed and regularly updated in collaboration with industry partners 
              to ensure alignment with current maritime industry requirements and standards.
            </p>
            <p>
              Assessment results are shared with partner companies upon request (with student consent), providing employers 
              with valuable insights into candidates' capabilities beyond academic achievements.
            </p>
          </div>
        </div>
      </div>
    </PlacementLayout>
  );
};

export default Assessment;
