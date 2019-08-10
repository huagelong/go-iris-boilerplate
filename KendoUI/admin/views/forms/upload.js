$(function () {
    // DOM 上传框
    $('#domUpload').kendoUpload();
    // 普通上传框
    $('#generalUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        },
        multiple: false
    });
    // 禁用上传框
    $('#disabledUpload').kendoUpload().data('kendoUpload').enable(false);
    // 默认值上传框
    $('#defaultValueUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        },
        multiple: false,
        files: [
            {
                name: 'IKKI.png',
                size: 29399,
                extension: '.png'
            }
        ]
    });
    // 图片本地预览上传框
    $('#previewUpload').kendoUpload({
        multiple: false,
        select: function (e) {
            var file = e.files[0].rawFile;
            if (file) {
                var preview = new FileReader();
                preview.onloadend = function () {
                    e.sender.wrapper.parent().prev().attr({
                        'src': this.result,
                        'alt': e.files[0].name
                    });
                };
                preview.readAsDataURL(file);
            }
        },
        remove: function (e) {
            setTimeout(function () {
                if (e.sender.wrapper.find('.k-upload-files').length === 0) {
                    e.sender.wrapper.parent().prev().attr({
                        'src': 'img/avatar.png',
                        'alt': 'avatar.png'
                    });
                }
            }, 10);
        }
    });
    // 拖放区域上传框
    $('#dropZoneUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        },
        validation: {
            allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
        },
        showFileList: false,
        dropZone: '#dropZone',
        success: function (e) {
            if (e.operation === 'upload') {
                $('#dropZone').before('<div class="row" id="imgList"></div>');
                for (var i = 0; i < e.files.length; i++) {
                    var file = e.files[i].rawFile,
                        name = e.files[i].name;
                    if (file) {
                        var preview = new FileReader();
                        preview.onloadend = function () {
                            $('<div class="col-4 col-md-3 col-lg-4 col-xl-3 mb-3"><img class="img-thumbnail" src="' + this.result + '" alt="' + name + '"></div>').appendTo($('#imgList'));
                        };
                        preview.readAsDataURL(file);
                    }
                }
            }
        }
    });
    // 多选上传框
    $('#multiUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        }
    });
    // 目录上传框
    $('#directoryUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        },
        directory: true,
        directoryDrop: true
    });
    // 限制图片大小上传框
    $('#imageUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        },
        validation: {
            allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.psd', '.ai', '.tga', '.eps'],
            minFileSize: 1024,
            maxFileSize: 10485760
        }
    });
    // 批量上传框
    $('#batchUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json',
            batch: true
        }
    });
    // 块状上传框
    $('#chunkSizeUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json',
            chunkSize: 2048,
            concurrent: true
        }
    });
    // 自定义异步上传框
    $('#asyncUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json',
            autoRetryAfter: 500,
            maxAutoRetries: 10
        }
    });
    // 自定义上传框
    $('#customUpload').kendoUpload({
        async: {
            saveUrl: 'json/upload.json',
            removeUrl: 'json/upload.json'
        },
        template: function (dataItem) {
            var ext = dataItem.files[0].extension,
                html = '<div class="media w-90">';
            if (ext === '.html' || ext === '.css' || ext === '.js') {
                html += '<i class="fas fa-5x fa-file-code theme-s mr-3"></i>';
            } else if (ext === '.doc' || ext === '.docx') {
                html += '<i class="fas fa-5x fa-file-word theme-s mr-3"></i>';
            } else if (ext === '.xls' || ext === '.xlsx') {
                html += '<i class="fas fa-5x fa-file-excel theme-s mr-3"></i>';
            } else if (ext === '.ppt' || ext === '.pptx') {
                html += '<i class="fas fa-5x fa-file-powerpoint theme-s mr-3"></i>';
            } else if (ext === '.txt') {
                html += '<i class="fas fa-5x fa-file-alt theme-s mr-3"></i>';
            } else if (ext === '.pdf') {
                html += '<i class="fas fa-5x fa-file-pdf theme-s mr-3"></i>';
            } else if (ext === '.zip' || ext === '.rar' || ext === '.7z') {
                html += '<i class="fas fa-5x fa-file-archive theme-s mr-3"></i>';
            } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif' || ext === '.bmp') {
                var file = dataItem.files[0].rawFile;
                if (file) {
                    var preview = new FileReader();
                    preview.onloadend = function () {
                        $('#' + dataItem.files[0].uid).attr('src', this.result);
                    };
                    preview.readAsDataURL(file);
                }
                html += '<img class="img-thumbnail w-20 mr-3" id="' + dataItem.files[0].uid + '" alt="' + dataItem.name + '">';
            } else if (ext === '.tiff' || ext === '.psd' || ext === '.ai' || ext === '.tga' || ext === '.eps') {
                html += '<i class="fas fa-5x fa-file-image theme-s mr-3"></i>';
            } else if (ext === '.cda' || ext === '.mid' || ext === '.wav' || ext === '.mp3' || ext === '.wma' || ext === '.ra' || ext === '.ogg' || ext === '.flac' || ext === '.ape' || ext === '.m4a' || ext === '.amr') {
                html += '<i class="fas fa-5x fa-file-audio theme-s mr-3"></i>';
            } else if (ext === '.dat' || ext === '.mpeg' || ext === '.mpg' || ext === '.avi' || ext === '.mov' || ext === '.asf' || ext === '.wmv' || ext === '.flv' || ext === '.rmvb' || ext === '.rm' || ext === '.3gp' || ext === '.mp4' || ext === '.m4v' || ext === '.mkv') {
                html += '<i class="fas fa-5x fa-file-video theme-s mr-3"></i>';
            } else {
                html += '<i class="fas fa-5x fa-file theme-s mr-3"></i>';
            }
            html += '<div class="media-body">' +
                '<p class="h4 theme-m mt-2 mb-3">' + dataItem.name + '</p>' +
                '<span class="text-muted">' + kendo.toString(dataItem.size / 1024, '0.00') + ' KB</span>' +
                '</div></div><button type="button" class="k-upload-action"></button><span class="k-progress"></span>';
            return html;
        }
    });
    // 等宽上传框
    $('#widthUpload').kendoUpload();
});