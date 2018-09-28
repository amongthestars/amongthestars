var utilities
setTimeout(function () {

	utilities = {

		ObjFade: function(objId, fadeSpeed) {
			obj = document.getElementById(objId)
			if (obj.style.visibility == "inherit" || obj.style.visibility == "") { //If its visible fade out and make hidden
				obj.animate({opacity: [1, 0]}, fadeSpeed)
				setTimeout(function() {
					obj.style.visibility = "hidden"
				}, fadeSpeed-100)
			} else { //Otherwise made it fade in and visible
				obj.style.visibility = "inherit"
				obj.animate({opacity: [0, 1]}, fadeSpeed)
			}
		},

		BtnTimer: function(btnId, timer) {
			btn = document.getElementById(btnId)
			utilities.BtnToggle(btnId) //Toggle the button

			timerCount = timer + 10 //add 10, for later

			interval = setInterval(function() {
				timerCount -= 10 //Remove 10 at the start, for loop logic
				if (menu.lightTheme) {
					color = "#808080" //If its light theme make the colour this
				} else {
					color = "#ffffff" //Dark theme color
				}
				btn.style.background = color + Math.ceil(2.55*(timerCount/timer)*100).toString(16) //split the countdown into 256 values and turn it into hex and add it to color. This is opacity
				if (timerCount <= 0) {
					clearInterval(interval) //Remove the loop interval
				}
			}, 10)
			setTimeout(function() {
				btn.style.background = "#00000000" //This triggers once the countdown is over, make it have no background
				utilities.BtnToggle(btnId) //Toggle it back on
			}, timer)
		},

		BtnToggle: function(btnId) {
			btn = document.getElementById(btnId)
			if (btn.disabled) { //If its disabled, enable it
				btn.disabled = false
				btn.className = "Btn_Regular"
			} else { //If its enabled, disable it
				btn.disabled = true
				btn.className = "Btn_Disabled"
			}
		},

		TableToggle: function(tableId, targetState="either") {
			tbl = document.getElementById(tableId)

			if (targetState == "on" && tbl.style.visibility == "hidden") { //If target state is on and its currently off
				tbl.style.visibility = "inherit" //Fade in
				tbl.animate({opacity: [0, 1]}, 360)
			} else if (targetState == "off" && tbl.style.visibility == "inherit") { //If target state is off and its currently on
				tbl.animate({opacity: [1, 0]}, 360) //Fade out
				setTimeout(function() {tbl.style.visibility = "hidden"}, 320)
			} else if (targetState != "on" && targetState != "off") { //Works like a toggle if no target sate is defined
				if (tbl.style.visibility == "inherit") { //If its visible make it fade out
					tbl.animate({opacity: [1, 0]}, 360)
					setTimeout(function() {tbl.style.visibility = "hidden"}, 320)
				} else if (tbl.style.visibility == "hidden") { //If its hidden make it fade in
					tbl.style.visibility = "inherit"
					tbl.animate({opacity: [0, 1]}, 360)
				}
			}
		},

		TooltipToggle: function(parentId, targetState="either") {
			Parent = document.getElementById(parentId)
			Children = Parent.children
			for (i = 0; i < Children.length; i++) {
				if (Children[i].className == "TooltipWrapper") {TT = Children[i]; break}
			}

			if (targetState == "on" && TT.style.visibility == "hidden") { //If target state is on and its currently off
				TT.style.visibility = "inherit" //Make visible
			} else if (targetState == "off" && TT.style.visibility == "inherit") { //If target state is off and its currently on
				TT.style.visibility = "hidden" //Make hidden
			} else if (targetState != "on" && targetState != "off")  { //Works like a toggle if no target sate is defined
				if (TT.style.visibility == "inherit") { //If its visible make it fade out
					TT.style.visibility = "hidden"
				} else if (TT.style.visibility == "hidden") { //If its hidden make it fade in
					TT.style.visibility = "inherit"
				}
			}
		},

		RanNum: function(lower, upper) {
			return Math.floor(Math.random() * (upper + 1 - lower)) + lower //Get and return a random number between the defined values
		}

	}

}, 10)
