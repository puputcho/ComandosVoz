var reconhecerVoz = window.webkitSpeechRecognition;
var reconhecimento = new reconhecerVoz();
function start() {
    document.getElementById
        ('textBox').innerHTML = '';
    reconhecimento.start();
}
reconhecimento.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById('textBox').innerHTML = content;
    console.log('Usuário falou: ' + content);
    if (content == 'tire minha selfie') {
        speech();    
    }
    if (content == 'Olá') {
        speechola();    
    }
}
function speech() {
    var fala = window.speechSynthesis;
    var fraseResposta = 'Tirando sua selfie em 5 segundos';
    var novaFala = new SpeechSynthesisUtterance(fraseResposta);
    fala.speak(novaFala);
    Webcam.attach(camera);
    setTimeout(
        function () {
            takeSelfie();
            save();
        }
        ,5000
        // milesegundos
        );
}
function speechola(params) {
    var fala = window.speechSynthesis;
    var fraseResposta = 'Olá';
    var novaFala = new SpeechSynthesisUtterance(fraseResposta);
    fala.speak(novaFala);
}
var camera = document.getElementById('camera');
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90
});
function takeSelfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = '<img id="selfie" src="' + data_uri + '">';
    });
}
function save(){
    var link = document.getElementById('link');
    var image = document.getElementById('selfie').src;
    link.href = image
    link.click();
}
