import "dotenv/config";

const port = process.env.PORT;
const password = process.env.PASSWORDMONGO;
const adm = process.env.ADMMONGO;

export default { password, port, adm };
