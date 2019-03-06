const Express = require('express');
const app = Express();
const port = 8081;

app.use(Express.static(__dirname + '/docs'));

app.listen(port, () => console.log(`Listening on port ${port}...`) );
