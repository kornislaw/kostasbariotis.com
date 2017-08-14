webpackJsonp([13],{"./node_modules/json-loader/index.js!./.cache/json/the-stories-in-my-head.json":function(e,n){e.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}},markdownRemark:{html:"<p>A few days ago I stumbled upon this wonderful <a href=\"http://cs.txstate.edu/~br02/cs1428/ShortStoryForEngineers.htm\">story</a>. I love those short stories. They are real, inspirational and educational stories.</p>\n<p>I've also have two stories on my head that I kept saying when I am among fellows but I never wrote them somewhere. Here's my chance. Those stories are not mine but I have them in my mind for so long that I can't even remember where I read them. If you have any clue please share with me, in order to give credits to the original authors.</p>\n<p>Here's the first one.</p>\n<blockquote>\n<p>A train's engine got broken while in the road. It was recently purchaced and it was it's first trip and the president of the transportation company was on it. It happen also to be on, an engineer that was specialized on those kinds of engines. So the president headed to him and asked for help. He was desparate, afraid of the passengers to not left pleased. The engineer agreed to fix the engine and asked for 10.000$. The president took the deal even though the price was insane. The engineer headed to the front of the train. Picked up a hammer that was nearby and started looking at the engine. Everyone was waiting and suddenly he makes three hits to three different spots. Big hits. He yield to the driver to turn on the engine and for everyone's surprise the engine was running again. He fixed it. But the president was mad. He turned to the enginneer and said \"You charded me 10.000$ just to take three hits with the hammer? I would done it my self!\". And the engineer responded \"I didn't charged you for the hitting. I charged you because I knew... where to hit.\"</p>\n</blockquote>\n<p>Amazing. I am always carrying this story in my head. In fact, this story drove me where I am today, always trying to learn things that few people only know. I hope it inspires you too.</p>\n<p>And here's the second.</p>\n<blockquote>\n<p>A young junior employee on an private investements company did a serious, very critical mistake, that cost the company 1.000.000$. The man very sad, the next day went to his manager office and he handed his resignation. He said to him \"I know you probably going to fire me for the mistake I've done so I am quiting.\". And the manager said: \"Are you being serious? I just spend a million on your training. You aren't going anywhere!\".</p>\n</blockquote>\n<p>Loved this story too. Experience is so important. It's  what defines you as a professional. But in order to gain it you need to act. Without fear.</p>\n<p>And again, these stories are not mine and if you happen to know the original authors please share them with me.</p>\n<p>Do you know any good stories?</p>",frontmatter:{date:"June 13, 2015",path:"/the-stories-in-my-head",tags:"engineers, experience, stories",title:"The stories in my head",draft:null}}},pathContext:{prev:{excerpt:"A common pitfall when comes to development teams is the inconsistent software and library versions across developers. The first time you install a Node.js dependency by  , the latest version of that package, will be installed along with the npm's...",html:"<p>A common pitfall when comes to development teams is the inconsistent software and library versions across developers.</p>\n<p>The first time you install a Node.js dependency by <code>npm install --save</code>, the latest version of that package, will be installed along with the npm's default <a href=\"https://docs.npmjs.com/misc/config#save-prefix\">save prefix (^)</a>. The '^' allows npm to auto install minor upgrades for this package, according to the <a href=\"http://semver.org/\">semver schema</a>.</p>\n<p>Because of that, it's hard to guarantee that every developer in the team will have the same version and this creates problems. It can really save your day, when two different people on the same codebase gets different results on an predefined procedure and the cause is a breaking change on a package that got updated.</p>\n<p>So what we do? There are a few ways you can pass this:</p>\n<h3>Reset the default <code>--save-prefix</code>.</h3>\n<p>By running <code>npm config set save-prefix=''</code> you're overriding npm's default <a href=\"https://docs.npmjs.com/misc/config#save-prefix\">save-prefix</a> value which is <code>^</code>. Now every package you install will be locked on it's current version and every person that runs <code>npm install</code> will get that version.</p>\n<p>This can also introduce outdated packages, so make sure that you keep an eye on your dependencies for critical updates that you don't want to miss. You can also take advantage of the npm's <a href=\"https://docs.npmjs.com/cli/outdated\">outdated command</a> that will check every package and report back for outdated packages.</p>\n<p>Consider also keeping this setting in your <a href=\"https://docs.npmjs.com/files/npmrc\"><code>.npmrc</code></a> file, to not force every developer to set it explicitly on his/her machine.</p>\n<h3>shrinkwrap</h3>\n<p>npm's <a href=\"https://docs.npmjs.com/cli/shrinkwrap\">shrinkwrap</a> is also a handy way to lock your versions across your team. By running <code>npm shrinkwrap</code>, a <code>shrinkwrap.json</code> file will be created at the root of your repo with the current versions  of your dependencies that are install at the moment and their dependencies.</p>\n<p>With <code>shrinkwrap</code> you get the exact same dependencies tree across and not worry about breaking updates. <code>npm install</code> will respect a <code>shrinkwrap.json</code> file if it finds but it must also agrees with the current <code>package.json</code> file, so expect errors if those two files are not align.</p>\n<p><code>shinkwrap</code> is the most safe way of locking your dependencies versions and still keeping them out of your repo, which brings me to the third and final option.</p>\n<h3>Keep Your Dependencies Under Version Control</h3>\n<p>This method is widely used, especially when maximum security is required. It's a proven method that keeps not only locked versions but code content too, so you don't worry if a malicious piece of code find it's way inside your favorite open source dependencies.</p>\n<p>Be careful though, cause your repo will increase in size really quick. In case of a dependency that needs to be compiled (e.g. by <a href=\"https://github.com/TooTallNate/node-gyp\">node-gyp</a>) the source code is usually really big, so be careful on that.</p>\n<p>The npm guys have also a <a href=\"https://docs.npmjs.com/cli/shrinkwrap#caveats\">few words</a> on this.</p>\n<h2>Not a Node.js Fan</h2>\n<p>In case that you aren't really into Node.js but you still reading this piece (big ups man!!), I shall inform you that these techniques aren't new either have been introduced by the Node.js community for the first time.</p>\n<p>PHP's Composer keeps a <a href=\"https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file\">composer.lock</a> file that locks the current installed versions and Ruby's Bundler has a Gemfile.lock file. Same goes for other systems.</p>\n<p>So, do your homework and find your PM's way of handling this kind of life saver functionality.</p>\n<h2>A Final Word</h2>\n<p>Dependencies of a codebase is an every day process and can easily lead to few hours of bug hunting. Make sure to save those hours.</p>\n<p>But, sooner or later, your team's inner policies will fail and this is ok, as soon as you understand the causes, you fix them and move. Move faster every time. Like a <a href=\"http://www.c25k.com/\">c25k</a> training. ;)</p>\n<p>What's your preferred way of handling dependencies versions?</p>",id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/consistent-dependencies-across-teams/index.md absPath of file >>> MarkdownRemark",timeToRead:3,frontmatter:{date:"2015-06-26T18:29:20.000Z",path:"/consistent-dependencies-across-teams",tags:"npm, shrinkwrap, team, node.js",title:"Consistent dependencies across teams",draft:null}},next:{excerpt:"When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough...",html:'<p>When you are writing an API, especially when is going to go public, you want the error responses to be as consistent as possible. You want your errors to be identical everywhere, to provide not too much information for your internal system but enough information to the debugger.</p>\n<p>I am a REST fan and I hope you are too. What basically REST tell us, is to use <a href="http://en.wikipedia.org/wiki/List_of_HTTP_status_codes">HTTP\'s error codes</a> for our API responses. E.g. when the user requests a particular row from our DB, using an identifier, and that row doesn\'t exists we should respond with a <code>404 Not Found</code> status code.</p>\n<p>Express.js has a <a href="http://expressjs.com/guide/error-handling.html">default error handler</a>. Basicaly it\'s just a middleware, with an extra argument, the <code>err</code> argument.</p>\n<p>On an Express.js request lifecycle, when an error occurs, we pass on to the next middleware with populated error variable, and the error handler triggers.</p>\n<p>Let\'s start with that.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">/* We log the error internaly */</span>\n    logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment" spellcheck="true">/*\n     * Remove Error\'s `stack` property. We don\'t want\n     * users to see this at the production env\n     */</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'env\'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">delete</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\t<span class="token comment" spellcheck="true">/* Finaly respond to the request */</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>statusCode <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Two are the most essential parts here. Logging the error and proper displaying it. So I am logging it using a <a href="https://github.com/winstonjs/winston">logger</a> module and passing it to the user, using the error\'s status code. I have predefined those status codes so I don\'t have to deal with them every time. How? Let\'s see.</p>\n<p>An error often consists of more than just an error code. We need a title, little more information and the stack trace on development environment. Instead of dealing with those information every time we create objects and only changing the bits we want each time. Here\'s a <code>Not Found</code> error object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">notFound</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  Error<span class="token punctuation">.</span><span class="token function">captureStackTrace</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">\'The requested resource couldn\\\'t be found\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>errorCode <span class="token operator">=</span> errorCode <span class="token operator">||</span> <span class="token number">404</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We are inheriting the Node.js <code>Error</code> class and create a generic <code>Not Found</code> error object we can use every time we need one.</p>\n<p>So now we need to pass this to the Express.js error handler. So on an ordinary controller we do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/customers/:id\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n\t<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">properSanitization</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tsomeDBDriver<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    \t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        \t<span class="token function">next</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotFound</span><span class="token punctuation">(</span><span class="token string">\'Entity with id: \'</span> <span class="token operator">+</span> id <span class="token operator">+</span> <span class="token string">\' couldn\\\'t be bound.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        \t<span class="token comment" spellcheck="true">/* ... */</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So now the error handler will take place and do it\'s magic.</p>\n<p>Often, in a more complex API will need more expressive status codes to express it\'s disfunctionalities. In that case, you can still respond with the proper status code but keep an internal error eode that makes sense on your application. So, in case a user tries to login with wrong credentials, send a 401 to the API consumer but keep an internal code, e.g. 4001 that means <strong>"Wrong Username/Password"</strong>. And that\'s what the <code>errorCode</code> is.</p>\n<p>Here\'s a simple <a href="http://github.com/kbariotis/throw.js">error collection</a> i\'ve wrote, to save you the hassle. Use it and send me your suggestions and/or notices.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/rest-api-error-handling-with-express-js/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-05-22T16:35:17.000Z",path:"/rest-api-error-handling-with-express-js",tags:"node.js, rest, express.js, api",title:"REST API Error Handling with Express.js",draft:null}}}}}});
//# sourceMappingURL=path---the-stories-in-my-head-08d00df1ba37b9274c72.js.map