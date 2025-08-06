import Navigation from '@/components/Navigation';
import React, { useState, useEffect } from 'react';

// --- Ikony SVG ---
const AddIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);
const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);
const SignatureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

// --- Główny komponent formularza edycji ---
export default function App() {
    const [serviceDate, setServiceDate] = useState('');
    const [activities, setActivities] = useState([{ date: '', name: '', description: '' }]);
    const [recommendations, setRecommendations] = useState('');
    const [machineStatusOnArrival, setMachineStatusOnArrival] = useState('pracowala');
    const [machineStatusOnDeparture, setMachineStatusOnDeparture] = useState('sprawna');
    const [workTimes, setWorkTimes] = useState([{ date: '', from: '', to: '', technicians: 1 }]);
    const [travelHours, setTravelHours] = useState(0);
    const [hotel, setHotel] = useState(false);

    useEffect(() => {
        setServiceDate(new Date().toISOString().split('T')[0]);
    }, []);

    // --- Handlery dla czynności ---
    const handleActivityChange = (index, event) => {
        const values = [...activities];
        values[index][event.target.name] = event.target.value;
        setActivities(values);
    };
    const addActivity = () => setActivities([...activities, { date: '', name: '', description: '' }]);
    const removeActivity = (index) => {
        const values = [...activities];
        values.splice(index, 1);
        setActivities(values);
    };

    // --- Handlery dla czasu pracy ---
    const handleWorkTimeChange = (index, event) => {
        const values = [...workTimes];
        values[index][event.target.name] = event.target.value;
        setWorkTimes(values);
    };
    const addWorkTime = () => setWorkTimes([...workTimes, { date: '', from: '', to: '', technicians: 1 }]);
    const removeWorkTime = (index) => {
        const values = [...workTimes];
        values.splice(index, 1);
        setWorkTimes(values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceReport = { serviceDate, activities, recommendations, machineStatusOnArrival, machineStatusOnDeparture, workTimes, travelHours, hotel };
        console.log("Raport serwisowy:", serviceReport);
        alert("Raport został zapisany!");
    };

    return (
        <>
            <Navigation />
            <main className="container mx-auto p-6">
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto space-y-8">
                    {/* Nagłówek formularza */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2 sm:mb-0">Raport Serwisowy - ZSR-S/25/08/01</h2>
                        <div>
                            <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700">Data wystawienia</label>
                            <input type="date" id="serviceDate" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-200"/>
                        </div>
                    </div>

                    {/* Wykonane czynności */}
                    <section>
                        <h3 className="text-xl font-semibold text-sky-700 mb-4">Wykonane czynności</h3>
                        <div className="space-y-4">
                            {activities.map((activity, index) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50 space-y-3 relative">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div>
                                            <label htmlFor={`activityDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                                            <input id={`activityDate-${index}`} type="date" name="date" value={activity.date} onChange={e => handleActivityChange(index, e)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                                        </div>
                                        <div className="md:col-span-3">
                                            <label htmlFor={`activityName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Nazwa czynności</label>
                                            <input id={`activityName-${index}`} type="text" name="name" placeholder="np. Wymiana filtra oleju" value={activity.name} onChange={e => handleActivityChange(index, e)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor={`activityDesc-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
                                        <textarea id={`activityDesc-${index}`} name="description" placeholder="Opis czynności..." value={activity.description} onChange={e => handleActivityChange(index, e)} rows="2" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
                                    </div>
                                    <button type="button" onClick={() => removeActivity(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><DeleteIcon /></button>
                                </div>
                            ))}
                        </div>
                        <button type="button" onClick={addActivity} className="mt-4 flex items-center space-x-2 px-3 py-1.5 border-2 border-dashed border-gray-300 text-gray-500 rounded-md hover:border-sky-500 hover:text-sky-600 transition-colors">
                            <AddIcon /><span>Dodaj czynność</span>
                        </button>
                    </section>

                    {/* Zalecenia i status maszyny */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section>
                            <h3 className="text-xl font-semibold text-sky-700 mb-4">Zalecenia</h3>
                            <textarea value={recommendations} onChange={e => setRecommendations(e.target.value)} rows="4" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
                        </section>
                        <section className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Po przyjeździe serwisu maszyna:</label>
                                <select value={machineStatusOnArrival} onChange={e => setMachineStatusOnArrival(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                                    <option value="pracowala">Pracowała</option>
                                    <option value="nie pracowala">Nie pracowała</option>
                                </select>
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700">Maszynę przekazano:</label>
                                <select value={machineStatusOnDeparture} onChange={e => setMachineStatusOnDeparture(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                                    <option value="sprawna">Sprawną</option>
                                    <option value="niesprawna">Niesprawną</option>
                                </select>
                            </div>
                        </section>
                    </div>

                    {/* Rozliczenie czasu pracy */}
                     <section>
                        <h3 className="text-xl font-semibold text-sky-700 mb-4">Rozliczenie czasu pracy</h3>
                        <div className="space-y-4">
                            {workTimes.map((time, index) => (
                                <div key={index} className="p-4 border rounded-md bg-gray-50 relative">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="col-span-2 md:col-span-1">
                                            <label htmlFor={`workDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                                            <input id={`workDate-${index}`} type="date" name="date" value={time.date} onChange={e => handleWorkTimeChange(index, e)} className="block w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                        </div>
                                        <div>
                                            <label htmlFor={`workFrom-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Od</label>
                                            <input id={`workFrom-${index}`} type="time" name="from" value={time.from} onChange={e => handleWorkTimeChange(index, e)} className="block w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                        </div>
                                        <div>
                                            <label htmlFor={`workTo-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Do</label>
                                            <input id={`workTo-${index}`} type="time" name="to" value={time.to} onChange={e => handleWorkTimeChange(index, e)} className="block w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                        </div>
                                        <div className="col-span-2 md:col-span-1">
                                            <label htmlFor={`workTechs-${index}`} className="block text-sm font-medium text-gray-700 mb-1">L. serwisantów</label>
                                            <input id={`workTechs-${index}`} type="number" name="technicians" placeholder="L. serwisantów" value={time.technicians} onChange={e => handleWorkTimeChange(index, e)} className="block w-full px-3 py-2 border border-gray-300 rounded-md"/>
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => removeWorkTime(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-100"><DeleteIcon /></button>
                                </div>
                            ))}
                        </div>
                        <button type="button" onClick={addWorkTime} className="mt-4 flex items-center space-x-2 px-3 py-1.5 border-2 border-dashed border-gray-300 text-gray-500 rounded-md hover:border-sky-500 hover:text-sky-600 transition-colors">
                            <AddIcon /><span>Dodaj czas pracy</span>
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Godziny dojazdu (łącznie)</label>
                                <input type="number" value={travelHours} onChange={e => setTravelHours(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Hotel</label>
                                <div className="mt-2 flex space-x-4">
                                    <label><input type="radio" name="hotel" checked={hotel === true} onChange={() => setHotel(true)} className="mr-1"/> Tak</label>
                                    <label><input type="radio" name="hotel" checked={hotel === false} onChange={() => setHotel(false)} className="mr-1"/> Nie</label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Podpisy i akcje */}
                    <div className="border-t pt-6 space-y-4">
                         <h3 className="text-xl font-semibold text-sky-700 mb-4">Podpisy</h3>
                         <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <button type="button" className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"><SignatureIcon /> Podpis serwisanta</button>
                            <button type="button" className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"><SignatureIcon /> Podpis zleceniodawcy</button>
                         </div>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 border-t pt-6">
                        <button type="submit" className="px-6 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 font-medium shadow-sm transition-all">Zapisz serwis</button>
                        <button type="submit" className="px-6 py-2.5 bg-sky-600 text-white rounded-md hover:bg-sky-700 font-medium shadow-sm transition-all">Zakończ serwis</button>
                    </div>
                </form>
            </main>
        </>
    );
}
