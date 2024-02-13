# ALAB 320H.3.1 - Rendering Arrays from State

## Learning Objectives
After completing this lab, learners will have demonstrated the ability to:

Create React components from arrays of data being stored in state.

 CodeSandbox
This lab uses CodeSandbox as one of its tools.

If you are unfamiliar with CodeSandbox, or need a refresher, please visit our reference page on CodeSandbox for instructions on:

Creating an Account
Making a Sandbox
Navigating your Sandbox
Submitting a link to your Sandbox to Canvas

## Instructions
This lab will test your ability to create components from arrays stored in state.

- Create a React CodeSandbox and name it "Rendering Arrays in React."
- Follow the requirements below to create your React application.
- Submit the link to your CodeSandbox on Canvas when you are finished.
The following requirements must be met for this lab to be considered successful:

The layout and styling of the site is left up to your discretion. There are no layout or styling requirements, but you should always make sure your web applications are neat, sensible, and provide a good user experience.
Use the provided array of "learner" data below to initialize state as an object with a learners key in the <App> component.
Code the <App> component to display a <Learner> component for each learner object in the learners array being held in state.
Code the <Learner> component so that it:

Renders the learners's name & bio properties.
Renders a <Score> component for each score object in the learner's scores property.
Code the <Score> component so that it renders the score object's date & score properties.

Deliverables
A link to a CodeSandbox that contains your completed lab with no errors (comment things out if they do not work).

Provided Learner Array
[
  {
    name: 'Cait Yomorta',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Holly Baird',
    bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  }
]

Hint
You will not update state in this lab. You are only initializing it in App.js, passing it as props, and rendering it's data in the components.

Here's what it should look like when you call useState inside of App.js:

const [learnerData, setLearnerData] = useState({
  learners: [
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
      ...
      // more code below
