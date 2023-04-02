import Card from './Card'
import mark from './images/mark.jpg'
import girl from './images/girl.jpeg'
import lemon from './images/lemon.jpeg'
import garden from './images/garden.jpg'
import burger from './images/burger.jpeg'
function App() {
  return (
    <div className = 'userInterface'>
      <Card 
      img = {mark}
      name = "Benedict Kariuki"
      work = "Software Engineer"
      address = "Nairobi, Kenya"
      about = "My name is Ben. I'm a Software Engineer with great skills in fullstack web development, Mobile app development, API development and much more. I have great communication skills thatenable me to best understand what my clients need."
      interests = "Developing mobile apps in Java, Flutter, node.js and web apps in HTML, CSS, and JavaScript(React). Developing APIs in Python"
      />

     <Card
     img = {girl}
      name = "Grace Kahoro"
      work = "Data Analyst"
      address = "Carlifornia, USA"
      about = "My name is Grace Kahoro. I'm a Data Analyst experienced in data analytics using tools like Microsoft Excel, Python, R, SPSS and much more."
      interests = "My interests are diving deeper into data analytics and provide the best experience for my clients. I like playing basket ball and hockey."
      />
      <Card
      img = {lemon}
      name = "Bob Ziroll"
      work = "Software Developer"
      address = "Dephi, India"
      about = "My name is Bob Ziroll and I'm an instructor at Scrimba. I have many years of experience in teaching React. Besides, I'm a Software Developer at Scrimba."
      interests = "I feel very happy and nice when teaching React to make writing react code as easy as possible."
      />
      <Card
      img = {burger}
      name = "Gloria Kahoro"
      work = "Network Consultant"
      address = "England, Europe"
      about = "I'm a network engineer as well as network consultant from England. I work remotely for any tech company. I have 5 years experience in this field"
      interests = "I like configuring, troubleshooting and protecting networks from attackers. My hobbies are travelling, swimming, and sky-diving"
      />

      <Card 
      img = {garden}
      name = "Anthony Washington"
      work = "Cloud Computing Prac."
      address= "Hong Kong, China"
      about = "My name is Anthony and I'm a certified Cloud Computing Practitioner. I have absolutely great familiarity with cloud solutions like Amazon Web Services, Google Cloud Platform, and Microsoft Azure."
      interests = "I'm  a huge fan of watching movies, playing badminton and adventure."
      />

      
  
    </div>
  );
}

export default App;
