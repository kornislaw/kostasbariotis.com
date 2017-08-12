webpackJsonp([18],{"./node_modules/json-loader/index.js!./.cache/json/ui-thread-free.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>With the rise of the upcoming <a href="http://www.w3.org/TR/workers/">WebWorkers API</a> in the horizon, interesting things are emerging. And the one that got me go "whhaaaaat??" is the one that advices you to put all of your business logic inside a WebWorker. Whaaaaat?</p>\n<p>A WebWorker is a separate thread that runs Javascript but has no access to the DOM or the <code>window</code> object. But it can do complex queries and loops, accessing core <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers">functions and APIs</a>, while you are letting the main thread, the UI thread, to handle the UI stuff only.</p>\n<p>Rendering the DOM is so expensive, specially when it comes to complex interfaces we have nowadays. Not so long ago, the <a href="https://facebook.github.io/react/docs/reconciliation.html">VirtualDOM</a> introduced which tried to speed up the rendering process by rendering only what actually changed, instead of re-rendering the whole page. But, that\'s not enough apparently, since even such few changes can\'t be handle well by low powered devices such as mobiles phones and watches.</p>\n<p>In order to keep the 60fpm barrier, we are completely freeing the main thread to be able to handle the rendering only and we start WebWorkers to handle our business logic.</p>\n<p>I found <a href="http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org">two</a> <a href="https://medium.com/@nsisodiya/flux-inside-web-workers-cc51fb463882#.iv69h6ih2">great</a> examples of this concept. Both, they are suggesting keeping the whole app outside the main thread and send there only the patch of the changed DOM to be rendered. The UI thread can then handle only rendering and complex fancy animations.</p>\n<p>Oh, by the way, Nodejs fans, <a href="https://github.com/nodejs/node/pull/2133">Workers are coming</a>.</p>',frontmatter:{date:"January 01, 1970",path:"/ui-thread-free",tags:null,title:"UI thread free"}}},pathContext:{prev:{excerpt:"The Error object",html:"<p>The Error object</p>",id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/the-error-object-in-javascript/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/the-error-object-in-javascript",tags:null,title:"The error object in Javascript"}},next:{excerpt:"https://divan.github.io/posts/go concurrency visualize/",html:'<p><a href="https://divan.github.io/posts/go_concurrency_visualize/">https://divan.github.io/posts/go<em>concurrency</em>visualize/</a></p>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/untitled/index.md absPath of file >>> MarkdownRemark",timeToRead:1,frontmatter:{date:"1970-01-01T00:00:00.000Z",path:"/untitled",tags:null,title:"(Untitled)"}}}}}});
//# sourceMappingURL=path---ui-thread-free-80047f25c8973e70f71c.js.map