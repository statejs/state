function change(n, p) {

    $.ajax({
        type: "post",
        url: "http://192.168.1.251:90/list/updatestate.asp",
        //得到id
        data: {
            id: n,
            state: p
        },
        success: function(data) {
            //根据p值判断是否选中，切换显示样式
            if (p == 1) {
                document.getElementById("li" + n).style.background = "#ff0000";
                document.getElementById("input" + n).style.display = "none";
                document.getElementById("uninput" + n).style.display = "inline-block";
                //切换为未选中class样式
                document.getElementById("uninput" + n).className = "uncheck";
                //显示小图标
                document.getElementById("s" + n).src = "gift.gif";
            } else {
                document.getElementById("li" + n).style.background = "#e1e1e1";
                document.getElementById("input" + n).style.display = "inline-block";
                document.getElementById("uninput" + n).style.display = "none";
                //切换小图标为透明
                document.getElementById("s" + n).src = "transparent.png";
            }
        }
    });

}
