<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Formula;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;


class FormulaController extends Controller
{
    public function index(Request $request)
    {
        $response = Formula::with(['creator', 'updater'])
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', '%' . $request->search . '%');
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('formulas/index', [
            'response' => $response,
            'filters' => $request->all('search'),
        ]);
        
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|numeric',
        ]);

        Formula::create([
            'name' => $request->name,
            'percentage' => $request->percentage,
            'created_by' => Auth::id(),
            'updated_at' => null,
        ]);

        return redirect()->back()->with('success', 'Formula created!');
    }

    public function update(Request $request, Formula $formula)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|numeric',
        ]);

        $formula->update([
            'name' => $request->name,
            'percentage' => $request->percentage,
            'updated_by' => Auth::id(),
        ]);

        return redirect()->back()->with('success', 'Formula updated!');
    }

    public function destroy($id)
    {
        $formula = Formula::findOrFail($id);

        $formula->updated_by = Auth::id();
        $formula->save();
        $formula->delete();

        return redirect()->back()->with('success', 'Formula deleted successfully');
    }

}
