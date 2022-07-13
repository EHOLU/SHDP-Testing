exports.loginToPage = function () {    
		browser.driver.manage().window().maximize();
		browser.get('https://prod.shdip.int.bayer.com/').then(function(){
			element(by.id('loginBtn')).click();
			browser.sleep(3000);
			console.log("opened non-prod SHDIP");

		})
		browser.waitForAngularEnabled(false);
		browser.sleep(1000);
		element(by.id('i0116')).sendKeys('maniratnam.meka.ext@bayer.com').then(function(){
			element(by.id('idSIButton9')).click();
			browser.sleep(10000);
			console.log("opened non-prod SHDIP dashboard page");
		})
}

