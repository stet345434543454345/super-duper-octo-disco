function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/v8QMwMnQo/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
    console.error(error);
    } else {
        console.log(results);
        random_nunber_r =  Math.floor(Math.random() * 255) + 1;
        random_nunber_g =  Math.floor(Math.random() * 255) + 1;
        random_nunber_b =  Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML="I can hear - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_nunber_r+","+random_nunber_g+","+random_nunber_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_nunber_r+","+random_nunber_g+","+random_nunber_b+")";
        img1=document.getElementById("alien1");
        img2=document.getElementById("alien2");
        img3=document.getElementById("alien3");
        img4=document.getElementById("alien4");
        if (results[0].label=="rubic cubeh") {
            sound1.src="rc.jpg";
        } else if (results[0].label=="flipping card") {
            sound1.src="fc.jpeg";
        } else if (results[0].label=="unplug") {
            sound1.src="up.png";    
        } else {
            sound1.src="";
        }
    }
}