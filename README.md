# AlarmMe
Proyecto final del ciclo 2º Desarrollo de Aplicaciones Multiplataforma 2020 del centro Salesianos Triana.

Realizado por:

* [Jose Manuel Bargueño](https://github.com/JMBargueno)
* [Esperanza Macarena Escacena](https://github.com/EsperanzaMacarena)
<br/><br/>
<br/><br/>


## Documentación del seguimiento del proyecto final.
---
Dadas las circunstancias causadas por el COVID-19 y las resoluciones e instrucciones publicadas en el mes de Marzo de 2020 por la Junta de Andalucía y por el Gobierno de España, se ha suspendido las clases presenciales en todas las etapas educativas, causando que el siguimiento de los proyectos finales de nuestra etapa sea de forma telemática.

Para ello, el equipo docente de Salesianos Triana ha marcado una serie de documentación a realizar en diferentes fechas de entrega y es por ello por lo que esta documentación se articulará con los siguientes documentos:


1. [Proyecto de empresa](#EMPRESA)
2. [Descripción detallada del sistema](#DDS)
3. [Documento de historias de usuario](#DHU)
4. [Diagrama UML de AlarmMe API](#UML)
5. [Modelo de la Base de Datos de AlarmMe en MongoDB](#DB)
6. [Sketching web y android](#SKETCHING)
7. [Documentación de rutas AlarmMeAPI](#ROUTES)
8. [Implementación de AlarmMeAPI](#IMP)
9. [Cómo usar las aplicaciones angular y android de AlarmMeAPI](#HOWTO)
10. [Informes de seguimiento del proyecto](#SEGUIMIENTO)
<br/><br/>
<br/><br/>

## Proyecto de empresa AlarmMe.<a name ="EMPRESA"></a>
---
[Proyecto de empresa AlarmMe](./Documentation/ProyectoEmpresaAlarmMe_Bargueno_Escacena.pdf)
<br/><br/>
<br/><br/>

## Descripción detallada del sistema.<a name="DDS"></a>
---
AlarmMe se configura a través de tres aplicaciones:

### API REST AlarmMe
Aplicación realizada con NodeJs, Express y MongoDB. Se realizarán los métodos básicos CRUD de los modelos User, Alarm y Type, además de los convenientes para la ejecución de los requisitos mínimos del sistema.

Estará alojada en heroku:
    
    Repositorio Heroku: https://git.heroku.com/alarm-me-api.git
    URL Heroku: https://alarm-me-api.herokuapp.com/

### AlarmMe Web
La aplicación Web está realizada con Angular Material y está diseñada para el administrador de AlarmMe.
Estará alojada en heroku:
    
    Repositorio Heroku: https://git.heroku.com/alarme-angular.git
    URL Heroku: https://alarme-angular.herokuapp.com/


En esta aplicación podremos:

* Listar usuarios
* Deshabilitar usuarios
* Listar tipos de alarmas: Estas serán las alarmas predefinidas por el sistema, como por ejemplo: Comprar pan.
* Crear un tipo de alarma
* Modificar un tipo de alarma
* Eliminar un tipo de alarma

El usuario administrador será predefinido, a saber:

    Fullname: John Smith
    Email: admin@administrador.com
    Password: 12345678

### AlarmMe App
La aplicación de Android de AlarmMe permite registrar alarmas asociadas a tareas cotidianas, como por ejemplo: comprar el pan, ir al supermercado o sacar dinero. La alarma sonará cuando esté cerca del establecimiento idóneo para realizar esa tarea. Es decir, que si mi alarma es para comprar el pan y estoy acercándome a una panadería o un supermercado, la alarma me avisará de la proximidad de ese negocio y que debo comprar pan.

Para esta funcionalidad, se hará uso de [Places API](https://developers.google.com/places/web-service/intro?hl=es)

Otro tipo de alarma es la del tipo transporte. En este tipo el usuario podrá configurar una alarma cuando se acerque a su destino. Principalmente, esta funcionalidad, se configurará para la red de autobuses del Consorcio de Trasporte de Andalucía. De está forma el usuario podrá ir seguro y relajado al destino, sabiendo que le avisará nuestra app.

Para ello se consultará a la [API de la Red de Consorcios de Transporte de Andalucía](http://api.ctan.es/doc/).

Por último, el usuario podrá elegir un destino a su antojo en un mapa y se hará uso de [Google Maps Android API](https://developers.google.com/maps/documentation/android-sdk/intro).

Para usar la aplicación será necesario registrarse y loguearse.
<br/><br/>
<br/><br/>

## Documento de historias de usuario.<a name="DHU"></a>
---
| ID   |      Historia de usuario      | Usuario  | Esfuerzo  | Asignado a |
|------|:-----------------------------:|:--------:|:---------:|:----------:|
|01.1  | Inicio de sesión  Android     |  Usuario |     6     |E.M.Escacena|
|01.2  | Inicio de sesión  Angular     |  Admin   |     6     |J.M.Bargueno|
|02    | Registro Android              |  Usuario |     6     |J.M.Bargueno|
|03    | Crear alarma predefinida      |  Admin   |     6     |E.M.Escacena|
|04    | Modificar alarma predefinida  |  Admin   |     6     |E.M.Escacena|
|05    | Eliminar alarma predefinida   |  Admin   |     5     |E.M.Escacena|
|06    | Listar alarmas predefinidas   |  Admin   |     5     |E.M.Escacena|
|07    | Listar usuarios               |  Admin   |     5     |J.M.Bargueno|
|08    | Deshabilitar usuario          |  Admin   |     5     |J.M.Bargueno|
|09    | Listar alarmas                |  Usuario |     7     |J.M.Bargueno|
|10    | Crear/Modificar alarma predefinida      |  Usuario |    10     |E.M.Escacena|
|11    | Crear/Modificar alarma transporte       |  Usuario |    10     |J.M.Bargueno|
|12    | Crear/Modificar alarma personalizada    |  Usuario |    10     |E.M.Escacena|
|14    | Eliminar alarma               |  Usuario |     5     |J.M.Bargueno|
|16    | Cerrar sesión                 |  Usuario |     5     |J.M.Bargueno|
|17    | Subir foto de perfil          |  Usuario |     8     |E.M.Escacena|
|18    | Eliminar foto de perfil       |  Usuario |     6     |E.M.Escacena|
|19    | Modificar foto de perfil      |  Usuario |     7     |E.M.Escacena|
|20    | Modificar nombre              |  Usuario |     5     |J.M.Bargueno|
|21    | Modificar contraseña          |  Usuario |     6     |E.M.Escacena|
|22    | Cerrar sesión Angular         |  Admin   |     5     |J.M.Bargueno|

<br/><br/>

Otras tares inherentes a la realización de las historias de usuarios:
| ID   |      Tarea                    | Donde    | Esfuerzo  | Asignado a |
|------|:-----------------------------:|:--------:|:---------:|:----------:|
|100   | Modelo usuario                |   API    |     1     |J.M.Bargueno|
|101   | Modelo alarma                 |   API    |     1     |J.M.Bargueno|
|102   | Modelo tipo                   |   API    |     1     |J.M.Bargueno|
|103   | Endpoint usuario              |   API    |     10    |E.M.Escacena|
|104   | Endpoint alarm                |   API    |     10    |J.M.Bargueno|
|105   | Endpoint tipo                 |   API    |     5     |E.M.Escacena|
|106   | Authentication                |   API    |     6     |J.M.Bargueno|
|108   | Multer - peticiones multipart |   API    |     8     |E.M.Escacena|
|109   | Retrofit API AlarmMe          | Android  |     6     |E.M.Escacena|
|110   | Retrofit API GoogleMaps       | Android  |     6     |E.M.Escacena|
|111   | Retrofit API GooglePlaces     | Android  |     6     |E.M.Escacena|
|112   | Retrofit API Consorcios       | Android  |     6     |J.M.Bargueno|
|113   | Retrofit API Geocoding        | Android  |     6     |J.M.Bargueno|
|114   | Retrofit API Firebase         | Android  |     6     |J.M.Bargueno|
|115   | Servicio API AlarmMe          | Angular  |     6     |J.M.Bargueno|

<br/><br/>


Total de puntos de esfuerzo de cada alumno:

#### J.M. Bargueno
|      Donde    | Puntos    |
|:-------------:|:---------:|
| Angular       | 27        |
| Android       | 61        |
| API           | 24        |
| Total         | 112       |

#### E.M. Escacena
|      Donde    | Puntos    |
|:-------------:|:---------:|
| Angular       | 22        |
| Android       | 71        |
| API           | 23        |
| Total         | 116       |

<br/><br/>
<br/><br/>

## Diagrama UML de AlarmMe API.<a name="UML"></a>
---
![Diagrama UML](./Documentation/AlarmMeUML.jpg)
<br/><br/>
<br/><br/>

## Modelo de la Base de Datos de AlarmMe en MongoDB.<a name="DB"></a>
---
```javascript
const userSchema = new Schema({
    email: {
      type: String,
      match: /^\S+@\S+.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    fullname: {
      type: String,
      index: true,
      trim: true
    },
    role: {
      type: String,
      enum: roles,
      default: 'user'
    },
    picture: imgSchema,
    enabled: {
      type: Boolean,
      default: true
    },
  }, {
    timestamps: true
  })
```
```javascript
const typeSchema = new Schema({
    description: {
      type: String
    },
    typePlaces: {
      type: String,
      enum: [typePlaces],
      default: "UNKNOWN"
    },
    ubication: {
      type: String
    }
  })
```
```javascript
const alarmSchema = new Schema({
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Type',
      required: false
    },
    done: {
      type: Boolean
    },
    activated: {
      type: Boolean
    }
  })
```
<br/><br/>
<br/><br/>

## Sketching web y android.<a name="SKETCHING"></a>
---
[Sketching](./Documentation/SketchingAlarmMe.pdf)
<br/><br/>
<br/><br/>

## Documentación de rutas de AlarmMeAPI.<a name="ROUTES"></a>
---
[Documentación de rutas](/api/DocumentationRoutesAlarmMeAPI.md)
<br/><br/>
<br/><br/>

## Implementación de AlarmMeAPI.<a name ="IMP"></a>
---
### API REST AlarmMe

#### Carpeta models
En este paquete se definen las clases POJO del API:

##### Alarm
Tendrá un título y se le asociará un tipo de alarma y una ubicación. Dependiendo del tipo de alarma, si es de tipo transporte o no, debe guardarse en ubicación la localización (latitud y longitud) de la parada del autobús o la ubicación del usuario en ese moemnto. También tiene un atributo para señalar si está activada o no la alarma, para que, si el usuario necesita una alarma recurrente, le sea fácil volverla a activar.

##### Type
Es el modelo que configura las alarmas predefinidas. Contiene un campo descriptivo de la alarma y un campo que contiene el tipo de negocio o lugar al que se le asocia la tarea que se describe. El tipo de negocio o lugar es un enum que contiene los siguientes valores:
````javascript
 enum:  [
        'ATM',
        'BAKERY',
        'BANK',
        'BOOK_STORE',
        'PHARMACY', 
        'DRUGSTORE',
        'BICYCLE_STORE',
        'STORE',
        'SUPERMARKET',
        'PET_STORE',
        'TRANSPORT',
        'GO_TO'
    ],
````
Estos tipos se corresponden a los tipos de lugares listados en el [Google Place API](https://developers.google.com/places/web-service/supported_types?hl=es)

##### User
Es el modelo que dibuja el usuario, el cual tendrá los atributos email, fullname, password, role y picture. 

El rol puede ser admin o user.

Picture es un objeto que contiene dos atributos: data y el tipo de imagen.
<br/><br/>

#### Carpeta controller

##### Alarm

* Método newAlarm

Crea una nueva alarma. Recibe en el body los siguientes atributos:
````javascript
name: String,
type: Schema.ObjectId,
ubication: [String]
````
El atributo activated se seteará como true por defecto y se cogerá de la request el id del usuario para setearlo en el atributo createdBy.

* Método editAlarm

Modifica el campo activado de una alarma existente. Recibe por parámetro en la url el id de la alarma y en el body debe recibir:
````javascript
done: boolean
````

* Método deleteAlarm

Elimina una alarma existente. Debe recibir por parámetro en la url el id de la alarma.

* Método getAll

Lista todas las alarmas.

* Método getById

Devuelve la alarma solicitada por parámetro en la url.

* Método getByUserId

Devuelve todas las alarmas de un usuario en concreto. 

* Método activateOrDeactivate

Activa o desactiva una alarma. Recibe el id de la alarma por parámetro en la url.

##### Type

* Método register

Crea un nuevo tipo de alarma predefinida. Se le pasa un body con los siguientes parámetros:
````javascript
description: String,
 places: String
````
Recordamos que el campo places debe ser alguno de las siguientes cadenas:
````javascript
 enum:  [
        'ATM',
        'BAKERY',
        'BANK',
        'BOOK_STORE',
        'PHARMACY', 
        'DRUGSTORE',
        'BICYCLE_STORE',
        'STORE',
        'SUPERMARKET',
        'PET_STORE',
        'TRANSPORT',
        'GO_TO'
    ],
````

* Método getAll

Obtiene todos los tipos de alarma predefinidas.

* Método update

Modifica una alarma predefinida. Debe recibir el mismo body que el método register.

* Método delete

Elimina una alarma por el id pasado por parámetro en la url.

* Método getOne

Devuelve un tipo de alarma predefinido en concreto. El id se pasa por parámetro en la url.

* Método getPlaces

Devuelve el enum de los tipos de lugares a los que se le debe asociar a un tipo de alarma predefinida.

##### User

* Método register

Método que registra un nuevo usuario. recibe en el body:
```` javascript
 email: String,
 fullname: String,
 password: String
````
La contraseña es codificada.

* Método login

Loguea al usuario en nuestra aplicación. Recibe en el body:
```` javascript
 email: String,
 password: String
````
Devuelve el email y nombre del usuario y un token.

* Método getUsers

Lista a todos los usuarios. Sólo puede hacerlo el administrador.

* Método getMe

Devuelve el usuario logueado actual.

* Método updateName

Modificación el nombre del usuario actual por el usuario actual. Recibe en el body un único parámetro
```` javascript
 fullname: String
````

* Método updateImg

Modificación la imagen del usuario actual por el usuario actual. 

* Método updatePassword

Modificación de la contraseña del usuario actual por el usuario actual.

* Método disabledUser

Deshabilita un usuario, realizado únicamente por el administrador.

* Método deleteImg

Elimina la foto del usuario actual por el usuario actual.

* Método getImg

Devuelve la foto del usuario actual, demandada por el usuario actual
<br/><br/>

#### Carpeta Routes

[Puede ver la documentación de este paquete en el siguiente aquí](/api/DocumentationRoutesAlarmMeAPI.md)
<br/><br/>

#### Carpeta Middleware
En este paquete se configura los diferentes middlewares de la aplicación.

* Método ensureAuthenticated: verifica que la petición sea hecha por un usuario autenticado.

* Método endureAuthenticatedAndAdmin: verifica que la petición sea realizada por un usuario con rol administrador.

* Método errorHandler: maneja los errores que pueda surgir durante la petición.

<br/><br/>
<br/><br/>

### Aplicación AlarmMe Angular - Interfaz Administrador

#### Directorio dashboard

* Componente login: sirve para loguear al usuario con interfaz.

* Componente tipo-lista: se encarga de listar los tipos de alarma predefinidas y mostrar las opciones CRUD.

* Compontente tipo-create-dialog: diálogo que se encarga de crear o modificar un tipo de alarma predefinida.

* Componente tipo-delete-dialog: diálogo que se encarga de verificar si el administrador quiere eliminar un tipo de alama y si confirma, elimina.

* Componente user-list: lista a todos los usuarios y muestra la opción de deshabilitar usuario.

* dashboard.routing.ts: contiene las rutas de estos componentes.

* dashboard.module.ts: contiene los modules añadidos al proyecto.


<br/><br/>
<br/><br/>

### Aplicación AlarmMe Android - Interfaz Usuario.

#### Paquete client 
En este paquete se encuentran los clientes Retrofit e interceptores que actúan sobre las peticiones.

* Clase AlarmMeAPI: Cliente de retrofit que actúa sobre el api de nuestra plataforma.

* CtanAPI: Cliente de retrofit que actúa sobre el api del consorcio de transporte de Andalucía

* GoogleAPI: Cliente de retrofit que actúa sobre los servicios de Google

* InterceptorGoogleQueryToken: Interceptor para añadir el apikey a las peticiones de Google

* InterceptorToken: Interceptor que sirve para añadir el token de autorización al las peticiones del api de alarme
<br/><br/>

#### Paquete common
Clases de configuración e información general para el funcionamiento del proyecto.

* Constants: Clase con ciertas constantes para el uso adecuado del app

* MyApp: Clase para conseguir el contexto

* SharedPreferenceManager: Clase para usar de manera mas sencilla SharedPreference
<br/><br/>


#### Paquete model
Paquete que contiene clases modelos, en concreto, de objetos de Google Place API.
<br/><br/>

#### Paquete receiver
En este paquete se configura el geovallado, tanto el servicio como el receptor.

* GeofenceBroadcastReciever: configura el receptor del geovallado cuando el usuario está cerca de la ubicación dada. Para ello deberá darse al geovallado un radio, en metros, una duración y la ubicación del destino. Android developer recomienda un radio mínimo de 100 metros. Este receptor lo conecta con la siguiente clase, que es el servicio.

* GeofenceTransitionsIntentService: trata el comportamiento en la app cuando recibe que el usuario está cerca de su destino. En esta clase se configura también una notificación.

* GeofenceErrorMessages: maneja los errores del geovallado.
<br/><br/>

#### Paquete repository
Paquete donde se encuentran los repositorios del proyecto, son las clases que se encargan de hacer la conexión entre los viewmodels y el cliente.
<br/><br/>

#### Paquete request
Paquete que contiene todos los modelos de cuerpos de petición de las apis.
<br/><br/>

#### Paquete response
Paquete que contiene todos los modelos de respuesta de las peticiones de la api.
<br/><br/>

#### Paquete service
Paquete donde se encuentran las clases servicios que contienen las peticiones a las apis.


#### Activities

* MainActivity: Establece el login de la app.

* RegisterActivity: Establece el registro de un usuario. Una vez registrado loguea al usuario de forma automática.

* BoardActivity: Contiene los siguientes fragments que configuran el grueso de la app:
    
    * AlarmFragment: lista las alarmas. En esta lista se puede activar o desactivar una alarma, se puede acceder a crear una alarma, al perfil o se puede desconectar el usuario. Además en este fragmento se inican los geovallados de las alarmas listadas.

    * ProfileFragment: se muestra la información del usuario y las opciones de modificar esta información.

* AlarmCreateActivity: Aquí creamos una alarma. Dependiendo de si es de transporte o no, se mostrará unos campos u otros. Además, hay un método que recoge la última localización del usuario para poder darle la ubicación a la alarma y así crear el geovallado.
<br/><br/>


## Cómo usar las aplicaciones angular y android de AlarmMeAPI.<a name ="HOWTO"></a>
---
### AlarmMe Angular
Puede encontrar esta aplicación desplegada en Heroku a través del siguiente enlace: [Angular web](https://alarme-angular.herokuapp.com/).

Puede probar esta aplicación con el siguiente usuario administrador:

    email: admin@administrador.com
    pass: 12345678

También, puede clonar este mismo repositorio y abrir la carpeta angular-app en Visual Studio Code, o similar. Sólo tendrá que ejecutar desde el terminal para obtener todo lo necesario para la compilación el siguiente comando:
````
npm i 
````
Posteriormente, para ejecutarlo en el localhost, debe ejecutar:
````
ng serve -o
````

Se abrirá la aplicación angular en su navegador predeterminado. No recomendamos el uso de Internet Explorer.

<br/><br/>

### AlarmMe Android
En este caso, puede encontrar la apk en la raíz del repositorio para instalarlo en su smartphone android.

También puede importar el proyecto y abrirlo en Android Studio y probarlo en el emulador o bien, conectar su móvil para que se realice la instalación via usb activando el modo desarrollador.

En este caso, debe crear un archivo en la raíz del proyecto android llamado:

    apikey.properties
  
E insertar una variable de entorno llamada MIGUEL_GRACIAS_KEY, cuyo valor debe ser la API KEY de Google Maps. Ejemplo:

    MIGUEL_GRACIAS_KEY="AHoihg98789giohIHGhgoia"

Para probar esta aplicación puede registrarse con Google o creando un perfil nuevo o bien puede loguearse con el siguiente usuario:
    	
      email: usuario@usuario.com
      password: 12345678

<br/><br/>
<br/><br/>

## Informes de seguimiento del proyecto.<a name ="SEGUIMIENTO"></a>
---
#### 17 Marzo 2020
[Informe 01](./Informes/Entrega_17032020/INF01_17032020.pdf)

#### 18 Marzo 2020
[DSP 01](./Informes/Entrega_18032020/DSP18032020.pdf)

[Colección Postman](./ApiAlarmMe.postman_collection.json)

[Datos de usuarios de prueba](./Informes/Entrega_18032020/DatosUsuarioAProbar.txt)

### 19 Marzo 2020
[DSP 02](./Informes/Entrega_19032020/DSP19032020.pdf)

### 20 Marzo 2020
[DSP 03](./Informes/Entrega_20032020/DSP20032020.pdf)

### 23 Marzo 2020
[DSP 04](./Informes/Entrega_23032020/DSP23032020.pdf)

### 26 Marzo 2020
[DSP 05](./Informes/Entrega_26032020/DSP26032020.pdf)

### INFORME FINAL DEL PROYECTO
[INF02](./Informes/INF02_InformeFinalProyecto.pdf)
<br/><br/>
<br/><br/>
