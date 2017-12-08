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
        var btnTrue = document.getElementById("btnStartCallTrue");
        var btnFalse = document.getElementById("btnStartCallFalse");
        var that = this;
        btnTrue.addEventListener('click', function(){
            that.clickHandler(pn.value, true);
        });
        btnFalse.addEventListener('click', function(){
            that.clickHandler(pn.value, false);
        });
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
                alert("Success: "+result);
            }, 
            function(result) {
                alert("Errror: "+result);
            }, 
            number, 
            flag
        );
        console.log (444);
    }
};


app.initialize();