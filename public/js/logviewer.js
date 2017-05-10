console.log("js");
console.log( "asd" + $('#logFilePath').val() );

$( document ).ready(function() {
	var fileContents = "";
	var lastPrintedRow = 0;
	var increments = 10;

	function printBeginning(id){
    	var contentsCount = Object.keys(fileContents.data).length;
    	console.log(id);
    	switch(id){
    		case "go-to-end":
    			var start = Math.floor(contentsCount/10) * 10;
    			var displayCount = (contentsCount < (start+increments+1))? contentsCount : start + increments;
    			break;
    		case "previous-ten" :
    			var start = lastPrintedRow - increments*2;
    			var displayCount = lastPrintedRow - increments;
    			break;
    		case "next-ten":
    			var start = lastPrintedRow;
    			console.log("lastPrintedRow = " + lastPrintedRow);
				var displayCount = (contentsCount < (lastPrintedRow+increments+1))? contentsCount : lastPrintedRow + increments;
				break;
    		case "go-to-beginning":
    		default:
    			var start = 0;
    			var displayCount = (contentsCount < (increments+1))? contentsCount : start + increments;
    			break;
    	}
    	console.log("contentsCount = " + contentsCount + ", start = " + start + ", displayCount = "+ displayCount);
    	
    	printLogContents(start, displayCount);
	}

	function printLogContents(startIndex, endIndex){
		$("#logs").empty();
		
		$('<table class="table table-bordered" id="logTable"></table>').appendTo( '#logs' );
		for(var i = startIndex; i < endIndex; i++){
			var value = fileContents.data[i];
			key = i;
			if( (key < endIndex) && (key >= startIndex)) {
		  		// alert( key + ": " + value );
		  		var rowNum = key + 1;
		  		$("<tr><th>"+rowNum+"</th><td>"+value+"</td></tr>").appendTo( '#logTable' );
			} else{
				//do nothing
			}
		};
		lastPrintedRow = endIndex;
	}

    $('#viewLog').on('click', function(e) {
        // alert( "Handler for .on() called." );
        e.preventDefault();
        $.get("/viewfile", {logFilePath : $('#logFilePath').val()}, function(dataReceived){
        	fileContents = dataReceived;
        	printBeginning();
        });
        return false;//Returning false prevents the event from continuing up the chain
    });

    $('a').on('click', function(e) {
    	printBeginning($(this).attr('id'));
    });
});