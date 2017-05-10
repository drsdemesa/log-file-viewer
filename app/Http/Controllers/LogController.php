<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class LogController extends Controller
{
    public function index(){
    	$input = Input::only('logFile','logFilePath');            
    	dd($input);

    }
}
