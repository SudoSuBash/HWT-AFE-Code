$(document).ready(()=>{
    var v1 = $(document.body);
    var b1 = $("#btn1");

    b1.click(()=>{
        var v3 = $('<div class="window"><input type="button" id="btnw" value="隐藏"/></div>');

        var s1 = document.createElement("script");
        s1.type="text/javascript";
        s1.src="./exp1_window.js";

        v1.append(v3);
        v1.append(s1);
        v1.on("click","#btnw",clk);
        console.log("success");
    })
})