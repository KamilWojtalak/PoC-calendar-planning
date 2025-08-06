import Navigation from '@/components/Navigation';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function Index() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Navigation />
            <main className="container mx-auto p-6">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <h2 className="text-2xl font-bold text-gray-900">Zlecenia serwisowe</h2>
                    </div>

                    <div className="mb-8 flex items-center justify-between">
                        <button className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            <span>Poprzedni tydzień</span>
                        </button>
                        <button className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                            <span>Następny tydzień</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Poniedziałek, 4 Sierpnia 2025</h3>
                            <div className="space-y-3">
                                <div className="flex cursor-pointer items-center justify-between rounded-lg border-l-4 border-teal-500 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
                                    <Link href={route('services.show', { id: 1 })} className='block w-full'>
                                        <div>
                                            <p className="font-medium text-gray-800">Klient: ABC Corp, Warszawa</p>
                                            <p className="text-sm text-gray-500">Zadanie: Diagnostyka usterki</p>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-600">
                                            <span>10:00 - 11:30</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Wtorek, 12 Sierpnia 2025</h3>
                            <div className="space-y-3">
                                <div className="flex cursor-pointer items-center justify-between rounded-lg border-l-4 border-amber-500 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
                                    <Link href={route('services.show', { id: 2 })} className='block w-full'>
                                        <div>
                                            <p className="font-medium text-gray-800">Klient: XYZ Sp. z o.o., Poznań</p>
                                            <p className="text-sm text-gray-500">Zadanie: Wymiana części</p>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-600">
                                            <span>09:00</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex cursor-pointer items-center justify-between rounded-lg border-l-4 border-sky-500 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
                                    <Link href={route('services.show', { id: 3 })} className='block w-full'>
                                        <div>
                                            <p className="font-medium text-gray-800">Klient: Dom Prywatny, Kraków</p>
                                            <p className="text-sm text-gray-500">Zadanie: Coroczny przegląd instalacji</p>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-600">
                                            <span>14:00</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Środa, 13 Sierpnia 2025</h3>
                            <div className="rounded-lg bg-sky-50 py-6 text-center shadow-sm">
                                <p className="font-medium text-sky-700">Brak zaplanowanych zleceń na ten dzień.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Czwartek, 14 Sierpnia 2025</h3>
                            <div className="rounded-lg bg-sky-50 py-6 text-center shadow-sm">
                                <p className="font-medium text-sky-700">Brak zaplanowanych zleceń na ten dzień.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Piątek, 15 Sierpnia 2025</h3>
                            <div className="rounded-lg bg-sky-50 py-6 text-center shadow-sm">
                                <p className="font-medium text-sky-700">Brak zaplanowanych zleceń na ten dzień.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Sobota, 16 Sierpnia 2025</h3>
                            <div className="rounded-lg bg-sky-50 py-6 text-center shadow-sm">
                                <p className="font-medium text-sky-700">Brak zaplanowanych zleceń na ten dzień.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 border-b pb-2 text-lg font-semibold text-sky-800">Niedziela, 17 Sierpnia 2025</h3>
                            <div className="rounded-lg bg-sky-50 py-6 text-center shadow-sm">
                                <p className="font-medium text-sky-700">Brak zaplanowanych zleceń na ten dzień.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
