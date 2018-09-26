var base
var baseTable
setTimeout(function () {

  base = {

    SetupBase: function() { //Used in the introduction.
      utilities.BtnToggle("Btn_SetupBase") //Turn off button to prevent double clicking
      utilities.ObjFade("Btn_SetupBase", 700) //Fade animation
      setTimeout(storyManager.SetupBase, 700) //Continue the SetupBase function after 700ms
      setTimeout(function() {
        btn = document.getElementById("Btn_SetupBase") //Get the button element
        btn.parentNode.removeChild(btn) //Remove it
        progressionManager.StartGame(); //Start game (used to un-hide a lot of elements)
      }, 800)
    }

  }

  baseTable = { //Object to contain Base Table related stuff

    table: document.getElementById("Tbl_Base"), //The table

    items: { //Items in the table
      "Population": "0/0",
      "Power": "0/2"
    },

    buildings: { //Buildings in the table
      "Emergency Oxygen Recycler": "On",
      "Emergency Solar Generator": "On",
      "Emergency Dust Processor": "On"
    },

    ItemChange: function(item, count, max=false) {
      if (item in this.items) { //If the item defined is an existing item
        temp = this.items[item]
        temp = temp.split("/") //Get the data and split it
        min = parseInt(temp[0], 10) //Min value
        maxi = parseInt(temp[1], 10) //Max value
        if (max) { //If they are changing the max value
          maxi += count
        } else { //If they aren't they are changing the min value
          min += count
        }
        this.items[item] = min + "/" + maxi //Append to the item in the dictionary
      }
      this.UpdateTable() //Update the visuals
    },

    BuildingChange: function(item, state, name=false) {
      if (!name && item in this.buildings) { //If they aren't changing the name of the item and it is a real item
        this.buildings[item] = state //Change its state to what they defined
      } else {
        this.buildings[state] = this.buildings[item] //Get a copy of the state and put it in the new name
        delete this.buildings[item] //Delete old name
      }
      this.UpdateTable() //Update the visuals
    },

    UpdateTable: function() {
      tableItems = this.table.children //Get all HTML DOM children of the table
      for (i = 0; i < tableItems.length; i++) { //For every child
        if (tableItems[i].className == "tableItem") { //If its class is "tableItem"

          if (tableItems[i].id == "Power") { //If its ID is "Power"

            if (this.items[tableItems[i].children[0].innerHTML].split("/")[0] == "0") { //If its current value is 0
              tableItems[i].children[1].className = "TblValueY" //Make it yellowy-orange
            } else {
              tableItems[i].children[1].className = "TblValueG" //Make it green
            }
          }
          tableItems[i].children[1].innerHTML = this.items[tableItems[i].children[0].innerHTML] //Change the text on the table to the value in the dictionary

        } else if (tableItems[i].className == "tableBuilding") { //If its class is "tableBuilding"
          if(this.buildings[tableItems[i].children[0].innerHTML] == "On") { //If its state is "On"
            tableItems[i].children[1].className = "TblValueG" //Make it green
          } else {
            tableItems[i].children[1].className = "TblValueR" //Make it red
          }
          tableItems[i].children[1].innerHTML = this.buildings[tableItems[i].children[0].innerHTML] //Change the text on the table to the value in the dictionary
        }


      }
    }

  }

}, 10)
