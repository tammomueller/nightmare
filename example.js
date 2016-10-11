const Nightmare = require('nightmare');
var nightmare = Nightmare({ 
	show: true,
	images: false,
// 	webPreferences:{
// 		images:false,
// 	},
	switches: {
		'proxy-server': '127.0.0.1:24000',
		'ignore-certificate-errors': true
  	}
})

nightmare.on('open-url', function(event, url) {
console.error(url);
});

nightmare.on('app-command', function(event, url) {
console.error(url);
});

nightmare
  .goto("http://www.bing.com")
  .wait("input[name='q']")
  .type("input[name='q']", "trends latinos colombia")
  .click("#sb_form_go")
  .wait("#b_content")
  .wait(5000)
  .click("a[href*='trendslatinos.com']")
  .wait(8000)
  .click('.entry-title a')
  .end()
  .then(function (result) {
    // console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
