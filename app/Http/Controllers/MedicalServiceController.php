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
                $query->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('price', 'like', '%' . $request->search . '%')
                    ->orWhere('description', 'like', '%' . $request->search . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

            // Take total of all data without filter
            $totalData = MedicalService::count();

        return Inertia::render('medical_services/index', [
            'response'  => $response,
            'filters'   => $request->all('search'),
            'totalData' => $totalData,
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
        $request->validate([
            'name'  => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        MedicalService::create([
            'name'          => $request->name,
            'price'         => $request->price,
            'description'   => $request->description,
            'created_by'    => Auth::id(),
            'updated_at'    => null,
        ]);

        return redirect()->back()->with('success', 'Medical Service created!');
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
        $request->validate([
            'name'  => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        $medicalService->update([
            'name'          => $request->name,
            'price'         => $request->price,
            'description'   => $request->description,
            'updated_by'    => Auth::id(),
        ]);

        return redirect()->back()->with('success', 'Medical service updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MedicalService $medicalService)
    {
        $data = MedicalService::findOrFail($medicalService->id);

        $data->updated_by = Auth::id();
        $data->save();
        $data->delete();

        return redirect()->back()->with('success', 'Medical service deleted successfully');
    }
}
