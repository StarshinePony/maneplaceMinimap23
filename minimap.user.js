// ==UserScript==
// @name        r/place MLP Minimap
// @description Minimap overlay and automatic selection of pixel + color for r/place
// @namespace   https://place.equestria.dev/
// @author      r/place MLP Minimap Authors
// @include     https://hot-potato.reddit.com/embed*
// @include     https://garlic-bread.reddit.com/embed*
// @include     https://place.equestria.dev/embed*
// @include     https://nonchalant-peat-handle.glitch.me/embed*
// @match		https://place.manechat.net/*
// @downloadURL https://github.com/StarshinePony/maneplaceMinimap23/raw/main/minimap.user.js
// @updateURL   https://github.com/StarshinePony/maneplaceMinimap23/raw/main/minimap.user.js
// @connect     raw.githubusercontent.com
// @connect     media.githubusercontent.com
// @connect     ponyplace.z19.web.core.windows.net
// @connect     ponyplace-cdn.ferrictorus.com
// @connect     ponyplace-compute.ferrictorus.com
// @grant       GM.xmlHttpRequest
// @grant       GM.getValue
// @grant       GM.setValue
// ==/UserScript==
!function () { "use strict"; var e; function t(e) { return new Promise(((t, r) => { e.onload = t, e.onerror = r, e.onabort = r, e.ontimeout = r, GM.xmlHttpRequest(e) })) } !function (e) { e.rPlacePixelSize = 10, e.MaxSiteSpecificDetectAttempts = 3, e.SiteSpecificDetectRetryDelayMs = 1e3, e.ScriptReloadCheckPeriodMs = 6e4 }(e || (e = {})); const r = "https://github.com/StarshinePony/maneplaceMinimap23/raw/main/minimap.user.js"; !async function () { let o; try { const e = await t({ method: "GET", url: `${r}?t=${(new Date).getTime()}` }), n = function (e) { return Object.fromEntries(e.split("\r\n").filter((e => !!e)).map((e => e.split(": ").map((e => e.trim().replace(/^"+/, "").replace(/"+$/, "")))))) }(e.responseHeaders); o = n.ETag, new Function("GM", e.responseText)(GM) } catch (e) { console.error(`Failed to get primary script ${e}`) } o ? setInterval((async () => { try { 200 == (await t({ method: "HEAD", url: `${r}?t=${(new Date).getTime()}`, headers: { "If-None-Match": o } })).status && location.reload() } catch (e) { console.warn(`Failed to refersh primary script ${e}`) } }), e.ScriptReloadCheckPeriodMs) : console.log("No ETag in response. Auto refresh on update disabled.") }() }();
//# sourceMappingURL=loader.user.js.map
