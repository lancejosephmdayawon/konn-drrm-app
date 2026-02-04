"use client";

import { disasters, emergencyContacts } from "@/lib/disasterData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Flame,
  AlertTriangle,
  Droplets,
  Power,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

// Icon mapping
const iconMap = {
  Flame: Flame,
  AlertTriangle: AlertTriangle,
  Droplets: Droplets,
  Power: Power,
};

export default function HomePage() {
  return (
    <div className="container">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Disaster Risk Management
            </h1>
            <p className="text-gray-600 mt-1">
              Konn Commercial Building Emergency Guide
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Emergency Alert Banner */}
          <div className="bg-red-600 text-white rounded-lg p-4 mb-8 shadow-lg">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-semibold">
                  In case of emergency, call 0985-488-3352 immediately
                </p>
                <p className="text-sm text-red-100">
                  Stay calm and follow evacuation procedures
                </p>
              </div>
            </div>
          </div>

          {/* Disaster Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Disaster Types & Procedures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(disasters).map((disaster) => {
                const IconComponent = iconMap[disaster.icon];
                return (
                  <Link key={disaster.id} href={`/disaster/${disaster.id}`}>
                    <Card
                      className={`cursor-pointer hover:shadow-xl transition-all duration-300 border-2 ${disaster.borderColor} hover:scale-105 h-full`}
                    >
                      <CardHeader className={disaster.bgColor}>
                        <div
                          className={`${disaster.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-3`}
                        >
                          <IconComponent
                            className={`h-8 w-8 ${disaster.textColor}`}
                          />
                        </div>
                        <CardTitle className={disaster.textColor}>
                          {disaster.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {disaster.description.slice(0, 60)}...
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <Button className="w-full" variant="outline">
                          View Procedures
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Emergency Routes Button */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Emergency Routes & Exits
                </CardTitle>
                <CardDescription className="text-orange-100">
                  View building evacuation routes and assembly points
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/routes">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full md:w-auto"
                  >
                    View Emergency Routes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* Emergency Contacts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Phone className="h-6 w-6" />
              Emergency Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${contact.number}`}
                      className="text-2xl font-bold text-blue-600 hover:text-blue-800"
                    >
                      {contact.number}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
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
      </div>
    </div>
  );
}
