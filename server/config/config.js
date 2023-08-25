import "dotenv/config";

const port = process.env.PORT;
const password = process.env.PASSWORDMONGO;
const adm = process.env.ADMMONGO;
const jwtKey = process.env.JWTKEY;

export default { password, port, adm, jwtKey };
