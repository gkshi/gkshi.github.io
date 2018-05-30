(function (root) {
    let SPEECH = {};

    function startRecognizer() {
        if ('webkitSpeechRecognition' in window) {
            root.recognizing = false;

            let recognition = new webkitSpeechRecognition();

            recognition.lang = 'ru';

            recognition.onstart = function() {
                console.log('onstart');
                root.recognizing = true;
            };

            recognition.onresult = function (event) {
                console.log('onresult');
                let result = event.results[event.resultIndex];
                console.clear();
                console.log(result[0].transcript);
            };

            recognition.onend = function() {
                console.log('onend');
                root.recognizing = false;
            };

            recognition.onerror = function() {
                console.log('onerror');
                root.recognizing = false;
            };

            root.recognition = recognition;
            root.recognition.start();
        }
        else {
            console.log('SpeechRecognition не поддерживается.')
        }
    }

    root.SPEECH.startRecognizer = startRecognizer;

    root.SPEECH = SPEECH;
})(this);
