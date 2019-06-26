function bfmain() {
    //Initialization of the interpreter is here.
    var pointer = 0;
    var mem = [0x0];
    
    var code = document.getElementById("code").value.split('');
    var input = [];
    var output = "";

    input = new_input(input, input_pointer);
	
    code = parse(code);

    var input_pointer = 0;
    var code_pointer = 0;
    
    while(code_pointer < code.length){ //The main loop of the interpreter is here.
	

	switch(code[code_pointer]){    
	case "<":
	    pointer = pointerleft(pointer);
	    break;
	case ">":
	    mem, pointer = pointerright(mem, pointer);
	    break;
	case"+":	    
	    mem[pointer] = add(mem,pointer);
	    break;
	case"-":
	    mem[pointer] = subtract(mem,pointer);
	    break;
	case".":
	    output = output + String.fromCharCode(mem[pointer]);
	    document.getElementById("output").innerHTML = output;
	    break;
	case",":
	    mem, input, input_pointer = mem_insert(mem, pointer, input, input_pointer);
	    break;

	case"[":
	    if(mem[pointer] == 0)
		code_pointer = findendloop(code_pointer, code);
	    break;
	case"]":
	    if(mem[pointer] != 0)
		code_pointer = findbeginloop(code_pointer, code);
	    break;
	    
	    

	}
	code_pointer++;

    }
    

}
//Since javascript doesn't have octal values I have to simulate it using functions
function add(mem,pointer){

    if(mem[pointer] == 256)//It simulates the octal values going overflow and returning to the lowest value
    {
	return 0;
    }
    else
    {
	mem[pointer]++;
	return mem[pointer];
    }
    
    

}

function subtract(mem,pointer){

    if(mem[pointer] == 0) //It simulates the octal value going underflow and returning to the highest value
    {
	return 256;
    }
    else
    {
	mem[pointer]--;
	return mem[pointer];
    }

}


//Mem_insert inserts the current pointed input into the currently pointed mem location
function mem_insert(mem, pointer, input, input_pointer){


    if(input_pointer == input.length)  //If there is no more inputs to insert the memory it will stop the interpreter to prevent a infinite loop.
    {

	document.getElementById("Errors").innerHTML = "All inputs have been exhausted, ending the interpreter to prevent a infinite loop.";
	quit(); 

    }

    
    if(typeof input[input_pointer] == "string")
    {
	mem[pointer] = input[input_pointer].charCodeAt(0);

    }    
    else
    {
	mem[pointer] = input[input_pointer];
    }
    
    input_pointer++;


    return mem, input, input_pointer;
    

}
//It parses through the input window
function new_input(input, input_pointer) {

    input = document.getElementById("input").value.split('');

    document.getElementById("Errors").innerHTML = "";
    
    var parsed_input = [];
    for(var x = 0; x < input.length - 1; x++)
    {
	
	parsed_input.push(input[x]);
	
    }
        
    return parsed_input;

}

//It parses everything in the code window, leaving behind the commands that it executes.
function parse(code){

    var parsed = [];
    for(var x = 0; x < code.length; x++){
	if(code[x] == "<" || code[x] == ">" || code[x] == "+" || code[x] == "-" || code[x] == "," || code[x] == "." || code[x] == "[" || code[x] == "]")
	{
	    parsed.push(code[x]);
	}

    }

    return parsed;
    
}

//Moves the pointer left of the memory array
function pointerleft(position) {

    if(position == 0)
    {
	position = 0;

    }
    else{

	position--;

    }

    return position;
   
}

//Move the pointer right of the memory array
function pointerright(mem, pointer) {

    if(pointer == mem.length - 1)
    {
	mem.push(0x0);

    }

    pointer++;
	

    return mem, pointer;

}

//Using recursion the find end and find begin loop looks for loop in the current tab.
function findendloop(code_pointer, code){

    while(code[code_pointer] != "]")
    {
	code_pointer++;
	if(code[code_pointer] == "[") //If it finds the begginning of a new loop it will recurse and pick up where the end of that loop begins until it find the ending of the loop
	    code_pointer = findendloop(code_pointer, code) + 1;
    }

    return code_pointer;
    

}

function findbeginloop(code_pointer, code) {

    while(code[code_pointer] != "[")
    {
	code_pointer--;
	if(code[code_pointer] == "]")
	    code_pointer = findbeginloop(code_pointer, code) - 1;
    }
    
    
    return code_pointer;

}

//Never could figure out on how to use a form without the page resetting itself
window.onload = function(){

    document.getElementById("execute").addEventListener("click", bfmain);
};


