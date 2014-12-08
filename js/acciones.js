//JavaScript
$(document).ready(function(e){	
$('#principal').height($('#page1').height());
document.addEventListener("deviceready",function(){
	
	audio=window.plugins.LowLatencyAudio;
	
	audio.preload('do','audio/DO.mp3',function(){},function(e){alert('Error' +e);});
	audio.preload('re','audio/RE.mp3',function(){},function(e){alert('Error' +e);});
	audio.preload('mi','audio/MI.mp3',function(){},function(e){alert('Error' +e);});
	audio.preload('fa','audio/FA.mp3',function(){},function(e){alert('Error' +e);});
	audio.preload('sol','audio/SOL.mp3',function(){},function(e){alert('Error' +e);});
	audio.preload('la','audio/LA.mp3',function(){},function(e){alert('Error' +e);});
	audio.preload('si','audio/SI.mp3',function(){},function(e){alert('Error' +e);});
	
	$('.nota').bind('touchstart',function(){
		$(this).addClass('tocada');
	});
	
},false);//deviceready
});//ready