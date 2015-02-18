describe("ZebraBuilder.cmd.Vector", function() {
	it("init", function() {
		var b = new ZebraBuilder.cmd.Vector();
		expect(b.x).toBe(0);
		expect(b.y).toBe(0);
		var b = new ZebraBuilder.cmd.Vector(0, 0);
		expect(b.x).toBe(0);
		expect(b.y).toBe(0);
		var b = new ZebraBuilder.cmd.Vector(2, 3);
		expect(b.x).toBe(2);
		expect(b.y).toBe(3);
	});

	it("getX", function() {
		var b = new ZebraBuilder.cmd.Vector(10, 20);
		expect(b.getX()).toBe(10);
		expect(b.getX(true)).toBe(10);
		expect(b.getX(false)).toBe(80);
	});

	it("getY", function() {
		var b = new ZebraBuilder.cmd.Vector(10, 20);
		expect(b.getY()).toBe(20);
		expect(b.getY(true)).toBe(20);
		expect(b.getY(false)).toBe(160);
	});

	it("change DPM", function() {
		var b = new ZebraBuilder.cmd.Vector(10, 20, {DPM: 15});
		expect(b.getX()).toBe(10);
		expect(b.getX(true)).toBe(10);
		expect(b.getX(false)).toBe(150);
		expect(b.getY()).toBe(20);
		expect(b.getY(true)).toBe(20);
		expect(b.getY(false)).toBe(300);
	});

});
