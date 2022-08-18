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

    time = $(this).siblings(".hour").text().trim();
    plans = $(this).siblings(".description").val();
    
    localStorage.setItem(time, plans);
});

$("#hour9 .description").val(localStorage.getItem("9AM"));
$("#hour10 .description").val(localStorage.getItem("10AM"));
$("#hour11 .description").val(localStorage.getItem("11AM"));
$("#hour12 .description").val(localStorage.getItem("12AM"));
$("#hour13 .description").val(localStorage.getItem("1PM"));
$("#hour14 .description").val(localStorage.getItem("2PM"));
$("#hour15 .description").val(localStorage.getItem("3PM"));
$("#hour16 .description").val(localStorage.getItem("4PM"));
$("#hour17 .description").val(localStorage.getItem("5PM"));




colorCode();

