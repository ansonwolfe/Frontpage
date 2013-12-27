      $(function() {
        $('#add_to_do').submit(function(){
          $('#content').append("<li class='to_do'>
            <form class='checkbox'>
               <input type='checkbox'> 
               <span>" + $('#new_to_do').val() + "</span>
              <a class='delete'>X</a>       
            </form>
              </li>");
        }); 
          