describe("ZebraBuilder.cmd.FieldText", function() {

	it("should return the string of cmd", function() {
		var b = new ZebraBuilder.cmd.FieldText(0, 0, 1, 1, 'test', {
			font: {
				name: 'arial',
			},
		});
		expect( b.toString() ).toBe('^FO0,0^A@N,0.3528,0.3528,E:ARI000.TTF^FDtest^FS');
	});

});
