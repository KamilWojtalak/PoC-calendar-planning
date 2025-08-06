import Navigation from '@/components/Navigation';
import { Link } from '@inertiajs/react';
import React from 'react';

// --- Ikony SVG ---
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const ClientIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);
const MachineIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);
const TechnicianIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

// --- Dane zlecenia (Mock) ---
const serviceOrderData = {
    number: 'ZSR-S/25/08/01',
    scheduledStart: '2025-08-10 09:00',
    scheduledEnd: '2025-08-10 15:00',
    client: {
        name: 'Testowa firma',
        address: 'ul. Przykładowa 1, 62-030 Luboń'
    },
    machine: {
        name: 'Prasa hydrauliczna P-123'
    },
    description: 'Maszyna wydaje głośne, nietypowe dźwięki podczas pracy. Prośba o pilną diagnostykę i naprawę.',
    technicians: ['Jan Kowalski', 'Adam Nowak'],
    mainTechnician: 'Jan Kowalski'
};


// --- Główny komponent widoku ---
export default function App() {



    return (
        <>
            <Navigation />
            <main className="container mx-auto p-6">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto">
                    {/* Nagłówek zlecenia */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b pb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Zlecenie Serwisowe</h2>
                            <p className="text-lg font-semibold text-sky-600">{serviceOrderData.number}</p>
                        </div>
                        <Link href={route('dashboard.technician.services.start')} className="flex items-center space-x-2 mt-4 sm:mt-0 px-5 py-2.5 bg-sky-600 text-white rounded-md shadow-sm hover:bg-sky-700 transition-colors text-lg font-medium">
                            <PlayIcon />
                            <span>Rozpocznij przegląd</span>
                        </Link>
                    </div>

                    {/* Szczegóły zlecenia */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Lewa kolumna */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Szczegóły</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <CalendarIcon />
                                    <div>
                                        <p className="font-semibold">Zaplanowany termin</p>
                                        <p className="text-gray-600">{serviceOrderData.scheduledStart} - {serviceOrderData.scheduledEnd}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <ClientIcon />
                                    <div>
                                        <p className="font-semibold">Klient</p>
                                        <p className="text-gray-600">{serviceOrderData.client.name}</p>
                                        <p className="text-sm text-gray-500">{serviceOrderData.client.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <MachineIcon />
                                    <div>
                                        <p className="font-semibold">Maszyna</p>
                                        <p className="text-gray-600">{serviceOrderData.machine.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Prawa kolumna */}
                        <div>
                             <h3 className="text-xl font-semibold text-gray-700 mb-4">Opis i zespół</h3>
                             <div className="space-y-4">
                                <div>
                                    <p className="font-semibold">Opis zgłoszenia</p>
                                    <p className="text-gray-600 bg-gray-50 p-3 rounded-md mt-1">{serviceOrderData.description}</p>
                                </div>
                                <div className="flex items-start">
                                    <TechnicianIcon />
                                    <div>
                                        <p className="font-semibold">Przypisani serwisanci</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            {serviceOrderData.technicians.map(tech => (
                                                <li key={tech} className={tech === serviceOrderData.mainTechnician ? 'font-bold' : ''}>
                                                    {tech} {tech === serviceOrderData.mainTechnician && <span className="text-sm text-sky-600">(Główny)</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
