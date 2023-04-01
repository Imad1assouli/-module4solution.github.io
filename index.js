var names=new Array();
names[0]="paul";
names[1]="anna";
names[2]="John";
names[3]="jason";
names[4]="Yaakov";
names[5]="jen";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
