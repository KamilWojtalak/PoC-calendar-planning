import { type SharedData } from '@/types';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import FullCalendar from '@fullcalendar/react';
import { Link, usePage } from '@inertiajs/react';
import Navigation from '@/components/Navigation';

export default function Index() {
    const { auth } = usePage<SharedData>().props;

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    return (
        <>
            <Navigation />
            <main className="container mx-auto p-6 max-w">
                <FullCalendar
                    height="auto"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'title',
                        right: 'prev,next',
                    }}
                    firstDay={1}
                    eventTextColor={'rgb(30 64 175 / 1)'}
                    eventColor={'rgb(219 234 254 / 1)'}
                    buttonText={{
                        dayGridMonth: 'Miesiąc',
                        timeGrid: 'Terminarz',
                     }}
                    timeZone="local"
                    locale={'pl'}
                    events={[
                        {
                            id: 'uuid1',
                            title: 'Serwis: Firma A',
                            start: '2025-08-01',
                            end: '2025-08-05',
                            url: 'http://localhost/serwisy/1/edit',
                            editable: true,
                        },
                        { id: 'uuid2', title: 'Serwis: Firma B', start: '2025-08-02', url: 'http://localhost/serwisy/2/edit' },
                        { id: 'uuid3', title: 'Serwis: Firma C', start: '2025-08-12', url: 'http://localhost/serwisy/3/edit' },
                        { id: 'uuid4', title: 'Serwis: Firma D', start: '2025-08-05', url: 'http://localhost/serwisy/4/edit' },
                        { id: 'uuid5', title: 'Serwis: Firma E', start: '2025-08-08', end: '2025-08-10', url: 'http://localhost/serwisy/5/edit' },
                        { id: 'uuid6', title: 'Serwis: Firma F', start: '2025-08-15', url: 'http://localhost/serwisy/6/edit' },
                        { id: 'uuid7', title: 'Serwis: Firma G', start: '2025-08-18', url: 'http://localhost/serwisy/7/edit' },
                        { id: 'uuid8', title: 'Serwis: Firma H', start: '2025-08-20', end: '2025-08-22', url: 'http://localhost/serwisy/8/edit' },
                        { id: 'uuid9', title: 'Serwis: Firma I', start: '2025-08-25', url: 'http://localhost/serwisy/9/edit' },
                        { id: 'uuid10', title: 'Serwis: Firma J', start: '2025-08-28', url: 'http://localhost/serwisy/10/edit' },
                        { id: 'uuid11', title: 'Serwis: Firma K', start: '2025-08-30', url: 'http://localhost/serwisy/11/edit' },
                        { id: 'uuid12', title: 'Serwis: Firma L', start: '2025-09-02', end: '2025-09-04', url: 'http://localhost/serwisy/12/edit' },
                        { id: 'uuid13', title: 'Serwis: Firma M', start: '2025-09-07', url: 'http://localhost/serwisy/13/edit' },
                    ]}
                    dateClick={handleDateClick}
                />
            </main>
        </>
    );
}
