import { Link } from "@inertiajs/react";

export default function Navigation() {
    return (
            <div className="flex flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-center gap-4">
                        <Link
                            href={route('calendar.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#20200a] hover:border-[#19140035]"
                        >
                            Kalendarz
                        </Link>
                        <Link
                            href={'#'}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                        >
                            Maszyny
                        </Link>
                        <Link
                            href={'#'}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                        >
                            Klienci
                        </Link>
                        <Link
                            href={'#'}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035]"
                        >
                            Technicy
                        </Link>
                        <Link
                            href={route('technician.index')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Widok technika
                        </Link>
                    </nav>
                </header>
            </div>
    );
}
