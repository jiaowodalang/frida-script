//okhttp3 抓包，通过hook proxy方法，代理设置为burpsuite代理
Java.perform(function() {
    var okhttp3 = Java.use('okhttp3.OkHttpClient$Builder');
    
    okhttp3.proxy.implementation = function(x) {
		var proxyObject = Java.use('java.net.Proxy').$new(Java.use('java.net.Proxy$Type').HTTP.value, Java.use('java.net.InetSocketAddress').$new('10.222.7.102', 8080));
    
        // Modify the behavior of noProxy() method
        // For example, return a custom list of hosts that should not use a proxy
        console.log('no_proxy setting');
		var result = this.proxy.call(this, proxyObject);
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
        return this.proxy.call(this, proxyObject);
    };

});
