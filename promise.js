const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (params) => {
  let a = await promiseTheaterIXX();
  let b = await promiseTheaterVGC();

  return new Promise((resolve) =>{
    const hasil = [...a,...b]?.filter(res => res.hasil === params)?.length
    return resolve(hasil);
  });
}

module.exports = {
  promiseOutput,
};
