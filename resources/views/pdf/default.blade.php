<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: .6rem;
            padding: 1rem;
        }

        th {
            text-align: center;
            font-weight: initial;
        }

        td {
            text-align: left;
            background-color: #dbeaff;
        }

        table {
            margin-bottom: 5px;
        }

        h2 {
            font-weight: initial;
            font-size: .7rem;
        }
    </style>
</head>

<body style="">
    <div class="content">
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    RAPORT SERWISOWY</th>
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    Firma</th>
            </tr>
            <tr style="background-color: #dbeaff;">
                <td style="padding: 2px; width: 50%; height: 100px; text-align: justify; position: relative;">
                    <div style="height: 100px;">
                        <strong>Zgłoszenie nr:</strong> XXX-X/XX/XX/XX<br>
                        <strong>Data wystawienia:</strong> XXX-XX-XX
                    </div>
                    <div
                        style="position: absolute; top: 0; right: 0; display: inline-block;  width: 100px; height: 100px; background-color: black; color: white; vertical-align: top; text-align: center; line-height: 200px;">
                        LOGO FIRMY
                    </div>
                </td>
                <td style="padding: 2px; width: 50%; height: 100px; text-align: justify; position: relative;">
                    <div style="width: 100%; height: 100px;">
                        Xxxx Xxxxxxxxx XXXXX<br>
                        XXXXX XXXX<br>
                        xx-xxx xxxx<br>
                        NIP: xxxxxxxxxx
                    </div>
                </td>
            </tr>
        </table>

        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white; ">
                <th style="padding: 2px; border: 2px solid #fff;  ">Lp.</th>
                <th style="padding: 2px; border: 2px solid #fff;  ">Nazwa urządzenia</th>
                <th style="padding: 2px; border: 2px solid #fff;  ">Licznik</th>
                <th style="padding: 2px; border: 2px solid #fff;  ">Jm.</th>
                <th style="padding: 2px; border: 2px solid #fff;  ">Nr seryiny</th>
                <th style="padding: 2px; border: 2px solid #fff;  ">Rok produkcji</th>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;  ">1</td>
                <td style="padding: 2px; border: 2px solid #fff;  ">xxxxxxx</td>
                <td style="padding: 2px; border: 2px solid #fff;  ">0</td>
                <td style="padding: 2px; border: 2px solid #fff;  ">rg.</td>
                <td style="padding: 2px; border: 2px solid #fff;  ">xxxxxxxxxxxx
                </td>
                <td style="padding: 2px; border: 2px solid #fff;  ">xxxxx</td>
            </tr>
        </table>

        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white; width: 100%;">
                <th style="padding: 2px; border: 2px solid #fff;  width: 100%;">Opis zgłoszenia</th>
            </tr>

            <tr>
                <td style="padding: 2px;" colspan="2">Wykonanie obowiązkowego przeglądu gwarancyjnego maszyny.</td>
            </tr>
        </table>

        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px; border: 2px solid #fff; width: 75px;">Data</th>
                <th style="padding: 2px; border: 2px solid #fff;">Nazwa czynności</th>
                <th style="padding: 2px; border: 2px solid #fff;">Opis</th>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;">2025-07-25</td>
                <td style="padding: 2px; border: 2px solid #fff;">Dojazd do klienta</td>
                <td style="padding: 2px; border: 2px solid #fff;"></td>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;">2025-07-25</td>
                <td style="padding: 2px; border: 2px solid #fff;">Przegląd serwisowy obowiązkowy - gwarancyjny VC, MVC,
                    TC</td>
                <td style="padding: 2px; border: 2px solid #fff;">
                    - wykonano przegląd zgodnie z protokołem<br>
                    - należy zwracać uwagę na poziom chłodziwa w wannie, zbyt niski poziom
                    może spowodować uszkodzenia pompy i skimmera oleju<br>
                    - należy zwracać uwagę na czystość filtra powietrza na chłodziarce
                    wrzeciona oraz szafie elektrycznej
                </td>
            </tr>
        </table>

        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px; " colspan="2">Zalecenia</th>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;width: 100%;">Zalecono ....</td>
            </tr>
        </table>

        {{-- TODO tutaj dwie osobne tabele, podzielone na 50% --}}
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px; border: 2px solid #fff; width: 50%;">Po przejeździe serwisu maszyna:</th>
                <th style="padding: 2px; border: 2px solid #fff; width: 50%;">Maszynę przekazano:</th>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;">Pracowała</td>
                <td style="padding: 2px; border: 2px solid #fff;">Sprawną</td>
            </tr>
        </table>

        <h2>Rozliczenie czasu pracy</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff; width: 75px;">
                    Data</th>
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    Od
                </th>
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    Do
                </th>
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    Liczba godzin
                </th>
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    Liczba serwisantów
                </th>
                <th style="padding: 2px;  padding: 2px; border: 2px solid #fff;">
                    Suma
                </th>
            </tr>
            <tr style="background-color: #dbeaff;">
                <td style="padding: 2px; border: 2px solid #fff;">2025-07-25</td>
                <td style="padding: 2px; border: 2px solid #fff;">07:30</td>
                <td style="padding: 2px; border: 2px solid #fff;">07:50</td>
                <td style="padding: 2px; border: 2px solid #fff;">0.333333</td>
                <td style="padding: 2px; border: 2px solid #fff;">2</td>
                <td style="padding: 2px; border: 2px solid #fff;">0.666667</td>
            </tr>
            <tr style="background-color: #dbeaff;">
                <td style="padding: 2px; border: 2px solid #fff;">2025-07-25</td>
                <td style="padding: 2px; border: 2px solid #fff;">07:50</td>
                <td style="padding: 2px; border: 2px solid #fff;">09:30</td>
                <td style="padding: 2px; border: 2px solid #fff;">1.66667</td>
                <td style="padding: 2px; border: 2px solid #fff;">2</td>
                <td style="padding: 2px; border: 2px solid #fff;">3.33333</td>
            </tr>
        </table>

        <h2>Razem</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px; border: 2px solid #fff; width: 33.33%;">Czas pracy [h]:</th>
                <th style="padding: 2px; border: 2px solid #fff; width: 33.33%;">Dojazd [h]:</th>
                <th style="padding: 2px; border: 2px solid #fff; width: 33.33%;">Hotel:</th>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;">6</td>
                <td style="padding: 2px; border: 2px solid #fff;">13</td>
                <td style="padding: 2px; border: 2px solid #fff;">TAK</td>
            </tr>
        </table>

        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #0d4799; color: white;">
                <th style="padding: 2px; border: 2px solid #fff; width: 50%;">Główny realizator:</th>
                <th style="padding: 2px; border: 2px solid #fff; width: 50%;">Pozostali serwisanci</th>
            </tr>
            <tr>
                <td style="padding: 2px; border: 2px solid #fff;">XXXX XXXX</td>
                <td style="padding: 2px; border: 2px solid #fff;">XXX XXXX</td>
            </tr>
        </table>

        <div style="">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 66%; border: none; background-color: transparent;">&nbsp;</td>
                    <td
                        style="width: 33%; border: none; background-color: transparent; text-align: left; vertical-align: top;">
                        TBI Technology Sp. z o.o. <br>
                        ul. Bosacka 52<br>
                        47-400 Racibórz<br>
                        Tel.:<br>
                        E-mail: biuro@tbitech.pl<br>
                        NIP: PL 639-192-88-08<br>
                    </td>
                </tr>
            </table>
        </div>

        <table style="width: 60%; border-collapse: collapse; float: left; font-size: 1rem;">
            <tr>
            <td style="width: 50%; text-align: center; border: none; background-color: transparent; vertical-align: top; padding: 10px; position: relative;">
                <img src="data:image/png;base64,{{ $base64Image }}" alt="Signature" style="max-width: 200px; max-height: 100px; position: absolute; top: 20px; left: 0;">
                Imie Nazwisko<br><br>
                ...........................<br><br>
                Serwisant
            </td>
            <td style="width: 50%; text-align: center; border: none; background-color: transparent; vertical-align: top; padding: 10px; position: relative;">
                <img src="data:image/png;base64,{{ $base64Image2 }}" alt="Signature" style="max-width: 200px; max-height: 100px; position: absolute; top: 20px;">
                Imie Nazwisko<br><br>
                ...........................<br><br>
                Zleceniodawca
            </td>
            </tr>
        </table>

        <div style="margin-top: 200px; padding: 10px;">
            <small>
                Usługa świadczona w oparciu o regulamin, zaakceptowany przez Zleceniodawcę. Usługami serwisowymi w
                ramach gwarancji objęte są wyłącznie uszkodzenia i wady powstałe z
                przyczyn tkwiących w przedmiocie gwarancji. TBI Technology Sp. Z o.o. na podstawie § 6 pkt 7 regulaminu
                świadczenia usług serwisowych zastrzega sobie prawo zmiany
                charakteru świadczenia usługi z gwarancyjnej na odpłatną. Wszystkie dostarczone przez wykonawcę części
                zamienne/oprzyrządowanie pozostają jego własnością do momentu
                uregulowania przez Zleceniodawcę należności z tytułu ich dostawy. W tym czasie Zleceniodawca zobowiązany
                jest do ich zabezpieczenia i ochrony. W przypadku uszkodzenia
                maszyny w skutek kolizji w okresie gwarancyjnym, spowodowanego błędami obsługi, zastrzegamy prawo
                obciążenia kosztami usługi Zleceniodawcę. Reklamacja na wykonaną
                usługę można składać w ciągu 7 dni od daty jej wykonania. <br>
                Strona 1
            </small>
        </div>
    </div>
</body>

</html>
