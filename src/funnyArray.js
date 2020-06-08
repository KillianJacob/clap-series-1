/*
 * /!\ À faire seul !
 * 
 * L'objectif est le suivant :
 *
 * - Si le nombre d'éléments dans le tableau est impair, je retourne l'élément du milieu, exemple :
 * ary = ['un', 'petit', 'tableau'] alors midArray(ary) retournera 'petit'
 * - Si le nombre d'éléments dans le tableau est pair, je retourne une concaténation des éléments exemple :
 * ary = [1,2,3,4] alors funnyArray(ary) retournera 2 + 3 soit 5
 * ary = ['un', 'plus', 'grand', 'tableau'] alors midArray(ary) retournera 'plusgrand'
 * - Si le tableau est vide, je retourne le mot 'rien'
 */
function funnyArray(ary) {
	
	if(ary.length == 0){
		
		return "rien";
		
	}
	else if(ary.length % 2 != 0){
		
		var indexOfMiddle = ((ary.length - 1)/2);
		
		return ary[indexOfMiddle];
	
	}
	else if(ary.length % 2 == 0){
		
		var indexMiddle1 = (ary.length/2)-1;
		var indexMiddle2 = (ary.length/2);
		
		return ary[indexMiddle1] + ary[indexMiddle2];
		
	}
	
	
}

export { funnyArray };