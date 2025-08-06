import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';

const companiesDB = [
    { id: 1, name: 'Testowa firma', address: 'ul. Przykładowa 1', zip: '62-030', city: 'Luboń', nip: '1234567890' },
    { id: 2, name: 'Inny Kontrahent', address: 'al. Jerozolimskie 100', zip: '00-001', city: 'Warszawa', nip: '0987654321' }
];

const machinesDB = [
    { id: 1, name: 'Testowa maszyna', companyId: 1 },
    { id: 2, name: 'Prasa hydrauliczna P-123', companyId: 1 },
    { id: 3, name: 'Tokarka CNC-500', companyId: 2 }
];

const techniciansDB = [
    { id: 1, name: 'Jan Kowalski' },
    { id: 2, name: 'Adam Nowak' },
    { id: 3, name: 'Piotr Zieliński' }
];

export default function Index() {
    const [formData, setFormData] = useState({
        requestNumber: 'ZSR-S/25/08/01',
        serviceStartDate: '',
        serviceStartTime: '',
        serviceEndDate: '',
        serviceEndTime: '',
        companyName: '',
        companyAddress: '',
        companyZip: '',
        companyCity: '',
        companyNip: '',
        machineName: '',
        requestDescription: '',
        assignedTechnicians: [],
        mainTechnician: null,
    });

    const [companyQuery, setCompanyQuery] = useState('');
    const [companyResults, setCompanyResults] = useState([]);
    const [showNewCompanyBtn, setShowNewCompanyBtn] = useState(false);

    const [machineQuery, setMachineQuery] = useState('');
    const [machineResults, setMachineResults] = useState([]);
    const [showNewMachineBtn, setShowNewMachineBtn] = useState(false);
    const [showMachineImage, setShowMachineImage] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        handleInputChange({ target: { name: 'serviceStartDate', value: today } });
        handleInputChange({ target: { name: 'serviceEndDate', value: today } });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCompanySearch = (e) => {
        const query = e.target.value;
        setCompanyQuery(query);
        handleInputChange(e);

        if (!query) {
            setCompanyResults([]);
            setShowNewCompanyBtn(false);
            return;
        }

        const results = companiesDB.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));
        setCompanyResults(results);
        setShowNewCompanyBtn(results.length === 0);
    };

    const handleSelectCompany = (company) => {
        setFormData((prev) => ({
            ...prev,
            companyName: company.name,
            companyAddress: company.address,
            companyZip: company.zip,
            companyCity: company.city,
            companyNip: company.nip,
        }));
        setCompanyQuery('');
        setCompanyResults([]);
        setShowNewCompanyBtn(false);
    };

    const handleMachineSearch = (e) => {
        const query = e.target.value;
        setMachineQuery(query);
        handleInputChange(e);
        setShowMachineImage(false);

        if (!query) {
            setMachineResults([]);
            setShowNewMachineBtn(false);
            return;
        }

        const results = machinesDB.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()));
        setMachineResults(results);
        setShowNewMachineBtn(results.length === 0);
    };

    const handleSelectMachine = (machine) => {
        setFormData((prev) => ({ ...prev, machineName: machine.name }));
        setMachineQuery('');
        setMachineResults([]);
        setShowNewMachineBtn(false);
        setShowMachineImage(true);
    };

    const handleTechnicianToggle = (techId) => {
        const isAssigned = formData.assignedTechnicians.includes(techId);
        let newAssigned = [...formData.assignedTechnicians];
        let newMain = formData.mainTechnician;

        if (isAssigned) {
            newAssigned = newAssigned.filter((id) => id !== techId);
            if (newMain === techId) {
                newMain = null; // Usuń głównego, jeśli został odznaczony
            }
        } else {
            newAssigned.push(techId);
        }

        setFormData((prev) => ({ ...prev, assignedTechnicians: newAssigned, mainTechnician: newMain }));
    };

    const handleSetMainTechnician = (techId) => {
        setFormData((prev) => ({ ...prev, mainTechnician: techId }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dane zlecenia:', formData);
        alert('Zlecenie zostało utworzone! (Sprawdź konsolę)');
    };

    return (
        <>
            <Navigation />
            <main className="container mx-auto p-6">
                <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
                    <div className="mb-6 flex items-center justify-between border-b pb-4">
                        <h2 className="text-2xl font-semibold">Nowe zlecenie serwisowe</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Numer zgłoszenia</label>
                            <input
                                type="text"
                                value={formData.requestNumber}
                                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 shadow-sm"
                                readOnly
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Termin serwisu */}
                        <div className="border-t pt-6">
                            <h4 className="mb-4 text-lg font-semibold text-sky-700">Termin serwisu</h4>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="serviceStartDate" className="block text-sm font-medium text-gray-700">
                                        Rozpoczęcie
                                    </label>
                                    <div className="mt-1 flex items-center space-x-2">
                                        <input
                                            type="date"
                                            id="serviceStartDate"
                                            name="serviceStartDate"
                                            value={formData.serviceStartDate}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                        />
                                        <input
                                            type="time"
                                            id="serviceStartTime"
                                            name="serviceStartTime"
                                            value={formData.serviceStartTime}
                                            onChange={handleInputChange}
                                            className="block w-40 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="serviceEndDate" className="block text-sm font-medium text-gray-700">
                                        Zakończenie
                                    </label>
                                    <div className="mt-1 flex items-center space-x-2">
                                        <input
                                            type="date"
                                            id="serviceEndDate"
                                            name="serviceEndDate"
                                            value={formData.serviceEndDate}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                        />
                                        <input
                                            type="time"
                                            id="serviceEndTime"
                                            name="serviceEndTime"
                                            value={formData.serviceEndTime}
                                            onChange={handleInputChange}
                                            className="block w-40 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sekcja Klienta */}
                        <div className="border-t pt-6">
                            <h4 className="mb-4 text-lg font-semibold text-sky-700">Firma klienta</h4>
                            <div className="space-y-4 rounded-md border border-sky-200 bg-sky-50 p-4">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                        Nazwa firmy
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        autoComplete='off'
                                        value={formData.companyName}
                                        onChange={handleCompanySearch}
                                        placeholder="Zacznij wpisywać NAZWĘ FIRMY lub NIP, aby wyszukać... "
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200 bg-white"
                                    />
                                    {companyResults.length > 0 && (
                                        <div className="mt-1 rounded-md border border-gray-300 bg-white shadow-sm">
                                            {companyResults.map((company) => (
                                                <div
                                                    key={company.id}
                                                    onClick={() => handleSelectCompany(company)}
                                                    className="cursor-pointer p-2.5 hover:bg-gray-100"
                                                >
                                                    {company.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    id="companyAddress"
                                    name="companyAddress"
                                    value={formData.companyAddress}
                                    onChange={handleInputChange}
                                    placeholder="Adres"
                                    className="block w-full bg-white rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                />
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <input
                                        type="text"
                                        id="companyZip"
                                        name="companyZip"
                                        value={formData.companyZip}
                                        onChange={handleInputChange}
                                        placeholder="Kod pocztowy"
                                        className="block w-full bg-white rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                    />
                                    <input
                                        type="text"
                                        id="companyCity"
                                        name="companyCity"
                                        value={formData.companyCity}
                                        onChange={handleInputChange}
                                        placeholder="Miasto"
                                        className="block w-full bg-white rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200 sm:col-span-2"
                                    />
                                </div>
                                <input
                                    type="text"
                                    id="companyNip"
                                    name="companyNip"
                                    value={formData.companyNip}
                                    onChange={handleInputChange}
                                    placeholder="NIP"
                                    className="block w-full rounded-md border bg-white border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                                />
                                {showNewCompanyBtn && (
                                    <button
                                        type="button"
                                        className="mt-2 rounded-md bg-sky-600  px-3 py-1.5 text-sm text-white shadow-sm hover:bg-sky-700"
                                    >
                                        Dodaj nową firmę
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Sekcja Maszyny */}
                        <div className="border-t pt-6">
                            <h4 className="mb-4 text-lg font-semibold text-sky-700">Serwisowana maszyna</h4>
                            <div className="space-y-4 rounded-md border border-sky-200 bg-sky-50 p-4">
                                <div>
                                    <label htmlFor="machineName" className="block text-sm font-medium text-gray-700">
                                        Nazwa urządzenia
                                    </label>
                                    <div className="relative mt-1">
                                        {showMachineImage && (
                                            <div className="absolute top-1/2 left-3 -translate-y-1/2">
                                                <div className="h-[30px] w-[30px] flex-shrink-0 rounded bg-gray-300"></div>
                                            </div>
                                        )}
                                        <input
                                            type="text"
                                            id="machineName"
                                            name="machineName"
                                            value={formData.machineName}
                                            onChange={handleMachineSearch}
                                            placeholder="Zacznij wpisywać, aby wyszukać..."
                                            className={`block w-full rounded-md bg-white border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200 ${showMachineImage ? 'pl-12' : ''}`}
                                        />
                                    </div>
                                    {machineResults.length > 0 && (
                                        <div className="mt-1 rounded-md border border-gray-300 bg-white shadow-sm">
                                            {machineResults.map((machine) => (
                                                <div
                                                    key={machine.id}
                                                    onClick={() => handleSelectMachine(machine)}
                                                    className="flex cursor-pointer items-center space-x-3 p-2.5 hover:bg-gray-100"
                                                >
                                                    <div className="h-[30px] w-[30px] flex-shrink-0 rounded bg-gray-300"></div>
                                                    <span>{machine.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {showNewMachineBtn && (
                                    <button
                                        type="button"
                                        className="mt-2 rounded-md bg-sky-600 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-sky-700"
                                    >
                                        Dodaj nową maszynę
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Opis zgłoszenia */}
                        <div className="border-t pt-6">
                            <label htmlFor="requestDescription" className="mb-4 block text-lg font-semibold text-sky-700">
                                Opis zgłoszenia
                            </label>
                            <textarea
                                id="requestDescription"
                                name="requestDescription"
                                value={formData.requestDescription}
                                onChange={handleInputChange}
                                rows="4"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-200"
                            ></textarea>
                        </div>

                        {/* Przypisani serwisanci */}
                        <div className="border-t pt-6">
                            <h4 className="mb-4 text-lg font-semibold text-sky-700">Przypisz serwisantów</h4>
                            <div className="space-y-1">
                                {techniciansDB.map((tech) => (
                                    <div key={tech.id} className="flex items-center justify-between rounded-md p-2.5 hover:bg-gray-100">
                                        <label className="flex cursor-pointer items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                checked={formData.assignedTechnicians.includes(tech.id)}
                                                onChange={() => handleTechnicianToggle(tech.id)}
                                                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                                            />
                                            <span>{tech.name}</span>
                                        </label>
                                        {formData.assignedTechnicians.includes(tech.id) && (
                                            <label className="flex cursor-pointer items-center space-x-1.5 rounded-full bg-sky-100 px-2 py-0.5 text-sm text-sky-700">
                                                <input
                                                    type="radio"
                                                    name="mainTechnician"
                                                    checked={formData.mainTechnician === tech.id}
                                                    onChange={() => handleSetMainTechnician(tech.id)}
                                                    className="h-3 w-3 text-sky-600 focus:ring-sky-500"
                                                />
                                                <span>Główny</span>
                                            </label>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Przyciski akcji */}
                        <div className="mt-10 flex justify-end space-x-4 border-t pt-6">
                            <button
                                type="button"
                                className="rounded-md bg-gray-200 px-6 py-2.5 font-medium text-gray-800 transition-colors hover:bg-gray-300"
                            >
                                Anuluj
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-sky-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-sky-700 hover:shadow-md"
                            >
                                Utwórz zlecenie
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
