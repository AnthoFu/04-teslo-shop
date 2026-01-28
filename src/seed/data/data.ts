import * as bcrypt from 'bcrypt'

interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    sizes: ValidSizes[];
    slug?: string;
    tags: string[];
    title: string;
    gender: 'hombre'|'mujer'|'niño'|'niña'|'unisex';
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';

interface SeedUser {
    email:string;
    fullName:string;
    password: string;
    roles: string[];
}
interface SeedData {
    users: SeedUser[],
    products: SeedProduct[];
}


export const initialData: SeedData = {

    users: [
        {
            email: 'anthonytest@gmail.com',
            fullName: 'AnthoFu',
            roles: ['admin', 'user','super-user'],
            password:bcrypt.hashSync('abc1234', 10)
        },
        {
            email: 'sammytest@gmail.com',
            fullName: 'Sammy',
            roles: ['admin'],
            password:bcrypt.hashSync('abc1234', 10)
        },
        {
            email: 'andytest@gmail.com',
            fullName: 'Andy',
            roles: ['user'],
            password:bcrypt.hashSync('abc1234', 10)
        }
    ],

    products: [
        {
            description: "Presentamos la Tesla Chill Collection. La sudadera de cuello redondo para hombre Chill tiene un exterior premium de peso pesado y un interior de forro polar suave para mayor comodidad en cualquier temporada. La sudadera presenta un sutil logotipo T de poliuretano termoplástico en el pecho y una marca denominativa de Tesla debajo del cuello trasero. Hecho de 60% algodón y 40% poliéster reciclado.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            stock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sudadera'],
            title: "Sudadera de cuello redondo Chill para hombre",
            gender: 'hombre'
        },
        {
            description: "La chaqueta acolchada para hombre presenta un diseño acolchado de ajuste único para brindar calidez y movilidad en las estaciones de clima frío. Con una estética general urbana, la chaqueta presenta sutiles logotipos de Tesla inyectados en silicona debajo del cuello trasero y en la manga derecha, así como tiradores de cremallera de metal mate personalizados. Hecho de 87% nailon y 13% poliuretano.",
            images: [
                '1740507-00-A_0_2000.jpg',
                '1740507-00-A_1.jpg',
            ],
            stock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            tags: ['chaqueta'],
            title: "Chaqueta acolchada estilo camisa para hombre",
            gender: 'hombre'
        },
        
        {
            description: "Presentamos la colección Tesla Raven. La chaqueta bomber ligera con cremallera Raven para hombre tiene una silueta moderna y premium hecha de una mezcla de algodón de bambú sostenible para mayor versatilidad en cualquier temporada. La sudadera con capucha presenta logotipos sutiles de Tesla de poliuretano termoplástico en el pecho izquierdo y debajo del cuello trasero, un bolsillo oculto en el pecho con tiradores de cremallera mate personalizados y un interior de felpa francesa. Hecho de 70% bambú y 30% algodón.",
            images: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],
            stock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Chaqueta bomber ligera con cremallera Raven para hombre",
            gender: 'hombre'
        },

        {
            description: "Presentamos la colección Tesla Turbine. Diseñada para el estilo, la comodidad y el estilo de vida cotidiano, la camiseta de manga larga Turbine para hombre presenta un sutil logotipo T a base de agua en el pecho izquierdo y nuestra marca denominativa Tesla debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual para un uso ideal en cualquier temporada. Hecho de 50% algodón y 50% poliéster.",
            images: [
                '1740280-00-A_0_2000.jpg',
                '1740280-00-A_1.jpg',
            ],
            stock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            tags: ['camiseta'],
            title: "Camiseta de manga larga Turbine para hombre",
            gender: 'hombre'
        },
        {
            description: "Presentamos la colección Tesla Turbine. Diseñada para el estilo, la comodidad y el estilo de vida cotidiano, la camiseta de manga corta Turbine para hombre presenta una sutil marca denominativa Tesla a base de agua en el pecho y nuestro logotipo T debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual para un uso ideal en cualquier temporada. Hecho de 50% algodón y 50% poliéster.",
            images: [
                '1741416-00-A_0_2000.jpg',
                '1741416-00-A_1.jpg',
            ],
            stock: 50,
            price: 40,
            sizes: ['M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga corta Turbine para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para la comodidad, la camiseta Cybertruck Owl está hecha de 100% algodón y presenta nuestro icónico ícono de Cybertruck en la parte posterior.",
            images: [
                '7654393-00-A_2_2000.jpg',
                '7654393-00-A_3.jpg',
            ],
            stock: 0,
            price: 35,
            sizes: ['M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Búho Cybertruck para hombre",
            gender: 'hombre'
        },
        {
            description: "Inspirada en nuestro sistema de almacenamiento y energía solar para el hogar totalmente integrado, la camiseta Tesla Solar Roof aboga por la energía limpia y sostenible dondequiera que vaya. Diseñada para el ajuste, la comodidad y el estilo, la camiseta presenta una vista aérea de nuestro diseño de techo solar sin costuras en la parte delantera con nuestro logotipo T característico sobre 'Solar Roof' en la parte posterior. Hecho de 100% algodón peruano.",
            images: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],
            stock: 15,
            price: 35,
            sizes: ['S','M','L','XL'],
            tags: ['camiseta'],
            title: "Camiseta Techo Solar para hombre",
            gender: 'hombre'
        },
        {
            description: "Inspirada en el recurso más ilimitado del mundo, la camiseta Let the Sun Shine destaca nuestro sistema de almacenamiento y energía solar para el hogar totalmente integrado. Diseñada para el ajuste, la comodidad y el estilo, la camiseta presenta un gráfico de puesta de sol junto con nuestra marca denominativa Tesla en la parte delantera y nuestro logotipo T característico impreso sobre 'Solar Roof' en la parte posterior. Hecho de 100% algodón peruano.",
            images: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],
            stock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Deja que el Sol Brille para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta Men's 3D Large Wordmark está hecha de 100% algodón peruano con una marca denominativa Tesla impresa en silicona 3D en el pecho.",
            images: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ],
            stock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta con marca denominativa grande 3D para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta Tesla T Logo está hecha de 100% algodón peruano y presenta un logotipo T impreso en silicona en el pecho izquierdo.",
            images: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            stock: 5,
            price: 35,
            sizes: ['XS','S'],
            tags: ['camiseta'],
            title: "Camiseta con logo T 3D para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para la comodidad y el estilo en cualquier tamaño, la camiseta Tesla Small Wordmark está hecha de 100% algodón peruano y presenta una marca denominativa impresa en silicona 3D en el pecho izquierdo.",
            images: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],
            stock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta con marca denominativa pequeña 3D para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para celebrar el increíble modo de rendimiento de Tesla, la camiseta Plaid Mode presenta un gran ajuste, comodidad y estilo. Hecha de 100% algodón, es la mejor opción después de ir de copiloto en Nürburgring.",
            images: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],
            stock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Modo Plaid para hombre",
            gender: 'hombre'
        },
        {
            description: "Inspirada en nuestra popular batería doméstica, la camiseta Tesla Powerwall está hecha de 100% algodón y presenta la frase 'Pure Energy' debajo de nuestro logotipo característico en la parte posterior. Diseñada para el ajuste, la comodidad y el estilo, la camiseta exclusiva promueve la energía sostenible en cualquier entorno.",
            images: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            stock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Powerwall para hombre",
            gender: 'hombre'
        },
        {
            description: "Inspirada en el Día de la Batería de Tesla y con la celda de batería sin pestañas presentada, la camiseta Battery Day celebra el futuro del almacenamiento de energía y la fabricación de celdas. Diseñada para el ajuste, la comodidad y el estilo, la camiseta Battery Day está hecha de 100% algodón con una celda estilizada impresa en el pecho. Hecho en Perú.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            stock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Día de la Batería para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para una comodidad excepcional e inspirada en el evento de presentación de Cybertruck, la camiseta Cybertruck Bulletproof está hecha de 100% algodón y presenta nuestro icónico ícono de Cybertruck en la parte posterior.",
            images: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            stock: 150,
            price: 30,
            sizes: ['M','L'],
            tags: ['camiseta'],
            title: "Camiseta Cybertruck a prueba de balas para hombre",
            gender: 'hombre'
        },
        {
            description: "Inspirada en el gráfico de confirmación de pedido del Model Y, la camiseta de edición limitada Haha Yes está diseñada para la comodidad y el estilo. Hecha de 100% algodón peruano y con la marca denominativa Tesla en el pecho, la camiseta exclusiva conmemorará tu pedido en los próximos años.",
            images: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            stock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Haha Yes para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de edición limitada S3XY está hecha de 100% algodón con un logotipo 'S3XY' impreso en silicona 3D en el pecho. Hecho en Perú. Disponible en negro.",
            images: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            stock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            tags: ['camiseta'],
            title: "Camiseta S3XY para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de manga larga Men's 3D Wordmark está hecha de 100% algodón y presenta un logotipo de marca denominativa discreto en el pecho izquierdo.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            stock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga larga con marca denominativa 3D para hombre",
            gender: 'hombre'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de manga larga Men's 3D T Logo está hecha de 100% algodón y presenta un logotipo T discreto en el pecho izquierdo.",
            images: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            stock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga larga con logo T 3D para hombre",
            gender: 'hombre'
        },
        {
            description: "Presentamos la colección Tesla Raven. La sudadera con capucha ligera Raven para hombre tiene una silueta relajada y premium hecha de una mezcla de algodón de bambú sostenible. La sudadera con capucha presenta logotipos sutiles de Tesla de poliuretano termoplástico en el pecho y en la manga con un interior de felpa francesa para mayor versatilidad en cualquier temporada. Hecho de 70% bambú y 30% algodón.",
            images: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            stock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sudadera'],
            title: "Sudadera con capucha ligera Raven para hombre",
            gender: 'hombre'
        },
        {
            description: "Presentamos la colección Tesla Chill. La sudadera con capucha Chill Pullover tiene un exterior premium de peso pesado y un interior de forro polar suave para mayor comodidad en cualquier temporada. La sudadera con capucha unisex presenta logotipos sutiles de Tesla de poliuretano termoplástico en el pecho y en la manga, una capucha de doble capa con una sola costura y bolsillos con tiradores de cremallera mate personalizados. Hecho de 60% algodón y 40% poliéster reciclado.",
            images: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            stock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sudadera'],
            title: "Sudadera con capucha Chill",
            gender: 'unisex'
        },
        {
            description: "Presentamos la colección Tesla Chill. La sudadera con capucha y cremallera completa Chill para hombre tiene un exterior premium de peso pesado y un interior de forro polar suave para mayor comodidad en cualquier temporada. La sudadera con capucha presenta logotipos sutiles de Tesla de poliuretano termoplástico en el pecho izquierdo y en la manga, una capucha de doble capa con una sola costura y bolsillos con tiradores de cremallera mate personalizados. Hecho de 60% algodón y 40% poliéster reciclado.",
            images: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            stock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Sudadera con capucha y cremallera completa Chill para hombre",
            gender: 'hombre'
        },
        {
            description: "Presentamos la colección Tesla Chill. El jersey con cremallera de un cuarto Chill para hombre tiene un exterior premium de peso pesado y un interior de forro polar suave para mayor comodidad en cualquier temporada. El jersey presenta logotipos sutiles de Tesla de poliuretano termoplástico en el pecho izquierdo y debajo del cuello trasero, así como un tirador de cremallera mate personalizado. Hecho de 60% algodón y 40% poliéster reciclado.",
            images: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            stock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Jersey con cremallera de un cuarto Chill para hombre - Gris",
            gender: 'hombre'
        },
        {
            description: "Presentamos la colección Tesla Chill. El jersey con cremallera de un cuarto Chill para hombre tiene un exterior premium de peso pesado y un interior de forro polar suave para mayor comodidad en cualquier temporada. El jersey presenta logotipos sutiles de Tesla de poliuretano termoplástico en el pecho izquierdo y debajo del cuello trasero, así como un tirador de cremallera mate personalizado. Hecho de 60% algodón y 40% poliéster reciclado.",
            images: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            stock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            tags: ['camiseta'],
            title: "Jersey con cremallera de un cuarto Chill para hombre - Blanco",
            gender: 'hombre'
        },
        {
            description: "La sudadera con capucha Unisex 3D Large Wordmark Pullover cuenta con forro polar suave y una capucha forrada de jersey ajustable para mayor comodidad y cobertura. Diseñada en un estilo unisex, la sudadera con capucha presenta una marca denominativa impresa en silicona 3D tono sobre tono en el pecho.",
            images: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            stock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            tags: ['sudadera'],
            title: "Sudadera con capucha con marca denominativa grande 3D",
            gender: 'unisex'
        },
        {
            description: "Al igual que el icónico logotipo de Tesla, la sudadera con capucha Cybertruck Graffiti es un clásico en ciernes. Estilo unisex con forro polar suave y una capucha forrada de jersey ajustable para una cobertura cómoda.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            stock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sudadera'],
            title: "Sudadera con capucha Graffiti Cybertruck",
            gender: 'unisex'
        },
        {
            description: "La gorra Relaxed T Logo es una silueta clásica combinada con detalles modernos, con un logotipo T en 3D y un cierre de hebilla de metal personalizado. El diseño ultrasuave es flexible y resistente a la abrasión, mientras que la banda interior para el sudor incluye acolchado acolchado para mayor comodidad y absorción de la humedad. La visera está hecha completamente de botellas de plástico recicladas. 100% algodón.",
            images: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            stock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sombrero'],
            title: "Gorra relajada con logo T",
            gender: 'unisex'
        },
        {
            description: "El gorro Thermal Cuffed Beanie presenta un diseño clásico con un tejido de punto térmico suave para mayor calidez y comodidad. El gorro presenta un parche con el logotipo T de silicona en el dobladillo.",
            images: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            stock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sombrero'],
            title: "Gorro térmico con dobladillo",
            gender: 'unisex'
        },
        {
            description: "La chaqueta acolchada recortada para mujer presenta una silueta recortada única para el estilo moderno perfecto mientras viaja durante la temporada acogedora que se avecina. El acolchado presenta logotipos sutiles de Tesla inyectados en silicona debajo del cuello trasero y en la manga derecha, tiradores de cremallera de metal mate personalizados y un cuello forrado de vellón suave. Hecho de 87% nailon y 13% poliuretano.",
            images: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],
            stock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            tags: ['sudadera'],
            title: "Chaqueta acolchada recortada para mujer",
            gender: 'mujer'
        },
        {
            description: "Presentamos la colección Tesla Chill. La sudadera con capucha recortada con media cremallera Chill para mujer tiene un exterior de forro polar suave de primera calidad y una silueta recortada para mayor comodidad en el estilo de vida cotidiano. La sudadera con capucha presenta un dobladillo elástico que se frunce en la cintura, logotipos sutiles de Tesla de poliuretano termoplástico a lo largo de la capucha y en la manga, una capucha de doble capa con una sola costura y un tirador de cremallera de anillo personalizado. Hecho de 60% algodón y 40% poliéster reciclado.",
            images: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],
            stock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            tags: ['sudadera'],
            title: "Sudadera con capucha recortada con media cremallera Chill para mujer",
            gender: 'mujer'
        },
        {
            description: "Presentamos la colección Tesla Raven. La sudadera holgada de cuello redondo Raven para mujer tiene una silueta relajada y premium hecha de una mezcla de algodón de bambú sostenible. La sudadera holgada presenta una sutil marca denominativa Tesla de poliuretano termoplástico en la manga izquierda y un interior de felpa francesa para una apariencia y sensación acogedoras en cada temporada. Combínalo con tus pantalones de chándal Raven o tu ajuste favorito para llevar. Hecho de 70% bambú y 30% algodón.",
            images: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            stock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['sudadera'],
            title: "Sudadera holgada de cuello redondo Raven para mujer",
            gender: 'mujer'
        },
        {
            description: "Presentamos la colección Tesla Turbine. Diseñada para el estilo, la comodidad y el estilo de vida cotidiano, la camiseta de manga larga recortada Turbine para mujer presenta una sutil marca denominativa Tesla a base de agua en el pecho y nuestro logotipo T debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual con una silueta recortada. Hecho de 50% algodón y 50% poliéster.",
            images: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],
            stock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga larga recortada Turbine para mujer",
            gender: 'mujer'
        },
        {
            description: "Presentamos la colección Tesla Turbine. Diseñada para el estilo, la comodidad y el estilo de vida cotidiano, la camiseta de manga corta recortada Turbine para mujer presenta una sutil marca denominativa Tesla a base de agua en el pecho y nuestro logotipo T debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual con una silueta recortada. Hecho de 50% algodón y 50% poliéster.",
            images: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],
            stock: 0,
            price: 40,
            sizes: ['XS','S'],
            tags: ['camiseta'],
            title: "Camiseta de manga corta recortada Turbine para mujer",
            gender: 'mujer'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta de manga corta con cuello redondo y logotipo T para mujer ultrasuave presenta un logotipo T impreso en silicona 3D tonal en el pecho izquierdo. Hecho de 50% algodón peruano y 50% viscosa peruana.",
            images: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],
            stock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga corta con cuello redondo y logo T para mujer",
            gender: 'mujer'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta de manga larga con cuello redondo y logotipo T para mujer ultrasuave presenta un logotipo T impreso en silicona 3D tonal en el pecho izquierdo. Hecho de 50% algodón peruano y 50% viscosa peruana.",
            images: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],
            stock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga larga con cuello redondo y logo T para mujer",
            gender: 'mujer'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta de manga corta con cuello en V y marca denominativa pequeña para mujer presenta una marca denominativa impresa en silicona 3D tonal en el pecho izquierdo. Hecho de 100% algodón peruano.",
            images: [
                '8765120-00-A_0_2000.jpg',
                '8765120-00-A_1.jpg',
            ],
            stock: 18,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga corta con cuello en V y marca denominativa pequeña para mujer",
            gender: 'mujer'
        },
        {
            description: "Diseñada para el estilo y la comodidad, la camiseta de manga corta con cuello redondo y marca denominativa grande para mujer presenta una marca denominativa impresa en silicona 3D tonal en el pecho. Hecho de 100% algodón pima peruano.",
            images: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],
            stock: 5,
            price: 35,
            sizes: ['XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta de manga corta con cuello redondo y marca denominativa grande para mujer",
            gender: 'mujer'
        },
        {
            description: "Diseñada para celebrar el increíble modo de rendimiento de Tesla, la camiseta Plaid Mode presenta un gran ajuste, comodidad y estilo. Hecha de 100% algodón, es la mejor opción después de ir de copiloto en Nürburgring.",
            images: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],
            stock: 16,
            price: 35,
            sizes: ['S','M'],
            tags: ['camiseta'],
            title: "Camiseta Modo Plaid para mujer",
            gender: 'mujer'
        },
        {
            description: "Inspirada en nuestra popular batería doméstica, la camiseta Tesla Powerwall está hecha de 100% algodón y presenta la frase 'Pure Energy' debajo de nuestro logotipo característico en la parte posterior. Diseñada para el ajuste, la comodidad y el estilo, la camiseta exclusiva promueve la energía sostenible en cualquier entorno.",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            stock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Camiseta Powerwall para mujer",
            gender: 'mujer'
        },
        {
            description: "Totalmente personalizada y con un estilo único, la chaqueta Women's Corp presenta un logotipo 'T' impreso en silicona en el pecho izquierdo y una prominente marca denominativa Tesla en la espalda.",
            images: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],
            stock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Chaqueta Corp para mujer",
            gender: 'mujer'
        },
        {
            description: "Presentamos la colección Tesla Raven. Los pantalones de chándal Raven para mujer tienen una silueta relajada y premium hecha de una mezcla de algodón de bambú sostenible. Los pantalones de chándal presentan una sutil marca denominativa Tesla de poliuretano termoplástico y un logotipo T y un interior de felpa francesa para una apariencia y sensación acogedoras en cada temporada. Combínalos con tu sudadera holgada Raven, tu chaqueta ligera con cremallera Raven u otro ajuste favorito para llevar. Hecho de 70% bambú y 30% algodón.",
            images: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],
            stock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            tags: ['camiseta'],
            title: "Pantalones de chándal Raven para mujer",
            gender: 'mujer'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta de manga larga Kids Cybertruck Graffiti presenta una marca denominativa de graffiti Cybertruck a base de agua en el pecho, una marca denominativa Tesla en el brazo izquierdo y nuestro logotipo T característico en el cuello trasero. Hecho de 50% algodón y 50% poliéster.",
            images: [
                '1742694-00-A_1_2000.jpg',
                '1742694-00-A_3.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta de manga larga Cybertruck para niños",
            gender: 'niño'
        },
        {
            description: "La camiseta Kids Scribble T Logo está hecha de 100% algodón peruano y presenta un logotipo T de Tesla esbozado para que lo use cada joven artista.",
            images: [
                '8529312-00-A_0_2000.jpg',
                '8529312-00-A_1.jpg',
            ],
            stock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta con logo T garabateado para niños",
            gender: 'niño'
        },
        {
            description: "La camiseta Kids Cybertruck presenta la icónica marca denominativa de graffiti Cybertruck y está hecha de 100% algodón peruano para una máxima comodidad.",
            images: [
                '8529342-00-A_0_2000.jpg',
                '8529342-00-A_1.jpg',
            ],
            stock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta Cybertruck para niños",
            gender: 'niño'
        },
        {
            description: "La camiseta renovada Kids Racing Stripe está hecha de 100% algodón peruano, con una raya de carreras recién mejorada con una marca denominativa Tesla cepillada que es perfecta para cualquier corredor de velocidad.",
            images: [
                '8529354-00-A_0_2000.jpg',
                '8529354-00-A_1.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta con raya de carreras para niños",
            gender: 'niño'
        },
        {
            description: "Diseñada para el ajuste, la comodidad y el estilo, la camiseta Tesla T Logo está hecha de 100% algodón peruano y presenta un logotipo T impreso en silicona en el pecho izquierdo.",
            images: [
                '7652465-00-A_0_2000.jpg',
                '7652465-00-A_1.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta con logo T 3D para niños",
            gender: 'niño'
        },
        {
            description: "La camiseta a cuadros está hecha de algodón peruano de grano largo y libre de transgénicos. Perú es el único país del mundo donde el algodón se recoge a mano a gran escala. La tradición de 4.500 años evita daños a la fibra durante el proceso de recolección y elimina la necesidad de utilizar productos químicos para abrir las plantas de algodón antes de la cosecha. Este proceso respetuoso con el medio ambiente da como resultado un algodón suave, fuerte y brillante, y la camiseta se volverá aún más suave con cada lavado.",
            images: [
                '100042307_0_2000.jpg',
                '100042307_alt_2000.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Camiseta a cuadros para niños",
            gender: 'niño'
        },
        {
            description: "Para el futuro viajero espacial con un gusto exigente, un body suave de algodón con cierre a presión en la parte inferior. Etiquetado claro proporcionado en caso de contacto con una nueva civilización espacial. 100% algodón. Hecho en Perú",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            stock: 16,
            price: 25,
            sizes: ['XS','S'],
            tags: ['camiseta'],
            title: "Body Hecho en la Tierra por Humanos",
            gender: 'niño'
        },
        {
            description: "El body Kids Scribble T Logo está hecho de 100% algodón peruano y presenta un logotipo T de Tesla esbozado para que lo use cada pequeño artista.",
            images: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],
            stock: 0,
            price: 30,
            sizes: ['XS','S'],
            tags: ['camiseta'],
            title: "Body con logo T garabateado",
            gender: 'niño'
        },
        {
            description: "Muestre su compromiso con la energía sostenible con este atrevido body para su pequeño. Nota: No evita las emisiones. 100% algodón. Hecho en Perú.",
            images: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S'],
            tags: ['camiseta'],
            title: "Body Cero Emisiones (Casi)",
            gender: 'niño'
        },
        {
            description: "Use su chaqueta bomber Kids Cyberquad durante sus aventuras en Cyberquad para niños. La chaqueta bomber presenta una ilustración estilo graffiti de nuestra silueta Cyberquad y marca denominativa. Con tres bolsillos con cremallera y nuestro logotipo T característico y marca denominativa Tesla impresos a lo largo de las mangas, la chaqueta bomber Kids Cyberquad es perfecta para donde sea que lo lleve el camino. Hecho de 60% algodón y 40% poliéster.",
            images: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],
            stock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Chaqueta bomber Cyberquad para niños",
            gender: 'niño'
        },
        {
            description: "Navegue por el patio de recreo con estilo con la chaqueta Kids Corp. Modelada a partir de la chaqueta original Tesla Corp, la chaqueta Kids Corp presenta el mismo estilo discreto y materiales de alta calidad pero a una escala pequeña.",
            images: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],
            stock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            tags: ['camiseta'],
            title: "Chaqueta Corp para niños",
            gender: 'niño'
        },
    ]
}