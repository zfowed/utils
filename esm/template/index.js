function template (template, options) {
  const templateSettings = Object.assign({
    escape: /<%=\s*([\s\S]+?)\s*%>/g,
    interpolate: /<%-\s*([\s\S]+?)\s*%>/g,
    evaluate: /<%\s*([\s\S]+?)\s*%>/g
  }, options || {})
  const regExp = RegExp(
    templateSettings.escape.source + '|' +
    templateSettings.interpolate.source + '|' +
    templateSettings.evaluate.source + '|([\\s\\S]+?(?=' +
    templateSettings.escape.source + '|' +
    templateSettings.interpolate.source + '|' +
    templateSettings.evaluate.source + ')|[\\s\\S]*$)|$', 'g')
  let compile = '(function (obj) {obj||(obj = {});var __t,__p=\'\';with(obj){'
  compile += template.replace(regExp, function (match, escape, interpolate, evaluate, string) {
    if (escape) {
      return '__p+=String((__t=(' + escape + '))==null?\'\':__t).replace(/[&<>"\']/g, function (k) {var obj={"\\"": "&quot;","&":"&amp;","\\\'":"&#39;","<":"&lt;",">":"&gt;"};return obj[k];});'
    } else if (interpolate) {
      return '__p+=((__t=(' + interpolate + '))==null?\'\':__t);'
    } else if (evaluate) {
      return evaluate
    } else if (string) {
      return '__p+=' + JSON.stringify(string) + ';'
    }
    return ''
  })
  compile += '}return __p;})'
  return eval(compile) // eslint-disable-line no-eval
}

export { template }
export default template
