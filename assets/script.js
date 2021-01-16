// function to run entire page
$(document).ready(function() {

    // shows date in header
    $("#currentDay").text(moment().format("MMMM Do YYYY, HH:mm A"));

    // Create html of the timeblocks
    for (var i = 9; i <= 17; i++){
        $('.container').append(`<div class="row time-block justify-content-md-center" data-time="${i}"> 
        <div class="col-sm col-md-1 hour"> 
            <p>${i}:00</p> 
        </div> 
        <div class="col-sm col-md-8 d-flex description"> 
            <textarea></textarea> 
        </div> 
        <div class="col-sm col-md-1 saveBtn"> 
            <i class="far fa-save fa-2x"></i> 
        </div> 
        </div>`);
    }
    
    
    let timeTrack = {};
        // Checks if local storage exists. If it doesn't, load preset data to array.
        if (localStorage.getItem('timeTrack')) {
            timeTrack = JSON.parse(localStorage.getItem('timeTrack'));
        }else{
            timeTrack = {
                '9': { time: "9", value: ""},
                '10':{ time: "10", value: ""},
                '11':{ time: "11", value: ""},
                '12':{ time: "12", value: ""},
                '13':{ time: "13", value: ""},
                '14':{ time: "14", value: ""},
                '15':{ time: "15", value: ""},
                '16':{ time: "16", value: ""},
                '17':{ time: "17", value: ""}
            };
        }
    
    // Load data loaded from code into page
    $(".time-block").each(function(){
        $(this).find(".description textarea").val(timeTrack[$(this).attr("data-time")].value);
    });
    
    
    // checks the hour of the current day to decide it's background color
    const rn = moment();
    $.each($(".time-block"), function(index, value){
        let dateHour = $(value).attr("data-time");
        if (Number(dateHour) === rn.hour()) {
            $(this).find("textarea").addClass('present');
        } else if(Number(dateHour) < rn.hour()){
            $(this).find("textarea").addClass('past');
        } else {
            $(this).find("textarea").addClass('future');
        } 
    });
    
    // When a user clicks the save button, data is saved to the objects and to local storage
    $("body").on('click', ".saveBtn", function(e){
    
    //Sets variables for calling data
    let hour = $(this).closest(".time-block").attr("data-time");
    let textValue = $(this).closest(".time-block").find(".description textarea").val();
    
    // places text in timeTrack array
    timeTrack[hour].value = textValue;
    
    //Sends value to local storage for later use.
    localStorage.setItem('timeTrack', JSON.stringify(timeTrack));
    
    });
    
    // Button to clear all current data
    $("body").on('click', "#clearData", function(e){
        localStorage.setItem('timeTrack', "");
        $(".time-block").each(function(){
            $(this).find(".description textarea").val('');
        });
    });
    
});
