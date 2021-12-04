   
    // Display Todays Date
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

    // Add lister for save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        window.localStorage.setItem(time, text);
    })

    function timeTracker() {
        var timeNow = moment().hour();
        // loop time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            // check time and add background color indicators
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
        })
    }

    // time counter 
    setInterval(timeTracker, 60000);

// getItem from local storage
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    timeTracker();




