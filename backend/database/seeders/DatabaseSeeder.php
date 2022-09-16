<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('food')->insert([
            'name' => 'aple',
            'jenis' => 'buah buahan',
            'deskripsi' => 'makanan sehat',
            'created_at' => Carbon::now(),
        ]);
    }
}
