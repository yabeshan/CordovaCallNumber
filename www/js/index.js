/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // this.receivedEvent('deviceready');
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        var pn = document.getElementById("phoneNumber");
        var that = this;
        // document.getElementById("btnStartCallTrue").addEventListener('click', function(){
        //     that.clickHandler(pn.value, true);
        // });
        // document.getElementById("btnStartCallFalse").addEventListener('click', function(){
        //     that.clickHandler(pn.value, false);
        // });

        // setTimeout(function(){
        //     that.checkSim();
        // },9000);
        // setTimeout(function(){
        //     that.checkDevice();
        // },10000);

        alert("complete");
    },

    checkSim: function(){
        // alert(111);
        // document.getElementById("btnStartCallHref").addEventListener('click', function(){
        //     document.location.href = "tel:" + pn.value;
        // });
        // document.getElementById("btnStartCallWindow").addEventListener('click', function(){
        //     if (cordova && cordova.InAppBrowser && cordova.InAppBrowser.open) {
        //         cordova.InAppBrowser.open('tel:' + pn.value, '_system');
        //     } else {
        //         alert("close");
        //     }
        // });
        // alert(222);
        // var sim = document.getElementById("phoneSim");
        // if (window && window.plugins && window.plugins.sim && window.plugins.sim.getSimInfo) {
        //     window.plugins.sim.getSimInfo(
        //         function(result){
        //             // allowsVOIP: true
        //             // carrierName: "lifecell"
        //             // countryCode: "ua"
        //             // mcc: "255"
        //             // mnc: "06"
    
        //             var txt = "null";
        //             if (result.allowsVOIP) txt += "___allowsVOIP = " + result.allowsVOIP;
        //             if (result.countryCode) txt += "___countryCode = " + result.countryCode;
        //             if (result.countryCode) txt += "___countryCode = " + result.countryCode;
        //             if (result.mcc) txt += "___mcc = " + result.mcc;
        //             if (result.mnc) txt += "___mnc = " + result.mnc;
        //             sim.value = "Sim result " + txt;
        //         }, 
        //         function(error){
        //             sim.value = "Sim error " + error;
        //         }, 
        //     );
        // }
    },

    checkDevice: function(){
        // alert(333);
        // var conn = document.getElementById("phoneConnection");
        // if (navigator && navigator.connection && navigator.connection.type) {
        //     alert("check navigator.connection.type");
        //     conn.value = "Connect type = " + navigator.connection.type;
        // } else {
        //     alert("error navigator.connection.type");
        // }

        // if (device) {
        //     alert("check device");
        //     var devc = document.getElementById("phoneDevice");
        //     var st = "Device __"
        //     if (device.cordova) {
        //         st += "__cordova = " + device.cordova;
        //     }
        //     if (device.model) {
        //         st += "__model = " + device.model;
        //     }
        //     if (device.platform) {
        //         st += "__platform = " + device.platform;
        //     }
        //     if (device.uuid) {
        //         st += "__uuid = " + device.uuid;
        //     }
        //     if (device.version) {
        //         st += "__version = " + device.version;
        //     }
        //     if (device.manufacturer) {
        //         st += "__manufacturer = " + device.manufacturer;
        //     }
        //     if (device.isVirtual) {
        //         st += "__isVirtual = " + device.isVirtual;
        //     }
        //     if (device.serial) {
        //         st += "__serial = " + device.serial;
        //     }
        //     devc.value = st
        //     // device.cordova
        //     // device.model
        //     // device.platform
        //     // device.uuid
        //     // device.version
        //     // device.manufacturer
        //     // device.isVirtual
        //     // device.serial
        // } else {
        //     alert("error device");
        // }
    },

    clickHandler: function(number, flag) {
        if (!window.Cordova) {
            console.log (111);
            window.Cordova = cordova;
        };
        if(!window.plugins) {
            console.log (222);
            window.plugins = {};
        } 
        if (!window.plugins.CallNumber) {
            console.log (333);
            window.plugins.CallNumber = new CallNumber();
        }
        window.plugins.CallNumber.callNumber(
            function(result) {
                alert(number +"___"+ flag +" = Success: "+result);
            }, 
            function(result) {
                alert(number +"___"+ flag +" = Errror: "+result);
            }, 
            number, 
            flag
        );
        console.log (444);
    }
};


app.initialize();