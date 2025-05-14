<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use App\Models\Unit;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $units = [
            ['code' => 'BOTOL', 'name' => 'Botol', 'description' => ''],
            ['code' => 'TABLET', 'name' => 'Tablet', 'description' => ''],
            ['code' => 'STRIP', 'name' => 'Strip', 'description' => ''],
            ['code' => 'SACHET', 'name' => 'Sachet', 'description' => ''],
            ['code' => 'BOX', 'name' => 'Box', 'description' => ''],
            ['code' => 'BUAH', 'name' => 'Buah', 'description' => ''],
            ['code' => 'TUBE', 'name' => 'Tube', 'description' => ''],
            ['code' => 'AMP', 'name' => 'Amp', 'description' => ''],
            ['code' => 'KALENG', 'name' => 'Kaleng', 'description' => ''],
            ['code' => 'AMPUL', 'name' => 'Ampul', 'description' => ''],
            ['code' => 'FLS', 'name' => 'Fls', 'description' => ''],
            ['code' => 'LSN', 'name' => 'Lsn', 'description' => ''],
            ['code' => 'KAPSUL', 'name' => 'Kapsul', 'description' => ''],
            ['code' => 'POT', 'name' => 'Pot', 'description' => ''],
            ['code' => 'PCS', 'name' => 'Pcs', 'description' => ''],
            ['code' => 'VIAL', 'name' => 'Vial', 'description' => ''],
            ['code' => 'SUPP', 'name' => 'Supp', 'description' => ''],
            ['code' => 'PAK', 'name' => 'Pak', 'description' => ''],
            ['code' => 'SYR', 'name' => 'Syr', 'description' => ''],
            ['code' => 'TOKO SUBUR', 'name' => 'Toko Subur', 'description' => ''],
            ['code' => 'FCS', 'name' => 'Fcs', 'description' => ''],
            ['code' => 'KOLF', 'name' => 'Kolf', 'description' => ''],
            ['code' => 'KAPLET', 'name' => 'Kaplet', 'description' => ''],
            ['code' => 'STP', 'name' => 'Stp', 'description' => ''],
            ['code' => 'SALI', 'name' => 'Sali', 'description' => ''],
            ['code' => 'AMB', 'name' => 'Amb', 'description' => ''],
            ['code' => 'TERM', 'name' => 'Term', 'description' => ''],
            ['code' => 'AMPLOP', 'name' => 'Amplop', 'description' => ''],
            ['code' => 'DROP', 'name' => 'Drop', 'description' => ''],
            ['code' => 'DOSE', 'name' => 'Dose', 'description' => ''],
            ['code' => 'TOPLES', 'name' => 'Toples', 'description' => ''],
            ['code' => 'DARS', 'name' => 'Dars', 'description' => ''],
            ['code' => 'KOTAK', 'name' => 'Kotak', 'description' => ''],
            ['code' => 'BPL', 'name' => 'Bpl', 'description' => ''],
            ['code' => 'PIL', 'name' => 'Pil', 'description' => ''],
        ];

        foreach ($units as &$unit) {
            $unit['created_at'] = $now;
        }

        Unit::insert($units);
    }
}
