<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Storage;
use Response;

class LogController extends Controller
{
	protected $statusCode = 200;

    public function index(){
    	$input = Input::only('logFilePath');  

    	$filePath = $input['logFilePath'];
    	// Storage::copy($input['logFilePath'], 'templog.log');   
    	if(file_exists($filePath)) {
    		foreach($logContents = file($filePath) as $line) {
		    // loop with $line for each line of yourfile.txt
    			// echo $line . "<br/>";
			}       
		}       

		// $sliced = $this->sliceArray($logContents);
		$sliced = $logContents;

		// var_dump($sliced);
    	return $this->respond([
    		'data' => $sliced
    	]);
    	dd($input['logFilePath']);

    }

    private function sliceArray($contentArr, $itemsPerPage = 10){
    	if($itemsPerPage < 1 ) $itemsPerPage = 10;
    	$contentLength = sizeof($contentArr);

    	$slicedArray = array();
    	for($i = 0; $i < $contentLength; $i= $i+10) {
    		$slicedArray[] = array_slice($contentArr, $i, $itemsPerPage);
    	}	
    	return $slicedArray;
    }

    private function respond($data, $headers = []){
		return Response::json($data, $this->statusCode, $headers);
	}
}
