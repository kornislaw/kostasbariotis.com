webpackJsonp([186],{"./node_modules/json-loader/index.js!./.cache/json/a-collection-of-php-libraries-you-should-know.json":function(e,o){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:'<p>Are you always in the wild trying to find the most awesome PHP projects? Are your bookmarks a mess?</p>\n<p>Here is a <a title="Awesome PHP" href="https://github.com/ziadoz/awesome-php" target="_blank">curated list</a> of amazingly awesome PHP libraries, resources and shiny things.</p>\n<p>Everything under a category, not every resource but the most promising that will definitely do your job.</p>\n<p>What are your thoughts?</p>',frontmatter:{date:"August 22, 2014",path:"/a-collection-of-php-libraries-you-should-know",tags:null,title:"A collection of PHP libraries you should know",draft:null}}},pathContext:{prev:{excerpt:"Programming is like my life. Being in the game since i was a little kid, it's like programming languages are my native languages. Writing good code matters a lot to me. Being able to write clean code may not seem so important but hazardous situations...",html:'<p>Programming is like my life. Being in the game since i was a little kid, it\'s like programming languages are my native languages. Writing good code matters a lot to me.</p>\n<p>Being able to write clean code may not seem so important but hazardous situations will occur if you don\'t. In the long run, smelly code will make your project maintenance slow. At the end, it is possible, that you abandon it and start over. That is a disaster. And you should not allowed it.</p>\n<p>I read a <a title="Clean Code Handbook" href="http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank">book </a>past week. Reading this book, it was something i had to do loooong time before. Written at 2008, by the father of Good Code, <a title="Martin Fowler Personal Page" href="martinfowler.com" target="_blank">Martin Fowler</a>, it opened my eyes for sure. So many principles i haven\'t even thought about it.</p>\n<p>[caption id="attachment_287" align="alignleft" width="225"]<a href="http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"><html><head></head><body><img class="wp-image-287 size-medium" src="https://kbariotis.files.wordpress.com/2014/08/showcover.jpg?w=225" alt="Clean Code by Martin Fowler" width="225" height="300"></body></html></a> Clean Code by Martin Fowler[/caption]</p>\n<p>Here\'s an example. All this time, i have been writing code, almost 50% of it were comments. I thought this is the way other programmers will understand me.  <a title="Martin Fowler Personal Page" href="martinfowler.com" target="_blank">Martin Fowler</a> flipped it over. "The proper use of comments is to compensate our self\'s for our failure to express our self\'s." he said.</p>\n<p>Now, i am not going to write a book review. It\'s not something i am good at. I will put some of my favorites notes i kept from the book while reading it.</p>\n<p>Take a look.</p>\n<h2>About Clean Code.</h2>\n<blockquote>Spending time keeping your code clean, is not just cost effective. It\'s a matter of survival"</blockquote>\n&nbsp;\n<blockquote>"The only way to make the deadline, the only way to go fast is to keep the code as clean as possible."</blockquote>\n<h2> About Functions:</h2>\n<blockquote>Functions should be small. Even smaller than that. And do only one thing.</blockquote>\n&nbsp;\n<blockquote>One level per abstraction in each function.</blockquote>\n&nbsp;\n<blockquote>Always prefer exceptions than error codes.</blockquote>\n&nbsp;\n<blockquote>Duplication may be the root all evil in software.</blockquote>\n<h2>About Comments</h2>\n<blockquote>Comments are bad.</blockquote>\n&nbsp;\n<blockquote>The proper use of comments is to compensate our self\'s for our failure to express our self\'s.</blockquote>\n&nbsp;\n<blockquote>Comments are not maintainable.</blockquote>\n&nbsp;\n<blockquote>Think twice before you write them.</blockquote>\n<h2>About Code Formatting</h2>\n<blockquote>Think of a well written newspaper article. You read it vertically. At the top you expect a headline to tell you what the story is all about and allows you to decide whether is something you want to read. The first paragraph is a synopsis of the whole story. As you continue downwards, the details increase until you have all the dates, the names, etc. We would like source code to be like that.\n<p> </blockquote>\nNow this is not just it. This book is a treasure for every programmer. If i got your attention give it a try.</p>\n<p>What\'s your favorite notes and rules about writing clean code?</p>\n<p> </p>\n<h3>If you like this article, take a look on a <a title="How to write clean and efficient code" href="https://medium.com/@kbariotis/how-to-write-clean-efficient-code-f53fd67131f9" target="_blank">similar </a>i have wrote on @medium and follow me on <a title="Kostas Bariotis on Twitter" href="http://twitter.com/kbariotis" target="_blank">twitter</a>.</h3>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/does-your-code-smells/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2014-08-25T04:00:57.000Z",path:"/does-your-code-smells",tags:null,title:"Does your code smells?",draft:null}},next:{excerpt:"A common dis-functionality of  Composer  is that when it just hangs while installing or updating dependencies. Especially when using heavy packages like these of Symfony, Composer is going to run hard. This issue is not new, and while there is been...",html:'<p>A common dis-functionality of <a title="Composer PHP " href="https://getcomposer.org" target="_blank">Composer </a>is that when it just hangs while installing or updating dependencies. Especially when using heavy packages like these of Symfony, Composer is going to run hard.</p>\n<p>This issue is not new, and while there is been <a title="Composer freezing when installing symfony vendors" href="http://stackoverflow.com/questions/17138319/composer-freezing-when-installing-symfony-vendors" target="_blank">some </a><a title="Slow updating of composer dependencies, despite --prefer-dist flag" href="http://stackoverflow.com/questions/19316650/slow-updating-of-composer-dependencies-despite-prefer-dist-flag" target="_blank">discussion </a><a title="Running an update just hangs #1959" href="https://github.com/composer/composer/issues/1959" target="_blank">about </a><a title="Composer seems hanged on &quot;Updating dependencies&quot; #2378" href="https://github.com/composer/composer/issues/2378" target="_blank">it</a> i still encounter issues running on a generally old machine with 4GB ram and a Core2Duo CPU.</p>\n<p>Whilst i tried all of the suggested solution i ended up discovering that the problem is when you use the wildcard(*) for choosing the vendor package version.</p>\n<p>Prefer using the latest version of the package you want instead of the wildcard(*) the next time you encounter the same problem.</p>\n<p>Instead of writing</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>&amp;quot<span class="token punctuation">;</span>require&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n    &amp;quot<span class="token punctuation">;</span>monolog/monolog&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span>&amp;quot<span class="token punctuation">;</span><span class="token number">1</span>.*&amp;quot<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n...\n</code></pre>\n      </div>\n<p>write</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>...\n\n&amp;quot<span class="token punctuation">;</span>require&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n    &amp;quot<span class="token punctuation">;</span>monolog/monolog&amp;quot<span class="token punctuation">;</span><span class="token operator">:</span>&amp;quot<span class="token punctuation">;</span><span class="token number">1.10</span>.<span class="token number">0</span>&amp;quot<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n...\n</code></pre>\n      </div>\n<p> </p>\n<p>You can also try cleaning your Composer cache which is located at %APPDATA%/local/composer/ on Windows and using -<a title="Composer Install Dependencies CLI options" href="https://getcomposer.org/doc/03-cli.md#install" target="_blank">-prefer-dist</a> flag which tries to download a zip file of the package whenever one is available.</p>\n<p>Last but not least, use --vvv flag for a more <a title="Composer CLI Global Options" href="https://getcomposer.org/doc/03-cli.md#global-options" target="_blank">verbose </a>output of the Composer and --profile displaying some hardware information at the end.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/composer-hangs-while-installingupdating-dependencies/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"2014-08-09T07:22:26.000Z",path:"/composer-hangs-while-installingupdating-dependencies",tags:null,title:"Composer hangs while installing/updating dependencies",draft:null}}}}}});
//# sourceMappingURL=path---a-collection-of-php-libraries-you-should-know-fd00b7bda52e67d92583.js.map