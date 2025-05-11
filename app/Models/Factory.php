<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Factory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'description', 'created_by', 'updated_by'];
    
    public function creator() 
    {
        return $this->belongsTo(User::class, 'created_by');
    }
    
    public function updater() 
    {
        return $this->belongsTo(User::class, 'edited_by');
    }
}
