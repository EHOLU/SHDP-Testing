const { browser } = require("protractor")

describe('non-prod sso', function () {
	var obj = require("./locatordetails.js")
	var data = require("./farmerdetails.js")
	var using = require('jasmine-data-provider')

	function checkingTaskTable(a) {
		element.all(by.tagName("tbody")).each(function (item) {
			element.all(by.css("tr[class='mat-row cdk-row ng-star-inserted']")).each(function (row, index) {
				row.getText().then(function (text) {
					expect(text).toContain(a);
				})
			})
		})
	}

	function scrolling() {
		browser.executeScript('window.scrollTo(0,1000);').then(function () {
			browser.sleep(1000);
		})
	}

	function scrollUp() {
		browser.executeScript('window.scrollTo(0,-5000);').then(function () {
			browser.sleep(1000);
		})
	}

	function clearValue(ele) {
		element(by.css(ele)).clear().then(function () {
			element(by.css(ele)).sendKeys(' ');
			browser.sleep(3000);
		})
		browser.actions().click().perform();
	}

	function ruleSelection(rule) {
		element(by.css("mat-select[aria-labelledby='mat-form-field-label-9 mat-select-value-7']")).sendKeys(rule);
		browser.sleep(1000);
		scrollUp();
		obj.searchButton.click();
		browser.sleep(5000);
	}

	function sourceSelection(source) {
		scrollUp();
		element(by.xpath('(//mat-card-content/div[1]/div[3]/mat-form-field/div/div[1]/div[3]/mat-select)')).sendKeys(source)
		browser.sleep(2500);
		scrollUp();
		obj.searchButton.click();
		browser.sleep(5000);
	}

	it('open non-prod SHDIP website', function () {
		protractor.loginHelpers.loginToPage()
		//expect(browser.getCurrentUrl()).toEqual('https://prod.shdip.int.bayer.com/');
	})

	using(data.datadrive, function (data, description) {
	
	function checkingSourceSystems() {
		browser.sleep(1500);
		element.all(by.css("tr[class='mat-row cdk-row ng-star-inserted']")).each(function (row, index) {
			row.getText().then(function (text) {
				console.log(text);
				expect(text).toContain(data.srccheck);
			})
		})
	}

	function checkingFarmerRule() {
		element.all(by.css("td[class='mat-cell cdk-cell cdk-column-matchRuleName mat-column-matchRuleName ng-star-inserted']")).each(function (column, index) {
			column.getText().then(function (text) {
				console.log(text);
				expect(text).toContain(data.farmerRule);
			})
		})
	}

	function checkingMatchScore() {

		element.all(by.css("td[class='mat-cell cdk-cell cdk-column-matchScore mat-column-matchScore ng-star-inserted']")).each(function (column, index) {
			column.getText().then(function (text) {
				console.log(text);
				expect(parseInt(text) >= data.matchScore).toBeTruthy();
			})
		})
	}

	function checkingName() {

		element.all(by.css("tr[class='mat-row cdk-row ng-star-inserted")).each(function (row, index) {
			row.getText().then(function (text) {
				console.log(text);
				expect(text).toContain(data.farmerName);
			})
		})
	}


	// it('Country And Region Selection',function(){
	// 	browser.sleep(5000);
	// 	//region,country selection
	// 	element(by.xpath('(//app-root[1]/div[1]/div[1]/app-body[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-region-country[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3])')).click().then(function(){
	// 		browser.sleep(3000);
	// 		element(by.css("mat-option[ng-reflect-value='Australia']")).click();
	// 		browser.sleep(3000);
	// 		element(by.css("mat-option[ng-reflect-value='APAC']")).click();
	// 		browser.sleep(3000);
	// 	})
	// 	browser.actions().click().perform();
	// 	element(by.xpath('(//app-root[1]/div[1]/div[1]/app-body[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-region-country[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[3])')).click().then(function(){
	// 		browser.sleep(3000);
	// 		element(by.css("span[class='mat-checkbox-inner-container']")).click();
	// 		browser.sleep(3000);
	// 		element(by.css("mat-option[ng-reflect-value='INDIA']")).click();
	// 		browser.sleep(3000);
	// 	})
	// 	browser.actions().click().perform();
	// })


	it('Source Verification '+description, function () {
		browser.sleep(3000);
		obj.taskListPage.click();
		obj.inputFarmerRule.sendKeys('All Rules');
		obj.inputfsrcsys.sendKeys('All Sources').then(function () {
		browser.actions().click().perform();
		})
		obj.inputFarmerName.clear().sendKeys(' ');
		obj.inputMatchScore.click().then(function () {
			browser.switchTo().activeElement().sendKeys('0').then(function () {
				browser.actions().click().perform();
				browser.sleep(1000);
				obj.searchButton.click();
				browser.sleep(2000);
			})
		});
		obj.searchButton.click();
		obj.inputfsrcsys.sendKeys(data.srcSys).then(function () {
		browser.actions().click().perform();
		browser.sleep(5000);
		obj.searchButton.click();
		checkingSourceSystems();
		})
		scrolling();
		browser.sleep(1500);
		obj.lastPage.click();
		browser.sleep(1000);
		scrollUp();
		checkingSourceSystems();
		console.log("task page search");
	})


	it('Score Verification in TaskPage '+description, function () {
		scrolling();
		obj.firstPage.click();
		sourceSelection('All Sources');
		obj.inputMatchScore.click().then(function () {
			browser.sleep(2000);
			browser.switchTo().activeElement().sendKeys(data.matchScore).then(function () {
				browser.actions().click().perform();
				browser.sleep(1000);
			})
		})
		obj.searchButton.click();
		browser.sleep(2000);
		scrolling();
		checkingMatchScore();
		browser.sleep(1500);
		obj.nextPage.click();
		checkingMatchScore();
	})



	/************************************* */
	// Checking for Farmer Rule 
	/*************************************** */



	it('Checking Farmer rules '+description, function () {
		scrollUp();
		obj.inputMatchScore.click().then(function () {
			browser.sleep(2000);
			browser.switchTo().activeElement().sendKeys('0').then(function () {
				browser.actions().click().perform();
				browser.sleep(1000);
			})
		})
		obj.inputFarmerRule.sendKeys(data.farmerRule);
		browser.sleep(3000);
		obj.searchButton.click();
		browser.sleep(3000);
		scrolling();
		obj.firstPage.click();
		checkingFarmerRule();
		browser.sleep(1500);
		obj.nextPage.click();
		scrollUp();
		checkingFarmerRule();
	})


	// //***** verifying Farmer name *****//


	it('Verifying Farmer Name '+description, function () {
		scrollUp();
		clearValue("input[aria-label='Full Name']");
		obj.inputFarmerName.sendKeys(data.farmerName);
		obj.searchButton.click();
		browser.sleep(2000);
		checkingName();
		scrolling();
	})

	// //***** Verifying farmer rule M5 *******//

	


	// it('verifying for match rule M3', function () {
	// 	scrollUp();
	// 	clearValue("input[aria-label='Full Name']");
	// 	ruleSelection('FARMER_M3')
	// 	browser.sleep(5000);
	// 	obj.searchButton.click();
	// 	browser.sleep(5000);
	// 	element(by.css("mat-icon[class='mat-icon notranslate material-icons mat-icon-no-color']")).click().then(function () {
	// 		var loc1, loc2, contact1, contact2;
	// 		browser.sleep(3000);
	// 		element(by.xpath("//div[3]/div[2]/div/mat-dialog-container/app-taskdialog/div/mat-dialog-content/div/div/app-location/mat-card/mat-card-content/table/tbody/tr/td[4]")).getText().then(function (item) {
	// 			console.log(item);
	// 			loc1 = item;
	// 			element(by.xpath("//div[3]/div[2]/div/mat-dialog-container/app-taskdialog/div/mat-dialog-content/div/div[2]/app-location/mat-card/mat-card-content/table/tbody/tr/td[4]")).getText().then(function (item2) {
	// 				console.log(item2);
	// 				loc2 = item2;
	// 				expect(loc1).toContain(loc2);
	// 			})
	// 		})
	// 		element(by.xpath("//div[3]/div[2]/div/mat-dialog-container/app-taskdialog/div/mat-dialog-content/div/div[1]/app-personal/mat-card/div[2]/table/tbody/tr[5]/td")).getText().then(function (item3) {
	// 			console.log(item3);
	// 			contact1 = item3;
	// 			element(by.xpath("//div[3]/div[2]/div/mat-dialog-container/app-taskdialog/div/mat-dialog-content/div/div[2]/app-personal/mat-card/div[2]/table/tbody/tr[5]/td")).getText().then(function (item4) {
	// 				console.log(item4);
	// 				contact2 = item4;
	// 				expect(contact1).toEqual(contact2);
	// 			})
	// 		})

	// 	})
	// }, 480000)


		it('task page when all details are given '+description,function(){
			browser.sleep(4000);
			obj.inputFarmerName.clear().then(function () {
				obj.inputFarmerName.sendKeys(data.farmerName);
				browser.actions().click().perform();
				browser.sleep(3000);
			})
			obj.inputFarmerRule.sendKeys(data.farmerRule).then(function () {
				browser.actions().click().perform();
				browser.sleep(3000);
			})
			obj.inputfsrcsys.sendKeys(data.srcSys).then(function () {
				browser.actions().click().perform();
				browser.sleep(3000);
			})
			obj.inputMatchScore.sendKeys(data.matchScore).then(function () {
					browser.actions().click().perform();
					browser.sleep(3000);
			})
					element(by.css("span[class='mat-button-wrapper']")).click().then(function () {
						browser.sleep(4000);
						checkingSourceSystems();
						browser.sleep(1000);
						checkingFarmerRule();
						browser.sleep(4000);
						checkingMatchScore();
						checkingName();
			
			})
		}, 600000)
        
	})
	it('verifying for match rule M5', function () {
		scrollUp();
		ruleSelection('All Rules');
		clearValue("input[aria-label='Full Name']");
		ruleSelection('FARMER_M5');
		browser.sleep(2000);
		obj.searchButton.click();
		browser.sleep(2000);
		element(by.css("mat-icon[class='mat-icon notranslate material-icons mat-icon-no-color']")).click().then(function () {
			var loc1, loc2, name1, name2;
			browser.sleep(1000);
			element(by.xpath("//div/div/app-location/mat-card/mat-card-content/table/tbody/tr/td[4]")).getText().then(function (item) {
			console.log(item);
				loc1 = item;
				element(by.xpath("//div/div[2]/app-location/mat-card/mat-card-content/table/tbody/tr/td[4]")).getText().then(function (item2) {
					console.log(item2);
					loc2 = item2;
					expect(loc1).toContain(loc2);
				})
			})
			element(by.xpath("//div/div[1]/app-personal/mat-card/div[2]/table/tbody/tr[2]/td")).getText().then(function (item3) {
				console.log(item3);
				name1 = item3;
				element(by.xpath("//div/div[2]/app-personal/mat-card/div[2]/table/tbody/tr[2]/td")).getText().then(function (item4) {
					console.log(item4);
					name2 = item4;
					expect(name1).toEqual(name2);
				})
			})

		})
	})
})