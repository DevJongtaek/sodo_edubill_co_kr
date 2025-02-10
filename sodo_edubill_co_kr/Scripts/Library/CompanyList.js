$(function () {
    
    LoadItems();
});

function LoadItems() {
    $.ajax(
        {
            url: ItemsUrl,
            type: 'POST',
            data: { },
            success: function (r) {
                $('#Items').html(r);
                $('#Items tbody tr:odd').addClass('odd');
                $('#Items tbody tr:even').addClass('even');
            },
            error: function () {
                $.Dialog.Alert('주문내역 저장에 실패하였습니다<br>다시 로그인 한 후 주문하여 주십시오.');
            }

        });
}