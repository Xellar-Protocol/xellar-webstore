"use strict";
(() => {
var exports = {};
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 9800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// call this function to create your client token
async function generateClientToken(base, client_id, app_secret) {
    const accessToken = await generateAccessToken(base, client_id, app_secret);
    const response = await fetch(`${base}/v1/identity/generate-token`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"
        }
    });
    const data = await handleResponse(response);
    return data.client_token;
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
    if (req.method === "POST") {
        try {
            if (!base || !client_id || !app_secret) {
                throw new Error("Missing Paypal credential data");
            }
            const body = req.body;
            const purchaseAmount = body.amount == 2 ? 36.99 : body.amount == 3 ? 50.0 : (19.99 * body.amount).toFixed(2); // TODO: pull prices from a database
            const accessToken = await generateAccessToken(base, client_id, app_secret);
            const url = `${base}/v2/checkout/orders`;
            const response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: purchaseAmount.toString()
                            }
                        }
                    ]
                })
            });
            const resp = await handleResponse(response);
            res.status(200).json(resp);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (req.method === "GET") {
        try {
            if (!base || !client_id || !app_secret) {
                throw new Error("Missing Paypal credential data");
            }
            const clientToken = await generateClientToken(base, client_id, app_secret);
            if (clientToken.error) {
                res.status(500).json(clientToken);
            }
            res.status(200).json({
                message: "Successful request client token",
                clientToken
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9800));
module.exports = __webpack_exports__;

})();