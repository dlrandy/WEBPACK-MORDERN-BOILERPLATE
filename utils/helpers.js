exports.getEntryJsHtmlPrj = function() {
  const argsLen = process.argv.length;
  let prjName = process.argv[argsLen - 3], //WEBPACK-CLI concerns
    entryJsPath = process.argv[argsLen - 2],
    htmlTemplatePath = process.argv[argsLen - 1];
  return [entryJsPath, htmlTemplatePath, prjName];
};
