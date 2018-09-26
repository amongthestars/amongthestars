var transitionMenu

setTimeout(function() {

  transitionMenu = {

    transitionButtons: [ //All transition button IDs. They get dynamically added however the one the user starts on needs to be added
      "TBtn_PageMoon"
    ],
    disabledButtons: { //Same as above, true or false if they are disabled
      "TBtn_PageMoon": "true"
    },
    currentPage: "Page_Moon", //The current page the user is on

    Transition: function(page2Id, BtnId) {
      if (this.disabledButtons[BtnId] == "false" || this.disabledButtons[BtnId] == null) { //If the button isn't disabled or if it isn't in the list
        page1 = document.getElementById(this.currentPage) //Get the page that they are on and the page to switch to
        page2 = document.getElementById(page2Id)

        BtnInArray = false
        for (i = 0; i < this.transitionButtons.length; i++) { //Loop through all buttons and make them all enabled
          if (this.transitionButtons[i] == BtnId) {BtnInArray = true}
          if (this.disabledButtons[this.transitionButtons[i]] == "true") {document.getElementById(this.transitionButtons[i]).className = "transitionBtn"}
          this.disabledButtons[this.transitionButtons[i]] = "false"
        }

        if (!BtnInArray) {this.transitionButtons.push(BtnId)} //Add button to array if it wasn't found

        this.disabledButtons[BtnId] = "true" //Disable button
        document.getElementById(BtnId).className = "transitionBtnDisabled" //Give it the disabled class
        page1.animate({opacity: [1, 0]}, 200) //Make the first page fade out

        setTimeout(function() {
          page2.style.visibility = "visible" //Make the second page visible and fade in
          page2.animate({opacity: [0, 1]}, 200)
          page1.style.visibility = "hidden" //Hide the first page
        }, 180)

        this.currentPage = page2Id //Set the new current page
        this.UpdateTables() //Update which tables should be shown
      }
    },

    UpdateTables: function() {
      if (this.currentPage == "Page_Moon") {
        utilities.TableToggle("Tbl_Resources", "on")
        utilities.TableToggle("Tbl_Base", "off")
      } else if (this.currentPage == "Page_Base") {
        utilities.TableToggle("Tbl_Resources", "on")
        if (!storyManager.startUp) {utilities.TableToggle("Tbl_Base", "on")}
      }
    }

  }

}, 10)
