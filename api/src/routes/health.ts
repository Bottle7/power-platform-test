import { Router } from "express";
import { healthcheck } from "../controllers";

const router = Router();

/**
 * GET healthcheck
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /health
 */
router.get('/health', healthcheck)

export default router;
