# MD Digital Solutions challenge: Frontend
 Prueba con el objetivo primordial de identificar las capacidades de resolución de problemas en el 
desarrollo de aplicaciones y las habilidades en programación.

Con el fin de facilitar la visualización de los ejercios se realizó un index.html alojado en una GitHub page.

https://ianmuler.github.io/challengeMDDS

## Solicitud R2
Se realizó una web R2.html, maquetando una tabla de datos de ejemplo, teniendo en cuenta responsive mobile, tablet y web, solo utilizando html y css.

### Resolución:    

![](https://i.ibb.co/yqRJDFt/R2-Presentaci-n.jpg)
* Se utilizaron elementos de lista con flexbox. En la vista mobile se utilizan botones para trasladarse entre listas.

## Solicitud R3
Se creó una web R3.html maquetando el diseño suministrado de forma responsive. Al dar click en el botón play se reproduce un video en un modal.
Se utizó HTML, CSS y Javascript. 

### Resolución:    

![](https://i.ibb.co/6RW7BqL/R3-Presentaci-n.jpg)
* Al pasar a la vista tablet el elemento flex cambia su dirección a columna. Mediante Javascript se elimina la clase que mantiene oculto al modal y se inserta un video desde YouTube.

## Solicitud R4
Se creó un pagina R4.html para consumir un servicio gratuito de datos. La información de la API fue listada en una tabla con diseño similiar a la solicitada en R2.

* APIs de referencia:
    * API de clima: https://weatherstack.com/product
    * API de noticias: https://mediastack.com/product

### Resolución:    

![](https://i.ibb.co/Bs446TC/R4-Presentaci-n.jpg)
* Una vez obtenidos los datos de la API fueron colocados en un array y se realizó un mapeo del mismo.
Por cada item se insertó en el HTML una lista los elementos solicitados.<br>
En la vista tablet se colocaron botones que modifican el valor scroll de window, esto con el fin de trasladarse verticalmente entre listas.
