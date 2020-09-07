import key from '../assets/projectImages/key-con.png';
import movieBox from '../assets/projectImages/movie-box.gif';
import recipe from '../assets/projectImages/recipe-cheqr.gif';
import gitHub from '../assets/projectImages/github-profile.gif';

const projects = [
  {
    id: 1,
    img: [movieBox],
    title: 'Movie Box',
    github_url: 'https://github.com/briworkman/movie-box-new',
    live_url: 'https://movie-box-2.netlify.app/',
    description:
      'Movie Box is an app that allows you to view and search your favorite movie plots, budgets, actors, and more.',
    role: 'front end',
    built_with: ['React', 'The Movie Database'],
    api_url: 'https://www.themoviedb.org/?language=en-US',
  },
  {
    id: 2,
    img: [gitHub],
    title: 'My GitHub Profile',
    github_url: 'https://github.com/briworkman/github-profile',
    live_url: 'https://my-github-profile.netlify.app/',
    description:
      'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, GitHub calendar, and sort through your top repos by number of stars, forks, and size.',
    role: 'front end',
    built_with: ['React', 'GitHub API'],
    api_url: 'https://developer.github.com/v4/',
  },
  {
    id: 3,
    img: [recipe],
    title: 'Recipe Cheqr',
    github_url: 'https://github.com/irisjitomo/recipe-site-7days7websites',
    live_url: 'https://recipecheqr.netlify.app/',
    description:
      'The Recipe Cheqr app allows users to search, filter, and view recipes and their specific instructions, as well as their nutrition facts. The app also allows users to generate/create grocery lists and create/login to a profile to save their favorite recipes',
    role: 'front end',
    built_with: ['React', 'Spoonacular API'],
    api_url: 'https://rapidapi.com/user/spoonacular',
  },
  {
    id: 5,
    img: [key],
    title: 'Key Conservation',
    github_url: 'https://github.com/Lambda-School-Labs?q=key&type=&language=',
    live_url: null,
    description:
      'Key Conservation is helping conservationists gain critical funding and global support through a mobile app that provides real-time updates on day-to-day campaigns. The Key Conservation app has a scrolling live feed that updates as needs from conservationists occur around the world in real-time.',
    role: 'scrolling live feed and the connect/follow feature',
    built_with: ['React Native & Redux', 'Node.js & Express'],
    api_url: null,
  },
];

export default projects;
