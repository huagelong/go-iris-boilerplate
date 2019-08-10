$.getScript('js/jszip.min.js');
$(function () {
    // 定义 PDF 嵌入字体
    kendo.pdf.defineFont({
        'Microsoft YaHei': 'fonts/msyh.ttf',
        'Microsoft YaHei|Bold': 'fonts/msyhbd.ttf'
    });
    // 普通透视表格
    $('#generalPivotGrid').kendoPivotGrid({
        dataSource: {
            transport: {
                read: {
                    url: 'json/pivotgrid.json',
                    dataType: 'json'
                }
            },
            schema: {
                data: 'data',
                model: {
                    id: 'ID',
                    fields: {
                        '日期': { type: 'string' },
                        '省市名称': { type: 'string' },
                        '客户端名称': { type: 'string' },
                        '浏览量PV': { type: 'number' },
                        '浏览量占比': { type: 'number' },
                        '访问次数': { type: 'number' },
                        '访客数UV': { type: 'number' },
                        '新访客数': { type: 'number' },
                        '新访客占比': { type: 'number' },
                        'IP数': { type: 'number' },
                        '跳出率': { type: 'number' },
                        '平均访问时长': { type: 'string' },
                        '平均访问页数': { type: 'number' }
                    }
                },
                cube: {
                    dimensions: {
                        '日期': { caption: '全部日期' },
                        '省市名称': { caption: '全国' },
                        '客户端名称': { caption: '全部客户端' }
                    },
                    measures: {
                        '浏览量 (PV)': {
                            field: '浏览量PV',
                            format: '{0:n0}',
                            aggregate: 'sum'
                        },
                        '浏览量占比': {
                            field: '浏览量占比',
                            format: '{0:p}',
                            aggregate: 'max'
                        },
                        '访问次数': {
                            field: '访问次数',
                            format: '{0:n0}',
                            aggregate: 'sum'
                        },
                        '访客数 (UV)': {
                            field: '访客数UV',
                            format: '{0:n0}',
                            aggregate: 'sum'
                        },
                        '新访客数': {
                            field: '新访客数',
                            format: '{0:n0}',
                            aggregate: 'sum'
                        },
                        '新访客占比': {
                            field: '新访客占比',
                            format: '{0:p}',
                            aggregate: 'average'
                        },
                        'IP 数': {
                            field: 'IP数',
                            format: '{0:n0}',
                            aggregate: 'sum'
                        },
                        '跳出率': {
                            field: '跳出率',
                            format: '{0:p}',
                            aggregate: 'min'
                        },
                        '访问时长': {
                            field: '平均访问时长',
                            format: '{0:n}',
                            aggregate: 'average'
                        },
                        '访问页数': {
                            field: '平均访问页数',
                            format: '{0:n}',
                            aggregate: 'average'
                        }
                    }
                }
            },
            rows: [
                {
                    name: '日期',
                    expand: true
                }
            ],
            columns: [
                {
                    name: '省市名称',
                    expand: true
                },
                {
                    name: '客户端名称'
                }
            ],
            measures: [
                {
                    name: '浏览量 (PV)'
                },
                {
                    name: '访问次数'
                },
                {
                    name: '访客数 (UV)'
                },
                {
                    name: '新访客数',
                    type: 'status'
                },
                {
                    name: 'IP 数'
                }
            ]
        },
        excel: {
            fileName: 'PivotGrid.xlsx',
            filterable: true
        },
        pdf: {
            fileName: 'PivotGrid.pdf',
            creator: 'IKKI Studio',
            author: 'IKKI & Amikoko',
            title: '透视表格展示',
            subject: '仓库统计',
            keywords: 'Repository Statistics',
            avoidLinks: true,
            landscape: false
        },
        filterable: true,
        sortable: true,
        columnWidth: 120,
        height: 600,
        rowHeaderTemplate:
            '# if (member.caption && member.hasChildren) { #' +
                '<span class="theme-m">#: member.caption #</span>' +
            '# } else { #' +
                '#: member.caption #' +
            '# } #',
        columnHeaderTemplate:
            '# if (member.caption && member.hasChildren) { #' +
                '<span class="theme-m">#: member.caption #</span>' +
            '# } else if (member.caption) { #' +
                '#: member.caption #' +
            '# } else { #' +
                '#: member.name #' +
            '# } #',
        dataCellTemplate:
            '# if (dataItem.fmtValue === "0" || dataItem.fmtValue === "0.00" || dataItem.fmtValue === "0.00%") { #' +
                '<span class="text-black-50">-</span>' +
            '# } else { #' +
                '#: dataItem.fmtValue #' +
            '# } #'
    });
    $('#generalPivotConfigurator').kendoPivotConfigurator({
        dataSource: $('#generalPivotGrid').data('kendoPivotGrid').dataSource,
        filterable: true,
        sortable: true,
        height: 598
    });
});