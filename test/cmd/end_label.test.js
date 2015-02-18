describe("ZebraBuilder.EndLabel", function() {
	it("init", function() {
		var b = new ZebraBuilder.EndLabel();
		expect(b.cmd).toBe('XZ');
	});

	it("toString", function() {
		var b = new ZebraBuilder.EndLabel();
		expect(b.toString()).toBe('^XZ');
		expect(b.toString(true)).toBe('^XZ\n');
	});
});
