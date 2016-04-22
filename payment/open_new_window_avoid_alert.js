/**
 * 点击支付按钮，跳出新窗口，但是浏览器不阻拦。点击事件由用户执行。
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
