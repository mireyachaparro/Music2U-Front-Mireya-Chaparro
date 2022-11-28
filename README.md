# Título
E-commerce de musica
No sé que titulo poner

## Descripción
Aplicación para vender álbumes de segunda mano.
Para acceder a ella, el usuario debe loguearse. 
Si el usuario no tiene cuenta, deberá registrarse.
Si el usuario ha olvidado su contraseña, podrá restaurarla vía email.

Una vez ha accedido, el usuario verá los 8 últimos CDS y los últimos 8 vinilos subidos por los usuarios con la opción de ver más de cada uno.

Cuando el usuario haga clic en cualquier botón para ver más, verá 24 productos por página de ese formato elegido. cada producto muestra la imagen del disco y el precio.

En la página de detalle del producto, el usuario podrá ver toda la información del álbum.

En la página de inicio, hay un icono + para que el usuario pueda añadir un álbum para vender, tendrá que rellenar un formulario para subir toda la información del producto. Adicionalmente, aparece un botón para comprar y otro para añadir a favoritos.

En la página de favoritos aparecerá la lista de los productos que el usuario haya ido añadiendo a favoritos, con su imagen, nombre, artista, precio y un icono de corazón para eliminarlo de favorito.

Cuando el usuario va a su perfil, aparecerá su nombre y apellido, y los álbumes que ha subido para vender, con la opción de editarlos. 
puede editar cualquier campo, y también puede eliminar el producto.

Cuando alguien le de a comprar en un producto, ese producto sigue apareciendo pero con la imagen agrisada, y en los detalles no aparecerán los botones para comparar ni añadir a favoritos.

## Modelo de datos
```JavaScript
User = {
    id: Types.ObjectId;
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string | Date;
    favorites: Array<Types.ObjectId>;
    possessions: Array<Types.ObjectId>;
};

Albums= {
    id: Types.ObjectId;
    name: string;
    artist: string;
    image: number;
    year: number;
    gender: string;
    format: number;
    price: string;
    sold: boolean;
    owner: Types.ObjectId;
};
```

## Endpoints
### USERS
[POST] /register → Recibe datos al registrar a un usuario.

[POST] /login → Recibe datos del usuario para comprobar si está creado en la BD.

[PATCH] /user/addfav/:id → Actualiza la propiedad favorites del usuario añadiendo el album recogido por id

[PATCH] /user/deletefav/:id → Actualiza la propiedad favorites del usuario borrando el album recogida por id


### ALBUMS
[GET] / → Devuelve un array con todos los álbumes

[GET] /:id → Devuelve un objeto con el album que contiene el id de la query

[POST] / → Crea un álbum en la base de datos → devuelve el objeto creado

[PATCH] /:id → Edita el objeto con ese id → devuelve el objeto modificado

[DELETE] /:id → Elimina el objeto con ese id → devuelve un objeto vacío

## Front Components
|Page|Name|Responsability|
|----|----|--------------|
|Home Page|home|- renderiza home.cd.lis y home.vinyl.list y simbolo + para añadir albumes|
|Home Page|home.cd.list|- definimos el store en el que vamos a trabajar - usamos el método para cargar los items definido en el useEffect - renderiza la lista de los últimos 8 CDs - filtro → format: cd - método map para recorrer el array - el map tiene una key (id del item) - renderiza “ver más” para ir a la página CD|
|Home Page|home.cd.item|- definimos el store en el que vamos a trabajar - renderiza cada ítem de la lista - el item solo tiene imagen|
|Home Page|home.vinyl.list|- definimos el store en el que vamos a trabajar - usamos el método para cargar los items definido en el useEffect - renderiza la lista de los últimos 8 vinilos - filtro → format: vinyl - método map para recorrer el array - el map tiene una key (id del item) - renderiza “ver más” para ir a la página vinyl|
|Home Page|home.cd.item|- definimos el store en el que vamos a trabajar - renderiza cada ítem de la lista - el item solo tiene imagen|
|Details Page|details|- renderiza los detalles del ítem con ese id - renderiza los botones para añadir al carrito / favoritos|
|CD Page|cd.list|- definimos el store en el que vamos a trabajar - usamos el método para cargar - los items definido en el useEffect - renderiza la lista con 24 ítems con paginación - filtro → format: cd - método map para recorrer el array - el map tiene una key (id del item)|
|CD Page|cd.item|- definimos el store en el que vamos a trabajar - renderiza cada ítem de la lista - el ítem tiene imagen y precio|
|Vinyl Page|vinyl.list|- definimos el store en el que vamos a trabajar - usamos el método para cargar - los items definido en el useEffect - renderiza la lista con 24 ítems con paginación - filtro → format: vinyl - método map para recorrer el array - el map tiene una key (id del item)|
|Vinyl Page|vinyl.item|- definimos el store en el que vamos a trabajar - renderiza cada ítem de la lista - el ítem tiene imagen y precio|
|Add Page|add|- define el modelo del formulario - define el estado inicial del formulario - trae la función para añadir elementos a la base de datos - define el método que recoge los datos que el usuario ha escrito en el formulario - define el método para añadir esos datos a la base de datos - renderiza el formulario para añadir un album|
|Favorites Page|favorites.list|- definimos el store en el que vamos a trabajar - usamos el método para cargar los items definido en el useEffect - renderiza la lista con los usuarios del usuario - método map para recorrer el array - el map tiene una key (id del item)|
|Favorites Page|favorites.item|- definimos el store en el que vamos a trabajar - renderiza cada ítem de la lista - el ítem tiene imagen, name, artist, price, y corazón|
|MyAlbums Page|myalbums.list|- definimos el store en el que vamos a trabajar - usamos el método para cargar los items definido en el useEffect - renderiza la lista con los usuarios del usuario - método map para recorrer el array - el map tiene una key (id del item)|
|MyAlbums Page|myalbums.item|- definimos el store en el que vamos a trabajar - renderiza cada ítem de la lista - el ítem tiene imagen y un lápiz para editarlo|
|Edit Page|edit|- define el modelo del formulario - define el estado inicial del formulario, que son los valores que valen en el presente - trae el metodo editar desde el hook para editar elementos a la base de datos - define el método que recoge los datos que el usuario ha escrito en el formulario - trae el método desde el hook para editar esos datos en ese registro - renderiza el formulario para editar un álbum - renderiza el boton guardar con el metodo editar del hook - renderiza el boton eliminar con el metodo eliminar del hook|
| ! |header|renderiza el logo, icono de favoritos, icono de carrito e icono de cuenta|
| ! |login| ! |
| ! |register| ! |
