const app = require("./app");
const { port } = require('./config/app.config')

app.listen(port, () => {
    console.log(`sv running at port ${port}`);
})