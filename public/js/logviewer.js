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
		console.log("printing");
		$("#logs").empty();
		
		$('<table class="table table-bordered" id="logTable"></table>').appendTo( '#logs' );
		$.each( fileContents.data, function( key, value ) {
			if( (key < endIndex) && (key >= startIndex)) {
		  		// alert( key + ": " + value );
		  		var rowNum = key + 1;
		  		$("<tr><th>"+rowNum+"</th><td>"+value+"</td></tr>").appendTo( '#logTable' );
			} else{
				//do nothing
			}
		});
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

    $('#previous-ten').on('click', function(e) {
    });
    $('#next-ten').on('click', function(e) {
    	var contentsCount = Object.keys(fileContents.data).length;
    	var displayCount = (contentsCount < increments+1)? contentsCount : contentsCount + increments;
    	var start = lastPrintedRow;
    	printLogContents(start, displayCount);
    });
    $('#go-to-end').on('click', function(e) {
    });
});