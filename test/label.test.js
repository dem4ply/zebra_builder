describe("ZebraBuilder.Label", function() {
	it("toString empty label by default", function() {
		var b = new ZebraBuilder.Label();
		expect(b.toString()).toBe('^XA^MUM^XZ');
		expect(b.toString(true)).toBe('^XA\n\t^MUM\n^XZ\n');
	});

	it("toString empty label with params", function() {
		var b = new ZebraBuilder.Label({
			carret: '[',
			delimiter: '.',
			tilde: '+',
		});
		expect(b.toString()).toBe('[XA[MUM[XZ');
		expect(b.toString(true)).toBe('[XA\n\t[MUM\n[XZ\n');
	});

	it("set dimencions of label", function() {
		var b = new ZebraBuilder.Label({
			height: 15,
			width: 10,
		});
		expect(b.width).toBe( 10 );
		expect(b.height).toBe( 15 );
	});

	it("create label metric", function() {
		var b = new ZebraBuilder.Label();
		expect( b.is_metric ).toBe( true );
		var b = new ZebraBuilder.Label({
			is_metric: true
		});
		expect( b.is_metric ).toBe( true );
	});

	it("create label no metric", function() {
		var b = new ZebraBuilder.Label({
			is_metric: false 
		});
		expect( b.is_metric ).toBe( false );
	});
});
