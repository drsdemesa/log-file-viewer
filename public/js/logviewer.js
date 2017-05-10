console.log("js");
console.log( "asd" + $('#logFilePath').val() );

$( document ).ready(function() {
	var fileContents = "";
	var lastPrintedRow = 0;
	var increments = 10;

	function toggleButton(){
		if(lastPrintedRow < increments) {
			$("go-to-beginning").attr("disabled") = disabled;
			$("previous-ten").attr("disabled") = disabled;
		}
	}

	function printLogs(id){
    	var contentsCount = Object.keys(fileContents.data).length;
    	var doPrint = true;

    		console.log(id + lastPrintedRow);
    	switch(id){
    		case "go-to-end":
    			if(lastPrintedRow == contentsCount){
    				doPrint = false;
    			} else{
    				var start = Math.floor(contentsCount/10) * 10;
    				var displayCount = (contentsCount < (start+increments+1))? contentsCount : start + increments;
    			}
    			break;
    		case "prev-ten" :
    			if(lastPrintedRow <= 10){
    				doPrint = false;
    			} else{
    				console.log("prev10s");
    				var roundedLastPrintedRow = Math.ceil(lastPrintedRow / 10) * 10;
	    			var start = roundedLastPrintedRow - increments*2;
	    			var displayCount = (contentsCount < roundedLastPrintedRow - increments + 1) ? contentsCount : roundedLastPrintedRow - increments;
	    		}
    			break;
    		case "next-ten":
    			if(lastPrintedRow == contentsCount){
    				doPrint = false;
    			} else{
    				var start = lastPrintedRow;
					var displayCount = (contentsCount < (lastPrintedRow+increments+1))? contentsCount : lastPrintedRow + increments;
				}
				break;
    		case "go-to-beginning":
    		default:
    			var start = 0;
    			var displayCount = (contentsCount < (increments+1))? contentsCount : start + increments;
    			break;
    	}

    	if(doPrint) printLogContents(start, displayCount);
	}

	function printLogContents(startIndex, endIndex){
		$("#logs").empty();
		
		$('<table class="table table-bordered" id="logTable"></table>').appendTo( '#logs' );
		for(var i = startIndex; i < endIndex; i++){
			var value = fileContents.data[i];
			key = i;
			if( (key < endIndex) && (key >= startIndex)) {
		  		var rowNum = key + 1;
		  		$("<tr><th>"+rowNum+"</th><td>"+value+"</td></tr>").appendTo( '#logTable' );
			} else{
				//do nothing
			}
		}
		lastPrintedRow = endIndex;
	}

    $('#viewLog').on('click', function(e) {
        e.preventDefault();
        $.get("/viewfile", {logFilePath : $('#logFilePath').val()}, function(dataReceived){
        	fileContents = dataReceived;
        	printLogs();
        });
        return false;//Returning false prevents the event from continuing up the chain
    });

    $('a').on('click', function(e) {
    	printLogs($(this).attr('id'));
    });
});