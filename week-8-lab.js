 
	// start step 1 ... 1.	Use a timer to run a function that will fade in and out a div.
	var divInOut = document.getElementById("inOutDiv");
	var opacity = 1;
	var fadecounter = 1;
	
	function fadeInOut(){
		if(fadecounter == 1){
			opacity -= .10;
			divInOut.style.opacity = opacity;
			if(opacity <= 0){
				fadecounter = 0;
			}
		} else if(fadecounter == 0){
			opacity += .10;
			divInOut.style.opacity = opacity;
			if(opacity >= 1){
				fadecounter = 1;
			}
		}
	}
	
	var divTimer = setInterval(fadeInOut, "400");
	// end step 1 --------------------------------------
	
	//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
	
	//start step 2 ... 2.	Show an alert message after a user has been on the page for 10 seconds.
	var alertCounter = 10;
	
	function alertMessage(){
		alertCounter -= 1;
		
		if ( alertCounter <= 0) {
			//alert("you have been on the page for 10 seconds");
			clearInterval(pageTimer);		
		}
	}
	
	var pageTimer = setInterval(alertMessage , "1000");
	// end step 2 -----------------------------------------
	
	//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
	
	//start step 3 ... 3.	Create some images on a canvas object.
	// and step 4 ... 4.	See if you can animate some of those images to move across the canvas.
	var drawCanvas = document.getElementById("drawSomethingCanvas");
	var drawcontext = drawCanvas.getContext('2d');
	
	
	
	var imageObj1 = new Image();
	imageObj1.src = 'cursor.jpg';
	imageObj1.width = 224;
	imageObj1.height = 224;
		
	
	/*
	imageObj1.onload = function() {
		var x = 10,
			y = 20,
			width = 16,
			height = 16;
		drawcontext.clearRect(0, 0, 500, 400);
		drawcontext.drawImage(imageObj1,x,y,width,height);	
	};
	*/
	var x = 10,
		y = 20,
		width = 16,
		height = 16;
	
	
	function moveMouseAround()
	{
		x +=10;
		y+=11;
		drawcontext.clearRect(0, 0, 500, 400);
		drawcontext.drawImage(imageObj1,x,y,width,height);	
	}	
	
	
	
	
	
	var imageObj2 = new Image();
	imageObj2.src = 'football.jpg';
	imageObj2.width = 500;
	imageObj2.height = 500;
	/*
	imageObj2.onload = function (){
		var x = 40,
			y = 60,
			width = 50,
			height = 50;
		drawcontext.drawImage(imageObj2,x,y,width,height);
	}
	*/
	var x2 = 40,
		y2 = 60,
		width2 = 50,
		height2 = 50;
	
	function moveBallAround(){
		x2 +=15;
		y2 +=15;
		drawcontext.clearRect(0, 0, 500, 400);
		drawcontext.drawImage(imageObj2,x2,y2,width2,height2);
	}
	
	var moveBall = document.getElementById("moveBall");	
	var moveMouse = document.getElementById("moveMouse");
	
	moveBall.addEventListener("click", moveBallAround);
	moveMouse.addEventListener("click", moveMouseAround);
	

	var moveRect = document.getElementById("moveRect");
	var moveCircle = document.getElementById("moveCircle");
	
	var canvas = document.getElementById('drawRectAndCircle');
	var context = canvas.getContext('2d');
	
	context.beginPath();
	context.rect(10, 20, 50, 50);
	context.fillStyle = 'red';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = 'black';
	context.stroke();
	
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = 70;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = 'green';
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = '#003300';
	context.stroke();
	
	
	//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
	
	// step 5 ... 5.	Use week 4’s assignment to get the first 100 cords of your mouse movements.  Get the cursor image and move it in those cords using timers.
	var mouseMoveArray = { 'mouseX':[], 'mouseY':[] };
	var mouseMoveCanvas = document.getElementById("mouseMoveCanvas");
	var mouseContext = mouseMoveCanvas.getContext("2d");
	
	
	function drawMouseMove() {
			
	
	
	}	
	
	function onMouseMoveX(e){
		mouseMoveArray.mouseX.push(e.clientX);
		if ( mouseMoveArray.mouseX.length >= 100 ) {
			document.removeEventListener('mousemove', onMouseMoveX); /*this will remove the event if the array is holding 100 values*/
			drawMouseMove();
		}
	}
	/* this is the function with an if statment to log the first 100 mouse movments on the Y plane*/
	function onMouseMoveY(e){
		mouseMoveArray.mouseY.push(e.clientX);
	
		if ( mouseMoveArray.mouseY.length >= 100 ) {
			document.removeEventListener('mousemove', onMouseMoveY); /*this will remove the event if the array is holding 100 values*/
		}
	}
	
	document.addEventListener('mousemove', onMouseMoveX); /*this will call the function to log the mouse movment*/
	document.addEventListener('mousemove', onMouseMoveY); /*this will call the function to log the mouse movment*/
	
	
	
	
	
	
	
