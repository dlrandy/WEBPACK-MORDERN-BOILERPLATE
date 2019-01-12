Development:


//====================================
Production:
treeshaking
scope hoisting
minification

虽然module正在得到浏览器的原生支持，但是有些情况，你让需要使用bundler的；
bundlers会把import和export的声明转换成可以在浏览器里运行的有效的JS代码。

大致的过程就是：
模块会被装入function用来隔离scope，同时引入的模块会被编译成变量，持有WEBPACK_REQUIRE_METHOD加载的结果。最终所有的
模块被放入bundle最后的数组里。然后执行的时候提供索引来引用函数。bundle的顶部是一些预置的代码用来运行代码的。


hash chunkhash contenthash




eslint
https://www.robinwieruch.de/react-eslint-webpack-babel/
https://www.robinwieruch.de/minimal-react-webpack-babel-setup/




importsloaders
https://github.com/webpack-contrib/css-loader/issues/228



//hmr slowly
//end to end test
//polyfill

//production support multi prjs ( output, optimize)

//following has error
\webpack-poilerplate>npm run start-build src/index.js src/index.html src/index.js           


url vs url with query string


https://iamakulov.com/notes/optimize-images-webpack/

因为eslint的验证问题，不会自动验证jsx，规定所有的文件要使用js扩展名
https://stackoverflow.com/questions/48435263/eslint-eslint-plugin-reactnot-finding-jsx-files


dynamic-cdn-webpack-plugin 不能和webpack.config.js的external一起使用

process.env.NODE_ENV === 'development' 这种写法才会有代码优化的效果


