(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			return indexes[i];
		}
		
		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	var letters = [
		['w','s','i','a','l','c','e','o','i','p'],
		['v','a','l','p','h','a','c','k','e','r'],
		['u','t','i','g','u','a','n','a','o','o'],
		['u','c','i','f','r','a','c','l','p','c'],
		['a','l','d','o','g','e','e','u','d','e'],
		['l','o','g','i','c','a','t','l','s','s'],
		['a','b','i','s','d','n','o','r','i','s'],
		['n','t','e','s','t','e','a','h','b','o'],
		['z','m','p','d','a','d','o','s','r','l'],
		['f','p','e',"q",'t','a','m','l','o','j']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[ [1,4], [1,5], [1,6], [1, 7], [1,8], [1, 9] ],
		[ [3,8], [4,8], [5,8] ],
		[ [0,9], [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9] ],
		[ [2,2], [2,3], [2,4], [2,5], [2,6], [2,7] ],
		[ [3,1], [3,2], [3,3], [3,4], [3,5] ],
		[ [5,0], [5,1], [5,2], [5,3], [5,4], [5,5] ],
		[ [7,1], [7,2], [7,3], [7,4], [7,5] ],
		[ [8,3], [8,4], [8,5], [8,6], [8,7] ],
		[ [5,7], [4,7], [3,7], [2,7] ],
		[ [0,5], [0,6], [0,7] ],
		
	]
	var gameWords = ['hacker','pds','processo','iguana','cifra', 'logica', 'teste', 'dados','lula', 'ceo'];

	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);

}) ();