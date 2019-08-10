$(function () {
    // DOM 穿梭框
    $('#domListBoxFrom').kendoListBox({
        connectWith: 'domListBoxTo',
        toolbar: {
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#domListBoxTo').kendoListBox();
    // 普通穿梭框
    $('#generalListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'generalListBoxTo',
        toolbar: {
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#generalListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName'
    });
    // 多选穿梭框
    $('#multiListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'multiListBoxTo',
        selectable: 'multiple',
        toolbar: {
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#multiListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        selectable: 'multiple'
    });
    // 拖放穿梭框
    $('#dragDropListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        draggable: true,
        dropSources: ['dragDropListBoxTo'],
        connectWith: 'dragDropListBoxTo'
    });
    $('#dragDropListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        draggable: true,
        dropSources: ['dragDropListBoxFrom'],
        connectWith: 'dragDropListBoxFrom'
    });
    // 左侧工具栏穿梭框
    $('#leftListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'leftListBoxTo',
        toolbar: {
            position: 'left',
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#leftListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName'
    });
    // 右侧工具栏穿梭框
    $('#rightListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'rightListBoxTo',
        toolbar: {
            position: 'right',
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#rightListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName'
    });
    // 顶部工具栏穿梭框
    $('#topListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'topListBoxTo',
        toolbar: {
            position: 'top',
            tools: ['transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom']
        }
    });
    $('#topListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName'
    });
    // 底部工具栏穿梭框
    $('#bottomListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'bottomListBoxTo',
        toolbar: {
            position: 'bottom',
            tools: ['transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom']
        }
    });
    $('#bottomListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName'
    });
    // 自定义穿梭框
    $('#customListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        template: '<img class="rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #',
        draggable: {
            placeholder: function (draggedItem) {
                return draggedItem.clone().addClass('k-ghost').removeClass('d-none');
            }
        },
        dropSources: ['customListBoxTo'],
        connectWith: 'customListBoxTo',
        toolbar: {
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#customListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        template: '<img class="rounded-circle mr-2" src="#: photo.url #" alt="#: photo.name ##: photo.extension #">#: realName #',
        draggable: {
            placeholder: function (draggedItem) {
                return draggedItem.clone().addClass('k-ghost').removeClass('d-none');
            }
        },
        dropSources: ['customListBoxFrom'],
        connectWith: 'customListBoxFrom'
    });
    // 等宽穿梭框
    $('#widthListBoxFrom').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemFrom'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName',
        connectWith: 'widthListBoxTo',
        toolbar: {
            tools: ['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']
        }
    });
    $('#widthListBoxTo').kendoListBox({
        dataSource: {
            transport: {
                read: function (options) {
                    $.fn.ajaxPost({
                        ajaxUrl: 'json/assigns.json',
                        succeed: function (res) {
                            options.success(res);
                        },
                        failed: function (res) {
                            options.error(res);
                        }
                    });
                }
            },
            schema: {
                data: 'itemTo'
            }
        },
        dataTextField: 'realName',
        dataValueField: 'nickName'
    });
});