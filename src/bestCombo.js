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
 
function bestCombo(cards) {

	var bestHand = null;

	var allPerm = perm(cards);

	for (let i = 0; i < allPerm.length; i++) {
		
		if(bestHand == null){
		
			bestHand = allPerm[i].slice(1, 5 + 1);
		
		
		}
		else{
			
			bestHand = compareCombos(bestHand,allPerm[i].slice(1, 5 + 1))
			
		}
		
	}
	
	return bestHand;

}

function compareCombos(cards1, cards2) {
  
  var res = null;
  
  if(isAFull(cards1) && !isAFull(cards2)){
	  
	  res = cards1;
	  
  }
  else if(isAFull(cards2) && !isAFull(cards1)){
	  
	  res = cards2;
	  
  }
  else if(isAFlush(cards1) && !isAFlush(cards2)){
	  
	  res = cards1;
	  
  }
  else if(isAFlush(cards2) && !isAFlush(cards1)){
	  
	  res = cards2;
	  
  }
  else if(isAPair(cards1) && !isAPair(cards2)){
	  
	  res = cards1;
	  
  }
  else if(isAPair(cards2) && !isAPair(cards1)){
	  
	  res = cards2;
	  
  }
  else if(getHauteur(cards1) > getHauteur(cards2)){
	  
	  res = cards1;
	  
  }
  else if(getHauteur(cards2) > getHauteur(cards1)){
	  
	  res = cards2;
	  
  }
  
  return res;
  
}

function getHauteur(cards) {
	
	var hauteur = 0;
	
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
	
	var symbole = {
		'd' : 1,
		'c' : 2,
		'h' : 3,
		's' : 4,	
	}
	
	for (let i = 0; i < cards.length; i++) {
	
			var c = cards[i];
	
			var value = null;
			var type = null;
	
			if(c.length == 3){
		
				value = c.substring(0, 1);
				type = c.charAt(2);
			
		
			}
			else{
		
				value = c.charAt(0);
				type = c.charAt(1);
				
			}
	
			
	
		hauteur = hauteur + (TypeValue[value] * symbole[type]);
	
	
	}
	
	return hauteur;
	
}

function isAFull(cards) {

	var res = false;

	var has3Type = false;
	var has2Type = false;
	
  	var arrValue = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var value = card.charAt(0);
		
		if(isNaN(arrValue[value])){
			
			arrValue[value] = 0;
			
		}
		
		arrValue[value] = arrValue[value] + 1;
		
	}

	for (var key in arrValue) {

		if(arrValue[key] == 3){
			
			has3Type = true;
			
		}
		else if(arrValue[key] == 2){


			has2Type = true;

		}			

	}
	
	return has3Type && has2Type;

}

function isAPair(cards) {

	var res = false;

  	var arrValue = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var value = card.charAt(0);
		
		if(isNaN(arrValue[value])){
			
			arrValue[value] = 0;
			
		}
		
		arrValue[value] = arrValue[value] + 1;
		
	}

	for (var key in arrValue) {

		if(arrValue[key] >= 2){
			
			res = true;
			
		}

	}
	
	return res;

}

function isAFlush(cards) {
  // CODE HERE
  
	var res = false;
  
	var arrType = {};
  
	for (let i = 0; i < cards.length; i++) {
		
		var card = cards[i];
		
		var type = null;
		
		if(card.length == 3){
		
			type = card.charAt(2);
		
		}
		else{
		
			type = card.charAt(1);
			
		}
		
		if(isNaN(arrType[type])){
			
			arrType[type] = 0;
			
		}
		
		arrType[type] = arrType[type] + 1;
		
	}
	
	for (var key in arrType) {
	
		if(arrType[key] == 5){
			
			res = true;
			
		}
	
	}



	
	return res;
	
  
}

function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
      ret.push([xs[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}


export { bestCombo };