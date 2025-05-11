<?php

namespace App\Http\Controllers;

use App\Models\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FactoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $response = Factory::with(['creator', 'updater'])
                    ->when($request->search, function ($query) use ($request) {
                        $query->where('name', 'like', '%' . $request->search . '%')
                            ->orWhere('description', 'like', '%' . $request->search . '%');
                    })
                    ->orderBy('created_at', 'desc')
                    ->paginate(
                        $request->get('per_page', 10)
                    );

        // Take total of all data without filter
        $totalData = Factory::count();


        return Inertia::render('factories/index', [
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
            'name'  => 'required|string|max:255',
        ]);

        Factory::create([
            'name'          => $request->name,
            'description'   => $request->description,
            'created_by'    => Auth::id(),
            'updated_at'    => null,
        ]);

        return redirect()->back()->with('success', 'Factory created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Factory $factory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Factory $factory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Factory $factory)
    {
        $request->validate([
            'name'  => 'required|string|max:255',
        ]);

        $factory->update([
            'name'          => $request->name,
            'description'   => $request->description,
            'updated_by'    => Auth::id(),
        ]);

        return redirect()->back()->with('success', 'Factory updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Factory $factory)
    {
        $data = $factory->findOrFail($factory->id);

        $data->updated_by = Auth::id();
        $data->save();
        $data->delete();

        return redirect()->back()->with('success', 'Factory deleted successfully');
    }
}
