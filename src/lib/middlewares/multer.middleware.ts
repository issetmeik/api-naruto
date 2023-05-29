import multer from 'multer';
import multerConfig from '../../config/multer';
export const upload = multer(multerConfig);
