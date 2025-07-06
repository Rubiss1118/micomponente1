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

document.addEventListener('DOMContentLoaded', function () {
    const inputContraseña = document.getElementById('inputContraseña');
    const contenedorOjo = document.getElementById('contenedorOjo');
    const globosOculares = contenedorOjo.querySelectorAll('.globo-ocular');
    let esContraseñaVisible = false;
    let intervaloParpadeo;
    let intervaloMirarAlrededor;

    // Función para parpadeo automático
    function iniciarParpadeo() {
        intervaloParpadeo = setInterval(() => {
            if (Math.random() > 0.3) {
                const ojos = contenedorOjo.querySelectorAll('.ojo-individual');
                ojos.forEach(ojo => {
                    ojo.style.animation = 'parpadear 0.3s ease';
                });
                setTimeout(() => {
                    ojos.forEach(ojo => {
                        ojo.style.animation = '';
                    });
                }, 300);
            }
        }, 3000);
    }

    // Movimiento aleatorio de ojos
    function iniciarMirarAlrededor() {
        intervaloMirarAlrededor = setInterval(() => {
            // No mover los ojos si están enojados
            if (contenedorOjo.classList.contains('enojado')) {
                return;
            }

            if (!contenedorOjo.matches(':hover') && Math.random() > 0.6) {
                const x = (Math.random() - 0.5) * 4;
                const y = (Math.random() - 0.5) * 4;

                globosOculares.forEach(globoOcular => {
                    globoOcular.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
                });

                setTimeout(() => {
                    if (!contenedorOjo.classList.contains('enojado')) {
                        globosOculares.forEach(globoOcular => {
                            globoOcular.style.transform = 'translate(-50%, -50%)';
                        });
                        contenedorOjo.classList.remove('mirando');
                    }
                }, 1500);
            }
        }, 4000);
    }

    // Seguimiento del mouse mejorado
    function seguirRaton(e) {
        // No seguir el mouse si el ojo está enojado
        if (contenedorOjo.classList.contains('enojado')) {
            return;
        }

        const rect = contenedorOjo.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;

        // Calcular distancia y ángulo
        const deltaX = e.clientX - centroX;
        const deltaY = e.clientY - centroY;
        const angulo = Math.atan2(deltaY, deltaX);
        const distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Limitar el movimiento dentro del ojo
        const movimientoMaximo = 3;
        const distanciaMovimiento = Math.min(movimientoMaximo, distancia / 30);

        const x = Math.cos(angulo) * distanciaMovimiento;
        const y = Math.sin(angulo) * distanciaMovimiento;

        globosOculares.forEach(globoOcular => {
            globoOcular.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });

        // Cambiar color cuando sigue el mouse (solo si no está enojado)
        if (!contenedorOjo.classList.contains('contraseña-oculta')) {
            contenedorOjo.classList.add('mirando');
        }
    }

    // Seguimiento del mouse en toda la página
    document.addEventListener('mousemove', seguirRaton);

    // Toggle de visibilidad de contraseña con salto y enojo
    contenedorOjo.addEventListener('click', function () {
        esContraseñaVisible = !esContraseñaVisible;

        // Remover clases anteriores
        contenedorOjo.classList.remove('contraseña-visible', 'contraseña-oculta', 'mirando', 'enojado');

        if (esContraseñaVisible) {
            // Mostrar contraseña - ojos verdes (contentos)
            inputContraseña.type = 'text';
            contenedorOjo.classList.remove('llorando');
            contenedorOjo.classList.add('contraseña-visible');
        } else {
            // Ocultar contraseña - salto, enojo y lágrimas
            contenedorOjo.classList.add('enojado'); // Activar enojo y salto
            contenedorOjo.classList.add('llorando');
            contenedorOjo.classList.add('contraseña-oculta');

            setTimeout(() => {
                inputContraseña.type = 'password'
                setTimeout(() => {
                    setTimeout(() => {
                        contenedorOjo.classList.remove('enojado');
                    }, 
                    2000);
                }, 400);
            }, 100);
        }
    });

    // Eventos del mouse
    contenedorOjo.addEventListener('mouseenter', function () {
        clearInterval(intervaloParpadeo);
        clearInterval(intervaloMirarAlrededor);
        contenedorOjo.classList.add('mirando');
    });

    contenedorOjo.addEventListener('mouseleave', function () {
        setTimeout(() => {
            globosOculares.forEach(globoOcular => {
                globoOcular.style.transform = 'translate(-50%, -50%)';
            });
            contenedorOjo.classList.remove('mirando');
        }, 200);
        iniciarParpadeo();
        iniciarMirarAlrededor();
    });

    iniciarParpadeo();
    iniciarMirarAlrededor();

    // Parpadeo al enfocar el input
    inputContraseña.addEventListener('focus', function () {
        const ojos = contenedorOjo.querySelectorAll('.ojo-individual');
        ojos.forEach(ojo => {
            ojo.style.animation = 'parpadear 0.5s ease';
        });
        setTimeout(() => {
            ojos.forEach(ojo => {
                ojo.style.animation = '';
            });
        }, 500);
    });
});


body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
}

.contenedor-contraseña {
    position: relative;
    width: 350px;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.envoltorio-input {
    position: relative;
    width: 100%;
}

#inputContraseña {
    width: 100%;
    padding: 15px 65px 15px 20px;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    height: 54px;
}

#inputContraseña:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.contenedor-ojo {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 30px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ojo {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
}

.ojo-individual {
    position: relative;
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid #333;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.3s ease;
}

.globo-ocular {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #2c3e50;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
}

.pupila {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

.brillo {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    top: 30%;
    left: 30%;
}

/* Animaciones de parpadeo */
@keyframes parpadear {

    0%,
    90%,
    100% {
        transform: scaleY(1);
    }

    95% {
        transform: scaleY(0.1);
    }
}

/* Animación de lágrimas */
.lagrima {
    position: absolute;
    width: 3px;
    height: 8px;
    background: linear-gradient(to bottom, #87ceeb, #4682b4);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    opacity: 0;
    transform: translateY(-5px);
    transition: all 0.5s ease;
}

.lagrima.izquierda {
    bottom: -5px;
    left: 2px;
}

.lagrima.derecha {
    bottom: -5px;
    right: 2px;
}

.contenedor-ojo.llorando .lagrima {
    opacity: 1;
    transform: translateY(15px);
    animation: gota-lagrima 1s ease-out;
}

@keyframes gota-lagrima {
    0% {
        transform: translateY(-5px);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: translateY(20px);
        opacity: 0;
    }
}

/* Animación de pestañas */
.pestañas {
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 4px;
}

.pestañas::before,
.pestañas::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 4px;
    background: #333;
    border-radius: 50%;
}

.pestañas::before {
    left: 2px;
    transform: rotate(-15deg);
}

.pestañas::after {
    right: 2px;
    transform: rotate(15deg);
}

/* Efectos hover */
.contenedor-ojo:hover {
    transform: translateY(-50%) scale(1.05);
}

/* Animación de entrada */
@keyframes entrada-ojo {
    0% {
        transform: translateY(-50%) scale(0);
        opacity: 0;
    }

    50% {
        transform: translateY(-50%) scale(1.2);
    }

    100% {
        transform: translateY(-50%) scale(1);
        opacity: 1;
    }
}

.contenedor-ojo {
    animation: entrada-ojo 0.8s ease-out;
}

/* Colores de ojos diferentes estados */
.contenedor-ojo.contraseña-visible .globo-ocular {
    background: #27ae60;
    box-shadow: 0 0 8px rgba(39, 174, 96, 0.3);
}

.contenedor-ojo.contraseña-oculta .globo-ocular {
    background: #e74c3c;
    box-shadow: 0 0 8px rgba(231, 76, 60, 0.3);
}

.contenedor-ojo.mirando .globo-ocular {
    background: #3498db;
    box-shadow: 0 0 6px rgba(52, 152, 219, 0.4);
}

/* Estado ocultar contraseña - Salto y enojo */
.cejas-enojadas {
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    width: 45px;
    height: 6px;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 10;
}

.ceja {
    position: absolute;
    width: 18px;
    height: 3px;
    background: linear-gradient(135deg, #2c3e50, #34495e);
    border-radius: 1px;
}

.ceja.izquierda {
    left: 3px;
    transform: rotate(25deg);
}

.ceja.derecha {
    right: 3px;
    transform: rotate(-25deg);
}

.contenedor-ojo.enojado .cejas-enojadas {
    transform: translateX(-50%) scale(1);
    opacity: 1;
}

.contenedor-ojo.enojado .ojo-individual {
    animation: salto-ojo-enojado 0.6s ease-out;
}

/* Animación de salto enojado */
@keyframes salto-ojo-enojado {
    0% {
        transform: translateY(0) scale(1);
    }

    20% {
        transform: translateY(-4px) scale(1.1);
    }

    40% {
        transform: translateY(-1px) scale(1.05);
    }

    60% {
        transform: translateY(-3px) scale(1.08);
    }

    80% {
        transform: translateY(0) scale(1.02);
    }

    100% {
        transform: translateY(0) scale(1);
    }
}

/* Efecto de enojo en los ojos */
.contenedor-ojo.enojado .globo-ocular {
    background: #e74c3c;
    box-shadow: 0 0 8px rgba(231, 76, 60, 0.4);
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.3s ease;
}

.contenedor-ojo.enojado .pupila {
    transform: translate(-50%, -50%) scale(1.2);
    transition: transform 0.3s ease;
}

/* Animación de temblor de cejas */
@keyframes temblor-ceja-enojada {

    0%,
    100% {
        transform: translateX(-50%) scale(1);
    }

    25% {
        transform: translateX(-50%) scale(1) rotate(2deg);
    }

    75% {
        transform: translateX(-50%) scale(1) rotate(-2deg);
    }
}

.contenedor-ojo.enojado .cejas-enojadas {
    animation: temblor-ceja-enojada 0.5s ease-in-out 3;
}

/* Texto decorativo */
.etiqueta-contraseña {
    margin-bottom: 10px;
    color: #666;
    font-weight: 500;
} 



![image](https://github.com/user-attachments/assets/88dfef21-9a7b-437b-8e16-f33d01fd5821)

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
