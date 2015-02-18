/**
 * CLASS manejo de etiquetas para zebra
 *
 * @params {
 *		carret    {string}: inicio de comandos imprimirbles
 *		delimiter {string}: delimitador de los argumentos de llos comandos
 *		tilde     {string}: inicio de comandos de configuracion o no imprimibles
 * }
*/
ZebraBuilder.Document = Class.extend({
	init: function(params) {
		if (!params)
			params = {};
		this.params_cmd = {
			carret: params.carret,
			delimiter: params.delimiter,
			tilde: params.tilde,
		};
		if (!params.defaults)
			params.defaults = {};
		this.defaults = {
			height: params.height,
			width: params.width,
		};

		if (params.is_metric === undefined)
			this.is_metric = true;
		else
			this.is_metric = params.is_metric;

		this.labels = [];
	},

	/**
	 * FUNCTION agrega una nueva etiqueta y cambia el current_label la nueva etiqueta
	 *
	 * @params width  {int}: define el ancho de la etiqueta de se agregara
	 * @params height {int}: define el alto de la etiqueta de se agregara
	*/
	newLabel: function(width, height) {
		if (!width)
			width = this.defaults.width;
		if (!height)
			height = this.defaults.height;
		this.current_label = this._newZebraLabel({
			height: height,
			width: width,
		});
		this.labels.push(this.current_label);
	},

	/**
	 * FUNCTION convierte todas las etiquetas del documento a un zpl
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		var result = '';
		for (var i = 0; i < this.labels.length; ++i) {
			result += this.labels[i].toString(pretty);
		}
		return result;
	},

	/**
	* PRIVATE FUNCTION helper para instanciar la clase de ZebraBuilder.Label
	*
	* @params {
	*		carret    {string}: inicio de comandos imprimirbles
	*		delimiter {string}: delimitador de los argumentos de llos comandos
	*		height    {int}: define el alto de la etiqueta de se agregara
	*		tilde     {string}: inicio de comandos de configuracion o no imprimibles
	*		width     {int}: define el ancho de la etiqueta de se agregara
	* }
	*/
	_newZebraLabel: function(params) {
		params.carret = this.params_cmd.carret;
		params.delimiter = this.params_cmd.delimiter;
		params.tilde = this.params_cmd.tilde;
		params.is_metric = this.is_metric;
		return new ZebraBuilder.Label(params);
	}
})

