'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const express_handlebars_1 = require('express-handlebars')
const app = (0, express_1.default)()
app.use(express_1.default.static('public'))
app.engine('handlebars', (0, express_handlebars_1.engine)())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.get('/', (req, res) => {
  res.render('landingpage')
})
app.listen(3000)
//# sourceMappingURL=app.js.map
