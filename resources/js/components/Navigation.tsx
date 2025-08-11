import { Link } from "@inertiajs/react";

export default function Navigation() {
    return (
            <div className="flex flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-center gap-4 flex-wrap">
                        <Link
                            href={route('dashboard.manager.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#20200a] hover:border-[#19140035]"
                        >
                            Kalendarz
                        </Link>
                        <Link
                            href={route('machines.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                        >
                            Maszyny
                        </Link>
                        <Link
                            href={route('clients.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                        >
                            Klienci
                        </Link>
                        <Link
                            href={route('service-workers.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                        >
                            Technicy
                        </Link>
                        <Link
                            href={route('dashboard.technician.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Widok technika
                        </Link>
                        <Link
                            href={route('services.create')}
                            className="inline-block rounded-sm border border-sky-400 bg-sky-500 text-white px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Nowe Zlecenie Serwisowe
                        </Link>
                        <a
                            href={route('pdf.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Przykładowy raport PDF
                        </a>
                    </nav>
                </header>
            </div>
    );
}
