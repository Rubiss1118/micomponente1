TECNOLÓGICO NACIONAL DE MEXICO

                 INSTITUTO TECNOLÓGICO DE OAXACA			

		 Departamento de Ingeniería en Sistemas Computacionales

		 Materia:PROGRAMACION WEB

		 “Componente visual  Enlace de repositorio de Github y/o GitHub Pages”

		 Profesor: Martinez Nieto Adelina

	  Equipo: 
		MORALES OSORIO RUBI ESMERALDA 
		JIMENEZ CASTILLEJOS FABIAN DE JESUS

	  Grupo:   VSI
	  Oaxaca de juarez  a 05 de julio de 2025.

   Nombre de la librería:
   # componente
Descripción: Componente interactivo que añade un ojo animado a campos de contraseña, proporcionando feedback visual intuitivo sobre la visibilidad de la contraseña. El ojo reacciona con diferentes emociones: contento al mostrar la contraseña, enojado y llorando al ocultarla, además de seguir el cursor del mouse para una experiencia más inmersiva.

# Qué problema resuelve?

Mejora la experiencia de usuario en formularios de contraseña
Proporciona feedback visual claro sobre el estado de visibilidad
Hace más atractivos e interactivos los campos de contraseña
Reduce la confusión sobre si la contraseña está visible u oculta

# Instalación
Método 1: Descarga directa

Descarga los archivos del repositorio
Incluye los archivos en tu proyecto:

html<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Página</title>
    <link rel="stylesheet" href="css/componente.css">
</head>
<body>
    <!-- Tu contenido aquí -->
    <script src="js/componente.js"></script>
</body>
</html>
Método 2: Clonar repositorio
bashgit clone https://github.com/Rubiss1118/componente.git
cd componente

# Funcionalidades incluidas

👁️ Seguimiento del mouse: Los ojos siguen el cursor por toda la página
😊 Estados emocionales:

Verde (contento) cuando la contraseña es visible
Rojo (enojado) cuando se oculta la contraseña
Azul (siguiendo) cuando rastrea el mouse


💧 Lágrimas animadas: Aparecen cuando se oculta la contraseña
👀 Parpadeo automático: Los ojos parpadean naturalmente cada 3 segundos
🤾 Animación de salto: El ojo "salta" enojado al ocultar la contraseña
📱 Responsive: Se adapta a diferentes tamaños de pantalla
# Personalización
Puedes modificar los colores y animaciones editando las variables CSS:
css/* Cambiar colores de estados */
.contenedor-ojo.contraseña-visible .globo-ocular {
    background: #27ae60; /* Verde para visible */
}

.contenedor-ojo.contraseña-oculta .globo-ocular {
    background: #e74c3c; /* Rojo para oculta */
}

.contenedor-ojo.mirando .globo-ocular {
    background: #3498db; /* Azul para siguiendo */
}
# Capturas de pantalla
1. iniciarParpadeo()
   Qué hace: Hace que los ojos parpadeen automáticamente cada 3 segundos con 70% de probabilidad, como ojos reales.
2. iniciarMirarAlrededor()
   Qué hace: Mueve los ojos aleatoriamente cada 4 segundos cuando no hay interacción, simulando que "mira alrededor".
3. seguirRaton(e)
   Qué hace: Hace que las pupilas sigan el cursor del mouse por toda la página usando cálculos matemáticos.
4. Click en el ojo
   Qué hace: Cambia entre mostrar/ocultar contraseña y aplica diferentes emociones al ojo.
5. Mouse enter (entrar con el mouse)
   Qué hace: Cuando pasas el mouse sobre el ojo, detiene las animaciones automáticas y cambia a color azul.
6. Focus en el input
   Qué hace: Cuando haces clic en el campo de contraseña, los ojos parpadean para "saludar".
   <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ojo Animado para Contraseña</title>
    <link rel="stylesheet" href="css/componente.css">
    <script src="js/componente.js" defer></script>
</head>

<body>
    <div class="contenedor-contraseña">
        <div class="etiqueta-contraseña">Ingresa tu contraseña</div>
        <div class="envoltorio-input">
            <input type="password" id="inputContraseña" placeholder="••••••••">
            <div class="contenedor-ojo" id="contenedorOjo">
                <div class="cejas-enojadas">
                    <div class="ceja izquierda"></div>
                    <div class="ceja derecha"></div>
                </div>
                <div class="ojo">
                    <div class="ojo-individual">
                        <div class="pestañas"></div>
                        <div class="globo-ocular">
                            <div class="pupila">
                                <div class="brillo"></div>
                            </div>
                        </div>
                        <div class="lagrima izquierda"></div>
                    </div>
                    <div class="ojo-individual">
                        <div class="pestañas"></div>
                        <div class="globo-ocular">
                            <div class="pupila">
                                <div class="brillo"></div>
                            </div>
                        </div>
                        <div class="lagrima derecha"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

![image](https://github.com/user-attachments/assets/7a343039-de8c-4b02-90bc-4b8125329575)

![image](https://github.com/user-attachments/assets/c061742a-4413-425f-9580-d69a90b861c3)

![image](https://github.com/user-attachments/assets/745febbf-f2e8-4ee9-b1b4-269b3b457024)

![image](https://github.com/user-attachments/assets/62a46899-8ec8-4141-af08-1316ae49e853)

![image](https://github.com/user-attachments/assets/87e8ca90-0db0-4f5d-ab6b-f60b3f1b921a)




# Vídeo de demostración

El video muestra:

Cómo el ojo sigue el cursor del mouse
Transición entre estados (visible/oculto)
Animaciones de parpadeo y salto
Interactividad completa del componente

# GitHub Pages
Demo en vivo:
