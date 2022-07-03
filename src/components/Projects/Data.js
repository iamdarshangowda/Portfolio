const projects = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/QuizzApp.png`,
    name: "Quizz App",
    about:
      "A quiz app with options to select Category, Difficulty level, type of question. Here i have used an trivia API to fetch questions and display it by iterating over the json data using map",
    skills: "ReactJs, JavaScript, CSS Flexbox",
    tools: "VS Code, Github",
    url: "https://rococo-elf-6e2054.netlify.app/",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/PasswordGenerator.png`,
    name: "Password Generator",
    about:
      "A rondom password generator app. Where user can select the length of the password required from the given option. By clicking on the generated password it copies to clipboard directly.",
    skills: "ReactJs, JavaScript, CSS Flexbox",
    tools: "VS Code, Github",
    url: "https://gregarious-kleicha-2fbdfd.netlify.app/",
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/Tenzies.png`,
    name: "Tenzies Game",
    about:
      "A simple game, where user should keep on selecting the same value displayed to finish the game.",
    skills: "ReactJs, JavaScript, CSS Flexbox",
    tools: "VS Code, Github",
    url: "https://sprightly-faloodeh-963178.netlify.app/",
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/images/Meme.png`,
    name: "Meme Generator",
    about:
      "Generate random meme from an hundreds of images fetched from API. User can write over the image with the help of input feild provided.",
    skills: "ReactJs, JavaScript, CSS Flexbox",
    tools: "VS Code, Github",
    url: "https://kaleidoscopic-kulfi-0e51c6.netlify.app/",
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/images/Form.png`,
    name: "Form Validation",
    about:
      "User can register and login to the app. Here data is saved to local storage. It checks for password match.",
    skills: "ReactJs, JavaScript, CSS Flexbox",
    tools: "VS Code, Github",
    url: "https://iridescent-bunny-fddeae.netlify.app/",
  },
  {
    id: 6,
    image: `${process.env.PUBLIC_URL}/images/ScoreBoard.png`,
    name: "Score Board",
    about:
      "Basketball Scoreboard, where user can add score to the teams and save the current score.",
    skills: "ReactJs, JavaScript, CSS Flexbox",
    tools: "VS Code, Github",
    url: "https://charming-panda-12befe.netlify.app/",
  },
];

export default projects;
