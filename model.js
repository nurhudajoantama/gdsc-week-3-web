const tf = require('@tensorflow/tfjs-node');

const loadData = async () => {
  // Ambil seluruh data movie dari database

  const movie_arr = [];
  for (let i = 0; i < movies.length; i++) {
    movie_arr.push([movies[i]['movie_id']]);
  }
  return movie_arr;
};

async function loadModel() {
  console.log('Loading Model...');
  model = await tf.loadLayersModel(
    `file://${__dirname}/models/model.json`,
    false
  );
  console.log('Model Loaded Successfull');
}

const recommend = async function recommend(userId) {
  const movie_data = await loadData();

  const movie_arr = tf.tensor(movie_data);
  // Ambil seluruh data movie dari database

  const movie_len = movie_data.length;

  let user = tf.fill([movie_len], Number(userId));
  let movie_in_js_array = movie_arr.arraySync();

  await loadModel();

  console.log(`Recommending for User: ${userId}`);

  pred_tensor = await model.predict([movie_arr, user]).reshape([movie_len]);
  pred = pred_tensor.arraySync();

  let recommendations = [];

  for (let i = 0; i < 6; i++) {
    max = pred_tensor.argMax().arraySync();
    recommendations.push(movies[max]); //Push movie with highest prediction probability
    pred.splice(max, 1); //drop from array
    pred_tensor = tf.tensor(pred); //create a new tensor
  }

  console.log(recommendations);
  return recommendations;
};

module.exports = {
  recommend,
};
