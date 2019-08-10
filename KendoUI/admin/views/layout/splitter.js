$(function () {
    $('#splitterBody').height($('#container').height()).kendoSplitter({
        orientation: 'vertical',
        panes: [
            {
                collapsible: true,
                resizable: false,
                scrollable: false,
                size: '10%'
            },
            {
                resizable: false,
                size: '85%'
            },
            {
                collapsible: true,
                resizable: false,
                scrollable: false,
                size: '5%'
            }
        ]
    });
    $('#splitterSection').kendoSplitter({
        panes: [
            {
                collapsible: true,
                max: '20%',
                min: '8%',
                size: '10%'
            },
            {
                size: '75%'
            },
            {
                max: '20%',
                min: '5%',
                size: '15%'
            }
        ]
    });
});