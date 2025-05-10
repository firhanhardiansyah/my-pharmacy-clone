<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use App\Models\Uom;

class UomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $uoms = [
            ['code' => 'kg', 'name' => 'Kilogram', 'description' => 'Berat dalam kilogram'],
            ['code' => 'g', 'name' => 'Gram', 'description' => 'Berat dalam gram'],
            ['code' => 'mg', 'name' => 'Miligram', 'description' => 'Berat dalam miligram'],
            ['code' => 'ltr', 'name' => 'Liter', 'description' => 'Volume dalam liter'],
            ['code' => 'ml', 'name' => 'Mililiter', 'description' => 'Volume dalam mililiter'],
            ['code' => 'm', 'name' => 'Meter', 'description' => 'Panjang dalam meter'],
            ['code' => 'cm', 'name' => 'Centimeter', 'description' => 'Panjang dalam centimeter'],
            ['code' => 'mm', 'name' => 'Milimeter', 'description' => 'Panjang dalam milimeter'],
            ['code' => 'pcs', 'name' => 'Pieces', 'description' => 'Jumlah satuan'],
            ['code' => 'dozen', 'name' => 'Dozen', 'description' => '1 dozen = 12 pieces'],
            ['code' => 'box', 'name' => 'Box', 'description' => 'Satuan kemasan kotak'],
            ['code' => 'pack', 'name' => 'Pack', 'description' => 'Satuan kemasan paket'],
            ['code' => 'sheet', 'name' => 'Sheet', 'description' => 'Lembar'],
            ['code' => 'roll', 'name' => 'Roll', 'description' => 'Satuan gulungan'],
            ['code' => 'bottle', 'name' => 'Bottle', 'description' => 'Satuan botol'],
            ['code' => 'tablet', 'name' => 'Tablet', 'description' => 'Satuan tablet obat'],
            ['code' => 'tube', 'name' => 'Tube', 'description' => 'Satuan tube'],
            ['code' => 'sachet', 'name' => 'Sachet', 'description' => 'Satuan sachet kecil'],
            ['code' => 'bar', 'name' => 'Bar', 'description' => 'Batangan'],
            ['code' => 'unit', 'name' => 'Unit', 'description' => 'Satuan tunggal umum'],
        ];

        foreach ($uoms as &$uom) {
            $uom['created_at'] = $now;
        }

        Uom::insert($uoms);
    }
}
