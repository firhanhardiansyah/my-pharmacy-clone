<?php

namespace App\Http\Controllers;

use App\Models\MedicalService;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class MedicalServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = MedicalService::with(['creator', 'updater'])
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', '%' . $request->search . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('medical_services/index', [
            'response' => $response,
            'filters' => $request->all('search'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(MedicalService $medicalService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MedicalService $medicalService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MedicalService $medicalService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MedicalService $medicalService)
    {
        //
    }
}
