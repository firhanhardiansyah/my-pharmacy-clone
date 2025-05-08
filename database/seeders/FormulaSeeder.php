<?php

namespace Database\Seeders;

use App\Models\Formula;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormulaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Formula::insert([
            [
                'name' => 'Bebas',
                'percentage' => 25.0,
            ],
            [
                'name' => 'Resep Dalam',
                'percentage' => 45.0,
            ],
            [
                'name' => 'Resep Luar',
                'percentage' => 45.0,
            ],
            [
                'name' => 'PPN',
                'percentage' => 11.0,
            ],
            [
                'name' => 'Non PPN',
                'percentage' => 0.0,
            ],
            [
                'name' => 'BPJS',
                'percentage' => 25.0,
            ],
        ]);
    }
}
