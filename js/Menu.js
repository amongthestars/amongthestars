var menu

setTimeout(function () {

  menu = {
    lightTheme: true, //Whether light theme is active or not

    DarkTheme: function() { //Function to toggle the dark theme
      if (this.lightTheme) { //If light theme is active
        document.styleSheets[2].disabled = false //Enable the dark theme stylesheet
        this.lightTheme = false
        document.getElementById("darkThemeBtn").innerHTML = "light theme" //Change button text
      } else {
        document.styleSheets[2].disabled = true //Disable the dark theme stylesheet
        this.lightTheme = true
        document.getElementById("darkThemeBtn").innerHTML = "dark theme" //Change button text
      }
    }

  }

}, 10)
