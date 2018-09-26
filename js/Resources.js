var resources
setTimeout(function () {

  resources = {

      table: document.getElementById("Tbl_Resources"), //Get the resources table

      items: { //List of items
        "Dust": 0
      },

      ItemChange: function(item, count) {
        if (item in this.items) { //If the item exists
          this.items[item] += count //Add to the count
        }
        this.UpdateTable() //Update the visuals
      },

      UpdateTable: function() {
        tableItems = this.table.children //Get all HTML DOM Children
        for (i = 0; i < tableItems.length; i++) {
          if (tableItems[i].className == "tableItem") { //If the childs class is "tableItem"
            tableItems[i].children[1].innerHTML = this.items[tableItems[i].children[0].innerHTML] //Update the text to the text in the dictionary
          }
        }
      }

    }

}, 10)
