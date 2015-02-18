/**
 * CLASS comando field
 * HERITAGE: ZebraBuilder.Cmd
*/
ZebraBuilder.cmd.Text = ZebraBuilder.Cmd.extend({
	init: function(h, w, params) {
		this._super(params);
		if (!params)
			params = {};
		if (params.font)
			this.font = params.font;
		else
			this.font = {};
		if (params.orientation)
			this.orientation = params.orietation;
		else
			this.orientation = 'NORMAL';
		this.width = w;
		this.height = h;
		this.cmd = 'A@';
	},

	/**
	 * FUNCTION convierte el comando a string
	 *
	 * @params pretty {BOOL}: define si se concatenara la indentacion y
	 *		se agrega un fin de linea al final
	*/
	toString: function(pretty) {
		var w = this._sizeToMM(this.width);
		var h = this._sizeToMM(this.height);
		var font = this._getStringOfFont();
		var o = this._getOrientation();
		return this._super(pretty, o, w, h, font)
	},

	_getOrientation: function() {
		switch(this.orientation.toUpperCase()) {
			case 'NORMAL':
				return 'N';
			default:
				return 'N';
		}
	},

	_getStringOfFont: function() {
		if (!this.font.name)
			return '';
		var font_name = ('' + this.font.name).toUpperCase();
		var location = ZebraBuilder.FONTS[font_name].LOCATION;
		var name = ZebraBuilder.FONTS[font_name].NAME;
		var ext = ZebraBuilder.FONTS[font_name].EXT;
		if ( this.font.bold && this.font.italic ) {
			name += ZebraBuilder.FONTS[font_name].BOLD_ITALIC;
		}
		else if ( this.font.bold ) {
			name += ZebraBuilder.FONTS[font_name].BOLD;
		}
		else if ( this.font.italic) {
			name += ZebraBuilder.FONTS[font_name].ITALIC;
		}
		else {
			name += ZebraBuilder.FONTS[font_name].NORMAL;
		}

		return location + ':' + name + '.' + ext;
	},

	_sizeToMM: function(size) {
		return size * 0.3528; //medida de un punto de tipografia en mm
	}
	
});
