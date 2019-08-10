$(function () {
    // DOM 富文本框
    $('#domEditor').kendoEditor();
    // 普通富文本框
    $('#generalEditor').kendoEditor({
        placeholder: '富文本框',
        resizable: {
            toolbar: true,
            content: true,
            max: 500
        }
    });
    // 默认值富文本框
    $('#defaultValueEditor').kendoEditor({
        value:
            '<div align="center">' +
                '<p>' +
                    '<a href="https://www.telerik.com/kendo-ui">' +
                        '<img src="https://raw.githubusercontent.com/IKKI2000/KendoUI-Admin-Site/master/img/logo.png" alt="LOGO">' +
                    '</a>' +
                '</p>' +
                '<h1>🌸 Kendo UI Admin & Site 🌌</h1>' +
                '<p>Kendo UI Admin &amp; Site base on Kendo UI for jQuery and Bootstrap 4.</p>' +
                '<p>GitHub Demo: <a href="https://ikki2000.github.io/KendoUI-Admin-Site/">https://ikki2000.github.io/KendoUI-Admin-Site/</a></p>' +
                '<p>码云演示：<a href="https://ikki2000.gitee.io/kendoui-admin-site/index_gitee.html">https://ikki2000.gitee.io/kendoui-admin-site/index_gitee.html</a></p>' +
            '</div>'
    });
    // 行内编辑富文本框
    $('#inlineEditor').kendoEditor();
    // 清除粘贴富文本框
    $('#pasteCleanupEditor').kendoEditor({
        tools: [
            'viewHtml'
        ],
        pasteCleanup: {
            all: true,
            css: true,
            custom: null,
            keepNewLines: true,
            msAllFormatting: true,
            msConvertLists: false,
            msTags: true,
            none: true,
            span: true
        }
    });
    // 自定义代码块富文本框
    $('#snippetEditor').kendoEditor({
        tools: [
            { name: 'insertHtml',
                items: [
                    {
                        text: '仓库名',
                        value: '<h1>🌸 Kendo UI Admin &amp; Site 🌌</h1>'
                    },
                    {
                        text: '技术支持信息',
                        value: '<address>Powered by IKKI &amp; Amikoko &copy; 2018-2019 UED Center</address>'
                    }
                ]
            }
        ]
    });
    // 自定义工具栏富文本框
    $('#customEditor').kendoEditor({
        tools: [
            {
                name: 'fontName',
                items: [].concat(
                    kendo.ui.Editor.prototype.options.fontName[0],
                    kendo.ui.Editor.prototype.options.fontName[5],
                    kendo.ui.Editor.prototype.options.fontName[8],
                    [
                        {
                            text: '宋体',
                            value: 'simsun'
                        },
                        {
                            text: '黑体',
                            value: 'simhei'
                        }
                    ]
                )

            },
            {
                name: 'fontSize',
                items: [].concat(
                    [
                        {
                            text: '12px',
                            value: '12px'
                        },
                        {
                            text: '14px',
                            value: '14px'
                        },
                        {
                            text: '16px',
                            value: '16px'
                        },
                        {
                            text: '24px',
                            value: '24px'
                        }
                    ]
                )
            },
            {
                name: 'foreColor',
                palette: ['#c39b8f', '#d770ad', '#da4453', '#ff9800', '#f6bb42', '#aab2bd', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#434a54'],
                columns: 6
            },
            {
                name: 'backColor',
                palette: ['#c39b8f', '#d770ad', '#da4453', '#ff9800', '#f6bb42', '#aab2bd', '#8cc152', '#37bc9b', '#3bafda', '#4a89dc', '#967adc', '#434a54'],
                columns: 6
            },
            {
                name: 'formatting',
                items: [].concat(
                    [
                        {
                            text: '记号',
                            value: 'mark'
                        },
                        {
                            text: '长引用',
                            value: 'blockquote'
                        },
                        {
                            text: '短引用',
                            value: 'q'
                        },
                        {
                            text: '代码',
                            value: 'code'
                        },
                        {
                            text: '分组元素',
                            value: 'fieldset'
                        }
                    ]
                )
            },
            {
                name: 'custom',
                tooltip: '水平线',
                exec: function (e) {
                    $(this).data('kendoEditor').exec('inserthtml', { value: '<hr>' });
                }
            },
            {
                name: 'template',
                template: '<a class="k-tool" href="https://github.com/IKKI2000/KendoUI-Admin-Site/" title="Github"><i class="fab fa-github"></i></a>'
            }
        ]
    });
    // 自定义 PDF 导出富文本框
    $('#pdfEditor').kendoEditor({
        tools: [
            'pdf'
        ],
        pdf: {
            fileName: 'KendoUI-Admin-Site.pdf',
            author: 'IKKI & Amikoko',
            subject : 'Kendo UI Admin & Site base on Kendo UI for jQuery and Bootstrap 4.',
            title : 'Kendo UI Admin & Site',
            keywords: 'GitHub Demo',
            avoidLinks: true,
            paperSize : 'A4',
            margin: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
            },
            landscape: true
        },
        value:
            '<div align="center">' +
                '<p>' +
                    '<a href="https://www.telerik.com/kendo-ui">' +
                        '<img src="https://raw.githubusercontent.com/IKKI2000/KendoUI-Admin-Site/master/img/logo.png" alt="LOGO">' +
                    '</a>' +
                '</p>' +
                '<h1>Kendo UI Admin & Site</h1>' +
                '<p>Kendo UI Admin &amp; Site base on Kendo UI for jQuery and Bootstrap 4.</p>' +
                '<p>GitHub Demo: <a href="https://ikki2000.github.io/KendoUI-Admin-Site/">https://ikki2000.github.io/KendoUI-Admin-Site/</a></p>' +
            '</div>'
    });
    // 自定义图片上传富文本框
    $('#imageEditor').kendoEditor({
        tools: [
            'insertImage'
        ],
        imageBrowser: {
            fileTypes: '.jpg,.png,.gif,bmp',
            transport: {
                read: 'json/upload.json',
                destroy: {
                    type: 'post',
                    url: 'json/upload.json'
                },
                create: {
                    type: 'post',
                    url: 'json/upload.json'
                },
                uploadUrl: 'json/upload.json',
                thumbnailUrl: function (path, file) {
                    return path + file;
                },
                imageUrl: function (e) {
                    return e;
                }
            },
            schema: {
                data: 'imageBrowser'
            },
            path: path + 'img/temp/'
        }
    });
    // 自定义文件上传富文本框
    $('#fileEditor').kendoEditor({
        tools: [
            'insertFile'
        ],
        fileBrowser: {
            fileTypes: '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf,.zip,.rar,.7z',
            transport: {
                read: 'json/upload.json',
                destroy: {
                    type: 'post',
                    url: 'json/upload.json'
                },
                create: {
                    type: 'post',
                    url: 'json/upload.json'
                },
                uploadUrl: 'json/upload.json',
                fileUrl: function (e) {
                    return e;
                }
            },
            schema: {
                data: 'fileBrowser'
            },
            path: path + 'resource/'
        }
    });
    // 全功能富文本框
    $('#fullEditor').kendoEditor({
        tools: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'fontName',
            'fontSize',
            'foreColor',
            'backColor',
            'justifyLeft',
            'justifyCenter',
            'justifyRight',
            'justifyFull',
            'insertUnorderedList',
            'insertOrderedList',
            'indent',
            'outdent',
            'createLink',
            'unlink',
            'insertImage',
            'insertFile',
            'tableWizard',
            'createTable',
            'addColumnLeft',
            'addColumnRight',
            'addRowAbove',
            'addRowBelow',
            'deleteRow',
            'deleteColumn',
            'formatting',
            'cleanFormatting',
            'insertHtml',
            'viewHtml',
            'print',
            'pdf'
        ]
    });
    // 不编码富文本框
    $('#noEncodedEditor').kendoEditor({
        tools: [
            'viewHtml'
        ],
        encoded: false
    });
    // 序列化富文本框
    $('#serializationEditor').kendoEditor({
        tools: [
            'viewHtml'
        ],
        serialization: {
            scripts: true,
            custom: function (html) {
                return html.replace(/(<\/?)b(\s?)/, '$1strong$2');
            }
        }
    });
    // 等宽富文本框
    $('#widthEditor').kendoEditor();
});