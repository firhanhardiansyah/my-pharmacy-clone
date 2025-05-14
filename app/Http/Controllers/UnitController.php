<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->get('per_page', 10);

        $response = Unit::with(['creator', 'updater'])
                    ->when($request->search, function ($query) use ($request) {
                        $query->where('code', 'like', '%' . $request->search . '%')
                            ->orWhere('name', 'like', '%' . $request->search . '%')
                            ->orWhere('description', 'like', '%' . $request->search . '%');
                    })
                    ->orderBy('created_at', 'desc')
                    ->paginate($perPage);

        // Take total of all data without filter
        $totalData = Unit::count();


        return Inertia::render('units/index', [
            'response'  => $response,
            'filters'   => $request->only(['search', 'per_page']),
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
            'code'  => 'required|string|max:10',
            'name'  => 'required|string|max:255',
        ]);

        Unit::create([
            'code'          => $request->code,
            'name'          => $request->name,
            'description'   => $request->description,
            'created_by'    => Auth::id(),
            'updated_at'    => null,
        ]);

        return redirect()->back()->with('success', 'Unit created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Unit $unit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Unit $unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Unit $unit)
    {
        $request->validate([
            'code'  => 'required|string|max:10',
            'name'  => 'required|string|max:255',
        ]);

        $unit->update([
            'code'          => $request->code,
            'name'          => $request->name,
            'description'   => $request->description,
            'updated_by'    => Auth::id(),
        ]);

        return redirect()->back()->with('success', 'Unit updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Unit $unit)
    {
        $data = $unit->findOrFail($unit->id);

        $data->updated_by = Auth::id();
        $data->save();
        $data->delete();

        return redirect()->back()->with('success', 'Unit deleted successfully');
    }
}
