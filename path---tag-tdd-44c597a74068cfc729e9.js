webpackJsonp([23],{"./node_modules/json-loader/index.js!./.cache/json/tag-tdd.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:"Kostas Bariotis' Blog",description:"I'm Kostas Bariotis, a web developer, a proud wanderer and a passionate doer. My mission is to write clean and efficient code, to solve problems on the web and to learn something more.",siteUrl:"https://kostasbariotis.com"}}},pathContext:{posts:[{excerpt:"Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs. Here I will use a small function and the  Sinonjs  to try to test it. My...",html:'<p>Units in Unit Testing is the smallest unit of code. But how small? Small enough to be tested. For that matter, Unit Tests need to be isolated and for that you need stubs.</p>\n<p>Here I will use a small function and the <a href="http://sinonjs.org">Sinonjs</a> to try to test it. My function does some checks and finally an HTTP call to an external service while similar functions would hit a DB. But our intention is to test the actual function and we don\'t want to hit the external service.</p>\n<p>In case that you think: "No we should let it hit the external so we can test that too". Well no, remember, we are writing unit tests. You\'re talking about integration tests, where we test how multiple components interact with each other. Also, this is an external service and our test suite shouldn\'t test external services. This is a clean separation of concerns. It\'s not our test suite\'s responsibility to test anything else that itself.</p>\n<p>Here\'s a simple function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'request\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> createToDoItem <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>description<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://todo/items/endpoint\'</span><span class="token punctuation">,</span>\n      body<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        description<span class="token punctuation">:</span> description<span class="token punctuation">,</span>\n        completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> res<span class="token punctuation">,</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n       <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n         <span class="token function">resolve</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So the <code>createToDoItem</code> does two things. First it checks for the validity of the required parameter <code>description</code> and then contacts the external service that is responsible for storing Todo Items.</p>\n<p>Now we need to test that function as a unit, so we have to isolate it. We don\'t want to contact the external service.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'To Do Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Create Items\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'requires the description parameter\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span>an<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'description is required\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'rejects on error from the remote service\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'resolves on succesfull creation\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">var</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> post<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">yields</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          _id<span class="token punctuation">:</span> <span class="token string">\'ITEM_ID\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">,</span>\n          completed<span class="token punctuation">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">createToDoItem</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'ITEM_ID\'</span><span class="token punctuation">)</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">\'Remember to write that blog post\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          stub<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I hope the code to be self-documented. At first, we call our function without a parameter so the first condition will be true and an error will be thrown. Then we stub the <code>request</code> object so it will run the callback function with an error. This will trigger the second condition and reject our promise. Inside the <code>catch</code> function, we know that the promise has been rejected. For the end, we stub the callback to return with a null error and a body that will resolve the promise and we test that inside the <code>then</code> function. 100% code coverage.</p>\n<p>This way we have completely isolated our Unit Under Test and made it blazingly fast to run since we don\'t make any actual HTTP requests. We pretty much covered the <a href="https://pragprog.com/magazines/2012-01/unit-tests-are-first">F.I.R.S.T. principles of Unit Testing</a>.</p>\n<p>Unit tests should be completely isolated.</p>\n<p>Always remember the <a href="http://blogs.agilefaqs.com/2011/02/01/inverting-the-testing-pyramid/">inverted testing pyramid</a>. Invest in Unit Testing so to avoid manual system testing. It is expensive.</p>',id:"/Users/Bariotis/Dev/develop/kostasbariotis.com/src/pages/isolated-unit-tests-with-sinonjs/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2016-03-05T21:02:37.000Z",path:"/isolated-unit-tests-with-sinonjs",tags:"TDD, javascript, node.js",title:"Isolated Unit Tests with Sinonjs",draft:null}}],tag:"TDD",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-tdd-44c597a74068cfc729e9.js.map