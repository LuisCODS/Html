var donnees=new Array();
    donnees['Quebec']=new Array("Montreal","Laval","Trois Rivieres");
    donnees['Ontario']=new Array("Toronto","Ottawa","Kingston");
    donnees['Terre-Neuve']=new Array("St. John","CornerBrook","Gander");

function chargerProv(){
    
    //Get ref. tag
	var selecProv=document.getElementById("selecProv");
    //add a fisrt option
    selecProv.options[selecProv.options.length] = new Option("Choisir une province");
    //...the nexts options
	for(var province in donnees){
        //Peuple à la fin du tableau a new option 
        //...Constructeur new Option(text, value, defaultSelected, selected);)
		selecProv.options[selecProv.options.length] = new Option(province,province.substring(0,2));
	}
}

function chargerVilles(selecProv){
    
    //Get ref. tag
	var selecVilles = document.getElementById("selecVilles");
    //pega o texto da opcao escolhida na tag selectProv
	var provChoisie = selecProv.options[selecProv.selectedIndex].text;
	var lesVilles = donnees[provChoisie];
	var taille = lesVilles.length;
	selecVilles.options.length = 0;//vider le select
	selecVilles.options[selecVilles.options.length] = new Option("Choisir une ville");
	
    for(var i=0;i<taille;i++){
		selecVilles.options[selecVilles.options.length] = new Option(lesVilles[i],lesVilles[i].substring(0,2));
	}
}