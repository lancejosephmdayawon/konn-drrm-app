"use client";

import { useEffect, useState } from "react";
import { emergencyRoutes } from "@/lib/disasterData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  ZoomIn,
  Download,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EmergencyRoutesPage() {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [downloadAlert, setDownloadAlert] = useState(false); // For restricting download functionality

  // Disable background scroll when download alert is open
  useEffect(() => {
    if (downloadAlert) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // re-enable scroll
    }
  }, [downloadAlert]);

  // Disable background scroll when selected route is open
  useEffect(() => {
    if (selectedRoute) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // re-enable scroll
    }
  }, [selectedRoute]);

  // Function to handle downloading the route image
  const downloadRoute = (route) => {
    const link = document.createElement("a");
    link.href = route.image;
    link.download = `${route.floor}-emergency-route.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Emergency Routes & Exits
              </h1>
              <p className="text-gray-600 mt-1">
                Building evacuation routes and assembly points
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Safety Notice */}
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">
                Evacuation Safety
              </h2>
              <ul className="space-y-1 text-gray-700">
                <li>
                  • Always use stairs, never elevators (if applicable) during
                  emergencies
                </li>
                <li>• Know at least two exit routes from your location</li>
                <li>
                  • Proceed to the designated assembly point after evacuation
                </li>
                <li>• Assist others who need help if it is safe to do so</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Routes Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Floor Plans & Exit Routes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {emergencyRoutes.map((route) => (
              <Card
                key={route.id}
                className="hover:shadow-xl transition-shadow"
              >
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    {route.floor}
                  </CardTitle>
                  <CardDescription>{route.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Image Container */}
                  <div className="relative w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for actual images */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                      <MapPin className="h-16 w-16 mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Emergency Route Map</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {route.floor}
                      </p>
                      <p className="text-xs text-gray-400 mt-4 px-4 text-center">
                        {/* (Upload floor plan image to: /public{route.image}) */}
                        Currently unavailable.
                      </p>
                    </div>
                    {/* Uncomment when images are available */}
                    {/* <Image
                      src={route.image}
                      alt={`${route.floor} emergency route`}
                      fill
                      className="object-contain"
                    /> */}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      variant="outline"
                      onClick={() => setSelectedRoute(route)}
                    >
                      <ZoomIn className="mr-2 h-4 w-4" />
                      View Larger
                    </Button>

                    {/* Disable Download at the moment */}
                    {/* <Button
                      variant="outline"
                      size="icon"
                      onClick={() => downloadRoute(route)}
                    >
                      <Download className="h-4 w-4" />
                    </Button> */}

                    {/* Restrict Download Functionality */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDownloadAlert(true)}
                      aria-label={`Download ${route.floor} emergency route`}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    {/* Alert */}
                    {downloadAlert && (
                      <div
                        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        onClick={() => setDownloadAlert(false)}
                      >
                        <div
                          className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg text-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-4">
                            Download Restricted
                          </h3>
                          <p className="text-gray-700 mb-6">
                            Owner does not permit downloading at this time.
                          </p>
                          <Button onClick={() => setDownloadAlert(false)}>
                            OK
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Assembly Point Info */}
        <section className="mt-8">
          <Card className="bg-green-50 border-2 border-green-500">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Assembly Point Location
              </CardTitle>
              <CardDescription className="text-green-700">
                After evacuating, proceed to the designated assembly point
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">
                  Primary Assembly Point:
                </p>
                <p className="text-gray-700 mb-2">
                  Parking lot, near the main entrance
                </p>

                {/* Image container */}
                <div className="relative w-full h-64 mb-2">
                  {/* fixed height container */}
                  <Image
                    src="/assembly-point.png" // use leading slash for public folder
                    alt="Assembly Point Location"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-sm text-gray-600">
                  Stay at the assembly point until accounted for by emergency
                  personnel
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Information */}
        <section className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Important Evacuation Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Stairwell/Exit Locations
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• North Stairwell (Main entrance side)</li>
                    <li>• South Stairwell (Rear of building)</li>
                    <li>• Emergency Exit Ladders (On each floor, front side of building)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">
                    Emergency Equipment
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fire extinguishers on each floor</li>
                    <li>• Fire alarm near stairs</li>
                    <li>• Emergency lighting in stairwells</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Building Safety & Emergency Management System
          </p>
          <p className="text-sm text-gray-500 mt-2">
            For emergencies, always call 911 first
          </p>
        </div>
      </footer>

      {/* Modal for enlarged view */}
      {selectedRoute && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRoute(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-xl font-bold">{selectedRoute.floor}</h3>
              <Button variant="outline" onClick={() => setSelectedRoute(null)}>
                Close
              </Button>
            </div>
            <div className="p-4">
              <div className="relative w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-20 w-20 mb-2 text-gray-400 mx-auto" />
                  <p className="font-medium">
                    Emergency Route Map - {selectedRoute.floor}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {/* (Upload image to: /public{selectedRoute.image}) */}
                    Currently unavailable.
                  </p>
                </div>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={selectedRoute.image}
                  alt={`${selectedRoute.floor} emergency route`}
                  fill
                  className="object-contain"
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
