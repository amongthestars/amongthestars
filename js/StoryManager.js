var storyManager
setTimeout(function () {

	storyManager = {

		startUp: true,

		//Just lots of add notifications and timeouts

		GameStart: function() {
			notifications.addNotification("You wake up to see your helmet visor covered in a thin coat of dust.")
			setTimeout(function() {
				notifications.addNotification("You brush it off and see nothing but barren moon landscape and the bright sun.")
				setTimeout(function() {
					notifications.addNotification("'This is a bad sitation' you think to yourself.")
					setTimeout(function() {
						notifications.addNotification("beep. beep. beep.", true)
						setTimeout(function() {
							notifications.addNotification("'Oxygen reserves running low'", true)
							setTimeout(function() {
								notifications.addNotification("'The emergency kit! It must be somewhere around here.'", true)
								setTimeout(function() {
									utilities.ObjFade("Btn_Search", 500) //Fade in the search button
								}, 1000)
							}, 4000)
						}, 1000)
					}, 5000)
				}, 5000)
			}, 2000)
		},

		SearchForKit: function() {
			notifications.addNotification("'Here it is, emergency oxygen supply and some construction supplies.'", true)
			setTimeout(function() {
				notifications.addNotification("'Should probably set up an outpost, that crater looks good.'", true)
				utilities.ObjFade("TBtn_PageMoon", 500) //Fade in the Transition buttons and splits etc
				utilities.ObjFade("TSplit_Moon->Base", 500)
				utilities.ObjFade("TBtn_PageBase", 500)
				utilities.ObjFade("TableWrapper", 500)
			}, 2500)
		},

		SetupBase: function() {
			storyManager.startUp = false //Start up (aka intro) is over
			utilities.TableToggle("Tbl_Base", "on") //Togle the base table to be on
			notifications.addNotification("'This looks good but if im going to figure out how to get off here im gonna need to make this bigger.'", true)
			setTimeout(function() {
				notifications.addNotification("'I can refine moon dust into building materials so that I can expand.'", true)
			}, 3000)
		}

	}

	setTimeout(storyManager.GameStart, 2000)

}, 10)
