/*
 * /!\ À faire à la fin, seul ou en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le 
 * meilleur combo possible :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur 
 * prime sur le type !
 * 
 */

//let cards = ["7h", "8d", "7d", "7s", "8s", "3s", "3h"];
	
//bestCombo(cards);
 
function bestCombo(cards) {
  // CODE HERE
  
	//check full
  
	var arrValue = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var value = card.charAt(0);
		
		if(isNaN(arrValue[value])){
			
			arrValue[value] = 0;
			
		}
		
		arrValue[value] = arrValue[value] + 1;
		
	}
	
	for (let i = 0; i < arrValue.length; i++) {	
	
		
	
	}
	
	//console.log(arrValue);
  
  
}


export { bestCombo };