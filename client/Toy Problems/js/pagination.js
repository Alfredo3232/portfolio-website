var data = JSON.parse(document.getElementById('json_pagination_data').innerHTML);

var objCollection = document.getElementsByClassName("jump_to");
var i;

for (i = 0; i < objCollection.length; i++) {
   objCollection[i].addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
         ref = this.value;
         if (data.base_url == "archives") {
            url = "problem=" + ref + ".html";
         } else {
            if (ref < 1 || ref > data.pages) return;
            page_str = ";page=" + ref + ".html";
            if (ref == 1) page_str = "";
            url = data.base_url + page_str;
         }
         location.href = url;
      }
   });
}