//   Retrieve API
$.ajax({
    type: "GET",
    url: "https://irisbot.io/api/test/proxies",
    success: (result) => {
        $('#my_proxy').empty();
        $('#header_group_details').empty();

        $('#header_group_details').append(`
        <div class="d-flex justify-content-between align-items-center">
            <p class="text-white">Group Details</p>
            <a href="" class="btn btn-primary add__proxy" data-bs-toggle="modal" data-bs-target="#proxyModal">Add
            Proxy</a>
        </div>
        <div id="collapsed_proxy"></div>
        `);

        $.each(result.groups, (index, value) => {
        if(index === 0){
            $('#my_proxy').append(`
            <tr data-bs-toggle="collapse" data-bs-target="#step_${index}" aria-expanded="true"
                aria-controls="collapseExample">
                <td data-label="Proxy List" class="text-white">${value.name}</td>
                <td data-label="Amount" class="amound amount_proxy_${value.group_id}">0</td>
                <td data-label="Action">
                    <a onClick="delete_group_proxy('${value.group_id}')"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                        fill="none">
                        <path d="M2.5 5H4.16667H17.5" stroke="#BBB9C5" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                        <path
                        d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                        stroke="#BBB9C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33337 9.16669V14.1667" stroke="#BBB9C5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.6666 9.16669V14.1667" stroke="#BBB9C5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg> </a>
                </td>
                </tr>
            `);

            $('#collapsed_proxy').append(`
            <div class="collapse fade show " id="step_${index}">
                <div class="alert alert__proxy" role="alert">
                <p class="alert__title">${value.name}</p>
                <div class="d-flex align-items-center">
                    <p class="alert__title_text"><span class="amount_proxy_${value.group_id}">0</span> Proxies</p>
                    <div class="form-check form-switch">
                    <input class="form-check-input checkBoxSwitch" type="checkbox" id="checkBoxSwitch${index}">
                    <label class="form-check-label switch" for="checkBoxSwitch${index}" id="switch">Hide <img
                        src="./images/icons/Icon=Eye-Off.svg" alt=""></label>
                    </div>
                </div>
                </div>
                <p class="proxy__list">Proxy List</p>
                <table class="table text-white" id="scroll-proxy" class="" style="width:100%;">
                <thead>
                    <tr>
                    <th>IP</th>
                    <th>Port</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Ping</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody id="list_proxy_${value.group_id}"></tbody>
                </table>
                <div class="action-knob text-center">
                <a href="" class="btn btn-primary">Test All</a>
                <a href="" class="btn btn-danger">Delete All</a>
                </div>
            </div>
            `);
        }else{
            $('#my_proxy').append(`
            <tr data-bs-toggle="collapse" data-bs-target="#step_${index}" aria-expanded="false"
                aria-controls="collapseExample" class="collapsed">
                <td data-label="Proxy List" class="text-white">${value.name}</td>
                <td data-label="Amount" class="amound amount_proxy_${value.group_id}">0</td>
                <td data-label="Action">
                    <a onClick="delete_group_proxy('${value.group_id}')"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                        fill="none">
                        <path d="M2.5 5H4.16667H17.5" stroke="#BBB9C5" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                        <path
                        d="M6.66663 5.00002V3.33335C6.66663 2.89133 6.84222 2.4674 7.15478 2.15484C7.46734 1.84228 7.89127 1.66669 8.33329 1.66669H11.6666C12.1087 1.66669 12.5326 1.84228 12.8451 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1578 14.6087 18.3334 14.1666 18.3334H5.83329C5.39127 18.3334 4.96734 18.1578 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00002H15.8333Z"
                        stroke="#BBB9C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.33337 9.16669V14.1667" stroke="#BBB9C5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.6666 9.16669V14.1667" stroke="#BBB9C5" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg> </a>
                </td>
                </tr>
            `);

            $('#collapsed_proxy').append(`
            <div class="collapse fade" id="step_${index}">
                <div class="alert alert__proxy" role="alert">
                <p class="alert__title">${value.name}</p>
                <div class="d-flex align-items-center">
                    <p class="alert__title_text"><span class="amount_proxy_${value.group_id}">0</span> Proxies</p>
                    <div class="form-check form-switch">
                    <input class="form-check-input checkBoxSwitch" type="checkbox" id="checkBoxSwitch${index}">
                    <label class="form-check-label switch" for="checkBoxSwitch${index}" id="switch">Hide <img
                        src="./images/icons/Icon=Eye-Off.svg" alt=""></label>
                    </div>
                </div>
                </div>
                <p class="proxy__list">Proxy List</p>
                <table class="table text-white" id="example" class="" style="width:100%;">
                <thead>
                    <tr>
                    <th>IP</th>
                    <th>Port</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Ping</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody id="list_proxy_${value.group_id}"></tbody>
                </table>
                <div class="action-knob text-center">
                <a href="" class="btn btn-primary">Test All</a>
                <a href="" class="btn btn-danger">Delete All</a>
                </div>
            </div>
            `);
        }

        if(index === result.groups.length - 1){
            $('.collapse').on('show.bs.collapse', function (e) {
                var btnCollapse = $(e.relatedTarget);
                $('.collapse').collapse('hide')
                })
            }
        })

        $.each(result.proxies, (index, value) => {
            let amount_proxy = (parseInt($(`.amount_proxy_${value.group}`)[0].innerHTML) + 1);
            $(`.amount_proxy_${value.group}`).text(amount_proxy);

            let popover_content = `
                <div class="top cursor-pointer">Test <a><img src="./images/icons/icon_play_proxy.svg" class=""></a>
                </div> <hr>
                <div class="buttom delete_list_proxy_btn cursor-pointer" id="${value.proxy_id}">Delete <a href="#!"><img src="./images/icons/icon_delete_proxy.svg" class=""></a>
                </div>
                `;

            $('#list_proxy_'+value.group).append(`
                <tr>
                <td data-label="IP" class="text-white ip__address">${value.ip}</td>
                <td data-label="Port" class="text-white">${value.port}</td>
                <td data-label="Username">${value.username}</td>
                <td data-label="Password">
                    <span class="password" id="password" data-password="${value.password}">
                    &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; </span>
                </td>
                <td data-label="Ping">${value.ping}</td>
                <td data-label="Action">
                    <button type="button" class="action__proxy" data-bs-container="body" data-bs-toggle="popover"
                    data-bs-placement="top" data-bs-content='${popover_content}'>
                    <img src="./images/icons/more-horizontal-proxy.svg" alt="" class="more__horizontal__proxy">
                    </button>
                </td>
                </tr>
            `);

            if(index === result.proxies.length - 1){
                $('.dashboard').css('overflow-y', 'scroll');
                $('.section-loader').hide();
                openCheckboxSwitch();
                openPopOver();

                $(document).on("click", ".delete_list_proxy_btn", function() {
                    let proxy_id = $(this).attr('id');
                    delete_list_proxy(proxy_id);
                });
            } 
        })

        if(result.proxies.length === 0){
            $('.dashboard').css('overflow-y', 'scroll');
            $('.section-loader').hide();
            openCheckboxSwitch();
            openPopOver();
        }
    },
    error: () => {
        $('.dashboard').css('overflow-y', 'scroll');
        $('.section-loader').hide();
        openCheckboxSwitch();
        openPopOver();
    }
})



// ALL FUNCTION
async function openPopOver(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            html: true,
        })
    });

    $('body').on('click', function (e) {
    $('[data-bs-toggle="popover"]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target)
        .length === 0) {
            $(this).popover('hide');
            }
        }); 
    });

    $('#scroll-proxy').scroll(function (e) {
    $('[data-bs-toggle="popover"]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target)
        .length === 0) {
            $(this).popover('hide');
            }
        });
    });
}

async function openCheckboxSwitch(){
    var checkBoxSwitch = $('.checkBoxSwitch');
    checkBoxSwitch.each((index_cbs, value_cbs) => {
        $(value_cbs).on('change', function () {
            if ($(this).is(':checked')) {
                $('.switch').html('Show <img src="./images/icons/Icon=Eye.svg" alt="">');
                $(value_cbs).parent().parent().parent().siblings('.table').find('span.password').each((index_cbs2,
                    value_cbs2) => {
                    var password = $(value_cbs2).data('password');
                    $(value_cbs2).text(password);
                    $(value_cbs2).css('font-size', '14px');
                })
            } else {
                $('.switch').html('Hide <img src="./images/icons/Icon=Eye-Off.svg" alt="">');
                $(value_cbs).parent().parent().parent().siblings('.table').find('span.password').each((index_cbs3,
                    value_cbs3) => {
                    $(value_cbs3).html('&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;');
                    $(value_cbs3).removeAttr('style');
                })
            }
        });
    })
}

function delete_group_proxy($group_id){
    $.ajax({
        type: "DELETE",
        url: "https://irisbot.io/api/test/proxies/group/delete/"+$group_id,
        success: (result) => {
            toastr.success('Group Proxy Was Deleted.', 'Success Delete Group');
        },
        error: () => {
            toastr.success('Group Proxy Was Deleted.', 'Success Delete Group');
        }
    })
}

function delete_list_proxy($proxy_id){
    $.ajax({
        type: "DELETE",
        url: "https://irisbot.io/api/test/proxies/group/delete/"+$proxy_id,
        success: (result) => {
            toastr.success('Proxy Was Deleted.', 'Success Delete Proxy');
        },
        error: () => {
            toastr.success('Proxy Was Deleted.', 'Success Delete Proxy');
        }
    })
}

function create_group(){
    $.ajax({
        type: "POST",
        url: "https://irisbot.io/api/test/proxies/group/create",
        data: {
            name: $('#details').val()
        },
        success: (result) => {
            toastr.success('New Group Was Created.', 'Success Create New Group');
        },
        error: () => {
            toastr.success('New Group Was Created.', 'Success Create New Group');
        }
    })
}