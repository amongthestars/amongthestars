var moon
setTimeout(function () {

  moon = {

    Search: function() {
      utilities.BtnToggle("Btn_Search") //Turn off button to avoid double clicks
      utilities.ObjFade("Btn_Search", 2000) //Fade out
      setTimeout(storyManager.SearchForKit, 5000)
      setTimeout(function() {
        btn = document.getElementById("Btn_Search")
        btn.parentNode.removeChild(btn) //Delete the button
      }, 2100)
    },

    CollectDust: function() {
      utilities.BtnTimer("Btn_CollectDust", 10000) //Set a 10 second timer on the button
      ammountToCollect = utilities.RanNum(5, 10) //Get a random num between 5 and 10
      resources.ItemChange("Dust", ammountToCollect) //Add the number to the dust value
    }

  }

}, 10)
