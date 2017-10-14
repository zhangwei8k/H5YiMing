class IOClient {
    constructor(url, pa) {

        this.ws = "";//websocket主类
        this.redo = "";//重复连接句柄
        this.redoTime = 0;//重复连接次数
        this.url = url;
        this.redoTimeMax = pa.max?pa.max:0;
        this.ifRedo = pa.redo?1:0;

        this.id = "";
        this.fnIfRun = 0;//注册和运行函数，仅1次

        this.flow = {};//注册保存link的回调
        this.msg = {};//注册保存emit的on
        this.sys = {};//注册保存log的处理
    }

    conn(pa, fn) {
        try{
            this.conn_connect(pa, fn);
        }catch (e){
            Log("生成WebSocket错误，try获得",e);
        }
    }
    conn_connect(pa, fn) {
        this.ws = new WebSocket(this.url);

        this.ws.onclose = function(e){
            if(this.ifRedo){
                this.redo = setTimeout(function(){
                    this.redoTime++;
                    if(this.redoTimeMax && this.redoTime > pa.max){
                        clearTimeout(this.redo);
                        Log("无法链接到ws服务器");
                        return;
                    }

                    Log("参数重连", this.redoTime);

                    this.conn_connect(pa, fn);
                }.bind(this) , 5000);
            }
        }.bind(this);

        this.ws.onopen = function(e){
            clearTimeout(this.redo);
            this.redoTime = 0;

            Log("连接成功", e);

            this.id = pa.id;
            pa.type = "conn";
            pa.key = "conn";
            pa.val = "conn-start";
            this.emit(pa);

        }.bind(this);

        this.ws.onmessage = function(req){
            let json;
            try{
                json = JSON.parse(req.data);
            }catch (err){
                Log("onmessage接收错误-格式错误", req.data, err);
                return;
            }

            if(!json.type) {
                Log("onmessage接收提醒-type没有，以msg格式处理", json);
                return;
            }

            switch (json.type){
                case "conn":
                    if(json.val=="conn-ok-clear") Log("注册成功！clear提示", json);
                    else Log("注册成功！", json);
                    this.id = json.id;

                    if(this.fnIfRun) return;
                    this.fnIfRun = 1;
                    fn();
                    break;

                case "emit":

                    if(this.msg[json.key]) {
                        Log("msg信息" , json);
                        this.msg[json.key](json);
                    }else Log("on没有定义，msg-key没有" , json);
                    break;

                case "link":

                    if(this.flow[json.key]) {
                        Log("Flow信息" , json);
                        this.flow[json.key](json);
                    }else Log("响应函数没有定义，flow-key没有" , json);
                    break;

                case "log":

                    if(this.sys[json.key]) {
                        Log("sys信息" , json);
                        this.sys[json.key](json);
                    }else Log("响应函数没有定义，sys-key没有" , json);
                    break;

            }

        }.bind(this);
    }

    //发送
    link(msg, fn) {
        if(!msg.type) msg.type = "link";

        if(!this.flow[msg.key]){
            if(msg.key && fn) this.flow[msg.key] = fn;
            else Log("link发送配置错误，没有key或fn", msg);
        }

        this.emit(msg);

    }
    //基础发送
    emit(msg) {
        try{
            if(!msg.type) msg.type = "emit";
            if(!msg.from) msg.from = this.id;

            let emit = JSON.stringify(msg);
            if(msg.type = "emit") Log("emit发送", msg);
            this.ws.send(emit);
        }catch (e){
            Log("emit发送错误！", msg, e);
        }
    }

    on(key, fn) {
        this.msg[key] = fn;
    }

}

function Log(t, o1, o2) {
    if(!o1) o1 = "";
    if(!o2) o2 = "";
    console.log("Log-"+t , o1, o2);
}