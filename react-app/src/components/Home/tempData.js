const posts = [
    {
        id: 1,
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet turpis. Donec vel leo vel quam cursus tristique aliquam a mauris. Duis fringilla nisl augue, quis ultricies tortor rutrum et. Mauris ultrices pretium ipsum id dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed libero lobortis, ultrices nibh at, dapibus ex. Donec non elit dolor. Aliquam nec fermentum nibh, et mollis ante. Mauris et imperdiet tellus. Proin porttitor venenatis fermentum.",
        username: "Demo",
    },
    {
        id: 2,
        post: "Nam posuere at ligula non faucibus. Sed a magna nec mauris sodales luctus. Nulla cursus tincidunt nisi eu ornare. Pellentesque urna quam, pulvinar sit amet posuere sed, porttitor et augue. Fusce nec lorem iaculis, porttitor ligula at, ornare nisl. Aliquam mauris neque, rutrum ac pharetra in, tincidunt ullamcorper enim. Aliquam sit amet nisl rutrum, fermentum ligula quis, commodo massa.",
        username: "marnie",
    },
    {
        id: 3,
        post: "Pellentesque condimentum libero id lobortis facilisis. Vestibulum tempus nunc eget ex feugiat consequat. Aliquam dapibus, mi eget dignissim ullamcorper, nisi ante commodo sapien, id semper velit tortor quis lacus. In a elit sit amet sapien consectetur venenatis id et diam. Suspendisse potenti. Mauris aliquam orci nec lacinia ultrices. Vivamus in dolor nec magna dignissim luctus at eu leo.",
        username: "bobby",
    },
    {
        id: 4,
        post: "ROck N ROll BROO!!",
        username: "darrel",
    },
    {
        id: 5,
        post: "Omg! I just saw Captain America 4. IT WAS AMAZING!!!!!",
        username: "Jina",
    },
    {
        id: 6,
        post: "Flying in space!",
        username: "ricky",
    },
    {
        id: 7,
        post: "I can't believe this guy! We brought in dozensof people and refused to pay us because we 'didnt bring enough people.' WTF!?",
        username: "purple-paper",
    },
    {
        id: 8,
        post: "Just found an amazing new band! Gonna be stuck on them for a while :)",
        username: "music-lover1994",
    },
    {
        id: 9,
        post: "New merch coming soon! Keep looking out!",
        username: "Jonnie Cache",
    },
    {
        id: 10,
        post: "Just started on a new album!",
        username: "gtrLegend_59",
    },
    {
        id: 11,
        post: "Surprise coming soon! More info tomorrow",
        username: "Navila",
    },
    {
        id: 12,
        post: "We have a collaboration coming up. Keep an eye out!",
        username: "LunaBella",
    },
    {
        id: 13,
        post: "Check out my single Knock, Knock, Knock on Spotify, Pandora, iHeart Radio, Apple Music, or anywhere you stream your music!",
        username: "Anachronism",
    },
    {
        id: 14,
        post: "Documentary is nearing the end of post-production! Who's excited?",
        username: "manage",
    },
    {
        id: 15,
        post: "Praesent molestie auctor pretium. Curabitur ac orci in enim maximus convallis eget sit amet sem. Integer facilisis diam sed nisl interdum tempus at ac neque. Aliquam tempor malesuada nisl, nec convallis tortor mollis et. Nunc vulputate luctus ex, finibus bibendum felis consequat nec. Nam lacinia laoreet leo in efficitur. Sed dignissim lectus in nisl ultrices varius. Ut luctus ex erat, in iaculis diam sodales id. Phasellus non lacinia enim. Quisque pharetra, tellus interdum cursus fringilla, nulla erat tincidunt dui, ut mattis odio quam vulputate lacus. Donec tempus nulla purus, aliquet consequat neque rutrum eget. Mauris lacinia augue ac porttitor varius. Cras eleifend dui in ipsum placerat, ut dignissim magna facilisis. Nulla facilisi. Proin dapibus tincidunt urna, sed pellentesque leo efficitur in. Morbi sit amet mi ipsum.",
        username: "Demo",
    },
    {
        id: 16,
        post: "Ut efficitur elit nec eros vestibulum, et ornare odio sagittis. Cras sodales condimentum libero eu dapibus. Phasellus sagittis commodo maximus. Cras non lacus lorem. Duis sem tellus, efficitur sit amet porttitor vitae, interdum a mauris. Donec dictum tristique sodales. Donec mollis venenatis gravida. Quisque et turpis neque. Maecenas vulputate, nibh eget auctor malesuada, metus ligula luctus mi, quis tempus sapien libero at sapien. Donec vitae mauris in metus blandit auctor eu vitae felis. Pellentesque vestibulum, purus eu fermentum malesuada, turpis dui imperdiet mauris, ut hendrerit urna tellus at sem.",
        username: "marnie",
    },
    {
        id: 17,
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet turpis. Donec vel leo vel quam cursus tristique aliquam a mauris. Duis fringilla nisl augue, quis ultricies tortor rutrum et. Mauris ultrices pretium ipsum id dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed libero lobortis, ultrices nibh at, dapibus ex. Donec non elit dolor. Aliquam nec fermentum nibh, et mollis ante. Mauris et imperdiet tellus. Proin porttitor venenatis fermentum.",
        username: "bobby",
    },
    {
        id: 18,
        post: "Did you hear about the new professional napping competition? It's called the 'Nap Olympics' - finally, a sport I can excel at! But seriously, who knew that sleeping could be so competitive? 😴😂",
        username: "darrel",
    },
    {
        id: 19,
        post: "Oh, the joys of social media! It's like a never-ending buffet of opinions served with a side of drama. Who needs reality TV when you can just scroll through your feed? Pass the popcorn, please!",
        username: "Jina",
    },
    {
        id: 20,
        post: "I'm not saying I'm addicted to social media, but I did just check Facebook, Instagram, Twitter, and Snapchat for the 100th time today. I think I need a support group for my 'liking' habit.",
        username: "ricky",
    },
    {
        id: 21,
        post: "Did you know that the term 'reggae' was originally spelled 'rege' and was a slang term for 'rags' or 'ragged clothing'? It later evolved to refer to a particular style of music with a distinctive rhythm.",
        username: "purple-paper",
    },
    {
        id: 22,
        post: "I recently attended a reggae concert and had an amazing time dancing to the music and feeling the positive vibes. It got me thinking, what's your favorite memory from a reggae concert? Share your stories with me!",
        username: "music-lover1994",
    },
    {
        id: 23,
        post: "Remember when people used to just sing in the shower? Now we have auto-tune, lip-syncing, and millions of 'singers' on the internet. It's like everyone's trying to be the next Beyoncé, but with less talent.",
        username: "Jonnie Cache",
    },
    {
        id: 24,
        post: "New ideas daily!! Can't swait to share some of these!",
        username: "gtrLegend_59",
    },
    {
        id: 25,
        post: "Got the band together and ready to write! We are officially starting pre-production on our new album!",
        username: "Navila",
    },
    {
        id: 26,
        post: "New song with Navila out on Spotify today!",
        username: "LunaBella",
    },
    {
        id: 27,
        post: "New tour announcement on our page!!",
        username: "Anachronism",
    },
    {
        id: 28,
        post: "Whats up, Houston! Come jam with us tommorrow night at Scout Bar!",
        username: "manager",
    },
    {
        id: 29,
        post: "Nam posuere at ligula non faucibus. Sed a magna nec mauris sodales luctus. Nulla cursus tincidunt nisi eu ornare. Pellentesque urna quam, pulvinar sit amet posuere sed, porttitor et augue. Fusce nec lorem iaculis, porttitor ligula at, ornare nisl. Aliquam mauris neque, rutrum ac pharetra in, tincidunt ullamcorper enim. Aliquam sit amet nisl rutrum, fermentum ligula quis, commodo massa.",
        username: "Demo",
    },
    {
        id: 30,
        post: "Pellentesque condimentum libero id lobortis facilisis. Vestibulum tempus nunc eget ex feugiat consequat. Aliquam dapibus, mi eget dignissim ullamcorper, nisi ante commodo sapien, id semper velit tortor quis lacus. In a elit sit amet sapien consectetur venenatis id et diam. Suspendisse potenti. Mauris aliquam orci nec lacinia ultrices. Vivamus in dolor nec magna dignissim luctus at eu leo.",
        username: "marnie",
    },
    {
        id: 31,
        post: "Praesent molestie auctor pretium. Curabitur ac orci in enim maximus convallis eget sit amet sem. Integer facilisis diam sed nisl interdum tempus at ac neque. Aliquam tempor malesuada nisl, nec convallis tortor mollis et. Nunc vulputate luctus ex, finibus bibendum felis consequat nec. Nam lacinia laoreet leo in efficitur. Sed dignissim lectus in nisl ultrices varius. Ut luctus ex erat, in iaculis diam sodales id. Phasellus non lacinia enim. Quisque pharetra, tellus interdum cursus fringilla, nulla erat tincidunt dui, ut mattis odio quam vulputate lacus. Donec tempus nulla purus, aliquet consequat neque rutrum eget. Mauris lacinia augue ac porttitor varius. Cras eleifend dui in ipsum placerat, ut dignissim magna facilisis. Nulla facilisi. Proin dapibus tincidunt urna, sed pellentesque leo efficitur in. Morbi sit amet mi ipsum.",
        username: "bobby",
    },
    {
        id: 32,
        post: "Did you know that the metal titanium is often used in medical implants because it is biocompatible, meaning it is not rejected by the body? This makes it a popular choice for things like joint replacements and dental implants.",
        username: "darrel",
    },
    {
        id: 33,
        post: "I went to a reggae concert and had the best time dancing to the music and feeling the positive vibes. Have any of you attended a reggae concert before? I'd love to hear your experiences and favorite memories!",
        username: "Jina",
    },
    {
        id: 34,
        post: "One of the most significant figures in music history is Ludwig van Beethoven. He was a pivotal figure in the transition from the Classical to the Romantic era. His compositions, such as the Ninth Symphony, continue to inspire and influence musicians around the world!",
        username: "ricky",
    },
    {
        id: 35,
        post: "Did you know that reggae music got its name from a 1968 hit single by Toots and the Maytals called 'Do the Reggay'? The term 'reggay' was slang for 'raggedy' and referred to the style of music.",
        username: "purple-paper",
    },
    {
        id: 36,
        post: "Did you know that the term 'heavy metal' was first used in a 1968 song by Steppenwolf? The song 'Born to Be Wild' contains the line 'heavy metal thunder,' which is believed to have inspired the genre's name.",
        username: "music-lover1994",
    },
    {
        id: 37,
        post: "I always find it amusing how some people can't carry a tune to save their lives, yet they're the first to critique professional musicians. It's like watching a frog trying to critique a swan's ballet performance. Hilarious!",
        username: "Jonnie Cache",
    },
    {
        id: 38,
        post: "Want to contribute to the development of our new album? Join our Patreon for exlusive first looks at the music we are working on, and a chance to vote for your favorites.",
        username: "gtrLegend_59",
    },
    {
        id: 39,
        post: "Got our first song started! So exciting!",
        username: "Navila",
    },
    {
        id: 40,
        post: "I recently attended a reggae concert and had the best time dancing and singing along to the music. I'd love to hear your experiences at reggae concerts! Share your stories and let's reminisce about the good vibes.",
        username: "LunaBella",
    },
    {
        id: 41,
        post: "My personal goal is to master the fingerstyle technique and perform a challenging piece flawlessly. I encourage you to set a specific guitar performance goal and work towards it with dedication and persistence. Let's inspire each other to grow as musicians.",
        username: "Anachronism",
    },
    {
        id: 42,
        post: "One of the most significant figures in music history is Ludwig van Beethoven, a German composer and pianist who revolutionized classical music. His influence on Western music is immeasurable, and his symphonies and sonatas remain iconic to this day!",
        username: "manage",
    },
    {
        id: 43,
        post: "Ut efficitur elit nec eros vestibulum, et ornare odio sagittis. Cras sodales condimentum libero eu dapibus. Phasellus sagittis commodo maximus. Cras non lacus lorem. Duis sem tellus, efficitur sit amet porttitor vitae, interdum a mauris. Donec dictum tristique sodales. Donec mollis venenatis gravida. Quisque et turpis neque. Maecenas vulputate, nibh eget auctor malesuada, metus ligula luctus mi, quis tempus sapien libero at sapien. Donec vitae mauris in metus blandit auctor eu vitae felis. Pellentesque vestibulum, purus eu fermentum malesuada, turpis dui imperdiet mauris, ut hendrerit urna tellus at sem.",
        username: "Demo",
    },
    {
        id: 44,
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in imperdiet turpis. Donec vel leo vel quam cursus tristique aliquam a mauris. Duis fringilla nisl augue, quis ultricies tortor rutrum et. Mauris ultrices pretium ipsum id dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed libero lobortis, ultrices nibh at, dapibus ex. Donec non elit dolor. Aliquam nec fermentum nibh, et mollis ante. Mauris et imperdiet tellus. Proin porttitor venenatis fermentum.",
        username: "marnie",
    },
    {
        id: 45,
        post: "Nam posuere at ligula non faucibus. Sed a magna nec mauris sodales luctus. Nulla cursus tincidunt nisi eu ornare. Pellentesque urna quam, pulvinar sit amet posuere sed, porttitor et augue. Fusce nec lorem iaculis, porttitor ligula at, ornare nisl. Aliquam mauris neque, rutrum ac pharetra in, tincidunt ullamcorper enim. Aliquam sit amet nisl rutrum, fermentum ligula quis, commodo massa.",
        username: "bobby",
    },
    {
        id: 46,
        post: "Pellentesque condimentum libero id lobortis facilisis. Vestibulum tempus nunc eget ex feugiat consequat. Aliquam dapibus, mi eget dignissim ullamcorper, nisi ante commodo sapien, id semper velit tortor quis lacus. In a elit sit amet sapien consectetur venenatis id et diam. Suspendisse potenti. Mauris aliquam orci nec lacinia ultrices. Vivamus in dolor nec magna dignissim luctus at eu leo.",
        username: "darrel",
    },
    {
        id: 47,
        post: "Imagine you're at a rock concert and the crowd is getting rowdy. The person next to you is being pushed around. What would you do to ensure their safety? Let's hear your thoughts!",
        username: "Jina",
    },
    {
        id: 48,
        post: "You're at a rock concert and the lead singer throws their sweaty towel into the crowd. It lands on you. Do you keep it as a souvenir or throw it back? Why?",
        username: "ricky",
    },
    {
        id: 49,
        post: "Did you know that the term 'reggae' was first used in a song called 'Do the Reggay' by Toots and the Maytals in 1968? The genre's name is believed to have derived from this song. Fascinating, right?",
        username: "purple-paper",
    },
    {
        id: 50,
        post: "Did you know that the iconic 'devil horns' hand gesture, often associated with metal music, was popularized by Ronnie James Dio, vocalist for bands like Black Sabbath and Dio? He said it was a symbol to ward off evil. Fascinating, isn't it?",
        username: "music-lover1994",
    },
    {
        id: 51,
        post: "Why did the musician bring a ladder to the concert? Because he wanted to reach the high notes! Just like in music, sometimes you have to go to great lengths to hit the right note.",
        username: "Jonnie Cache",
    },
    {
        id: 52,
        post: "Did you know that the term 'heavy metal' was actually first used in the novel 'The Martian Chronicles' by Ray Bradbury in 1951? It was used to describe the sound of thunder in the story. Fascinating, isn't it?",
        username: "gtrLegend_59",
    },
    {
        id: 53,
        post: "Demo's coming soon!",
        username: "Navila",
    },
    {
        id: 54,
        post: "I remember attending a jam session with some friends at a local music venue. It was such a blast to improvise with different musicians and feed off each other's energy. The creativity was electrifying!",
        username: "LunaBella",
    },
    {
        id: 55,
        post: "My personal goal is to master a difficult guitar solo by the end of the year. I encourage you to set a similar goal for yourself and work towards it every day. With dedication and practice, we can both achieve our guitar performance milestones.",
        username: "Anachronism",
    },
    {
        id: 56,
        post: "My personal goal for guitar performance is to improve my fingerpicking technique and learn challenging new pieces. I encourage you to set a similar goal for yourself and dedicate time each day to practice and improve. Let's support each other in our musical endeavors!",
        username: "manager",
    },
];

export default posts;
