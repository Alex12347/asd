
const commando= require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('eli' ,'eli');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.login(process.env.BOT_TOKEN);
bot.on('message', (message) =>{

    if (message.content =="our"){
        message.channel.sendMessage('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=video&cd=1&cad=rja&uact=8&ved=0ahUKEwinh4jJ49LYAhXkguAKHffyBkkQtwIIKTAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPdYLRTGmQ3c&usg=AOvVaw3bCSkxQAI-LU8Xa-wQVmK2');
    }


    if (message.content =="how many genders are there"){
        message.channel.sendMessage('THERE ARE ONLY TWO GENDERS!!!!');
    }


    if (message.content =="How many genders are there"){
        message.channel.sendMessage('THERE ARE ONLY TWO GENDERS!!!!');
    }

    
    if (message.content =="ELI"){
        function myTimeout2() {
        var roll = Math.floor(Math.random() *9)+1;
        message.channel.sendMessage('This is the eli-bot with my hourly ELI message')
        if (roll ==1){
           message.channel.sendMessage('I have mastered the ways of eli and i have become Elighten please convert to the ways of eli with me brothers so we all can reach eli-heaven');
    }
    if (roll ==2){
        message.channel.sendMessage('Did you that communisim is the way to go if trump made american great then it would be a communism');
    }
    if (roll ==3){
        message.channel.sendMessage("Did you eli's middle name it Felix ");
    }
    if (roll ==4){
        message.channel.sendMessage("Jacob Arneo");
    }
    if (roll ==5){
        message.channel.sendMessage('Spaget');
    }
    if (roll ==6){
        message.channel.sendMessage("whe current value of a bit coin is $13,190");
    }
    if (roll ==7){
        message.channel.sendMessage("He who shall not be named has jioned your discord sever");
    }
    if (roll ==8){
        message.channel.sendMessage('I have did alot of thinking and i think i am ELIFLEXIBLE');
    }
    if (roll ==9){
        message.channel.sendMessage("hey matt can you lay on my lap");
    }
    setTimeout(myTimeout2, 360000) 
    }
    
            setTimeout(myTimeout2, 1) 
    }
    


    if (message.content =='eli'){
        message.channel.sendMessage('eli get out the bath tub!!!!');


    }




    if (message.content =='ping'){
        message.channel.sendMessage('pong');
    }


    if (message.content =='Fuck jOGGERS'){
        message.channel.send('Fuck JOGGERS');
    }


    if (message.content =='fuck joggers'){
        message.channel.send('Fuck JOGGERS');
    }


    if (message.content =='nig'){
        message.channel.sendMessage('nog');
    }
});
bot.on('message', (message) =>{

    if (message.content =='hi eli-bot'){
        message.channel.sendMessage('hello my nig');
    }


    if (message.content =='loltyler1'){
        message.channel.sendMessage('http://www.loltyler1.com/');
    }

    if (message.content =='its a virus'){
        message.channel.sendMessage('https://www.youtube.com/watch?v=1BrWVd74WTY');
    }


    if (message.content =="it's a virus"){
        message.channel.sendMessage('https://www.youtube.com/watch?v=1BrWVd74WTY');
    }


    if (message.content =="It's a virus"){
        message.channel.sendMessage('https://www.youtube.com/watch?v=1BrWVd74WTY');
    }


    if (message.content =='I watch Rick and Morty'){
        message.channel.sendMessage("To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existencial catchphrase Wubba Lubba Dub Dub, which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons. I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand.");
    }


    if (message.content =='praise eli'){
        message.channel.sendMessage('PRAISE ELI!!!!!');
    }


    if (message.content =='Praise eli'){
       // message.reply('PRAISE ELI!!!!!');
       message.channel.sendMessage('PRAISE ELI!!!!!');
    }
});
bot.login(Config.user.email, Config.user.password);
