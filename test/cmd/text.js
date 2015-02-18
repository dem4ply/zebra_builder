describe("ZebraBuilder.cmd.Text", function() {
	it("init", function() {
	});

	describe("Try to get the name of the font to use", function() {

		it("should return an empty string", function() {
			var b = new ZebraBuilder.cmd.Text(1, 1);
			expect(b._getStringOfFont()).toBe('');
		});

		it("should return the string to standard arial", function() {
			var b = new ZebraBuilder.cmd.Text(1, 1, {
				font: {
					name: 'arial',
				}
			});
			expect(b._getStringOfFont()).toBe('E:ARI000.TTF');
		});

		it("should return the string for arial bold", function() {
			var b = new ZebraBuilder.cmd.Text(1, 1, {
				font: {
					name: 'arial',
					bold: true,
				}
			});
			expect(b._getStringOfFont()).toBe('E:ARI001.TTF');
		});

		it("should return the string for arial italic", function() {
			var b = new ZebraBuilder.cmd.Text(1, 1, {
				font: {
					name: 'arial',
					italic: true,
				}
			});
			expect(b._getStringOfFont()).toBe('E:ARI002.TTF');
		});

		it("should return the string for arial bold and italic", function() {
			var b = new ZebraBuilder.cmd.Text(1, 1, {
				font: {
					name: 'arial',
					bold: true,
					italic: true,
				}
			});
			expect(b._getStringOfFont()).toBe('E:ARI003.TTF');
		});
	});

	it("should convert size of point in mm", function() {
		var b = new ZebraBuilder.cmd.Text(1, 1);
		expect( b._sizeToMM(1) ).toBe(0.3528);
		expect( b._sizeToMM(2) ).toBe(0.3528 * 2);
		expect( b._sizeToMM(3) ).toBe(0.3528 * 3);
		expect( b._sizeToMM(4) ).toBe(0.3528 * 4);
	});

	it("shoul return the string of command", function() {
		var b = new ZebraBuilder.cmd.Text(1, 1, {
			font: {
				name: 'arial',
			}
		});
		expect( b.toString() ).toBe('^A@N,0.3528,0.3528,E:ARI000.TTF');
	});

});
