import React from "react";
import AdmissionsLayout from "@/components/admissions/AdmissionsLayout";
import { Bell, Calendar } from "lucide-react";

const importantDates = [
  { event: "AMET Application starting date", date: "01.12.2025" },
  { event: "Last date of AMET Application", date: "10.05.2026" },
  { event: "IMU CET Online Registration starting date", date: "06.02.2026" },
  { event: "IMU CET Last date for Online Registration", date: "24.04.2026" },
  { event: "AMET CET - Phase I (Tentative)", date: "April 17, 18, 19" },
  { event: "Date of IMU-CET", date: "28.04.2026" },
  { event: "AMET CET - Phase II (Tentative)", date: "May 15, 16, 17" },
];

const AdmissionsAnnouncement = () => {
  return (
    <AdmissionsLayout title="Announcement" subtitle="Important Dates for Admissions 2026-27">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="bg-aemet-blue/10 p-3 rounded-full">
            <Bell className="h-7 w-7 text-aemet-blue" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-aemet-navy">Announcement</h1>
            <p className="text-gray-600 mt-1">Admissions 2026-27 – Important Dates</p>
          </div>
        </div>

        {/* Important Dates Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-aemet-navy px-6 py-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-white" />
              <h2 className="text-lg font-semibold text-white">Important Dates</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-aemet-navy w-8">S.No</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-aemet-navy">Event</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-aemet-navy">Date</th>
                </tr>
              </thead>
              <tbody>
                {importantDates.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-aemet-blue/5 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.event}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-aemet-navy">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Call To Action */}
        <div className="flex justify-center">
          <a
            href="https://imu.cbexams.com/CETRegisstrationx26/Home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-aemet-blue text-white font-semibold
               hover:bg-aemet-navy transition-colors shadow-sm"
          >
            IMUCET Online Registration Link
          </a>
        </div>

        {/* Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Note:</span> Dates marked as "Tentative" are subject to change. Please check
            this page regularly for updates.
          </p>
        </div>
      </div>
    </AdmissionsLayout>
  );
};

export default AdmissionsAnnouncement;
