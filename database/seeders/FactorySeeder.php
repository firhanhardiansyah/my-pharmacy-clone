<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Factory;

class FactorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names = [
            'ABBOT',
            'MERAPI',
            'GENERIK',
            'SANBE FARMA',
            'BAYER',
            'KALBE FARMA',
            'JITU',
            'NOVELL ALFA',
            'SANBE FARMA OTC',
            'LAPI LABORATORIES',
            'PHAPROS',
            'NOVO NORDISK',
            'BECTON DICKI',
            'TERUMO',
            'COMBIPHAR',
            'MERCK',
            'MERCK',
            'NEW INTERBAT',
            'OTTO PHARMACEUTICAL',
            'JITU',
            'RUSCH',
            'BOEHRINGER I',
            'SOHO',
            'GEIGY',
        ];

        foreach ($names as $name) {
            Factory::insert([
                'name'          => $name,
                'description'   => '-',
            ]);
        }
    }
}
