const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {

  const name = process.argv[2] ? process.argv[2] : '';

  const m = new MerkleTree(niceList);
  const proof = m.getProof(niceList.findIndex(n => n === name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof: proof,
    name: name,
  });

  console.log({ gift });
}

main();