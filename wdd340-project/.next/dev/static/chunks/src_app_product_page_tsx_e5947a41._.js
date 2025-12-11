(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/product/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProductPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "f7f8b32437618adc9cfc63b01e815971e5e46caeaf0611f1e8b01ce90cf05793") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7f8b32437618adc9cfc63b01e815971e5e46caeaf0611f1e8b01ce90cf05793";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("id");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const id = t0;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[3] !== id) {
        t1 = ({
            "ProductPage[useEffect()]": ()=>{
                if (!id) {
                    return;
                }
                fetch(`/api/product?id=${id}`).then(_ProductPageUseEffectAnonymous).then({
                    "ProductPage[useEffect() > (anonymous)()]": (data)=>{
                        setProduct(data);
                        setLoading(false);
                    }
                }["ProductPage[useEffect() > (anonymous)()]"]).catch({
                    "ProductPage[useEffect() > (anonymous)()]": (err)=>{
                        console.error(err);
                        setLoading(false);
                    }
                }["ProductPage[useEffect() > (anonymous)()]"]);
            }
        })["ProductPage[useEffect()]"];
        t2 = [
            id
        ];
        $[3] = id;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (loading) {
        let t3;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/product/page.tsx",
                lineNumber: 70,
                columnNumber: 12
            }, this);
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        return t3;
    }
    if (!product) {
        let t3;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Invalid product ID"
            }, void 0, false, {
                fileName: "[project]/src/app/product/page.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        return t3;
    }
    let t3;
    if ($[8] !== product.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-bold mb-4",
            children: product.name
        }, void 0, false, {
            fileName: "[project]/src/app/product/page.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[8] = product.name;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== product.imageUrl || $[11] !== product.name) {
        t4 = product.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-96 mb-4 rounded-xl overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: product.imageUrl,
                alt: product.name,
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/product/page.tsx",
                lineNumber: 97,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/product/page.tsx",
            lineNumber: 97,
            columnNumber: 30
        }, this);
        $[10] = product.imageUrl;
        $[11] = product.name;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== product.description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-4",
            children: product.description
        }, void 0, false, {
            fileName: "[project]/src/app/product/page.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[13] = product.description;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== product.price) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl font-semibold mb-6",
            children: [
                "$",
                product.price
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/product/page.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[15] = product.price;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            children: "Add to Cart"
        }, void 0, false, {
            fileName: "[project]/src/app/product/page.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== t3 || $[19] !== t4 || $[20] !== t5 || $[21] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-8",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/product/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[18] = t3;
        $[19] = t4;
        $[20] = t5;
        $[21] = t6;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    return t8;
}
_s(ProductPage, "AkZmKNCI8DdzqTbW2q79R7z2X2Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ProductPage;
function _ProductPageUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "ProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_product_page_tsx_e5947a41._.js.map