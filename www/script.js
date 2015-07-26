window.onload = function()
{
	var area = $('area');
	var btnPower = $('btnPower');
	var timerArea;
	var timerTime;
	var height = 300;
	var step = 2;
	
	btnPower.onclick = function()
	{ if (timerArea) {
		clearInterval(timerArea);
		clearInterval(timerTime);
		timerArea = undefined;
		timerTime = undefined;
	}
	else {
        timerTime = setInterval(fTick, 1000);
		timerArea = setInterval(function(){
		height -= step;
		area.style.height = height + 'px';
		if(height <= 10 || height >= 300)
			step *= -1;
	}, 20);
		}
	 }

    function fTick()
    {
        var date = new Date();

        var t = date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();

        var divTime = $('time');
        divTime.innerHTML = t;
    }


    function $(id)
{
	return document.getElementById(id);
}
}