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