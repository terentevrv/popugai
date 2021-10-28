window.onload = init;

function init() {

    let question = [
        'Хорошая погода, не правда ли?',
'Сходим в кино?',
'Было интересно?',
'Тебе понравился вчерашний концерт?',
'Ты любишь вышивать?',
'Какую книгу ты сейчас читаешь?',
'Чем планируешь заняться в эти выходные?',
'Прекрасно выглядишь!',
'Тебе нравится эта музыка?',
'Не хочешь прогуляться?',
'Как здоровье?'
    ];

    let answer = [
        'О, как я рад! У меня тоже ',
'Ух ты! А у нас не ',
'Поздравляю, и я ',
'Неплохо, я рад за тебя! ',
'Ай-яй-яй! Как же ты так... ',
'Здорово! И я хочу ',
'Прекрасно! ',
'Очень жаль... ',
'И не думай, лучше ',
'В самый раз! '
    ];


    let userAnswers = [];
    let userName = "";

    let talk = document.getElementById("talk");
    myText = document.getElementById("myText");

    talk.innerHTML = "<div class=popText>Привет я попугай Прохор! А как тебя зовут?</div>";

    myText.onkeypress = function(e){
        if(e.code == "Enter"){
            let ans = myText.value;
            myText.value = "";
            talk.innerHTML = writeTalk(ans,"myText");
            if(ans == "Пока" || ans == "Чао"){
                //прощание и выход
                talk.innerHTML = writeTalk("Уже уходишь? Жаль... Пока!","popText");
                mytext.remove();
            }else{
                if(userName == ""){

                //запомнить имя

                //отрегировать
                    talk.innerHTML += writeTalk("Очень приятно, "+userName+"!","popText");
            }else{
            //реакция на ответ

            //сохранить ответ в массив userAnswers
            
            }//if userName
            //новый вопрос
            
            }//if пока
            
            }//if e.code

        }//myText.onkeypress
        

        function writeTalk(mes,cl){
            return "<div class="+cl+">"+mes+"</div>";
        }//writeTalk
    



    


}//init

