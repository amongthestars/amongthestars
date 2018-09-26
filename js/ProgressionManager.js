var progressionManager
setTimeout(function () {

	progressionManager = {

		StartGame: function() {
			groups = document.getElementsByClassName("BtnGroup") //Get all BtnGroup objects
			for (i = 0; i < groups.length; i++) {
				utilities.ObjFade(groups[i].id, 700) //Make them fade in
			}
			utilities.ObjFade("Btn_CollectDust", 700) //Fade in the collect dust button
		}

	}

}, 10)
