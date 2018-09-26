var notifications
setTimeout(function () {
  notifications = {

    notificationLog: document.getElementById('notifications'), //Get the notifications object

    clearNotifications: function() {
      var notifications = document.getElementsByClassName('notification') //Get all notifications in the log
      for (i = 0; i < notifications.length; i++) {
        e = notifications[i]
        var position = e.getBoundingClientRect() //Get the outline box of the element (like its size and position)
        position = position['y'] + position['height'] //Get the bottom of the bounding rectange
        var logBottom = this.notificationLog.getBoundingClientRect()
        logBottom = logBottom['y'] + logBottom['height'] //Get the bottom of the entire notifications log
        if (position > logBottom) {
          this.notificationLog.removeChild(e) //If its overflowing remove the notification
        }
      }
    },

    addNotification: function(t, speech=false) {
      var div = document.createElement('div') //Create a div element
      div.classList.add("notification") //Add the notification class
      if (speech) {
        div.style.fontStyle = "italic" //Make it italic if speech is true
      }
      div.innerHTML = t //Set the div text to the defined text

      this.notificationLog.insertBefore(div, this.notificationLog.firstChild) //Make it the first child of the log
      div.animate({opacity: [0, 1]}, 500) //Make it fade in

      this.clearNotifications()
    }

  }
}, 10)
