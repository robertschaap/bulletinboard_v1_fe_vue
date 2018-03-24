const Comment = require("../models/comment");

const comments = [
  { title: "Hello World!", body: "Hi there, welcome to our little place, feel free to leave a comment!", avatar: "sheep", name: "Robert" },
  { title: "This is amazing!", body: "I just stumbled upon this place, it's amazing. Keep up the good work!", avatar: "elephant", name: "Max" },
  { title: "What's this about though?", body: "You seem like nice people but what's this about?", avatar: "kitty", name: "Dave" },
  { title: "This Sucks", body: "Whoever setup this site should be fired or something", avatar: "hippo", name: "Jennifer" },
  { title: "Hi!", body: "My name is JSON. JSON Bourne.", avatar: "hyena", name: "Jason" },
  { title: "I'm a freaking Prince", body: "I'm a freaking prince!! How about that!!", avatar: "elephant", name: "William" },
  { title: "Uhh", body: "I'm not really sure about any of this", avatar: "puppy", name: "Janick" },
  { title: "My name is burt", body: "I'm from Kentucky. Woo!", avatar: "bunny", name: "Burt" },
  { title: "Rock and roll", body: "Check out my new album on bandcamp", avatar: "hippo", name: "Henry Rollins" },
  { title: "First!", body: "First!", avatar: "kitty", name: "Sanne123" },
  { title: "Colourful", body: "This site has an amazing colorscheme. Props to the webmaster", avatar: "sheep", name: "Baklap" },
  { title: "I'm the one", body: "I knwow you're out there", avatar: "elephant", name: "Thomas A. Anderson" },
  { title: "Can anybody help me?", body: "I've got a problem. Yesterday my pet rock died and I've been sad ever since. My boyfriend tells me to get over it, what should I do?", avatar: "bunny", name: "Monica" },
  { title: "@Monica get over it", body: "^", avatar: "hyena", name: "Gerald" },
  { title: "Jimmy knows best", body: "Hi I'm jimmy and I knows best", avatar: "kitty", name: "Jimmy" },
  { title: "The first, the last", body: "We've got it together baby. We've really got it together.", avatar: "elephant", name: "Barry White" },
  { title: "Reminder", body: "Just a friendly reminder, this is a bulletin board with comments from you lot on it. Keep the posts coming!", avatar: "sheep", name: "Robert" },
  { title: "Burgers 1EUR", body: "All burgers are 1EUR today. Come get some you junk food addicts.", avatar: "hyena", name: "Ronald McDonald" },
  { title: "Shakes as well btw", body: "^", avatar: "hyena", name: "Ronald McDonald" },
  { title: "This almost works", body: "This almost works with sequelize.", avatar: "puppy", name: "Johnny" },
  { title: "Oh danny boy", body: "The pipes? Crap, I forgot how the song goes", avatar: "hippo", name: "Danny" },
];

exports.setupComments = () => {
  comments.forEach(entry => Comment.new(entry));
};
