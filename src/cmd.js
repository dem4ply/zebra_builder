/**
 * ABSTRACT CLASS para los comandos de zebra
 *
 * @params {
 *		DPM       {float} (DEFAULT: 8): define el valor de los puntos por MM
 *		carret    {string} (DEFAULT: '^'): inicio de comandos imprimirbles
 *		delimiter {string} (DEFAULT: ','): delimitador de los argumentos del comando
 *		ident_lvl {int} (DEFAULT: 0): nivel de identacion del comando cuando se convierte a string
 *		tilde     {string} (DEFAULT: '~'): inicio de comandos de configuracion o no imprimibles
 *			es el numero de tabs que agrega antes del comando
 * }
*/
ZebraBuilder.Cmd = Class.extend({
	init: function(params) {
		if (!params)
			params = {};
		this.carret = params.carret ? params.carret : '^';
		this.delimiter = params.delimiter ? params.delimiter : ',';
		this.tilde = params.tilde ? params.tilde : '~';
		this.cmd = '';
		this.indent_lvl = params.indent_lvl ? params.indent_lvl : 0;

		this.DPM = params.DPM ? params.DPM : 8;

		if (params.is_metric === undefined)
			this.is_metric = true;
		else
			this.is_metric = params.is_metric;
	},

	/**
	 * FUNCTION convierte el comando a string
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		var args = Array.prototype.slice.call(arguments, 1).join(this.delimiter);
		var indent = '';
		if (pretty) {
			indent = new Array(this.indent_lvl + 1).join('\t');
		}
		return indent + this.carret + this.cmd + args + (pretty ? '\n' : '');
	},
});
