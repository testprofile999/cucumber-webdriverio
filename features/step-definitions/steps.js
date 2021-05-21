import { Given, When, Then } from 'cucumber';
  
  Given('I am on webdriverio page', function () {
    browser.url("https://webdriver.io/");
    browser.pause(3000);
  });
  
  When('I click on search', function () {
    browser.$('[class="DocSearch-Button-Container"]').click();
    browser.pause(2000);
  });

  Then('I type text to search input', function () {
    browser.$('#docsearch-input').setValue("Let's find it!");
    browser.pause(3000)
  });