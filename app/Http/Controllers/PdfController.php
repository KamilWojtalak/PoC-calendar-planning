<?php

namespace App\Http\Controllers;

use App\Models\Signature;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class PdfController extends Controller
{
    public function index(Request $request)
    {
        $signatureContent = Storage::get('signature_1.png');
        $base64Signature = base64_encode($signatureContent);
        $signatureContent2 = Storage::get('signature_2.png');
        $base64Signature2 = base64_encode($signatureContent2);

        $data = [
            'base64Image' => $base64Signature,
            'base64Image2' => $base64Signature2
        ];

        $pdf = Pdf::loadView('pdf.default', $data)
            ->setPaper('a4', 'portrait');

        $pdf->setOption(['isRemoteEnabled' => true]);
        $pdf->setWarnings(app()->environment() !== 'production');

        // return $pdf->download('default.pdf');
        return $pdf->stream('preview.pdf');
    }

    public function test(Request $request)
    {
        $signatureContent = Storage::get('signature_1.png');
        $base64Signature = base64_encode($signatureContent);
        $signatureContent2 = Storage::get('signature_2.png');
        $base64Signature2 = base64_encode($signatureContent2);

        $data = [
            'base64Image' => $base64Signature,
            'base64Image2' => $base64Signature2
        ];

        return view('pdf.default', $data);
    }
}
