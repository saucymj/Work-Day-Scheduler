var date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do"));

var timeBlock = $(".description");


function colorCode() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    }
)};

$(".saveBtn").on('click', function(){

    time = $(this).siblings(".hour").text();
    plans = $(this).siblings(".description").val();
    
    localStorage.setItem(time, plans);
});

$("#hour9 .description").val(localStorage.getItem("hour9"));




colorCode();

