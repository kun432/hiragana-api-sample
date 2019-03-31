'use strict'

const axios = require('axios');
const APIKEY = 'ADD_YOUR_API_KEY';
const BASE_URL = 'https://labs.goo.ne.jp/api/hiragana';
const SENTENCE = process.argv[2];
const OUTPUT_TYPE = 'hiragana'

const options = {
  method: 'POST',
  url: BASE_URL,
  headers: {
    'Content-TYpe': 'application/json',
  },
  data: {
    app_id: APIKEY,
    sentence: SENTENCE,
    output_type: OUTPUT_TYPE,
  }
};

axios(options)
.then((res) => {
  console.log(res.data);
  let str = res.data.converted;
  console.log(str);
})
.catch((err) => {
  console.log(err);
})
