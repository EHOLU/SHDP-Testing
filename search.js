describe('non-prod sso',function(){
	function farmerdashboard(){
		element(by.css("button[class='mat-focus-indicator mat-mini-fab mat-button-base mat-primary']")).click();
		browser.sleep(5000);
		element(by.css("button[class='mat-focus-indicator mat-mini-fab mat-button-base mat-primary']")).click();
		browser.sleep(4000);
		element(by.css("button[class='mat-focus-indicator close-icon mat-button mat-button-base']")).click();
		browser.sleep(3000);
		element(by.css('mat-icon[class="mat-icon notranslate mat-menu-trigger material-icons mat-icon-no-color"]')).click();
			browser.sleep(5000);
		element(by.css("button[role='menuitem']")).click();
		browser.sleep(5000);
		element(by.xpath('(//app-root[1]/div[1]/div[1]/app-body[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-individual-customer-journey[1]/div[1]/mat-card[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3])')).click().then(function(){
			browser.sleep(5000);
	            browser.switchTo().activeElement().sendKeys('12 months').then(function(){
			browser.actions().click().perform();
			browser.sleep(5000);
			})
			})
		}
	
	function searchpage(){
		browser.sleep(5000);
		  element(by.css("a[href='/search']")).click();
		  browser.sleep(5000);
	}
	
	
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
    	element(by.id('i0116')).sendKeys('maniratnam.meka.ext@bayer.com').then(function(){
    		  element(by.id('idSIButton9')).click();
    		  browser.sleep(8000);
    		  console.log("opened non-prod SHDIP dashboard page");
    	 })
     })
     
     it('select country&region',function(){
    	 browser.sleep(5000);
    	 //region,country selection
    	 element(by.xpath('(//app-root[1]/div[1]/div[1]/app-body[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-region-country[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3])')).click().then(function(){
    		 browser.sleep(3000);
    		 element(by.css("mat-option[ng-reflect-value='Australia']")).click();
    		 browser.sleep(3000);
    		 element(by.css("mat-option[ng-reflect-value='APAC']")).click();
    		 browser.sleep(3000);
    	 })
    	 browser.actions().click().perform();
    	 element(by.xpath('(//app-root[1]/div[1]/div[1]/app-body[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-region-country[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[3])')).click().then(function(){
    		 browser.sleep(3000);
    		 element(by.css("span[class='mat-checkbox-inner-container']")).click();
    		 browser.sleep(3000);
    		 element(by.css("mat-option[ng-reflect-value='INDIA']")).click();
    		 browser.sleep(3000);
    	 })
    	 browser.actions().click().perform();
     })
    	 
     it('search using name',function(){
		 searchpage();	  
		 element(by.id('mat-input-0')).sendKeys('manish k');
  			browser.sleep(3000);
  			element(by.css("span[class='mat-button-wrapper']")).click().then(function(){
  				browser.sleep(5000);
  				farmerdashboard();
  			})  
		  console.log("search page search using source id");
	  },120000)

	it('search using contact',function(){
	searchpage();
			  element(by.css("input[aria-label='Full Name']")).clear().then(function(){
				  element(by.css("input[aria-label='Full Name']")).sendKeys(' ');
				  browser.sleep(5000);
				  })
				  browser.actions().click().perform();
			  element(by.css("input[aria-label='Contact']")).sendKeys('9116544592');
			  browser.sleep(10000);
			  element(by.css("button[class='mat-focus-indicator search-btn mat-raised-button mat-button-base mat-primary']")).click().then(function(){
	    		browser.sleep(5000);
	    		farmerdashboard();
	  		})  
			  console.log("search page search using source id"); 
	},120000)

	it('search using village ',function(){
	searchpage();
		  element(by.css("input[aria-label='Contact']")).clear().then(function(){
				element(by.css("input[aria-label='Contact']")).sendKeys(' ');
				browser.sleep(5000);
				})
				browser.actions().click().perform();
			  element(by.css("input[aria-label='Village']")).sendKeys('Balampur');
			  browser.sleep(5000);
			element(by.css("span[class='mat-button-wrapper']")).click().then(function(){
				browser.sleep(5000);
				farmerdashboard();
			})  
			  console.log("search page search using source id"); 
	
	
	},120000) 

	it('search using golden id ',function(){
	searchpage();
		 element(by.css("mat-step-header[aria-posinset='2']")).click().then(function(){
			  browser.sleep(2000);
		 element(by.css("input[aria-label='goldenID']")).sendKeys('101262278329').then(function(){
			browser.sleep(5000);
			let elem = element(by.xpath('(//*[@id="cdk-step-content-3-1"]/form[1]/div[1]/div[2]/button[1])'));
			browser.actions().click(elem).perform();
			browser.sleep(5000);   		
		 })
		farmerdashboard();
		  console.log("search page search using golden id"); 
	})
	  
	},120000)  

	it('search using source id ',function(){
	searchpage();
	  element(by.css("mat-step-header[aria-posinset='3']")).click().then(function(){
		  browser.sleep(2000);
		 element(by.css("input[aria-label='sourceId']")).sendKeys('ADVIN33333');
			browser.sleep(2000);
			let elem = element(by.xpath('(//*[@id="cdk-step-content-4-2"]/form[1]/div[1]/div[2]/button[1])'));
			browser.actions().click(elem).perform();
			browser.sleep(5000);
			farmerdashboard();
	   		  console.log("search page search using source id");
	  })
	},120000)  
	
	it('search using source record count ',function(){
	searchpage();
	 element(by.css("mat-step-header[aria-posinset='4']")).click().then(function(){
		  browser.sleep(4000);
		  element(by.xpath('(//*[@id="cdk-step-content-5-3"]/form[1]/div[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[3])')).click().then(function(){
			browser.sleep(5000);
			browser.switchTo().activeElement().sendKeys('4').then(function(){
				browser.actions().click().perform();
			browser.sleep(5000);
			})	
		 
		 })
		let elem = element(by.xpath('(//*[@id="cdk-step-content-5-3"]/form[1]/div[1]/div[2]/button[1])'));
			browser.actions().click(elem).perform();
			browser.sleep(5000);
			farmerdashboard();
	   		  console.log("search page search using source record count");
	})			
	},120000) 

})