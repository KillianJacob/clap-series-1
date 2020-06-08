/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */
function orderCards(cards) {

	var arrValue = {};
	
	var TypeValue = {
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'10': 10,
		'J': 11,
		'Q': 12,
		'K': 13,
		'A': 14,		
	};
  
	var temp_arr = [];
  
	for (let i = 0; i < cards.length; i++) {
	
		var c = cards[i];
	
		if(c.length == 3){
		
			type = c.charAt();
		
		}
		else{
		
			type = c.charAt(1);
			
		}
	
		for (let a = 0; a < cards.length; a++) {
	
			
	
		}		
	
	}

}

export { orderCards };