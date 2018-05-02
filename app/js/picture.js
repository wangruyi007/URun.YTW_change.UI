$(function(){
    $(".foot-right ul li,.foot-page ul li").not("li:nth-of-type(7)").click(function () {
        $(this).addClass("act").siblings().removeClass("act");
    });

    $(".label-ad").click(function () {
        $(" #dic-text").val();
        $(".label-us").prepend('<p>'+ $("#dic-text").val() +'</p>');
    })

    //头部
    $(".selectList ul li").click(function(){
        if($(this).find("i").hasClass("icon-xuanzhong3")){
            $(this).addClass("yanse")
        }else{
            $(this).removeClass("yanse")
        }
    })
    $("[title]").mouseover(function(e){
        this.myTitle = this.title;
        this.title = ""; //消除自身title的影响
        var tooltip = "<p id='tooltip'>"+ this.myTitle +"</p>"; //创建 p 元素 文字提示
        $(this).parents(".cont-label").find(".tooltip").append(tooltip);  //把它追加到文档中 $(".tooltip")可以改成$(this)
        $("#tooltip")
            .css({
                "top": (e.pageY+20) + "px",
                "left": (e.pageX+20)  + "px"
            });      //设置x坐标和y坐标
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();   //移除
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY+20) + "px",
                "left": (e.pageX+20)  + "px"
            });
    });
    $('.header-icon li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
    });
    //中间部分移入移出事件
    $('.wrap li>div').hover(function() {
            $(this).addClass('on');
        },
        function() {
            $(this).animate({
                    height: "auto"
                },
                100).removeClass('on');
        });
    $(".wrap ul li .goodsCheck").click(function() {
        if($(this).is(':checked')) {
            $(this).parents(".grid-a").find(".input1").css("display","block");
            $(this).parents(".grid-a").find(".input1").css("opacity","1");
        }else{
            $(this).parents(".grid-a").find(".input1").css("opacity","0");
        }
    });
    //选中事件
    $(".checked-none").each(function(i){
        $(this).attr({"id":"checked"+i});
        $(this).next("label").attr("for","checked"+i);
    });
    $('a[data-title]').click(function(){
        var dataTitle = $(this).attr("data-title");
        $('#modalbg').show();
        $('#modal').show();
        $('.modal2').show();
        $('#modal .'+dataTitle).show();
        $('.modal2 .'+dataTitle).show();
        $("body").css({overflow:"hidden"})
    });

    $('.review-pass').click(function(){
        $('#modal').show();
        $('#modalbg2').show();
        $('.batch-pass').show();
        $('.batch-pass,#modalbg2').delay(2000).hide(0);
    });
    $('.close').click(function(){
        $(this).parents('.m-con').hide();
        $('#modal').hide();
        $('.modal2').hide();
        $('#modalbg').hide();
        $("body").css({overflowY: "scroll"});
    });
    $('.up-sure').click(function(){
        $(this).parents('.m-con').hide();
        $('#modal').hide();
        $('#modalbg').hide();
        $("body").css({overflowY: "scroll"});
    });

    $('#modalbg').click(function(){
        $(this).parents('#al').find('#modal').children('.m-con').hide();
        $('#modal').hide();
        $('#modalbg').hide();
        $("body").css({overflowY: "scroll"});
    });
    $('.del-sure').click(function(){
        $(this).parents('.m-con').hide();
        $('#modalbg').hide();
        $('#modal').hide();
        $('.modal2').hide();
        $("body").css({overflowY: "scroll"});
    });


    $('.alse2').click(function(){
        $("body").css({overflowY: "hidden"});
    })

    $("#img_input2").on("change", function(e) {
        var file = e.target.files[0]; //获取图片资源
        // 只选择图片文件
        if(!file.type.match('image.*')) {
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file); // 读取文件
        // 渲染文件
        reader.onload = function(arg) {
            var img = '<img class="preview" src="' + arg.target.result + '" alt="preview"/>';
            $("#preview_box2").empty().append(img);
        }
    });
    $('.all-label i').click(function(){
        $(this).parents('a').remove();
    });
    $(".goodsCheck").click(function() {
        var goods = $(this).closest(".li-content,.wrap").find(".goodsCheck");
        var goodsC = $(this).closest(".li-content,.wrap").find(".goodsCheck:checked");
        var Shops = $(this).closest(".li-content,.wrap").find(".shopCheck");
        if (goods.length == goodsC.length) {
            Shops.prop('checked', true);
            if ($(".shopCheck").length == $(".shopCheck:checked").length) {
                $("#AllCheck").prop('checked', true);
            } else {
                $("#AllCheck").prop('checked', false);
            }
        } else {
            Shops.prop('checked', false);
            $("#AllCheck").prop('checked', false);
        }
    });
    // 点击全选按钮
    $("#AllCheck").click(function() {
        if ($(this).prop("checked") == true) { //如果全选按钮被选中
            $(".goods-check").prop('checked', true); //所有按钮都被选中
            $(".input1").css("display","block");
            $(".input1").css("opacity","1");
            $(".wrap ul li").find(".grid-a").addClass("on2");

            var len = $(".goods-check").prop('checked', true).length;
            $("#allNum").text(len);

        } else {
            $(".goods-check").prop('checked', false); //else所有按钮不全选
            $(".input1").css("opacity","0");
            $(".wrap ul li").find(".grid-a").removeClass("on2");
            var len = 0;
            $("#allNum").text(len);

        }
        $(".shopCheck").change();
    });
    $(".resultBox").html("<b>请选择</b>");
    $(".fun-close").click(function (e) {
        $(this).parents(".mults").find(".selectList ul").toggle();
        $(this).toggle();
        stopPropagation(e);
    });
    $(document).bind('click', function () {
        $(".selectList ul").hide();
        $(".fun-close").show();
    });
    $(".selectList ul").click(function (e) {
        stopPropagation(e);
    });
    $('.picture-table a i').click(function(){
        $(this).parents("a").remove();
    });
    $('.opt-list ul li').click(function(){
        $(this).toggleClass("active");
    });
});
function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    }
    else if (window.event) {
        window.event.cancelBubble = true;//兼容IE
    }
}
function myclick(selector,classname,classname2) {
    $(selector).wrap('<div class="select-wrap"></div>');
    $(selector).parent().prepend('<span>'+ $(classname).find(':selected').text() +'</span>');
    /*$('.wrap-all').children(".list").prepend('<input type="text" id="units" name="units" placeholder="">');*/
    $(selector).parent().children('span').width($(selector).width());
    $(selector).css('display', 'none');
    $(selector).parent().append('<ul class="select_inner"></ul>');
    $(selector).children().each(function(){
        var opttext = $(this).text();
        var optval = $(this).val();
        $(selector).parent().children(classname2).append('<li id="' + optval + '">' + opttext + '</li>');
    });
    $(selector).parent().find('li').on('click', function (){
        var cur = $(this).attr('id');
        $(selector).parent().children('span').text($(this).text());
        /*$(selector).parent().children("input").val($(this).text());*/
        $(selector).children().removeAttr('selected');
        $(selector).children('[value="'+cur+'"]').attr('selected','selected');
        $(selector).parent().show();

        $(this).parent().slideToggle('fast');

    });
    $(selector).parent().find("span").on('click', function (){
        $(this).parent().find('ul').slideToggle('fast');
    });
}
function TotalNumber() {
    var sum = 0;
    $(".modal-table tr > td.number").each(function(i){
        sum = sum + parseInt($(this).text());
    });
    $("#AllTotal").text(sum);
}
function containsiss() {
    $(".wrap-all .select-wrap ul").addClass("list");
    $(".wrap-all .select-wrap ul.list li").addClass("in");
    $(".wrap-all .select-wrap ul.list").append('<b  class="empty-item">'+ '无数据' +'</b>');
    $('.wrap-all .select-wrap ul.list').prepend('<input type="text" id="units" name="units" placeholder="">');
    var jobCount = $('.list .in').length;
    $("#units").keyup(function () {
        var searchTerm = $("#units").val();
        var listItem = $('.list').children('li');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array)
            {
                return (elem.textContent || elem.innerText || '').toLowerCase()
                    .indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });
        $(".list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
            $(this).addClass('hiding out').removeClass('in');
            setTimeout(function() {
                $('.out').addClass('hidden');
            }, 300);
        });
        $(".list li:containsi('" + searchSplit + "')").each(function(e) {
            $(this).removeClass('hidden out').addClass('in');
            setTimeout(function() {
                $('.in').removeClass('hiding');
            }, 1);
        });

        var jobCount = $('.list .in').length;
        if(jobCount == '0') {
            $('.list').addClass('empty');
        }
        else {
            $('.list').removeClass('empty');
        }


    })
}
