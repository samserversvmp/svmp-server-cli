/*
 * Copyright 2013 The MITRE Corporation, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this work except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * author Dave Bryson
 *
 */
'use strict';
var local = require('./config-local');
module.exports = local;

/**
 * Expects a file named config-local.js in this directory with the following
 * format:

module.exports = {
    settings: {
        // MongoDB database url
        // default = 'mongodb://localhost/svmp_proxy_db'
        db: 'mongodb://localhost/svmp_proxy_db',

        // External TCP port to listen on for client connections.
        // default = 8002
        port: 8002,

        // Port to connect to on Android VMs
        // default = 8001
        vm_port: 8001,

        // Enable SSL
        // default = false
        tls_proxy: false,

        // SSL certificate and private key paths
        // (required if tls_proxy == true)
        tls_certificate: '',
        tls_private_key: '',

        // Maximum length of a client session (in seconds) before it is
        // forcibly disconnected. NOTE: if you change this after the
        // database has been created, you should drop the "sessionmodels"
        // collection from the database to force the index to update.
        // default = 21600 [6 hours]
        max_session_length: 21600,

        // Validity time of session tokens in seconds.
        // Allows client to reconnect a disconnected session by providing
        // the token instead of doing a full re-authentication.
        // default = 300 [5 minutes]
        session_token_ttl: 300,

        // Interval (in seconds) of time to check for expired sessions.
        // This is used while a connection is active.
        // default = 60 [1 minute]
        session_check_interval: 60,

        // Use PAM authentication
        // default = false
        use_pam: false,

        // PAM 'service' name to use. I.e., which file under /etc/pam.d/
        // default = 'svmp'
        pam_service: 'svmp',

        // Web Console
        // Enable email functionality for the web console
        // default = false
        sendmail: false,
        // SMTP server, username, and password
        // TODO: what format?
        smtp: '',
        // Admin email address
        admincontact: '',

        // Log file path
        log_file: 'proxy_log.txt',

        // Openstack cloud connection details
        openstack: {"authUrl": "http://",
                    "username": "test",
                    "password": "test",
                    "tenantId": "eee",
                    "tenantName": "hello" },
    },
    // Video Information sent from Proxy to Client
    webrtc: {
        ice: { iceServers: [{url: 'stun:127.0.0.1:3478'}]}, // change IP and port to match your STUN server
        video: { audio: true, video: { mandatory: {}, optional: []}},
        pc: {optional: [{DtlsSrtpKeyAgreement: true}]}
    }
};

*/
