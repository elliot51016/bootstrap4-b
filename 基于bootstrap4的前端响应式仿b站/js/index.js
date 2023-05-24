$(function () {

    //轮播图
   $(window).on("resize",function () {
       //1.窗口的宽度
       let clientW=$(window).width();
       //2.设置临界值点
       let isShowBigIamge=clientW>=900;
       //3.获取所有的item
       let $allTiem=$('.carousel-inner .carousel-item');
       // console.log($allTiem);
       //4.遍历

       $allTiem.each(function (index,ele) {
             let src=isShowBigIamge ? $(ele).data("lg-img") :$(ele).data("sm-img")
           // console.log(src);
             // var img='<img src="" alt="">'
             // $(ele).append(img);

           if (!isShowBigIamge){
               let imgS="<img src=\"../2.%E5%93%8D%E5%BA%94%E5%BC%8F%E5%BC%80%E5%8F%91%E6%A1%88%E4%BE%8B/" + src + "\"class='img-fluid' alt=\"\">"
               $(ele).children("img").remove()
               $(ele).append(imgS)
           }else {
               $(ele).children("img").remove()

               $(ele).css({

               backgroundImage:"url(../2.%E5%93%8D%E5%BA%94%E5%BC%8F%E5%BC%80%E5%8F%91%E6%A1%88%E4%BE%8B/"+ src +")",
           });}

       })

   });
    $(window).trigger("resize");
   //轮播图滚动
   let startX=0; let  endX=0;
   let $carousel=$("#carousel")
   let $carousel_inner=$("#carousel .carousel-inner")[0];
    // console.log($carousel_inner);
    $carousel_inner.addEventListener("touchstart",function (e) {
        startX=e.targetTouches[0].clientX;
        // console.log(startX);
    });
    $carousel_inner.addEventListener("touchmove",function (e) {
        endX=e.targetTouches[0].clientX;
        // console.log(endX);
        if (startX-endX>0){//下一张
            $carousel.carousel('next')

        }else if (startX-endX<0) {//上一张

            $carousel.carousel('prev')

        }
    });
   //4.超出内容处理

    $(window).on("resize",()=>{
        let $ul=$("#product .nav");
        let $allLis=$(".nav-item",$ul);
        let lisW=0;
        console.log($allLis);
        $allLis.each(function (index, item) {
            lisW += $(item).width();
            // console.log(lisW);

        });
        let ulW=0;
        ulW=$($allLis).parents().width();
        // console.log(ulW);
        if (lisW<ulW){
            $ul.css({
                width:ulW + "px"});
        }else {
            $ul.removeAttr("style")
        }
    });


   //提示工具
// $("[ data-toggle=\"tooltip\"]").tooltip();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    });