/**
 * CLASS almacena los comandos de las etiquetas
 *
 * @params {
 *		carret    {string}: inicio de comandos imprimirbles
 *		delimiter {string}: delimitador de los argumentos de llos comandos
 *		height    {int}: altura de la etiqueta
 *		tilde     {string}: inicio de comandos de configuracion o no imprimibles
 *		width     {int}: ancho de la etiqueta
 * }
*/
ZebraBuilder.Label = Class.extend({
	init: function(params) {
		if (!params)
			params = {};
		this.params_cmd = {
			carret: params.carret,
			delimiter: params.delimiter,
			tilde: params.tilde,
			indent_lvl: 1,
		};
		this.height = params.height ? params.height : 50;
		this.width = params.width ? params.width : 50;

		if (params.is_metric === undefined)
			this.is_metric = true;
		else
			this.is_metric = params.is_metric;

		this.cmds = [];
	},

	/**
	 * FUNCTION convierte la etiqueta a un zpl agregando al principio y al final
	 *		el init label y end label
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		var init_params = this._cloneParams(this.params_cmd);
		this.params_cmd.is_metric = this.is_metric;
		var result = new ZebraBuilder.InitLabel( init_params ).toString(pretty);
		result += new ZebraBuilder.cmd.Metric( this.params_cmd ).toString(pretty);
		for (var i = 0; i < this.cmds.length; ++i) {
			result += this.cmd[i].toString(pretty);
		}
		result += new ZebraBuilder.EndLabel( init_params ).toString(pretty);
		return result;
	},

	/**
	 * PRIVATE FUNCTION helper para clonar la estructura basica de parametros para los comandos
	*/
	_cloneParams: function(params) {
		return {
			carret: params.carret,
			delimiter: params.delimiter,
			tilde: params.tilde,
		};
	},
});

