
// Reference https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
const colorAlias = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy',
  'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet',
  'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue',
  'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange',
  'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise',
  'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro',
  'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki',
  'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
  'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
  'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple',
  'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose',
  'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred',
  'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown',
  'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan',
  'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'
]
const hex1 = /#(?:[0-9a-f]{2}){2,4}/
const hex2 = /#[0-9a-f]{3}/
const rgbHsla = /(rgb|hsl)a?[(](-?\d+%?[,\s]+){2,3}\s*[\d.]+%?[)]/
const valueRegex = new RegExp(`${hex1.source}|${hex2.source}|${rgbHsla.source}|${colorAlias.join('(\\s|;)|')}`, 'gi')
let pseudosRegex = new RegExp([
  /(?:(\w|-|\.)+):?:focus/.source,
  /(?:(\w|-|\.)+):?:before/.source,
  /(?:(\w|-|\.)+):?:after/.source,
  /(?:(\w|-|\.)+):?:hover/.source,
  /(?:(\w|-|\.)+):?:disabled/.source,
  /(?:(\w|-|\.)+):?:placeholder/.source,
  /(?:(\w|-|\.)+):?:nth-of-type/.source,
].join('|'), 'gi')
let ruleRegex = new RegExp([
  /(?:(\w|-|\.)+)$/.source,
  /(?:(\w|-|\.)+)$/.source,
  /(?:(\w|-|\.)+)$/.source,
  /(?:(\w|-|\.)+)$/.source,
  /(?:(\w|-|\.)+):?(?::not)/.source
].join('|'), 'gi')

module.exports = {
  pseudosRegex,
  ruleRegex,
  valueRegex
}