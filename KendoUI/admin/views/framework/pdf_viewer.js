$.getScript('js/pdf.js');
$(function () {
    setTimeout(function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.js';
        // 查看 PDF
        $('#pdfViewer').kendoPDFViewer({
            pdfjsProcessing: {
                file: path + 'resource/pdf_export.pdf'
            },
            width: '100%',
            height: '100%'
        });
    }, 500);
});