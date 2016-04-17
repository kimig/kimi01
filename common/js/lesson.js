/*アコーディオン*/
$(function(){
  $(".list-cmn-01 dd:not(:first-of-type)").css("display","none");
    $(".list-cmn-01 dt").click(function(){
      if($("+ dd",this).css("display")=="none"){
        $("dd:visible").slideUp("slow");
        $("+ dd",this).slideDown("slow");
    }
  });
});
/*画像切り替え*/
$(function(){
  $("#btn-phot-change").click(function(){
    $(".fig-change-phot img").attr("src","img/img_lesson_02.jpg").attr("alt","画像切り替え 変化後");
 });
});
/*画像切り替え　a*/
$(function(){
  $("#btn-phot-change-02 a").click(function(){
    $(".fig-change-phot-02 img").attr("src","img/img_lesson_04.jpg").attr("alt","画像切り替え　アンカー");
    return false;
  });
});
/*画像切り替え*/
/*$(function(){
  $(".list-cmn-02 a").click(function(){
    $(".fig-change-phot-03 img").attr("src","img/img_lesson_02.jpg").attr("alt","画像切り替え");
    return false;
  });
  $(".list-cmn-02 a:eq(1)").click(function(){
    $(".fig-change-phot-03 img").attr("src","img/img_lesson_03.jpg").attr("alt","画像切り替え");
    return false;
  });
  $(".list-cmn-02 a:eq(2)").click(function(){
    $(".fig-change-phot-03 img").attr("src","img/img_lesson_04.jpg").attr("alt","画像切り替え");
    return false;
  });
  $(".list-cmn-02 a:eq(3)").click(function(){
    $(".fig-change-phot-03 img").attr("src","img/img_lesson_01.jpg").attr("alt","画像切り替え");
    return false;
  });
});*/
/*画像切り替え・省略*/
$(function(){
  $(".list-cmn-02 a").click(function(){
    $(".fig-change-phot-03 img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    return false;
  });
});
/*オンマウス*/
$(function(){
  $(".fig-on-mouse img").mouseover(function(){
    $(this).attr("src","img/img_lesson_06.jpg").attr("alt","マウスオン");
  }).mouseout(function(){
    $(this).attr("src","img/img_lesson_05.jpg").attr("alt","マウスアウト");
  });
});
/*マウスムーブ*/
$(function(){
  $(".fig-mouse-move").mousemove(function(e){
    $(".fig-mouse-move figcaption").html("現在のx座標："+e.clientX+"<br> 現在のY座標："+e.clientY);
  });
});
/*li要素の追加*/
$(function(){
  $(".list-add-li").on("click","a",function(){
    $(".fig-add-li img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    return false;
  });
  $("#btn-phot-change-03").click(function(){
    $(".list-add-li").append("<li><a href='img/img_lesson_04.jpg'>画像04</a></li>");
  });

  $("#btn-phot-change-04").click(function(){
    $("#btn-phot-change-03").off("click");
  });
});
