module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/db.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dbConnect
]);
(()=>{
    const e = new Error("Cannot find module 'mongoose'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("❌ MONGODB_URI não foi configurada nos Secrets.");
async function dbConnect() {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(uri);
}
}),
"[project]/pages/api/feedback.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [api] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'mongoose'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const FeedbackSchema = new mongoose.Schema({
    message: String,
    anonymous: Boolean,
    author: String
});
const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
async function handler(req, res) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"])();
    if (req.method === "POST") {
        const fb = await Feedback.create(req.body);
        return res.status(201).json(fb);
    }
    if (req.method === "GET") {
        const all = await Feedback.find().sort({
            _id: -1
        });
        return res.status(200).json(all);
    }
    res.status(405).end();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4fb49611._.js.map