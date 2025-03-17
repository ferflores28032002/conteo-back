"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const uuid_1 = require("uuid");
const config_1 = require("../config");
const supabase = (0, supabase_js_1.createClient)(config_1.envs.SUPABASE_URL, config_1.envs.SUPABASE_KEY);
const bucketName = config_1.envs.SUPABASE_BUCKET;
const uploadImage = async (file) => {
    if (!file)
        throw new Error("No file provided.");
    const fileName = `${bucketName}/${(0, uuid_1.v4)()}-${file.originalname}`;
    const { error } = await supabase.storage.from(bucketName).upload(fileName, file.buffer, {
        contentType: file.mimetype,
    });
    if (error)
        throw error;
    return supabase.storage.from(bucketName).getPublicUrl(fileName).data.publicUrl;
};
exports.uploadImage = uploadImage;
