$(document).ready(function () {

    alert("Strona została załadowana!");
    $("#header").delay(3000).slideUp();

    $("#toggleBtn").click(function () {
        $("#easterDishes").slideToggle();
    });

    $("#textColorBtn").click(function () {
        let color = $("#colorSelect").val();
        $(".desc").css("color", color);
    });

    $("#bgColorBtn").click(function () {
        let color = $("#colorSelect").val();
        $(".desc").css("background-color", color);
    });

    $("#style1Btn").click(function () {
        $("#wishes").removeClass("style2").addClass("style1");
    });

    $("#style2Btn").click(function () {
        $("#wishes").removeClass("style1").addClass("style2");
    });

    $("#textInput").on("change", function () {
        $("#outputText").text($(this).val());
    });

    $("#thumbs").on("click","img", function () {
        let src = $(this).attr("src");
        $("#mainImg").attr("src", src);
    });

    $("#addTaskBtn").click(function () {
        let task = $("#todoInput").val();
        if (task.trim() !== "") {
            $("#todoList").append(`<li>${task}</li>`);
            $("#todoInput").val("");
        }
    });
});
