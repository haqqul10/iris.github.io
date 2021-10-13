$('#example_tbody').empty();

$.ajax({
    type: "GET",
    url: "https://irisbot.io/api/test/tasks/get_task",
    success: (result) => {
        $.each(result.tasks, (index, value) => {
            $('#example_tbody').append(
                `<tr>
                    <td><input type="checkbox" class="form-check-input"></td>
                    <td class="text-white items" data-label="Item"><img src="${handlePhotoShoes(value.item.image)}" alt="" width="35"
                        class="img-shoe"> ${value.item.name}</td>
                    <td data-label="Size">${value.module.size}</td>
                    <td data-label="Store">${value.module.name}</td>
                    <td data-label="Profil">${value.profileName}</td>
                    <td data-label="Status">${getStatusColored(value.status)}</td>
                    <td data-label="Action">
                    <a href="#"><img src="./images/icons/play.svg" alt="" width="20" onmouseover="hover(this,1);" onmouseout="unHover(this,1);"></a>
                    <a href="#"><img src="./images/icons/Icon_delete.svg" alt="" width="20" onmouseover="hover(this,2);" onmouseout="unHover(this,2);"></a>
                    </td>
                </tr>`
            );

            if (index === result.tasks.length - 1) {
                $('.dashboard').css('overflow-y', 'scroll');
                $('.section-loader').hide();
                setDatatable();
            }
        })

        if (result.tasks.length === 0) {
            $('.dashboard').css('overflow-y', 'scroll');
            $('.section-loader').hide();
            setDatatable();
        }
    },
    error: () => {
        $('.dashboard').css('overflow-y', 'scroll');
        $('.section-loader').hide();
        setDatatable();
    }
})

function setDatatable() {
    var oTable = $('#example').DataTable({
        "pageLength": 7,
        "sScrollX": "auto",
        "searching": true,
        bInfo: true,
        integer: true,
        "lengthChange": true,
        "pagingType": "simple_numbers",
        lengthMenu: [7, 10, 20, 50, 100, 200, 500],
        oLanguage: {
            oPaginate: {
            sNext: '<span class="pagination-default"><img src="./images/icons/Right.svg" alt=""></span><span class="pagination-fa"><i class="fa fa-chevron-right" ></i></span>',
            sPrevious: '<span class="pagination-default"><img src="./images/icons/Left.svg" alt=""></span><span class="pagination-fa"><i class="fa fa-chevron-left" ></i></span>'
            }
        },
        "language": {
            "lengthMenu": "Result per page _MENU_",
            "info": "<p class='total__page'>_TOTAL_</p>results <p class='titik'>.</p>",
            "infoFiltered": "",
            "infoEmpty": "<p class='total__page'>0</p>results <p class='titik'>.</p>",
        },
        "dom": '<"top"il>rt<"bottom"ilp><"clear">',
        });

        $('#search').keyup(function () {
        oTable.search($(this).val()).draw();
    })
}

function getStatusColored($status) {
    $status_original = $status;
    $status = $status.toLowerCase();

    if ($status == "paused") {
        return '<span class="badge bg-warning">Paused</span>';
    } else if ($status == "Stopped") {
        return '<span class="badge bg-warning">Stopped</span>';
    } else if ($status == "checked out" || $status == "checking out") {
        return '<span class="badge bg-success">Checked Out</span>';
    } else if ($status == "error") {
        return '<span class="badge bg-danger">Error</span>';
    } else {
        return '<span class="badge bg-success" style="background-color: rgba(121, 99, 250, 0.1)!important; color: #7963FA!important;">' +
        $status_original + '</span>';
    }
}

var profiles = JSON.parse(window.localStorage.getItem("profiles"));
$.each(profiles, (index, value) => {
    $('#profile_select').append(
        `<option value="${index}">${value.profile_name}</option>`
    );
})