describe('non-prod sso',function(){
	it('open non-prod SHDIP website', function() {
		browser.driver.manage().window().maximize();
	    browser.get('https://np.shdip.int.bayer.com/').then(function(){
	    	element(by.id('loginBtn')).click();
	    //	browser.sleep(10000);
	    	console.log("opened non-prod SHDIP");
	    
	    })
	    
    })

 
     it('sign in page',function(){
    	 browser.waitForAngularEnabled(false);
    	 browser.sleep(5000);
    	element(by.id('i0116')).sendKeys('venkatamanojkumar.pathirajagari.ext@bayer.com').then(function(){
    		  element(by.id('idSIButton9')).click();
    		  browser.sleep(8000);
    		  console.log("opened non-prod SHDIP dashboard page");
    	 })
     }) 
/*  it('Cross sell ',function(){
    	 
 		  browser.sleep(5000);
 		  element(by.css("a[href='/recommendation']")).click();
 		  browser.sleep(5000);
 		  element(by.css("input[role='combobox']")).sendKeys('PARAMJEET KUMAR');
 			  browser.sleep(2000);
 			 element(by.css("button[type='submit']")).click();
 			 browser.sleep(5000);
 		  
 		  }) */
     
  /*   it('Upsell ',function(){
    	 
 		  browser.sleep(5000);
 		  element(by.css("a[href='/recommendation']")).click();
 		  browser.sleep(5000);
 		  element(by.id('mat-input-1')).sendKeys('79923708');
 			  browser.sleep(5000);
 			 element(by.css("button[class='mat-focus-indicator mat-button mat-button-base mat-primary']")).click();
 			 browser.sleep(5000);
     }) */
})