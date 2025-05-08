<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MedicalService;

class MedicalServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MedicalService::insert([
            ['name' => 'Konsultasi Dokter Umum', 'price' => 50000, 'description' => 'Pemeriksaan umum oleh dokter.'],
            ['name' => 'Konsultasi Dokter Spesialis Anak', 'price' => 100000, 'description' => 'Pemeriksaan dan konsultasi anak.'],
            ['name' => 'Konsultasi Dokter Spesialis Penyakit Dalam', 'price' => 120000, 'description' => 'Pemeriksaan penyakit organ dalam.'],
            ['name' => 'Konsultasi Dokter Spesialis Kandungan', 'price' => 130000, 'description' => 'Konsultasi kehamilan dan kandungan.'],
            ['name' => 'Konsultasi Dokter Gigi', 'price' => 75000, 'description' => 'Pemeriksaan gigi dan mulut.'],
            ['name' => 'Pemeriksaan Laboratorium Darah Lengkap', 'price' => 150000, 'description' => 'Tes darah lengkap.'],
            ['name' => 'Tes Urine Lengkap', 'price' => 100000, 'description' => 'Pemeriksaan urin komprehensif.'],
            ['name' => 'USG Abdomen', 'price' => 250000, 'description' => 'Pemeriksaan organ perut dengan USG.'],
            ['name' => 'Rontgen Dada', 'price' => 200000, 'description' => 'Pemeriksaan thorax menggunakan sinar-X.'],
            ['name' => 'EKG (Elektrokardiogram)', 'price' => 180000, 'description' => 'Pemeriksaan irama jantung.'],
            ['name' => 'Tes Kehamilan', 'price' => 50000, 'description' => 'Pemeriksaan hCG dalam urin.'],
            ['name' => 'Tes Gula Darah', 'price' => 40000, 'description' => 'Tes kadar glukosa darah.'],
            ['name' => 'Pemeriksaan Kolesterol', 'price' => 75000, 'description' => 'Pemeriksaan kadar kolesterol.'],
            ['name' => 'Nebulizer', 'price' => 60000, 'description' => 'Terapi pernapasan dengan uap.'],
            ['name' => 'Fisioterapi Sesi Tunggal', 'price' => 100000, 'description' => 'Satu sesi terapi fisik.'],
            ['name' => 'Infus Vitamin C', 'price' => 150000, 'description' => 'Pemberian vitamin C melalui infus.'],
            ['name' => 'Pemeriksaan Mata Dasar', 'price' => 60000, 'description' => 'Screening mata awal.'],
            ['name' => 'Pembersihan Telinga', 'price' => 40000, 'description' => 'Membersihkan telinga dari kotoran.'],
            ['name' => 'Vaksinasi Influenza', 'price' => 175000, 'description' => 'Pemberian vaksin flu tahunan.'],
            ['name' => 'Sunat (Khitan) Anak', 'price' => 300000, 'description' => 'Prosedur sunat dengan alat modern.'],
        ]);
    }
}
