webpackJsonp([139],{"./node_modules/json-loader/index.js!./.cache/json/heres-your-chance-to-ask-president-barosso.json":function(e,t){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p><a href="http://googlepolicyeurope.blogspot.gr/2013/09/whats-state-of-european-union-askbarroso.html" title="Here\'s your chance to ask President Barosso ">Here\'s your chance to ask President Barosso </a></p><p>Google+ will host a hangout, main guest will be President of the European Comission <b><a title="José Manuel Barroso" href="http://en.wikipedia.org/wiki/Jos%C3%A9_Manuel_Barroso">José Manuel Barroso</a>. Here\'s your chance...</b></p><blockquote><p><i>Is Europe really emerging from the financial crisis? What’s going to happen to Europe’s 5 million unemployed young people? Does the rise of euro-sceptic politics spell the end of the EU as we know it? Will Europe act on Syria? </i></p></blockquote>',frontmatter:{date:"September 09, 2013",path:"/heres-your-chance-to-ask-president-barosso",tags:null,title:"Here's your chance to ask President Barosso",draft:null}}},pathContext:{prev:{excerpt:"",html:'<p><a href="http://meetin5.blogspot.gr/2012/04/startup-bugsense.html" title="Bugsense και η... αμείλικτη αφοσίωση!">Bugsense και η... αμείλικτη αφοσίωση!</a></p><p>Η ελληνική start up σκηνή προσθέτει άλλο ενα <a href="http://www.emea.gr/%CE%B7-%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CE%AE-startup-bugsense-%CE%B5%CE%BE%CE%B1%CE%B3%CE%BF%CF%81%CE%AC%CE%B6%CE%B5%CF%84%CE%B1%CE%B9-%CE%B1%CF%80%CF%8C-%CF%84%CE%B7%CE%BD-splunk/357166">βραβείο </a>στο ενεργητικό της. Οι ιδρυτές της <a title="BugSence" href="https://www.google.gr/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;ved=0CDMQFjAA&amp;url=http%3A%2F%2Fwww.bugsense.com%2F&amp;ei=_go4UqqdHMbAhAfrvICQCw&amp;usg=AFQjCNGMSTtmTn4i3GJEUotB6axhIDVYGA&amp;sig2=Iw85DDQ1Rlh-nEGBUrqfvw&amp;bvm=bv.52164340,d.ZG4">BugSense</a>, εξηγούν σε απλά ελληνικά την πορεία τους μέχρι τώρα, την συνεργασία τους με τον αμερικανικό όμιλο <a href="https://www.google.gr/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;ved=0CEMQFjAA&amp;url=http%3A%2F%2Fwww.splunk.com%2F&amp;ei=TQs4UrXtMc20hAfR04DwCQ&amp;usg=AFQjCNH0mmqx1CLXBHPhtOcJYpTuByD2zw&amp;sig2=cJAi-DbzGEbq11PKrGo4Tw&amp;bvm=bv.52164340,d.ZG4">Splunk, </a>τους λόγους που τους εμποδίζουν να προχωρήσουν και να φτάσουν μέχρι και να κατακτήσουν την Αμερικάνικη αγορά αλλά και τους λογούς που η ελληνική νομοθεσία τους κρατάει κάτω. Αστείρευτες πηγές έμπνευσης...</p><p>Προσωπικά, αυτό που κράτησα είναι η φράση, του γνωστού "πειρατή" Steve Jobs:</p><blockquote><p>Προσωπικά, προτιμώ να είμαι πειρατής, παρά να καταταγώ στο ναυτικό, όπως είπε κάποτε ο Steve Jobs.</p></blockquote><p>Think different, λοιπόν και ένα μεγάλο `Εύγε!` στα παιδιά!</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/bugsense-wins/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2013-09-17T04:57:58.000Z",path:"/bugsense-wins",tags:null,title:"Bugsense και η... αμείλικτη αφοσίωση!",draft:null}},next:{excerpt:"I was called to create a Facebook Page Application to take part on contests, while an Admin panel was necessary to manage those contests. When i first heard about it, i immediately thought to give a try a new  PHP framework  i was working on lately...",html:'<p>I was called to create a Facebook Page Application to take part on contests, while an Admin panel was necessary to manage those contests. When i first heard about it, i immediately thought to give a try a new <a title="Fat Free Framework" href="http://fatfreeframework.com" target="_blank">PHP framework</a> i was working on lately. It\'s based on <a title="MVC Pattern" href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">MVC principles.</a></p>\n<p>So, the main idea was that i would keep separate Controllers, one to serve the Facebook app through Facebook\'s iframe, that would answer only to POSTs, etc, etc; and one that would serve users wanting to access the Admin panel from anywhere.  I created separate Views on the Controller, that was serving the Facebook Page app, one that would determine if the user has liked our page or not, if the contest was currently drawed and would redirect the Facebook\'s iframe on the appropriate View.</p>\n<p>The idea was so simple, that ended up too complex. So complex that bugs out of nowhere jumped in.</p>\n<p>The latest bug i worked on all day today was that due to too many redirects, i was doing, on the same controller, Safari and it\'s \'<a title="Safari\'s 3rd party block cookies policy discussed" href="http://stackoverflow.com/questions/14825805/cookies-not-setting-in-safari-6" target="_blank">Blocking 3rd Party Cookies</a>\' policy wouldn\'t allow to keep sessions, so i had to eliminate those redirects in order to create a persistent user experience.</p>\n<p>Some times too much simplicity can drive you crazy...</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/simplicity-is-the-key-after-all/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2013-09-02T16:02:09.000Z",path:"/simplicity-is-the-key-after-all",tags:null,title:"Simplicity is the key after all...",draft:null}}}}}});
//# sourceMappingURL=path---heres-your-chance-to-ask-president-barosso-288f11f2b82ac31e0b4f.js.map