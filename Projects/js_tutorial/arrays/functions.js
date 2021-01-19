


var repeatflag = true;
var userResponse;
var todoList = [];

while( repeatflag )
   {
   	  userResponse = prompt("What would you like to do?");

   	  if( userResponse === "list" )
   	    {
   	       console.log("**********");
   	       todoList.forEach(function(print, index){ console.log(index + ': ' + print)});
   	       console.log("**********");
   	    }

   	  else if( userResponse === "new")
   	    {
   	    	todoList.push( prompt("Enter new to do list item.") );
   	    }  

   	  else if( userResponse === "delete")
   	    {
   	    	var index = prompt("Enter index of todo to delete");
   	    	todoList.splice(index, 1 );
   	    }  

   	  else if( userResponse === "quit")
   	    {
		   console.log("OK, YOU QUIT THE APP");
		   repeatflag = false;   
        }	
   	  }
