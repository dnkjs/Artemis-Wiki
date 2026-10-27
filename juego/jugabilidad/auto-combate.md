# Auto Combate

El **Combate Automático** en **Artemis Dofus 2.51** es un sistema inteligente que permite delegar el control de tus batallas a la IA del servidor. La IA ejecutará tus hechizos y movimientos automáticamente para optimizar y agilizar tus sesiones de farmeo.

---

## ⚡ Comandos del Sistema

En Artemis, dispones de dos comandos dedicados en el chat:

<div class="cmd-box">
  <div class="cmd-name">.autocombat</div>
  <p>Activa o desactiva el combate automático del personaje. Al activarlo, el personaje también activa automáticamente el modo de <strong>preparación rápida en SOLO (ready solo)</strong> para comenzar las batallas de inmediato sin demoras.</p>
</div>

<div class="cmd-box">
  <div class="cmd-name">.autocombatinfo</div>
  <p>Consulta en tiempo real la cantidad de tiempo restante que tienes disponible para el día actual. El servidor te responderá en el chat con el formato exacto: <code>Te quedan Xh Ym Zs de uso del combate automático.</code></p>
</div>

> [!IMPORTANT]
> Debes estar **fuera de combate** para activar o desactivar `.autocombat`. Si intentas ejecutarlo durante una pelea, el servidor te indicará: *«Debes estar fuera de combate para activar o desactivar el combate automático.»*

---

## 🕛 Tiempos Disponibles por Rango

El límite diario de combate automático depende directamente del rango de tu cuenta:

| Rango de Cuenta | ⏳ Tiempo Diario Disponible | 🎯 Acceso al Comando |
| :--- | :---: | :---: |
| **Común (Jugador Base)** | `0 Minutos` | ❌ Requiere rango VIP 1 o superior |
| **MINI VIP (VIP 1)** | **`30 Minutos`** | ✅ Habilitado |
| **Rango VIP** | **`1h 30m` (90 Minutos)** | ✅ Habilitado |
| **RANGO PREMIUM** | **`3 Horas` (180 Minutos)** | ✅ Habilitado |
| **Rangos Superiores / ACI** | **`24 Horas` (Ilimitado)** | ✅ Habilitado |

> [!TIP]
> **¡Solo se descuenta el tiempo real de batalla!**
> A diferencia de otros servidores donde el temporizador corre de forma continua aunque estés quieto, en Artemis el tiempo **únicamente se descuenta durante la duración neta de tus combates**. Si caminas por el mapa, chateas o estás fuera de batalla, tu tiempo permanece intacto.

### 🔄 Reinicio Diario
El contador se reinicia automáticamente **cada nuevo día con tu primer inicio de sesión**. Al conectar en un nuevo día, recibirás el mensaje verde del servidor:
`«El contador de uso del combate automático se ha reiniciado.»`

---

## 🚫 Restricciones y Desactivación Automática

Por equilibrio del juego, el combate automático se desactiva de forma automática en los siguientes escenarios especiales:

* ⚔️ **Combates PvP:** Prohibido en cualquier combate entre jugadores y en la sub-área 877 (*«El combate automático se ha desactivado porque no está permitido en combates PvP.»*).
* 👾 **Monstruos de Evento o Nani:** Desactivado de inmediato si en el mapa se encuentra un monstruo de evento o Nani (*«El combate automático se ha desactivado porque hay monstruos de evento en el mapa.»*).
* 👥 **Modo Multicuenta (.join):** No puedes usar combate automático mientras seas el líder de grupo con `.join` (*«No puedes utilizar el combate automático mientras estés en '.join'. Se ha desactivado.»*).
* 🌊 **Mazmorras de Oleadas:** Mapas con sistema de olas infinitas o wave spawns.
* 📍 **Mapas Protegidos:** Mapas y sub-áreas restringidas del servidor (*«El combate automático se ha desactivado porque no está permitido en este mapa.»*).
* ⏱️ **Límite Diario Agotado:** Al alcanzar tu tiempo diario (*«Has alcanzado el límite diario de uso del combate automático para tu rango.»*).

---

## 🔮 Lógica de Hechizos y Optimización

Para exprimir al máximo la IA de combate, ten en cuenta estas recomendaciones clave:

1. **Limpia tus barras de hechizos:** La IA selecciona hechizos basados en los que tengas colocados en tu barra activa. Quita los hechizos que no quieras que lance (como invocaciones innecesarias o hechizos de posicionamiento perjudiciales).
2. **Clases Cuerpo a Cuerpo (Yopuka, Sacrógrito):** Si juegas con clases de contacto, lleva equipado un hechizo de desbloqueo o que otorgue el estado No Placable para evitar que la IA quede inmovilizada contra varios enemigos.
3. **Prueba previa:** Antes de dejar a tu personaje contra grupos difíciles o jefes, realiza una pelea de prueba contra monstruos menores para conocer la prioridad de lanzamiento de la IA con tu build actual.
