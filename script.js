$("#start").on("click" ,function(){
    $("#start").remove();
   for(var i=0; i<questions.length;i++){
     $("#subwrapper").append("<h2>"+questions[i].question+"</h2");
       for(var j=0;j<questions[i].answers.length;j++){
           $("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
       }
   }
})

var questions =[{
    questions:"In The Matrix, does Neo take the blue pill or red pill?",
    answers:["red", "blue", "green", "yellow"],
    correctAnswers:["red"],

}, {
    questions:"What is the Longest movie ever made?",
    answers:["The Cure for Insomina", "The Lord of The Rings:Return of the King", "Star Wars: A New Hope", "Zoolander"],
    correctAnswers:["The Cure for Insomina"],
 }, {
    questions:"In Monty Python and the Holy Grail, who is the enchanter?",
    answers:["Tim", "Jim", "Pat", "Mike"],
    correctAnswers:["Tim"],
 }, {
    questions:"What was the first movie for which the cost of obtaining rights to the soundtrack outweighed all other production costs?",
    answers:["Clerks", "The Wall" , "Across the Universe", "Bohemian Rhapsody"],
    correctAnswers:[],
}, {
    questions:"Who is the only Top Gun actor who didn't vomit while in the fighter jets?",
    answers:["Tom Cruise", "Val Kilmer", "John Stockwell", "Anthony Edwards"],
    correctAnswers:["Anthony Edwards"],
}];

console.log(questions);

