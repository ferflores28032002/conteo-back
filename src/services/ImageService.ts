import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

import { envs } from "../config";

const supabase = createClient(envs.SUPABASE_URL, envs.SUPABASE_KEY);
const bucketName = envs.SUPABASE_BUCKET

export const uploadImage = async (file: Express.Multer.File): Promise<string> => {
  if (!file) throw new Error("No file provided.");

  const fileName = `${bucketName}/${uuidv4()}-${file.originalname}`;
  const { error } = await supabase.storage.from(bucketName).upload(fileName, file.buffer, {
    contentType: file.mimetype,
  });

  if (error) throw error;

  return supabase.storage.from(bucketName).getPublicUrl(fileName).data.publicUrl;
};
