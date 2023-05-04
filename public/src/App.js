  import './App.css';
  import Books from './components/Books';

  import React from 'react';


  function App() {
    
    const showBooks = true;
    return (
      <div className="App">
        
        <img className ='rat'
            src={require('./book_rat.jpg')} 
            alt="book-rat" 
          />
          
        <h2 className='h2'>About us</h2>
        <p className = 'paragraph'> In "Knijnia plah 🐀" BOOK for every MOOD we beleive that <br/>
      there is only one thing that could replace a book and that is  the next book. <br/>
      Come on an adventiorus journey of the mind with us.</p>

      
      {showBooks ? (
        <>
        <Books name="Fiction" />
        <p id = 'book1Fiction'> 1.	The Catcher in the Rye by  J.D. Salinger <br/></p>
        <p> The Catcher in the Rye is set around the 1950s and is narrated by a young man named Holden Caulfield.
          Holden is not specific about his location while he’s telling the story, but he makes it clear that he is undergoing treatment in a mental hospital or sanatorium.
          The events he narrates take place in the few days between the end of the fall school term and Christmas, when Holden is sixteen years old.
          Holden’s story begins on the Saturday following the end of classes at the Pencey prep school in Agerstown, Pennsylvania.
          Pencey is Holden’s fourth school; he has already failed out of three others.
          At Pencey, he has failed four out of five of his classes and has received notice that he is being expelled, but he is not scheduled to return home to Manhattan until Wednesday.
          He visits his elderly history teacher, Spencer, to say goodbye, but when Spencer tries to reprimand him for his poor academic performance, Holden becomes annoyed.
        </p>

        <p class ='book_styling'> 2.	Lord of the Flies by William Golding <br/></p>
        <p> In the midst of a raging war, a plane evacuating a group of schoolboys from Britain is shot down over a deserted tropical island.
          Two of the boys, Ralph and Piggy, discover a conch shell on the beach, and Piggy realizes it could be used as a horn to summon the other boys.
          Once assembled, the boys set about electing a leader and devising a way to be rescued. They choose Ralph as their leader, and Ralph appoints another boy,
          Jack, to be in charge of the boys who will hunt food for the entire group.
          Ralph, Jack, and another boy, Simon, set off on an expedition to explore the island.
          When they return, Ralph declares that they must light a signal fire to attract the attention of passing ships.
          The boys succeed in igniting some dead wood by focusing sunlight through the lenses of Piggy’s eyeglasses.
          However, the boys pay more attention to playing than to monitoring the fire, and the flames quickly engulf the forest.
          A large swath of dead wood burns out of control, and one of the youngest boys in the group disappears, presumably having burned to death.
        </p>

        <p class ='book_styling'> 3.	Nineteen Eighty-Four by George Orwell <br/></p>
        <p> Winston Smith is a low-ranking member of the ruling Party in London, in the nation of Oceania.
          Everywhere Winston goes, even his own home, the Party watches him through telescreens; everywhere he looks he sees the face of the Party’s seemingly omniscient leader, a figure known only as Big Brother. The Party controls everything in Oceania, even the people’s history and language.
          Currently, the Party is forcing the implementation of an invented language called Newspeak, which attempts to prevent political rebellion by eliminating all words related to it. Even thinking rebellious thoughts is illegal. Such thoughtcrime is, in fact, the worst of all crimes.
          As the novel opens, Winston feels frustrated by the oppression and rigid control of the Party, which prohibits free thought, sex, and any expression of individuality. Winston dislikes the party and has illegally purchased a diary in which to write his criminal thoughts. He has also become fixated on a powerful Party member named O’Brien, whom Winston believes is a secret member of the Brotherhood—the mysterious, legendary group that works to overthrow the Party.
        </p>
        
        <Books name="Self-development" />
        <p id = 'book1SElfDev'> 1.	Outliers by Malcolm Gladwell <br/></p>
        <p>In Outliers: The Story of Success, Malcolm Gladwell considers the circumstances that lead to success.
          The first half of the book looks closely at how opportunities matter more in the lives of successful people than hard work or raw talent.
          The second half of the book focuses on cultural legacies: behavioral tendencies rooted in their ancestral past.
          Part One examines the role of opportunity in the lives of extremely successful people. Gladwell’s first example is the Canadian Hockey League,
          the world’s most competitive youth hockey league. Since the cutoff date for the Canadian leagues that serve the youngest players is January 1, those born in the first part of the calendar year are much larger and more coordinated than their peers. The larger and more coordinated kids are given more playing time and better coaching, and thus become better players by the time they reach the top league. An overwhelming majority of Canadian professional hockey players have birthdays in January, February or March.
        </p>
      
        <p class ='book_styling'> 2.  Awaken The Giant Within by Anthony Robbins <br/></p>
        <p>When was the last time you thought about changing your life?
          Perhaps it was New Year's Eve and you resolved to quit smoking. Or maybe you wanted to lose weight and seriously considered going on a new diet.
          But did you actually manage to bring about those changes to your life?
          If you didn’t, the problem was likely in how you framed your desire to change: “I’d like to stop eating junk food” instead of “I will start eating more healthily.”
          To change anything about your life, you first have to make a clear decision. Then, no matter what challenges you may face, you have to stick to that decision.
          This necessitates that you must be willing to adapt your approach as you meet obstacles.
          Take, for example, Soichiro Honda, founder of the Honda corporation. As a schoolboy, he decided that he wanted to create effective piston rings for automobiles. History shows that he succeeded in that goal, yet on the path to success he encountered many problems that could’ve stopped him in his tracks.
          For example, during World War II, the Japanese government wouldn’t provide Honda with the concrete he needed to build the factories to manufacture his product.
          How did he overcome that obstacle?Honda’s solution was to invent his own way of making concrete, thus enabling himself to begin building his empire.
          And while committing to major decisions may be challenging, the more you do it, the easier it becomes. So, when you inevitably fail as you try to enact a change in your life, don’t be discouraged. Instead, think about what you could learn from the failure.
          For example, smokers are rarely successful on their first attempts to quit. But if they use that failure as an opportunity to reflect on the obstacles to quitting (for example, the temptation to smoke is too strong around other smokers), and how they might overcome them in the future (stay away from places where smokers reside), then they can accomplish their goal.
         </p>

         <p class ='book_styling'> 3. The Subtle Art of Not Giving a F*ck by Mark Manson <br/> </p>
         <p> For as much as I love positive psychology, sometimes it just doesn’t work, even for me. There’s another mode that might sound odd, but still works: toiling. You know how you have the occasional week where it’s literally just grinding? Even if you usually like your job, nothing exciting happens for a few days, you have a lot of deadlines and you just toil away to get it done.
          It’s the mode I’m in right now and weirdly, it’s still kinda satisfying. Probably, because it feels liberating not to have to ooze happy vibes all the time. Blogging demigod Mark Manson has coined a better phrase for this mode of operation: The Subtle Art Of Not Giving A F*ck. His first “proper” book, this instant New York Times bestseller is a no BS self-help book for people who usually hate self-help.
          Mark gets that life has become overwhelming and the only way to find our center around the things that really matter to us is to not give a f*ck about anything else.
          Here are my 3 favorite lessons:
          Values you can’t control are bad values to follow.
          Don’t believe you know anything with certainty, for it keeps you from improving.
          Trying to leave a legacy might ruin your life.
          The trick of not giving a fuck about most things is that you’ll be able to give one about what really matters to you. Let’s see how we can get a bit closer to that!
         </p>
        
         <Books name="Comedy" />
         <p id='book1Comedy'> 1. Catch-22 by Joseph Heller <br/></p>
         <p> During the second half of World War II, a soldier named Yossarian is stationed with his Air Force squadron on the island of Pianosa,
          near the Italian coast in the Mediterranean Sea.
          Yossarian and his friends endure a nightmarish, absurd existence defined by bureaucracy and violence:
          they are inhuman resources in the eyes of their blindly ambitious superior officers.
          The squadron is thrown thoughtlessly into brutal combat situations and bombing runs in which it is more important for the squadron members
          to capture good aerial photographs of explosions than to destroy their targets.
          Their colonels continually raise the number of missions that they are required to fly before being sent home, so that no one is ever sent home.
          Still, no one but Yossarian seems to realize that there is a war going on; everyone thinks he is crazy when he insists that millions of people are trying to kill him.
         </p>

         <p class ='book_styling'> 2. Three Men in a Boat by Jerome K. Jerome <br/></p>
         <p> Three Men in a Boat by Jerome K. Jerome is about three friends and a dog rowing their way along the Thames toward Oxford.
          The human characters on the boat are George, Harris, and the author, Jerome.
          The dog, Montmorency, is a rat terrier. The three young men consider themselves capable outdoorsmen, though they have trouble
          with simple outdoor survival skills. Setting up a tent flummoxes them. Cooking on a camp stove proves to be too complicated a task.
          Yet, they enjoy their journey, even though they end up taking a train for the last part of their trip back home from Oxford to London, due to foul weather.
          They get along relatively well, though they are occasionally at odds with one another.
          These disagreements are healed by Jerome’s humor. Their friendship is shown in the way they are willing to not only share a room at an inn,
          but also sleep three to a bed when necessary. Along the way, Jerome tells stories about the places they visit.
          His stories tend in the direction of his own fanciful preferences, which harken back to tales of knights and damsels in distress.
          He extols, or praises and reveres, chivalry, the code of conduct that once bound the knights of Medieval Europe and England.
          The book flows much the same way their progress along the Thames progresses--it meanders.
          Traveling by rowboat, they are not controlled by the wind, so are able to determine their own path.
         </p>

         <p class ='book_styling'>3.	Nobody’s fool by Rischard Russo <br/></p>
         <p> Nobody's Fool by Richard Russo is a book about the people in a small village named New Bath.
          New Bath is located in the Adirondacks in upstate New York. The town is popular and prosperous in the 1800s
          and well known for their mineral waters. A big resort hotel is built and the town competes with Schuyler Springs,
          a few miles away, for the resort business. Then the mineral waters of New Bath dry up and all the business go to Schuyler Springs.
          Economically, New Bath stagnates and the small town waits two hundred years for economic revival.
          Donald Sullivan, or Sully, has lived in New Bath all of his life, like most of the other residents.
          He is divorced from his wife Vera and is on partial disability due to a knee injury. He does not have much money and has been denied total disability.
          Despite his lawyer's advice, he decides to return to work and does odd jobs for Carl Roebuck, the owners of the Tip Top Construction Company.
          Sully has a strange relationship with Carl; the two rag each other constantly. They also have a game of stealing Carl's snow blower from each other.
          Sully lives at the house of Miss Beryl People, a widow in her eighties. She was the eighth grade teacher until she was forced to retire.
          Her husband was the high school football coach and Sully was his favorite student. This made their son, Clive Jr., jealous until he protested
          and had Sully banned from the Peoples' house. This was a grudge that Clive Jr. was to carry into adulthood,
          especially since Sully rented the upper floor of Miss Beryl's house. Sully is still coming in between Clive and his mother from Clive Jr.'s point of view.
          Sully is basically a loser. He cares little about material possessions and just survives. He is not interested in bank loans or in reading his mail.
          He has strange relationships with people, yet most of the townspeople like and trust him. He has a side kick named Rub Squeers who works with him and is usually at his side.
          Rub is resentful of Sully's son, Peter, when Peter separates from his wife and comes to live in New Bath and work with Sully.
          Sully rags at Rub just as he rags at others. The townspeople seem to accept the ragging as part of Sully's personality.
         </p>

        </>
        ) : (
        <p>You can't see the Books.</p>
      )}
      </div>
    );
  }


  export default App; 
  
