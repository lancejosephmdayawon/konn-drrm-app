'use client'

import { disasters } from '@/lib/disasterData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, AlertTriangle, Droplets, Power, ArrowLeft, CheckCircle2, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Icon mapping
const iconMap = {
  Flame: Flame,
  AlertTriangle: AlertTriangle,
  Droplets: Droplets,
  Power: Power
};

// Color mappings
const bgMap = { red: "bg-red-50", yellow: "bg-yellow-50", blue: "bg-blue-50", gray: "bg-gray-50" };
const borderMap = { red: "border-red-500", yellow: "border-yellow-500", blue: "border-blue-500", gray: "border-gray-500" };
const textMap = { red: "text-red-700", yellow: "text-yellow-700", blue: "text-blue-700", gray: "text-gray-700" };
const iconBgMap = { red: "bg-red-100", yellow: "bg-yellow-100", blue: "bg-blue-100", gray: "bg-gray-100" };

export default function DisasterDetailPage() {
  const params = useParams();
  const disasterType = params?.type;
  const disaster = disasters[disasterType];

  if (!disaster) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Disaster Type Not Found</CardTitle>
            <CardDescription>The requested disaster information is not available.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const IconComponent = iconMap[disaster.icon];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <div className={`${iconBgMap[disaster.color]} w-16 h-16 rounded-full flex items-center justify-center`}>
              <IconComponent className={`h-8 w-8 ${textMap[disaster.color]}`} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{disaster.name} Emergency</h1>
              <p className="text-gray-600 mt-1">Emergency procedures and safety guidelines</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Emergency Alert */}
        <div className={`${bgMap[disaster.color]} border-2 ${borderMap[disaster.color]} rounded-lg p-6 mb-8 shadow-lg`}>
          <div className="flex items-start gap-3">
            <AlertTriangle className={`h-6 w-6 ${textMap[disaster.color]} flex-shrink-0 mt-1`} />
            <div>
              <h2 className={`text-xl font-semibold ${textMap[disaster.color]} mb-2`}>Important Safety Information</h2>
              <p className="text-gray-700">{disaster.description}</p>
            </div>
          </div>
        </div>

        {/* Emergency Procedures */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Emergency Procedures</h2>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <ol className="space-y-4">
                {disaster.procedures.map((procedure, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`${iconBgMap[disaster.color]} rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0`}>
                      <span className={`font-bold ${textMap[disaster.color]}`}>{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{procedure}</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* View Emergency Routes Button */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MapPin className="h-6 w-6" /> Need to Evacuate?
              </CardTitle>
              <CardDescription className="text-orange-100">
                View emergency routes and exit locations for safe evacuation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/routes">
                <Button size="lg" variant="secondary" className="w-full md:w-auto">
                  View Emergency Routes
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Additional Safety Tips */}
        <section>
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Additional Safety Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Always remain calm and help others if possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Familiarize yourself with emergency exits before an emergency occurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Follow instructions from emergency personnel and building management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Do not re-enter the building until officially cleared by authorities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">Building Safety & Emergency Management System</p>
          <p className="text-sm text-gray-500 mt-2">For emergencies, always call 911 first</p>
        </div>
      </footer>
    </div>
  );
}
