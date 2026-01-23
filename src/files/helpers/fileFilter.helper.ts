export const fileFilter = (request: Express.Request, file:Express.Multer.File, callback: Function )=> {

    if (!file ) {
        return callback( new Error('El archivo esta vacio'), false);
    }

    const fileExtension = file.mimetype.split('/')[1]; // para obtener la extension (ej: jpg, png, gif)
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif']


    if ( validExtensions.includes(fileExtension)){
        return callback(null, true)
    }
    
    callback(null, false);
}