import Navigation from '@/components/Navigation';
import React, { useState } from 'react';

// --- Mock Database ---
const initialTechniciansDB = [
    { id: 1, name: 'Jan Kowalski' },
    { id: 2, name: 'Adam Nowak' },
    { id: 3, name: 'Piotr Zieliński' },
    { id: 4, name: 'Katarzyna Wiśniewska' },
];

// --- Ikony SVG ---
const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
    </svg>
);

const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const AddIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

// --- Główny komponent listy ---
export default function App() {
    const [technicians, setTechnicians] = useState(initialTechniciansDB);

    const handleEdit = (id) => {
        // W pełnej aplikacji tutaj otworzyłbyś modal edycji
        const tech = technicians.find(t => t.id === id);
        const newName = prompt(`Edytuj imię i nazwisko:`, tech.name);
        if (newName && newName !== tech.name) {
            setTechnicians(prev => prev.map(t => t.id === id ? { ...t, name: newName } : t));
        }
    };

    const handleDelete = (id) => {
        const tech = technicians.find(t => t.id === id);
        if (window.confirm(`Czy na pewno chcesz usunąć technika: ${tech.name}?`)) {
            setTechnicians(prev => prev.filter(t => t.id !== id));
        }
    };

    const handleAdd = () => {
        const name = prompt("Wpisz imię i nazwisko nowego technika:");
        if(name) {
            const newId = technicians.length > 0 ? Math.max(...technicians.map(t => t.id)) + 1 : 1;
            const newTechnician = { id: newId, name: name };
            setTechnicians(prev => [...prev, newTechnician]);
        }
    };

    return (
        <>
            <Navigation />
            <main className="container mx-auto p-6">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Lista Serwisantów</h2>
                        <button onClick={handleAdd} className="flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-md shadow-sm hover:bg-sky-700 transition-colors">
                            <AddIcon />
                            <span>Dodaj</span>
                        </button>
                    </div>

                    <div className="space-y-3">
                        {technicians.length > 0 ? (
                            technicians.map(tech => (
                                <div key={tech.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md border-l-4 border-sky-500 transition-all duration-300">
                                    <p className="font-medium text-gray-800">{tech.name}</p>
                                    <div className="flex items-center space-x-3">
                                        <button onClick={() => handleEdit(tech.id)} className="text-gray-500 hover:text-sky-600 p-2 rounded-full hover:bg-sky-100 transition-colors">
                                            <EditIcon />
                                        </button>
                                        <button onClick={() => handleDelete(tech.id)} className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-100 transition-colors">
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 px-4 bg-gray-50 rounded-lg">
                                <p className="text-gray-500">Brak serwisantów na liście.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
