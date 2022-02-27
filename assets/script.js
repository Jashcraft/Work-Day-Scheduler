$('.saveBtn').on("click", function() {
    var eventDescription = $(this).siblings(".description").val();
    var eventTime = $(this).parent().attr('id');
    localStorage.setItem(eventTime, eventDescription)
    
})

var timeSlots = [7,8,9,10,11,12,13,14,15];


timeSlots.forEach(sloth => {
    $(`#${sloth} .description`).val(localStorage.getItem(sloth))
});

$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"))