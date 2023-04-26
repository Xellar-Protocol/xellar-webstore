"use strict";
(() => {
var exports = {};
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 8327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "google-spreadsheet"
const external_google_spreadsheet_namespaceObject = require("google-spreadsheet");
;// CONCATENATED MODULE: ./src/pages/api/payment-paypal/[orderId].ts

const doc = new external_google_spreadsheet_namespaceObject.GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
async function addCustomer(body, client_email, private_key) {
    try {
        if (!body.first_name || !body.address_1 || !body.city || !body.state || !body.postcode || !body.country || !body.email_address || !body.order_id) {
            throw new Error("Missing body key");
        }
        if (!client_email || !private_key) {
            throw new Error("Missing Google service account email or private key");
        }
        await doc.useServiceAccountAuth({
            client_email,
            private_key: private_key.replace(/\\n/gm, "\n")
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow(body);
    } catch (error) {
        console.log(error);
    }
}
// access token is used to authenticate all REST API requests
async function generateAccessToken(base, client_id, app_secret) {
    const auth = Buffer.from(client_id + ":" + app_secret).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
            Authorization: `Basic ${auth}`
        }
    });
    const data = await handleResponse(response);
    return data.access_token;
}
async function handleResponse(response) {
    if (response.status === 200 || response.status === 201) {
        return response.json();
    }
    const errorMessage = await response.text();
    throw new Error(errorMessage);
}
async function handler(req, res) {
    const base = process.env.PAYPAL_BASE_URL;
    const client_id = process.env.PAYPAL_CLIENT_ID;
    const app_secret = process.env.PAYPAL_APP_SECRET;
    const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const private_key = process.env.GOOGLE_PRIVATE_KEY;
    if (req.method === "POST") {
        try {
            if (!base || !client_id || !app_secret || !client_email || !private_key) {
                throw new Error("Missing Paypal credential data");
            }
            const body = req.body;
            const { orderId  } = req.query;
            const accessToken = await generateAccessToken(base, client_id, app_secret);
            const url = `${base}/v2/checkout/orders/${orderId}/capture`;
            const response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const resp = await handleResponse(response);
            if (resp.status == "COMPLETED") await addCustomer({
                ...body,
                order_id: orderId
            }, client_email, private_key);
            res.status(200).json(resp);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (req.method === "GET") {
        return res.status(404).send("Api routes not found");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8327));
module.exports = __webpack_exports__;

})();