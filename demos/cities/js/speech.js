(function (root) {
    //let SPEECH = {};

    function startRecognizer() {
        if ('webkitSpeechRecognition' in window) {
            var recognition = new webkitSpeechRecognition();
            recognition.lang = 'ru';

            recognition.onresult = function (event) {
                var result = event.results[event.resultIndex];
                console.clear();
                console.log(result[0].transcript);
            };

            recognition.onend = function() {
                console.log('Распознавание завершилось.');
            };

            root.recognition = recognition;
            root.recognition.start();
        }
        else {
            console.log('SpeechRecognition не поддерживается :(')
        }
    }

    startRecognizer();

    //root.SPEECH = SPEECH;
})(this);
