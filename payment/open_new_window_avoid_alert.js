/**
 * Created by wmy on 16-4-22.
 */
$("#payment_method_alipay").click(function() {
    paymentNotice();
    if ($("#create-order-form").valid()) {
        var newWindow = window.open();
        $.ajax({
            type: "POST",
            url: "{{ url('pay/order/doPlace') }}",
            data: $("#create-order-form").serialize(),
            dataType: 'text',
            success: function (url) {
                //修改新窗口的url
                newWindow.location.href = url;
            }
        })
    }
});
