function calculator() {
	document.getElementById("calculator").innerHTML = '<iframe src="https://www.numworks.com/simulator/embed/" width="368px" height="720px"></iframe><script src="https://www.numworks.com/simulator/embed.js"></script>';
}
function stopCalculator() {
	document.getElementById("calculator").innerHTML = "";
}
clickCountNum = 0;
function clickCounter() {
	clickCountNum = clickCountNum + 1;
	document.getElementById("clickCount").innerHTML = "You have clicked " + clickCountNum + " time(s).";
}
songTP = document.getElementById("songTextP");
songVar = 0;
function songText() {
	if (songVar == 0) {
		songTP.innerHTML = "Yallah<br/>Yallah";
	}
	else if (songVar == 1) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Vainko";
	}
	else if (songVar == 2) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Yakhi Raju they ain't ready for this one<br/>I'm also not ready";
	}
	else if (songVar == 3) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Let's show em how it's done<br/>You show<br/>Ay so lets go";
	}
	else if (songVar == 4) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Smoke shisha play FIFA<br/>Everyday";
	}
	else if (songVar == 5) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Smoke shisha play FIFA<br/>It's okay";
	}
	else if (songVar == 6) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Smoke shisha play FIFA<br/>With my friends";
	}
	else if (songVar == 7) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Smoke shisha play FIFA<br/>Until the end";
	}
	else if (songVar == 8) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>My name is Mahmoud<br/>And I like to play the FIFA";
	}
	else if (songVar == 9) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Whatever team you pick bro<br/>You know I always beat ya";
	}
	else if (songVar == 10) {
		songTP.innerHTML = songTP.innerHTML + "<br/>If you win aganist me<br/>Guarantee you are a cheater<br/>PS4 Xbox One even on computer";
	}
	else if (songVar == 11) {
		songTP.innerHTML = songTP.innerHTML + "<br/>When we out in the town<br/><br/>Smoke shisha play FIFA";
	}
	else if (songVar == 12) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Our face never have frown<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 13) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Even in the car<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 14) {
		songTP.innerHTML = songTP.innerHTML + "<br/>While we chilling at the bar<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 15) {
		songTP.innerHTML = songTP.innerHTML + "<br/>We do it with hummus<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 16) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Ask the ladies for a booze<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 17) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Don't not worry it's halal<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 18) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Cuz it's after ramadan";
	}
	else if (songVar == 19) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Hi, myself Raju<br/>First time in the Gulf(Gulf)";
	}
	else if (songVar == 20) {
		songTP.innerHTML = songTP.innerHTML + "<br/>All the ladies very nice<br/>And the food I really love<br/>(Adipoli)";
	}
	else if (songVar == 21) {
		songTP.innerHTML = songTP.innerHTML + "<br/>I don't smoke the Shisha<br/>Coz' it's really bad for health";
	}
	else if (songVar == 22) {
		songTP.innerHTML = songTP.innerHTML + "<br/>And if my father sees means<br/>He'll beat me with a belt(Appa)";
	}
	else if (songVar == 23) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Yakhi Raju' do it Arabi style habibi";
	}
	else if (songVar == 24) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>My name is Khalil<br/>And I'm like a happy meal";
	}
	else if (songVar == 25) {
		songTP.innerHTML = songTP.innerHTML + "<br/>In FIFA, I'm defender<br/>Your ball I will steal";
	}
	else if (songVar == 26) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Don't mess with me habibi<br/>When will you ever learn";
	}
	else if (songVar == 27) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Cuz' in the middle East<br/>I am Mr. Steal your girl";
	}
	else if (songVar == 28) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>We drive up to the cafe in Mercedes Benz";
	}
	else if (songVar == 29) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Get out of the car<br/>All fourteen of my friends";
	}
	else if (songVar == 30) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Shabab in the black<br/>Asked what flavour we are smoking";
	}
	else if (songVar == 31) {
		songTP.innerHTML = songTP.innerHTML + "<br/>I said La La Habibi<br/>Please tell me you are joking";
	}
	else if (songVar == 32) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Tofahteen Tofahteen<br/>Double apple everyday";
	}
	else if (songVar == 33) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Other flavours not ok<br/>What the hell is berry grape";
	}
	else if (songVar == 34) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Lemon mint give me headache<br/>I'm a sheikh, I'm a sheikh";
	}
	else if (songVar == 35) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Watch me shake, watch me shake<br/>Shake until my booty break";
	}
	else if (songVar == 36) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Shake, Shake Yallah Yallah";
	}
	else if (songVar == 37) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Shake, Shake Yallah Yallah";
	}
	else if (songVar == 38) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Barcelona all the way<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 39) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Cuz you know that's how we play<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 40) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Yakhi Messi is the best<br/><br/>Smoke shisha play FIFA";
	}
	else if (songVar == 41) {
		songTP.innerHTML = songTP.innerHTML + "<br/>While we eat chicken breast<br/>Smoke shisha play FIFA";
	}
	else if (songVar == 42) {
		songTP.innerHTML = songTP.innerHTML + "<br/>We do it with hummus<br/>Ay";
	}
	else if (songVar == 43) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Ask the ladies for a booze<br/>Ay";
	}
	else if (songVar == 44) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Do not worry it's halal<br/>Ay";
	}
	else if (songVar == 45) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Cuz Its after ramadan";
	}
	else if (songVar == 46) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>We go to the beach<br/>Let's go and get away";
	}
	else if (songVar == 47) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Portable shisha<br/>You know that how we play";
	}
	else if (songVar == 48) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Got a cheetah in the back<br/>Kebabs in my backpack";
	}
	else if (songVar == 49) {
		songTP.innerHTML = songTP.innerHTML + "<br/>So if cheetah gets hungry<br/>We give him little snack";
	}
	else if (songVar == 50) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Redbull in the tank<br/>Cuz we fancy like that";
	}
	else if (songVar == 51) {
		songTP.innerHTML = songTP.innerHTML + "<br/>All white everything is how we rock the Dishdash";
	}
	else if (songVar == 52) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Player one, player two<br/>All ready for some FIFA";
	}
	else if (songVar == 53) {
		songTP.innerHTML = songTP.innerHTML + "<br/>When the ladies walk by we pause the game and say Kefik";
	}
	else if (songVar == 54) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Kefik ladies";
	}
	else if (songVar == 55) {
		songTP.innerHTML = songTP.innerHTML + "<br/>How are you doing, hi myself Raju<br/>All good, every good, I'm his friend only";
	}
	else if (songVar == 56) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Smoke shisha play FIFA<br/>Everyday";
	}
	else if (songVar == 57) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Smoke shisha play FIFA<br/>It's okay";
	}
	else if (songVar == 58) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Smoke shisha play FIFA<br/>With my friends";
	}
	else if (songVar == 59) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Smoke shisha play FIFA<br/>Until the end";
	}
	else if (songVar == 60) {
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>Shisha FIFA Shisha FIFA(Hey)";
	}
	else if (songVar == 61) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Shisha FIFA Shisha FIFA(Hey)";
	}
	else if (songVar == 62) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Shisha FIFA Shisha FIFA(Hey)";
	}
	else if (songVar == 63) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Shisha FIFA<br/><br/>And break it down";
	}
	else if (songVar == 64) {
		songTP.innerHTML = songTP.innerHTML + "<br/>You are crazy for this one MD<br/>Who is MD";
	}
	else if (songVar == 65) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Yallah Raju<br/>Yeah it's me";
	}
	else if (songVar == 66) {
		songTP.innerHTML = songTP.innerHTML + "<br/>Show em how it's done habibi<br/>Ah, come on";
	}
	else if (songVar == 67){
		songTP.innerHTML = songTP.innerHTML + "<br/><br/>finished";
	}
	else {
		songTP.innerHTML = "";
		songVar = -1
	}
	height = document.body.scrollHeight;
    window.scroll(0 , height);
	songVar = songVar + 1;
}