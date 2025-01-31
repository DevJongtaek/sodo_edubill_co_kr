$(function () {
    if (ShowError == 'True')
{
	//setTimeout(fnShowError, 1000);
        $.Dialog.Alert('회원번호가 틀립니다. 확인 후, 다시 입력 바랍니다.<br> ☎ 문의전화 : (02)853-5111');
	//alert($('#AlertDialog').html());
}
});
function fnShowError(){
    $.Dialog.Alert('회원번호가 틀립니다. 확인 후, 다시 입력 바랍니다.');
}
function Submit() {

    var $LoginID = $('#LoginID').val();
    if ($LoginID.length < 4) {
        $.Dialog.Alert('회원번호를 입력해주세요.')
        return;
    }
    $.ajax(
        {
            url: IsServiceUrl,
            type: 'POST',
            data: {
                LoginID: $LoginID,
                Password: $('#Password').val(),
                SaveId: $('#SaveId').is(':checked'),
                RemainSession: $('#RemainSession').is(':checked')
            },
            success: function (r) {
                if (r.IsSuccess) {
                    $.form(LoginUrl,
                    {
                        LoginID: $LoginID,
                        Password: $('#Password').val(),
                        SaveId: $('#SaveId').is(':checked'),
                        RemainSession: $('#RemainSession').is(':checked')
                    }).submit();
                }
                else {
                    $.Dialog.Alert('회원번호가 틀립니다. 확인 후, 다시 입력 바랍니다.<br> ☎ 문의전화 : (02)853-5111');
                }

            },
            error: function () {
                $.Dialog.Alert('실패하였습니다. 다시 시도해주십시오.');
            },
        });

}