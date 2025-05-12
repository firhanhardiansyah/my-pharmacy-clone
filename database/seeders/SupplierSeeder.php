<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Supplier;
use Faker\Factory as Faker;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 50; $i++) {
            Supplier::insert([
                'name'    => $faker->company,
                'email'   => $faker->unique()->companyEmail,
                'phone'   => $faker->phoneNumber,
                'address' => $faker->address,
            ]);
        }
    }
}
