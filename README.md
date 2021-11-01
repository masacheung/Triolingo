# Triolingo

Your Best Education App!!<br/>
Triolingo is the best flash card system with built-in spaced repetition function to help you retain your knowledge.

![alt text](https://github.com/masacheung/Triolingo/blob/main/frontend/src/styles/img/splash.png)
## Demo

<a href="https://triolingo-mern.herokuapp.com/#/">Try Triolingo </a> via the live demo login.

---

## Table of Contents
1. [About The Project](https://github.com/masacheung/Triolingo#about-the-project)
2. [Technologies](https://github.com/masacheung/Triolingo#technologies)
3. [Features](https://github.com/masacheung/Triolingo#features)
4. [Project Team](https://github.com/masacheung/Triolingo#project-team)

---

## About The Project
<a href="https://triolingo-mern.herokuapp.com/#/">Triolingo</a> is a single-page flash card app that features a dictionary, definition, example, synonym, audio pronunciation and discussion board.

## Technologies
1. MongoDB
2. Express
3. React
4. NodeJS
5. CSS

Triolingo's Dictionary is built with Dictionary API. Modifications to the Dictionary API CSS styling and able to create flash card after get the information.

## Features

---

### Flash Cards
![alt text](https://github.com/masacheung/Triolingo/blob/main/frontend/src/styles/img/card.gif)

Users can view all the users's flash cards in the All Cards pages. Users can also click the flash card audio player button to hear the pronunciation.

---

### Dictionary
![alt text](https://github.com/masacheung/Triolingo/blob/main/frontend/src/styles/img/dictionary.gif)

Users can search vocabulary with up to four different languages, English, Korean, Japanese and Spanish. Dictionary will generated definition, example, synonym and audio pronunciation. Users can also create the flash card to store the information for future use.

Triolingo retrieves word details by making axios fetch request to dictionary public API. It guarentees the ease and the accuracy of card creation with only the word from user input.

``` Javascript

const dictionaryApi = async () => {
    try {
      if(word.length > 0){

        const data = await axios({
          url: `https://sheltered-savannah-55294.herokuapp.com/https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`,
          method: 'GET',
          config
        })
        setMeanings(data.data);

        }
      } 
    catch (error) {
      if(word !== ""){
        console.log(error);
      }
    }
};

```

---

### Discussion Board
![alt text](https://github.com/masacheung/Triolingo/blob/main/frontend/src/styles/img/discussion.png)

Having a discussion boards which create a more collaborative learning environment. Users can ask questions and discuss the study process.

## Project Team

| |Role| Contacts|
| ------------- | ---- | ---- |
| Man Tat Masa Cheung | Project Lead | [![Masa Cheung][linkedin-shield]](https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/) [![Masa Cheung][github-shield]](https://github.com/masacheung)|
| Arwen Kim | Frontend Lead | [![Arwen Kim][linkedin-shield]](https://www.linkedin.com/in/arwen-kim-85a01b221/) [![Arwen Kim][github-shield]](https://github.com/arwensookim)|
| Danny Park | Backend Lead | [![Danny Park][linkedin-shield]](https://www.linkedin.com/in/jwp007/) [![Danny Park][github-shield]](https://github.com/dannyjwpark) |

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[github-shield]:https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white