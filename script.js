document.getElementById('getMeaning').addEventListener('click', () => {
  const word = document.getElementById('wordInput').value;

  if (word === '') {
    alert('Please enter a word');
    return;
  }

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        document.getElementById('result').innerHTML = 'Word not found!';
        return;
      }

      const meaning = data[0].meanings[0].definitions[0].definition;
      const partOfSpeech = data[0].meanings[0].partOfSpeech;

      document.getElementById('result').innerHTML = `
        <h2>${word}</h2>
        <p><strong>Meaning:</strong> ${meaning}</p>
        <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
      `;
    })
    .catch(() => {
      document.getElementById('result').innerHTML = 'Error fetching data.';
    });
});
