(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{380:function(e,t,r){"use strict";r.r(t);var s=r(28),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"client"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),r("h3",{attrs:{id:"nodeactylclient"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodeactylclient"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge tip",staticStyle:{"vertical-align":"top"}},[e._v("class")]),e._v(" "),r("code",[e._v("NodeactylClient(host, key)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Main class constructor")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("host")]),e._v(" - Where your panel is hosted (EG: http(s)://panel.host.net/)")]),e._v(" "),r("li",[r("code",[e._v("key")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getaccountdetails"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getaccountdetails"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getAccountDetails()")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets the account details associated with this.hostUrl and this.hostKey\n\nMUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getaccountpermissions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getaccountpermissions"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getAccountPermissions()")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets the permissions that this associated host and key have\n\nMUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getserverdetails"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getserverdetails"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getServerDetails(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a Server's information NOTE: This does not return any live resource usages such as CPU, memory or RAM, but it will show the max limits of these values")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getserverstatus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getserverstatus"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getServerStatus(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a server's status, so whether it is running, starting or powered off")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getallservers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getallservers"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getAllServers()")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a list of servers from your panel, currently this only get the first page")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getserverpage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getserverpage"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getServerPage(pageNum)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a server by a specified page number")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("pageNum")]),e._v(" ("),r("em",[e._v("Integer")]),e._v(") - Page number")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"startserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#startserver"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("startServer(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Starts a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"stopserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stopserver"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("stopServer(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Stops a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"restartserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restartserver"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("restartServer(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Restarts a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"killserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#killserver"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("killServer(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Kills a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"sendservercommand"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sendservercommand"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("sendServerCommand(serverId, command)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Sends a command to a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")]),e._v(" "),r("li",[r("code",[e._v("command")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Command")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getserverusages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getserverusages"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getServerUsages(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a servers current memory/cpu/disk usages as bytes")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getconsolewebsocket"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getconsolewebsocket"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getConsoleWebSocket(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets the Console WebSocket instance for a server\nyou will need to establish your own socket connection for now\n(try socket.io)")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"renameserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#renameserver"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("renameServer(serverId, newName)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Renames the target server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")]),e._v(" "),r("li",[r("code",[e._v("newName")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - New Name of Server")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"reinstallserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reinstallserver"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("reInstallServer(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("ReInstalls a target server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"listserverbackups"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#listserverbackups"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("listServerBackups(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Lists what backups a server has")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"createserverbackup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createserverbackup"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("createServerBackup(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Creates a backup for a specified server\n\nThis will send a error code 924 when trying to create 2 backups within a 10 minute time frame")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getbackupdetails"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getbackupdetails"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getBackupDetails(serverId, backupId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets details about a specified server backups")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")]),e._v(" "),r("li",[r("code",[e._v("backupId")]),e._v(" ("),r("em",[e._v("Integer")]),e._v(") - Backup Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getbackupdownload"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getbackupdownload"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getBackupDownload(serverId, backupId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a clickable URL to download your server backup")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")]),e._v(" "),r("li",[r("code",[e._v("backupId")]),e._v(" ("),r("em",[e._v("Integer")]),e._v(") - Backup Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"deletebackup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deletebackup"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("deleteBackup(serverId, backupId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Deletes a specified backup")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")]),e._v(" "),r("li",[r("code",[e._v("backupId")]),e._v(" ("),r("em",[e._v("Integer")]),e._v(") - Backup Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getsubusers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsubusers"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getSubUsers(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Get subusers of a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"createsubuser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createsubuser"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("createSubUser(serverId, email, permissions)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Create subuser on a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Server Id")]),e._v(" "),r("li",[r("code",[e._v("email")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Email")]),e._v(" "),r("li",[r("code",[e._v("permissions")]),e._v(" ("),r("em",[e._v("Array")]),e._v(") - Array of Permissions")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getapikeys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getapikeys"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getApiKeys()")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets a list of API keys that this assigned host and key have available to them\n\nMUST USE ClientAPI Key!!! Application API Keys NO LONGER WORK with ANY Pterodactyl version 1 and above!")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"createapikey"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#createapikey"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("createApiKey(description, allowedIps)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Creates an API key with specified host and api key.\nWILL NOT PROVIDE SUPPORT FOR THIS COMMAND!!!!!!\nMake sure to read that previous line ^")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("description")]),e._v(" ("),r("em",[e._v("String")]),e._v(")")]),e._v(" "),r("li",[r("code",[e._v("allowedIps")]),e._v(" ("),r("em",[e._v("Array")]),e._v(")")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"deleteapikey"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deleteapikey"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("deleteApiKey(keyId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Deletes a specified API key. Only use the API key identifier provided to you on the panel")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("keyId")]),e._v(" ("),r("em",[e._v("Integer")]),e._v(") - Key Id")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"updateemail"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updateemail"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("updateEmail(newEmail, currentPassword)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Updates the email for the specified host and API key")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("newEmail")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - New Email")]),e._v(" "),r("li",[r("code",[e._v("currentPassword")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Current Password")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"updatepassword"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updatepassword"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("updatePassword(newPassword, currentPassword)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Updates the password for the specified host and api key")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("newPassword")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - New Password")]),e._v(" "),r("li",[r("code",[e._v("currentPassword")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - Current Password")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"getserverstartup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getserverstartup"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("getServerStartup(serverId)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Gets the startup variables for a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - id of the server to get startup")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("blockquote",{staticClass:"scoped error"},[r("h4",{attrs:{id:"setserverstartup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setserverstartup"}},[e._v("#")]),e._v(" "),r("span",{staticClass:"badge error",staticStyle:{"vertical-align":"top"}},[e._v("function")]),e._v(" "),r("code",[e._v("setServerStartup(serverId, key, value)")])]),e._v(" "),r("blockquote",[r("p",[e._v("Sets the startup variables for a server")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("serverId")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - id of the server to set startup")]),e._v(" "),r("li",[r("code",[e._v("key")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - the name of the startup variable")]),e._v(" "),r("li",[r("code",[e._v("value")]),e._v(" ("),r("em",[e._v("String")]),e._v(") - what to set the startup variable to")])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Returns")])]),e._v(" "),r("ul",[r("li",[e._v(" ("),r("em",[e._v("Promise")]),e._v(")")])])])]),e._v(" "),r("style",[e._v("\n.badge {\n  display: inline-block;\n  font-size: 20px;\n  font-family: monospace;\n  height: 28px;\n  line-height: 28px;\n  border-radius: 3px;\n  padding: 0 6px;\n  color: #fff;\n  background-color: #42b983;\n}\n.scoped .badge,\nblockquote .badge {\n  font-size: 15px;\n  height: 23px;\n  line-height: 23px;\n}\n.badge.warning {\n  background-color: #e7c000;\n}\n.badge.error {\n  background-color: #da5961;\n}\n.badge.tip {\n  background-color: #42b983;\n}\nblockquote.scoped.warning {\n  border-color: #e7c000;\n}\nblockquote.scoped.error {\n  border-color: #da5961;\n}\nblockquote.scoped.tip {\n  border-color: #42b983;\n}\n\n")])])}),[],!1,null,null,null);t.default=v.exports}}]);