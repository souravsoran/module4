var helloWord = "Hello";

function speak1(name){
    console.log(helloWord + " " + name);
    document.write(helloWord + " " + name);
    document.write("\n");
}

var goodBye = "Good Bye";

function speak2(name){
    console.log(goodBye + " " + name);
    document.write(goodBye + " " + name);
    document.write("\n");
}

// for loop


var a = ["Sourav", "Johnson", "joy","sunil" ];
var getLetter="";

function arr(name){
for(var i=0 ; i< name.length; i++){

    var getLetter = name[i].charAt(0);


    if(getLetter === 'J' || getLetter === 'j'){
        speak2(name[i]);
    
    }else{
        speak1(name[i]);
    }
}
}
arr(a);

