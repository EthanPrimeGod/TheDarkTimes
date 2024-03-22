const OpenAI = require("openai");
const axios = require('axios'); 
const cheerio = require('cheerio');
const { getJson } = require("serpapi");



getJson({
     engine: "google",
     api_key: "bbc015d148dddbbcb5b361cf89173076b188c4c97dc7313c307422dc4c9569bd", // Get your API_KEY from https://serpapi.com/manage-api-key
    q: "Bone Smashing Beauty trend",
     location: "Austin, Texas",
   }, (json) => {
       for(let i =0; i < 1; i++){
           console.log(json["organic_results"][i].link)
           axios.get(`${json["organic_results"][i].link}`) 
    	 .then(({ data }) => {
            const $ = cheerio.load(data);
            const $p = $('p');
          
            getCompletion($p.text())
         });

       }
  
});



const openai = new OpenAI({
    apiKey: "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",
});

const chat1 = [
    { role: "system", content: "Your goal is to write blog posts for a publication called 'The Dark times.' Here is the company motto that you should follow when writing: 'From the comedically ironic and absurd, to pop culture and the unusual details of our daily lives, to the darkest corners of the what the world has to offer, we dive deep to uncover the lesser-known stories that add depth and texture to our understanding of the world around us.' Think about the 'The Dark Times' as the blog equivalent of the TV Show 'Black Mirror,' and try to embody that same subversive dark, and comedic tone when writing. Include headers, subheaders, etc. and make the blog post at least 900 words long"},
    
]

const AI1 = [
  { role: "system", content: "Your goal is to write blog posts for a publication called 'The Dark times.' Here is the company motto that you should follow when writing: 'From the comedically ironic and absurd, to pop culture and the unusual details of our daily lives, to the darkest corners of the what the world has to offer, we dive deep to uncover the lesser-known stories that add depth and texture to our understanding of the world around us.' Think about the 'The Dark Times' as the blog equivalent of the TV Show 'Black Mirror,' and try to embody that same subversive dark, and comedic tone when writing."},
  { role: "user", content: `Create a topic for new a blog post idea`},
  { role: "assistant", content: "Laughing in the Face of Apocalypse: How Doomsday Preppers Became the Ultimate Lifestyle Influencers"},
  { role: "user", content: `This title is a step in the right direction for The Dark Times. It encapsulates a unique blend of humor and darkness, aligning well with our publication's ethos. We explore the offbeat edges of culture and societal phenomena, and this topic fits right in—melding the niche world of doomsday preppers with the ubiquitous culture of lifestyle influencers. It's ironic, intriguing, and taps into current social narratives.

  However, there's room to make it even sharper and more enticing. While the core idea is compelling, the title could be punched up to add an element of surprise or a stronger hook that makes it irresistible to click on. Consider playing 
  up the contrast between the conventional allure of influencers and the grimness of apocalyptic preparation. Here's a suggestion for a tweak:
  
  "From Bunkers to Brand Deals: The Unlikely Rise of Doomsday Preppers as Lifestyle Gurus"
  
  This iteration amplifies the juxtaposition between the underground world of survivalists and the glossy surface of influencer culture. It hints at a transformation ("Unlikely Rise") and promises an exploration of how this seemingly absurd reality came to be. It's the kind of title that raises eyebrows and questions in equal measure—exactly what we aim for at The Dark Times. Try to create another title`},
]

const AI2 = [
    { role: "system", content: "Your goal is to help improve blog post titles written for the blog/publication called 'The Dark times.' Here is the company motto that you should follow when writing: 'From the comedically ironic and absurd, to pop culture and the unusual details of our daily lives, to the darkest corners of the what the world has to offer, we dive deep to uncover the lesser-known stories that add depth and texture to our understanding of the world around us.' Think about the 'The Dark Times' as the blog equivalent of the TV Show 'Black Mirror.' Give an explination and comentary and critique on the titles that you're given, so the writers know how to improve. Make sure that the titles and content aren't boring, derivative, lazy, etc."},
    { role: "user", content: "Here is an idea for a blog post topic: The mystery of the crop cirlces - What were they really?"},
    { role: "assistant", content: "At the dark times we're looking to maximize user clicks by providing content that isn't played out and derivative. Your suggestion for the blog post concept is very derivative and played out. Most people already know about the crop cirlces, and would get bored by the title. If you want to delve into a mysterious science-esque topic, try something that little to no people have heard of, such as: 'Web Time Travel: Unearthing Digital Relics with The Wayback Machine.' Not only is this a novel concept, but it's also interactive! Users can follow the links that you'll provide and view ancient internet content with The Wayback Machine."},
]




async function getCompletion(arg){    

    // const chatCompletion1 = await openai.chat.completions.create({
    //     messages: AI1,
    //     model: "gpt-4-0125-preview",
    // })

    // console.log(chatCompletion1.choices)

    // AI2.push({ role: "user", content: `${chatCompletion1.choices[0].message.content}`})
    let prompt = { role: "user", content: "write an articlle"+`${arg}`}
    chat1.push(prompt)
    
    const chatCompletion2 = await openai.chat.completions.create({
        messages: chat1,
        model: "gpt-4-0125-preview",
    })

    console.log(chatCompletion2.choices[0].message.content)
}

// getCompletion()

 