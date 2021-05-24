{
	let mouse;
    let tile;

	function init() {
		messagem = document.getElementById('mouse');
		messaget = document.getElementById('tile');
		document.addEventListener('mousemove', mouse);
		document.addEventListener('click', mouse);
		document.addEventListener('keypress', tile);
	}

	mouse = function(ev) {
		let xRelative, yRelative, xAbsolut, yAbsolut;
		xAbsolut = ev.pageX;
		yAbsolut = ev.pageY;
		xRelative = ev.clientX;
		yRelative = ev.clientY;

		switch (ev.type) {
			case 'mousemove':
				messagem.style.backgroundColor = '#FFFFFF';
				showmouse([
					'Moviendo el ratón',
					'Posición en navegador: [' + xRelative + ', ' + yRelative + ']',
					'Posición en página: [' + xAbsolut + ', ' + yAbsolut + ']'
				]);
				break;
			case 'click':
				messagem.style.backgroundColor = '#FFFFCC';
				showmouse([
					'Con ratón clicado:',
					'Posición en navegador: [' + xRelative + ', ' + yRelative + ']',
					'Posición en página: [' + xAbsolut + ', ' + yAbsolut + ']'
				]);
				break;
		}
	};

	tile = function(ev) {
		let xRelative, yRelative, xAbsolut, yAbsolut;
		xAbsolut = ev.pageX;
		yAbsolut = ev.pageY;
		xRelative = ev.clientX;
		yRelative = ev.clientY;

		switch (ev.type) {
			case 'keypress':
				messaget.style.backgroundColor = '#CCE6FF';
				let character = ev.charCode || ev.keyCode;
				let sign = String.fromCharCode(character);
				let code = sign.charCodeAt(0);
				showtile([
					'Pulsando el teclado:',
					'Carácter de la tecla pulsada: [' + sign + ']',
					'Código del carácter: [' + code + ']'
				]);
				break;
		}
	};


	let showmouse = function(info) {
		messagem.innerHTML = '<h2>' + info[0] + '</h2>';
		for (let i = 1; i < info.length; i++) {
			messagem.innerHTML += '<p>' + info[i] + '</p>';
		}
	};


	let showtile = function(info) {
		messaget.innerHTML = '<h2>' + info[0] + '</h2>';
		for (let i = 1; i < info.length; i++) {
			messaget.innerHTML += '<p>' + info[i] + '</p>';
		}
	};


	document.addEventListener('DOMContentLoaded', init);
}
