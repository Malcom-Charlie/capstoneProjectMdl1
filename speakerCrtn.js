const speakerGenerator = (object) => {
// Function to go through data while
// creating DOM elements needed
  const card = document.createElement('article');
  card.classList.add('speaker-card');
  const containerD = document.createElement('div');
  containerD.classList.add('speaker-card__img');
  const cardImage = document.createElement('img');
  cardImage.src = object.image;
  cardImage.alt = `${object.name} profile picture`;
  const containerE = document.createElement('div');
  containerE.classList.add('speaker-card__text');
  const titleDiv = document.createElement('h2');
  titleDiv.classList.add('speaker-card__title');
  titleDiv.innerText = object.name;
  const paragraph1 = document.createElement('p');
  paragraph1.classList.add('speaker-card__subtitle');
  paragraph1.innerText = object.role;
  const paragraph2 = document.createElement('p');
  paragraph2.classList.add('speaker-card__bio');
  paragraph2.innerText = object.bio;
  // Assign their respective classes

  // Append the content respectively
  card.append(containerD, containerE);
  containerD.append(cardImage);
  containerE.append(titleDiv, paragraph1, paragraph2);

  return card;
};

export default speakerGenerator;