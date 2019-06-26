function helloworld(){

    var helloworld = "[ This program prints \"Hello World!\" and a newline to the screen, its \n length is 106 active command characters. [It is not the shortest.] \n\n This loop is an \"initial comment loop\", a simple way of adding a comment \ into a BF program such that you don't have to worry about any command\n characters. Any \".\", \",\", \"+\", \"-\", \"<\" and \">\" characters are simply \n ignored, the \"[\" and \"]\" characters just have to be balanced. This \n loop and the commands it contains are ignored because the current cell \n defaults to a value of 0; the 0 value causes this loop to be skipped.\n]\n++++++++               Set Cell #0 to 8\n[\n    >++++               Add 4 to Cell #1; this will always set Cell #1 to 4\n    [                   as the cell will be cleared by the loop\n        >++             Add 2 to Cell #2\n        >+++            Add 3 to Cell #3\n        >+++            Add 3 to Cell #4\n        >+              Add 1 to Cell #5\n        <<<<-           Decrement the loop counter in Cell #1\n    ]                   Loop till Cell #1 is zero; number of iterations is 4\n    >+                  Add 1 to Cell #2\n    >+                  Add 1 to Cell #3\n    >-                  Subtract 1 from Cell #4\n    >>+                 Add 1 to Cell #6\n    [<]                 Move back to the first zero cell you find; this will\n                        be Cell #1 which was cleared by the previous loop\n    <-                  Decrement the loop Counter in Cell #0\n]                       Loop till Cell #0 is zero; number of iterations is 8\n\nThe result of this is:\nCell No :   0   1   2   3   4   5   6\nContents:   0   0  72 104  88  32   8\nPointer :   ^\n\n>>.                     Cell #2 has value 72 which is 'H'\n>---.                   Subtract 3 from Cell #3 to get 101 which is 'e'\n+++++++..+++.           Likewise for 'llo' from Cell #3\n>>.                     Cell #5 is 32 for the space\n<-.                     Subtract 1 from Cell #4 for 87 to give a 'W'\n<.                      Cell #3 was set to 'o' from the end of 'Hello'\n+++.------.--------.    Cell #3 for 'rl' and 'd'\n>>+.                    Add 1 to Cell #5 gives us an exclamation point\n>++.                    And finally a newline from Cell #6";

//Resulting output    
/*var helloworld = '\
[ This program prints \"Hello World!\" and a newline to the screen, its\
  length is 106 active command characters. [It is not the shortest.]\
\
  This loop is an \"initial comment loop\, a simple way of adding a comment\
  to a BF program such that you don\'t have to worry about any command\
  characters. Any \".\", \",\", \"+\", \"-\", \"<\" and \">\" characters are simply\
  ignored, the \"[\" and \"]\" characters just have to be balanced. This\
  loop and the commands it contains are ignored because the current cell\
  defaults to a value of 0; the 0 value causes this loop to be skipped.\
]\
++++++++               Set Cell #0 to 8\
[\
    >++++               Add 4 to Cell #1; this will always set Cell #1 to 4\
    [                   as the cell will be cleared by the loop\
        >++             Add 2 to Cell #2\
        >+++            Add 3 to Cell #3\
        >+++            Add 3 to Cell #4\
        >+              Add 1 to Cell #5\
        <<<<-           Decrement the loop counter in Cell #1\
    ]                   Loop till Cell #1 is zero; number of iterations is 4\
    >+                  Add 1 to Cell #2\
    >+                  Add 1 to Cell #3\
    >-                  Subtract 1 from Cell #4\
    >>+                 Add 1 to Cell #6\
    [<]                 Move back to the first zero cell you find; this will\
                        be Cell #1 which was cleared by the previous loop\
    <-                  Decrement the loop Counter in Cell #0\
]                       Loop till Cell #0 is zero; number of iterations is 8\
\
The result of this is:\
Cell No :   0   1   2   3   4   5   6\
Contents:   0   0  72 104  88  32   8\
Pointer :   ^\
\
>>.                     Cell #2 has value 72 which is \'H\'\
>---.                   Subtract 3 from Cell #3 to get 101 which is \'e\'\
+++++++..+++.           Likewise for \'llo\' from Cell #3\
>>.                     Cell #5 is 32 for the space\
<-.                     Subtract 1 from Cell #4 for 87 to give a \'W\'\
<.                      Cell #3 was set to \'o\' from the end of \'Hello\'\
+++.------.--------.    Cell #3 for \'rl\' and \'d\'\
>>+.                    Add 1 to Cell #5 gives us an exclamation point\
>++.                    And finally a newline from Cell #6\
';
*/
    var code = document.getElementById("code");
    
    code.innerHTML = helloworld;
    
}






