import { Router } from "express";
import { checkSession } from "../controllers/user.controller";
import { saveUserDetails } from "../controllers/user.controller"
import { requireAuth } from "../middlewares/auth";
import ImageKit from "imagekit";
import { IMAGE_KIT_PRIVATE_KEY, IMAGE_KIT_PUBLIC_KEY, IMAGE_KIT_URL_ENDPOINT } from "../config/env";

const imagekit = new ImageKit({
  urlEndpoint: IMAGE_KIT_URL_ENDPOINT,
  publicKey: IMAGE_KIT_PUBLIC_KEY,
  privateKey: IMAGE_KIT_PRIVATE_KEY,
});

const router = Router();

router.get("/session", checkSession);
router.post("/save", requireAuth, saveUserDetails);

router.get("/image/auth", function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

export default router;