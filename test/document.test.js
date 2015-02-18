describe("ZebraBuilder.Document", function() {
	it("newLabel 0 labels", function() {
		var b = new ZebraBuilder.Document();
		expect(b.toString()).toBe('');
	});

	it("check current label 5 labels empty", function() {
		var b = new ZebraBuilder.Document();
		for (var i = 0; i < 5; ++i) {
			b.newLabel();
			expect( b.current_label ).toBe( b.labels[ b.labels.length - 1 ] );
		}
	});

	it("create document metric", function() {
		var b = new ZebraBuilder.Document();
		expect( b.is_metric ).toBe(true);
		var b = new ZebraBuilder.Document({
			is_metric: true,
		});
		expect( b.is_metric ).toBe(true);
	});

	it("create document no metric", function() {
		var b = new ZebraBuilder.Document({
			is_metric: false,
		});
		expect( b.is_metric ).toBe(false);
	});

	it("newLabel 1 labels empty", function() {
		var b = new ZebraBuilder.Document();
		b.newLabel();
		expect(b.toString()).toBe('^XA^MUM^XZ');
		expect(b.toString(true)).toBe('^XA\n\t^MUM\n^XZ\n');
	});

	it("newLabel 5 labels empty", function() {
		var b = new ZebraBuilder.Document();
		for (var i = 0; i < 5; ++i) {
			b.newLabel();
		}
		expect(b.toString()).toBe('^XA^MUM^XZ^XA^MUM^XZ^XA^MUM^XZ^XA^MUM^XZ^XA^MUM^XZ');
		expect(b.toString(true)).toBe('^XA\n\t^MUM\n^XZ\n^XA\n\t^MUM\n^XZ\n^XA\n\t^MUM\n^XZ\n^XA\n\t^MUM\n^XZ\n^XA\n\t^MUM\n^XZ\n');
	});

	it("newLabel no metric 1 labels empty", function() {
		var b = new ZebraBuilder.Document({
			is_metric: false,
		});
		b.newLabel();
		expect(b.toString()).toBe('^XA^MUD^XZ');
		expect(b.toString(true)).toBe('^XA\n\t^MUD\n^XZ\n');
	});

	it("newLabel no metric 5 labels empty", function() {
		var b = new ZebraBuilder.Document({
			is_metric: false,
		});
		for (var i = 0; i < 5; ++i) {
			b.newLabel();
		}
		expect(b.toString()).toBe('^XA^MUD^XZ^XA^MUD^XZ^XA^MUD^XZ^XA^MUD^XZ^XA^MUD^XZ');
		expect(b.toString(true)).toBe('^XA\n\t^MUD\n^XZ\n^XA\n\t^MUD\n^XZ\n^XA\n\t^MUD\n^XZ\n^XA\n\t^MUD\n^XZ\n^XA\n\t^MUD\n^XZ\n');
	});

	it("newLabel params 1 labels empty", function() {
		var b = new ZebraBuilder.Document({
			carret: '[',
			delimiter: '.',
			tilde: '+',
		});
		b.newLabel();
		expect(b.toString()).toBe('[XA[MUM[XZ');
		expect(b.toString(true)).toBe('[XA\n\t[MUM\n[XZ\n');
	});

	it("newLabel params 5 labels empty", function() {
		var b = new ZebraBuilder.Document({
			delimiter: '.',
			carret: '[',
			tilde: '+',
		});
		for (var i = 0; i < 5; ++i) {
			b.newLabel();
		}
		expect(b.toString()).toBe('[XA[MUM[XZ[XA[MUM[XZ[XA[MUM[XZ[XA[MUM[XZ[XA[MUM[XZ');
		expect(b.toString(true)).toBe('[XA\n\t[MUM\n[XZ\n[XA\n\t[MUM\n[XZ\n[XA\n\t[MUM\n[XZ\n[XA\n\t[MUM\n[XZ\n[XA\n\t[MUM\n[XZ\n');
	});


});
