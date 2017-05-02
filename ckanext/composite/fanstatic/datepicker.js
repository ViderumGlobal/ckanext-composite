var dates = $('.scheming-datepicker');
var dateOptions;
var currentLang = $('html').attr('lang') || 'en';
var dateFormat;

// Set dateFormat
if (currentLang == 'de') {
    dateFormat = 'DD.MM.YYYY';
} else {
    dateFormat = 'DD/MM/YYYY';
}

// Create datepicker instance for every date field
if (dates) {
    dateOptions = {
        time: false,
        weekStart: 1,
        inputFormat: dateFormat
    };

    moment.locale(currentLang);

    dates.each(function (i, dateElement) {
        rome(dateElement, dateOptions);
    });
}