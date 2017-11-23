$(document).ready(function(){
    function user(username, email, pwd, pwd2, birth) {
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.pwd2 = pwd2;
        this.birth = birth;
    }
    var accounts = [];
    accounts.push(new user("musicflow", "musicflow@gmail.com", "xpto1234", "xpto1234", null))

    $("input").keyup(function(){
        var input = $("input").val();
    });

    $("button").click(function(){
        $.post("demo_test_post.asp",
        {
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data,status){
            alert("Account successfully created!");
        });
    });
});
