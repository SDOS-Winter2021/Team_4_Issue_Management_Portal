function termFreqMap(str1) {
  var words = str1.split(" ");
  var termFreq = {};
  words.forEach(function (w) {
    w = lemmatize.adjective(lemmatize.noun(w.toLowerCase()));
    termFreq[w] = (termFreq[w] || 0) + 1;
  });
  return termFreq;
}

function addKeysToDict(map, dict) {
  for (var key in map) {
    dict[key] = true;
  }
}

function termFreqMapToVector(map, dict) {
  var termFreqVector = [];
  for (var term in dict) {
    termFreqVector.push(map[term] || 0);
  }
  return termFreqVector;
}

function vecDotProduct(vecA, vecB) {
  var product = 0;
  for (var i = 0; i < vecA.length; i++) {
    product += vecA[i] * vecB[i];
  }
  return product;
}

function vecMagnitude(vec) {
  var sum = 0;
  for (var i = 0; i < vec.length; i++) {
    sum += vec[i] * vec[i];
  }
  return Math.sqrt(sum);
}

function cosineSimilarity(vecA, vecB) {
  return vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB));
}

function textCosineSimilarity(strA, strB) {
  var termFreqA = termFreqMap(strA);
  var termFreqB = termFreqMap(strB);

  var dict = {};
  addKeysToDict(termFreqA, dict);
  addKeysToDict(termFreqB, dict);

  var termFreqVecA = termFreqMapToVector(termFreqA, dict);
  var termFreqVecB = termFreqMapToVector(termFreqB, dict);

  return cosineSimilarity(termFreqVecA, termFreqVecB);
}

function preprocess(str) {
  str = str.split(" ");
  var preprocessed = "";
  for (var i = 0; i < str.length; i += 1) {
    word = lemmatize.verb(lemmatize.noun(str[i].toLowerCase()));
    preprocessed += word;
  }
  return preprocessed;
}

function Similar(arr, title, desc) {
  //arr is array of issues object
  iss = title.concat(" ".concat(desc));

  sim_issue = [];
  for (i = 0; i < arr.length; i++) {
    str = arr[i].Title.concat(" ".concat(arr[i].Desc));
    str = preprocess(str);
    a = textCosineSimilarity(str, iss);

    if (a > 0.1) {
      sim_issue.push((a, arr[i]));
    }
    sim_issue.sort();
  }
  a = 5;
  if (a > sim_issue.length) {
    a = sim_issue.length;
  }
  return sim_issue.slice((0: a));
}
