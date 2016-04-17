$(function(){
  $("#confirmation").click(function(){
    $(".txt-form").text($("input").val()+"にメールを送信しました。");
    $(".btn-form-01").text("送信");
  });
});
$(function(){
  $("#clear").click(function(){
    $(".txt-form input").val("");
  });
});
$(function(){
  $(".txt-form-02 input").val("入力して下さい").css("color","#eee")
                        .one("focus",function(){
                        $(this).val("").css("color","#000");
  });
});


