

var _curPic = 1;
var _count = 7;
var _autoTime = -1;
var _div_focus = false;
var _div_mouse_focus = false;
 
 function setupTimer() {
	 if(_autoTime == -1 && _div_focus == false && _div_mouse_focus == false) {
	 	_autoTime = setInterval("autoExecAnimate()", 1500);
	 }
 }
 
 function clearTimer() 
 {
	 if(_autoTime != -1) {
	  clearInterval(_autoTime);
	  _autoTime = -1;
	 }
 }
 
 function autoExecAnimate()
 {
	 if(_curPic == _count + 1) {
		  _curPic = 1;
	 }
	 
	 openTag('newsPic','picMin0' + _curPic);
	 _curPic ++;
 }
 
 function divonfocus() {
	 _div_focus = true;
	 clearTimer();
 }
 
 function divofblur() {
	 _div_focus = false;
	 setupTimer();
 }
 
  function divonmouseover() {
	 _div_mouse_focus = true;
	 clearTimer();
 }
 
 function divonmouseout() {
	 _div_mouse_focus = false;
	 setupTimer();
 }
 
 setupTimer();