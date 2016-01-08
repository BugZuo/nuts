/**
 * Created by bug on 16/1/7.
 */
+function () {

   // login
   $(function() {
      $(document).on('click', '.btn-submit-login', function(e) {
         e.preventDefault();
         var username = $(':input[name="username"]').val();
         var password = $(':input[name="password"]').val();
         $.ajax({
                   type: "POST",
                   url: "/api/login/",
                   data: {
                      username: username,
                      password: password
                   },
                   success: function(jsn) {
                      if (jsn.success === true) {
                         window.location.replace('/');
                      } else {
                         alert(jsn.message)
                      }
                   }
                });
      });
   });

}();