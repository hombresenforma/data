// Este archivo contiene la base de datos completa de ejercicios.
// Usamos "export default" para que pueda ser importado desde otros archivos.

const exerciseVideoUrls = {
    // =================================================================
    // MOVILIDAD
    // =================================================================
    "Movilidad - General": {
        videoUrl: "https://youtu.be/5oPBRo8oaag",
        notes: "La velocidad está subida, cámbiala a x0.75 si quieres seguirlo a velocidad real."
    },
    "Movilidad - Muñecas": {
        videoUrl: "https://youtu.be/LchMtqRxkUw",
        notes: "Cuidado con los apoyos."
    },
    "Movilidad - Cintura Escapular": {
        videoUrl: "https://youtu.be/qFt3RmTDmXI",
        notes: "Estabilizando el tronco con mucho control motor."
    },
    "Movilidad - Activación de Escápulas": {
        videoUrl: "https://youtu.be/6Kj_rg_7tYQ",
        notes: "Buscar control motor."
    },
    "Movilidad - Columna": {
        videoUrl: "https://youtu.be/48_aYaSLNRY",
        notes: "Exagerar las curvaturas."
    },
    "Movilidad - Cintura Pélvica": {
        videoUrl: "https://youtu.be/zoEdWDF5EiA",
        notes: "Buscar control motor."
    },
    "Movilidad - De Cadera": {
        videoUrl: "https://youtu.be/7TmNRUP7N_0",
        notes: "Controlar que los pies no se desplacen del sitio."
    },
    "Movilidad - Rotaciones Manguito con Mancuernas / Calentamiento": {
        videoUrl: "https://www.youtube.com/watch?v=jocoGEpV3OY",
        notes: "Buscar alinear hombro y codo."
    },
    "Movilidad - Bradford Press": {
        videoUrl: "https://www.youtube.com/watch?v=YlGlSX50DL0",
        notes: "Control motor!"
    },
    "Movilidad - Activación de Cadera": {
        videoUrl: "https://youtu.be/ltzWjXiHXao",
        notes: "Controlar que los pies no se desplacen del sitio."
    },
    "Movilidad - Rodilla y Tobillo": {
        videoUrl: "https://youtu.be/wdOGeCaNKS8",
        notes: "Buscar ROM."
    },

    // =================================================================
    // LIBERACIÓN MIOFASCIAL
    // =================================================================
    "Liberación Miofascial - Zona Cervical": { videoUrl: "https://youtu.be/v67iiyvrbx0", notes: "Liberación." },
    "Liberación Miofascial - Zona Torácica": { videoUrl: "https://youtu.be/hESaRK6iaBg", notes: "Liberación." },
    "Liberación Miofascial - Zona Lumbar": { videoUrl: "https://youtu.be/iR4yp5nhlpA", notes: "Liberación." },
    "Liberación Miofascial - Glúteo y Piramidal": { videoUrl: "https://youtu.be/H4TxDBt9Oew", notes: "Liberación." },
    "Liberación Miofascial - Iliopsoas y Cuádriceps": { videoUrl: "https://youtu.be/4Ic63y0cRgQ", notes: "Liberación." },
    "Liberación Miofascial - TFL": { videoUrl: "https://youtu.be/6bO-z38wmdk", notes: "Liberación." },
    "Liberación Miofascial - Cuádriceps Distal": { videoUrl: "https://youtu.be/q27nZmlg_x8", notes: "Liberación." },
    "Liberación Miofascial - Isquiosurales": { videoUrl: "https://youtu.be/wfP97EW_3B0", notes: "Liberación." },
    "Liberación Miofascial - Gastrocnemios": { videoUrl: "https://youtu.be/juUqLPfhF2I", notes: "Liberación." },

    // =================================================================
    // ACTIVACIÓN / CUERPO LIBRE
    // =================================================================
    "Activación - Push Up Walk - Caminada Sueca": { videoUrl: "https://youtu.be/xjgdNAK8l_A", notes: "Apoyar bien la palma de las manos cuando caminemos sobre ellas." },
    "Activación - Push Up Walk 2 - Caminada Sueca": { videoUrl: "https://youtu.be/j8bVp4-WMqk", notes: "Activación." },
    "Activación - Push Up Walk 3 - Caminada Sueca": { videoUrl: "https://youtu.be/15m9lNCMmdU", notes: "Flexiona las piernas lo justo para llegar con las palmas al suelo." },
    "Activación - Deep Squat + Abd": { videoUrl: "https://youtu.be/k3dybOHnGFI", notes: "Activación." },
    "Activación - Deep Squat + Rotación": { videoUrl: "https://youtu.be/sFbhjaZfdd8", notes: "Activación." },
    "Activación - Deep Squat + Squat Iso": { videoUrl: "https://youtu.be/_YjFKJNErh8", notes: "Activación." },
    "Activación - Dinamic Split 1": { videoUrl: "https://youtu.be/ICFzvsVgOgU", notes: "Activación." },
    "Activación - Dinamic Split 2": { videoUrl: "https://youtu.be/jwKmiojawEo", notes: "Activación." },
    "Activación - Dinamic Split 3": { videoUrl: "https://youtu.be/snIoMf2gz-c", notes: "Activación." },
    "Activación - Split + Rotación": { videoUrl: "https://youtu.be/HBfyzCXAI34", notes: "Estiramientos." },
    
    // =================================================================
    // ESTIRAMIENTOS
    // =================================================================
    "Estiramiento - Glúteo Mayor": { videoUrl: "https://youtu.be/od8-Pe3vMjQ", notes: "" },
    "Estiramiento - Piramidal Sentado": { videoUrl: "https://youtu.be/gL1ewjNWeA4", notes: "" },
    "Estiramiento - Piramidal Tumbado": { videoUrl: "https://youtu.be/T90vj-kAYH0", notes: "" },
    "Estiramiento - Glúteo Medio": { videoUrl: "https://youtu.be/YS_qsVW3QQE", notes: "" },
    "Estiramiento - TFL": { videoUrl: "https://youtu.be/ZRqsdj_2diU", notes: "" },
    "Estiramiento - Lumbar Dead Bug": { videoUrl: "https://youtu.be/qJ4w-k36vWw", notes: "" },
    "Estiramiento - Lumbar \"Bebé\"": { videoUrl: "https://youtu.be/5Jcr_KPTOUM", notes: "" },
    "Estiramiento - Foca Fácil": { videoUrl: "https://youtu.be/FqnVMx-EwwE", notes: "" },
    "Estiramiento - Foca": { videoUrl: "https://youtu.be/F7k2AO_UfQk", notes: "" },
    "Estiramiento - Foca Lateral": { videoUrl: "https://youtu.be/FNR7QDkbPvg", notes: "" },
    "Estiramiento - Triángulo Fácil": { videoUrl: "https://youtu.be/QydWRuCH_rY", notes: "" },
    "Estiramiento - Triángulo": { videoUrl: "https://youtu.be/mGYkqvIwTbY", notes: "" },
    "Estiramiento - Psoas": { videoUrl: "https://youtu.be/e5QJv-ORR-E", notes: "" },
    "Estiramiento - Psoas Avanzado": { videoUrl: "https://youtu.be/vPrV0YiiIqc", notes: "" },
    "Estiramiento - Glúteo y Psoas": { videoUrl: "https://youtu.be/D6axbRrtXoA", notes: "" },
    "Estiramiento - Cuádriceps y Psoas": { videoUrl: "https://youtu.be/wj2iC44DU0M", notes: "" },
    "Estiramiento - Cuádriceps Unilateral": { videoUrl: "https://youtu.be/ML3XjSrxSEw", notes: "" },
    "Estiramiento - Cuádriceps Dual": { videoUrl: "https://youtu.be/OKxoniYGleE", notes: "" },
    "Estiramiento - Isquio Unilateral": { videoUrl: "https://youtu.be/d0hwv0hVTeA", notes: "" },
    "Estiramiento - Isquio Dual": { videoUrl: "https://youtu.be/547I8fypo0c", notes: "" },
    "Estiramiento - Isquio TFL": { videoUrl: "https://youtu.be/I7aMrH5zaXk", notes: "" },
    "Estiramiento - Triángulo Isquio": { videoUrl: "https://youtu.be/56pgasrn7Hk", notes: "" },
    "Estiramiento - Mariposa": { videoUrl: "https://youtu.be/VxDf98HQUQU", notes: "" },
    "Estiramiento - Aductor de Rodillas": { videoUrl: "https://youtu.be/_mINW_scaNg", notes: "" },
    "Estiramiento - Aductor Unilateral": { videoUrl: "https://youtu.be/oEzUXXCBAFU", notes: "" },

    // =================================================================
    // PECTORAL
    // =================================================================
    "Press Banca con Barra": { videoUrl: "https://youtu.be/PKpsrFS2uac", notes: "" },
    "Press Banca en Multipower": { videoUrl: "https://youtu.be/w-5ovE5O5iU", notes: "" },
    "Press Banca con Mancuernas": { videoUrl: "https://youtu.be/hXCJC2Apcdg", notes: "" },
    "Press Banca Inclinado con Barra": { videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", notes: "" },
    "Press Banca Inclinado en Multipower": { videoUrl: "https://youtu.be/3GS7EjN7KSk", notes: "" },
    "Press Inclinado con Mancuernas": { videoUrl: "https://youtu.be/ZE4M73kXB5A", notes: "" },
    "Press Banca Declinado con Barra": { videoUrl: "https://www.youtube.com/watch?v=UWD-mpupcBw", notes: "" },
    "Press Declinado con Mancuernas": { videoUrl: "https://youtu.be/FKziexF7tBE", notes: "" },
    "Flexiones / Push Ups": { videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk", notes: "" },
    "Flexiones / Push Ups de Rodillas": { videoUrl: "https://www.youtube.com/watch?v=TBpk09QuVN8", notes: "" },
    "Flexiones / Push Ups al Banco": { videoUrl: "https://www.youtube.com/watch?v=_mby7bboEUw", notes: "" },
    "Flexiones / Push Ups Inclinadas": { videoUrl: "https://www.youtube.com/watch?v=6sG0u2WNMY4", notes: "" },
    "Flexiones / Push Ups Declinadas con Barras Paralelas": { videoUrl: "https://www.youtube.com/watch?v=UgwZtY0f-rQ", notes: "" },
    "Flexiones / Deficit Push Ups con Discos al lado": { videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao", notes: "" },
    "Flexiones / Push Ups en TRX / Anillas": { videoUrl: "https://www.youtube.com/watch?v=i8tpN3KPXLE", notes: "" },
    "Press en Máquina": { videoUrl: "https://www.youtube.com/watch?v=QrnVDLSBdMo", notes: "" },
    "Press en Máquina inclinado": { videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9Y", notes: "" },
    "Aperturas en Banco con Mancuernas": { videoUrl: "https://www.youtube.com/watch?v=dfmq1UOuUXo", notes: "" },
    "Aperturas en Banco Inclinado con Mancuernas": { videoUrl: "https://youtu.be/Lx8d28YlcbQ", notes: "" },
    "Aperturas en Máquina Contractora / Mariposa": { videoUrl: "https://www.youtube.com/watch?v=gMzwVArofx0", notes: "" },
    "Aperturas en Banco Declinado con Mancuernas": { videoUrl: "https://www.youtube.com/watch?v=NyRPXwFkXNE", notes: "" },
    "Cruces en Polea Alta": { videoUrl: "https://youtu.be/Ht9awbF2fBA", notes: "" },
    "Aperturas en SwissBall con Mancuernas": { videoUrl: "https://www.youtube.com/watch?v=mFbh3zR13vE", notes: "" },
    "Pullover con Kettlebell": { videoUrl: "https://www.youtube.com/watch?v=aGiAvWpeyAE", notes: "" },

    // =================================================================
    // DORSAL / ESPALDA
    // =================================================================
    "Dominadas / Pull Ups": { videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw", notes: "" },
    "Dominadas / Pull Ups asistidas con Goma": { videoUrl: "https://www.youtube.com/watch?v=pll4AdUg17g", notes: "" },
    "Dominadas con Mancuerna (Lastre)": { videoUrl: "https://youtu.be/NfCTdUmWYx0", notes: "" },
    "Dominadas / Pull Ups asistidas en Máquina": { videoUrl: "https://www.youtube.com/watch?v=pll4AdUg17g", notes: "" },
    "Dominadas / Pull Ups en TRX / Anillas": { videoUrl: "https://www.youtube.com/watch?v=okpDOTeMCvg", notes: "" },
    "Dominadas Australianas con Pies en el Suelo": { videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk", notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera)." },
    "Dominadas Australianas con Pies en Banco": { videoUrl: "https://youtu.be/WqoNa74DieE", notes: "" },
    "Dominadas / Pull Ups Agarre Neutro": { videoUrl: "https://www.youtube.com/watch?v=3bt8gEDXDGw", notes: "" },
    "Dominadas / Pull Ups Supinación (Chin Up)": { videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s", notes: "" },
    "Jalón al Pecho en Polea": { videoUrl: "https://youtu.be/GYIhmy1P4vY", notes: "" },
    "Jalón al Pecho Supino en Polea": { videoUrl: "https://youtu.be/rimdRzyIJkA", notes: "" },
    "Jalón al Pecho Neutro en Polea": { videoUrl: "https://youtu.be/5YzMH2KkMHc", notes: "" },
    "Jalón al Pecho Unilateral con Polea": { videoUrl: "https://youtu.be/fxMPLrCpzeA", notes: "" },
    "Pull Over en Polea alta / Cross over Pull Down": { videoUrl: "https://www.youtube.com/watch?v=Fe8Wuy9QQfI", notes: "" },
    "Jalón Trasnuca con Barra / Polea": { videoUrl: "https://www.youtube.com/watch?v=51JZSpXiiYk", notes: "" },
    "Jalón Alto al Pecho con Anillas estilo TRX": { videoUrl: "https://www.youtube.com/watch?v=V5zO39wyLJ0", notes: "" },
    "Remo con Barra": { videoUrl: "https://youtu.be/MjnZ52mZgT0", notes: "" },
    "Remo con Mancuerna Unilateral": { videoUrl: "https://youtu.be/EPXL9QIasLM", notes: "" },
    "Remo con Mancuerna Unilateral con Patada de Tríceps": { videoUrl: "https://youtu.be/UjQZkhzfG-g", notes: "" },
    "Remo con Mancuerna Bilateral apoyado al Banco": { videoUrl: "https://www.youtube.com/watch?v=LL9YlELlBaY", notes: "" },
    "Remo en Banco con Pecho Apoyado con Mancuernas": { videoUrl: "https://www.youtube.com/watch?v=tlGl_Svh6Mk", notes: "" },
    "Remo en Barra T": { videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ", notes: "" },
    "Remo Inclinado en Landmine": { videoUrl: "https://youtu.be/5gakUsid-Lg", notes: "" },
    "Remo Unilateral en Landmine": { videoUrl: "https://youtu.be/DSMBCxZlts4", notes: "" },
    "Remo Unilateral Lateral en Landmine": { videoUrl: "https://youtu.be/6uECO7vAmCc", notes: "" },
    "Remo Seal con Mancuernas": { videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o", notes: "Trata de despegar el pecho al final del movimiento" },
    "Gorilla Row con Kettlebells/Mancuernas": { videoUrl: "https://youtu.be/4hKPsdWsXl8", notes: "" },
    "Máquina de Remo (Gironda)": { videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", notes: "" },
    "Máquina de Remo Alto": { videoUrl: "https://www.youtube.com/watch?v=nfFBucEfwtI", notes: "" },
    "Remo en TRX / Anillas": { videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w", notes: "" },
    "Remo Invertido": { videoUrl: "https://www.youtube.com/watch?v=hdEpF62-Jb8", notes: "" },
    "Face Pull en Polea Alta": { videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo", notes: "" },
    "Face Pull en TRX / Rings / Anillas": { videoUrl: "https://www.youtube.com/watch?v=rIpWyPV45PU", notes: "" },
    "Reverse Fly (Pájaros) para Hombro Posterior y Espalda": { videoUrl: "https://www.youtube.com/watch?v=GNJYBxhsuNU", notes: "" },

    // =================================================================
    // TRÍCEPS
    // =================================================================
    "Fondos en Paralelas / Dip Up": { videoUrl: "https://www.youtube.com/watch?v=CMlWH_7crjY", notes: "No bajes más de lo que tu movilidad de hombro te permita (unos 90 grados)" },
    "Flexiones Diamante / Diamond Pushups": { videoUrl: "https://www.youtube.com/watch?v=6K5n0Lja4Uc", notes: "" },
    "Press Francés con Barra Z": { videoUrl: "https://www.youtube.com/watch?v=k8KH84637Rw", notes: "" },
    "Press Francés con Mancuernas": { videoUrl: "https://www.youtube.com/watch?v=vDwCEtv1KHA", notes: "" },
    "Press Francés con Barra Z en Banco Inclinado": { videoUrl: "https://youtu.be/hFk6xzt1DWM", notes: "" },
    "Press Francés + Press Cerrado con Barra Z": { videoUrl: "https://youtu.be/MpF94C3Z8_g", notes: "" },
    "Press Francés con Mancuernas en Banco Inclinado": { videoUrl: "https://youtu.be/L__Q6Jl9Ics", notes: "" },
    "Press Cerrado en Banco Inclinado con Mancuernas": { videoUrl: "https://youtu.be/tdh7LSxUj1s", notes: "" },
    "Extensión Tríceps Trasnuca con Barra Z": { videoUrl: "https://youtu.be/O5wMBydqDHY", notes: "" },
    "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell": { videoUrl: "https://youtu.be/1MgU2PO4_rI", notes: "" },
    "Extensión Tríceps Trasnuca Unilateral con Mancuerna": { videoUrl: "https://youtu.be/jGTquNttoRU", notes: "" },
    "Press Cerrado con Barra (Bodyweight)": { videoUrl: "https://www.youtube.com/watch?v=2dBaF1Gzrbg", notes: "" },
    "Press Cerrado con Barra": { videoUrl: "https://youtu.be/_062fQmtry8", notes: "" },
    "Fondos en Paralelas con Pies en el Suelo": { videoUrl: "https://youtu.be/ih3eslbM2Wo", notes: "" },
    "Fondos en Paralelas para Pecho": { videoUrl: "https://youtu.be/W9TfhUAvteE", notes: "" },
    "Fondos en Banco": { videoUrl: "https://youtu.be/NSB_HrDwd6I", notes: "" },
    "Fondos en Máquina": { videoUrl: "https://www.youtube.com/watch?v=pS2NAn-ygAI", notes: "" },
    "Extensión Tríceps Barra en Supinación": { videoUrl: "https://www.youtube.com/watch?v=kXLK2dmrazM", notes: "" },
    "Extensión de Codo Trasnuca con Cuerda en Polea Baja": { videoUrl: "https://www.youtube.com/watch?v=iSC42Fn4VT0", notes: "" },
    "Extensión de Codo Kickback / Patada Trasera": { videoUrl: "https://www.youtube.com/watch?v=UjQZkhzfG-g", notes: "" },
    "Extensión de Codo en Polea Alta": { videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0", notes: "" },
    "Extensión de Codo en Máquina": { videoUrl: "https://www.youtube.com/watch?v=0IYKZKNqlmU", notes: "" },
    "Extensión de Codo en Polea Alta agarre V": { videoUrl: "https://www.youtube.com/watch?v=bGyuC_5Wtcs", notes: "" },
    "Extensión de Tríceps con TRX / Anillas": { videoUrl: "https://www.youtube.com/watch?v=y1eNmATegeQ", notes: "" },

    // =================================================================
    // BÍCEPS
    // =================================================================
    "Curl con Barra Recta": { videoUrl: "https://youtu.be/0TjnWWqQfUw", notes: "" },
    "Curl con Barra Z": { videoUrl: "https://youtu.be/4gYLTjNaTmw", notes: "" },
    "Curl con Barra Z Agarre Estrecho": { videoUrl: "https://youtu.be/NQZnaLU9kXs", notes: "" },
    "Curl Scott con Barra Z": { videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag", notes: "" },
    "Curl con Mancuernas de Pie": { videoUrl: "https://youtu.be/8STuQuoDMR0", notes: "" },
    "Curl con Mancuernas de Pie Alterno": { videoUrl: "https://youtu.be/85KCpAw9CE4", notes: "" },
    "Curl con Mancuernas Sentado": { videoUrl: "https://youtu.be/JSKFPXyV1z_c", notes: "" },
    "Curl con Mancuernas Sentado en Banco Inclinado": { videoUrl: "https://youtu.be/S32a3nYiWko", notes: "" },
    "Curl Martillo con Mancuernas": { videoUrl: "https://youtu.be/fcFsPoJY9lg", notes: "" },
    "Curl en TRX / Anillas": { videoUrl: "https://www.youtube.com/watch?v=okpDOTeMCvg", notes: "" },
    "Curl en Máquina (Predicador)": { videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag", notes: "" },
    "Curl en Polea Baja con Cuerda": { videoUrl: "https://www.youtube.com/watch?v=2BFzjygU1Ic", notes: "" },
    "Curl en Polea Baja con Barra Recta": { videoUrl: "https://www.youtube.com/watch?v=obFKEQEAink", notes: "" },
    "Curl Concentrado con TRX / Anillas": { videoUrl: "https://www.youtube.com/watch?v=d-DyoyBtrTU", notes: "" },
    "Dominadas Supinas / Chin Ups": { videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s", notes: "" },
    "Dominadas Supinas / Chin Ups en Negativa": { videoUrl: "https://www.youtube.com/watch?v=bib_U2TnEZQ", notes: "" },
    "Curl con Barra con Cheating (Técnica Avanzada)": { videoUrl: "https://www.youtube.com/watch?v=oijf5bpMepU", notes: "" },

    // =================================================================
    // HOMBRO
    // =================================================================
    "Press Militar con Barra Sentado (Half Press)": { videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", notes: "" },
    "Overhead Press (OHP) con Barra de Pie": { videoUrl: "https://youtu.be/xefEDVzpkXE", notes: "" },
    "Press Militar con Barra de Pie": { videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0", notes: "" },
    "Press Militar Sentado con Mancuernas": { videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg", notes: "" },
    "Press Militar en Multipower": { videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI", notes: "" },
    "Press Militar en Polea / Cable Sentado": { videoUrl: "https://www.youtube.com/watch?v=WIyRdcauQVE", notes: "" },
    "Press Militar en Polea / Cable de Pie": { videoUrl: "https://youtu.be/Lt2FzwtXR0A", notes: "" },
    "Press Militar con Goma Elástica": { videoUrl: "https://www.youtube.com/watch?v=ftNw3y9XemE", notes: "" },
    "Press Arnold con Mancuernas de Pie": { videoUrl: "https://www.youtube.com/watch?v=vJiAyjAMUgQ", notes: "" },
    "Press Arnold con Mancuernas Sentado Unilateral": { videoUrl: "https://www.youtube.com/watch?v=BRVOuuHpjGk", notes: "" },
    "Press Dual con Mancuernas Agarre Neutro": { videoUrl: "https://www.youtube.com/watch?v=C6NaHhnQavs", notes: "" },
    "Press Militar en Landmine": { videoUrl: "https://youtu.be/czeWFmHVKzM", notes: "" },
    "Press Militar Unilateral en Landmine": { videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0", notes: "" },
    "Remo al Cuello con Barra Z": { videoUrl: "https://youtu.be/C8SYabStU8c", notes: "" },
    "Pino a las Paralelas (Handstand Pushup) con Box": { videoUrl: "https://www.youtube.com/watch?v=5YXBq7G4Mxs", notes: "" },
    "Elevaciones Frontales con Mancuerna": { videoUrl: "https://youtu.be/7rBxeUNd5tA", notes: "" },
    "Elevaciones Laterales con Mancuernas": { videoUrl: "https://youtu.be/rhmW_fhB4cs", notes: "" },
    "Elevaciones Laterales con Mancuernas Sentado": { videoUrl: "https://youtu.be/rhmW_fhB4cs", notes: "" },
    "Elevaciones Laterales en Polea": { videoUrl: "https://youtu.be/UxII1sPTa9U", notes: "" },
    "Elevaciones Laterales Posteriores con Mancuernas (Pájaros)": { videoUrl: "https://www.youtube.com/watch?v=vzzu0E0ruM8", notes: "" },
    "Bradford Press (Hombro)": { videoUrl: "https://www.youtube.com/watch?v=YlGlSX50DL0", notes: "" },
    "Pájaros con Mancuernas": { videoUrl: "https://youtu.be/EMrOS6P90lM", notes: "" },
    "Pájaros en Polea": { videoUrl: "https://www.youtube.com/watch?v=F8bfnYgzIRs", notes: "" },
    "Face Pull en Polea": { videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo", notes: "" },
    "Pájaros en Polea (Hombro Posterior)": { videoUrl: "https://www.youtube.com/watch?v=GNJYBxhsuNU", notes: "" },
    "Patada de Glúteo en Polea": { videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s", notes: "Usa un disco o step para elevar el otro pie" },
    "Muscle Clean-Jerk Unilat Alterno Mancuerna": { videoUrl: "https://www.youtube.com/watch?v=2sOV3aayUCI&t=2s", notes: "Alterna entre brazos" },

    // =================================================================
    // PIERNA (CUÁDRICEPS)
    // =================================================================
    "Sentadilla Búlgara": {
        videoUrl: "https://youtu.be/WB7DVQtQmBw",
        notes: "Apoya solo el empeine sobre el banco. Controla y activa tu core."
    },
    "Sentadilla Split en Multipower": {
        videoUrl: "https://www.youtube.com/watch?v=Nyk_I5-_tIA",
        notes: ""
    },
    "Sentadilla Trasera con Barra": {
        videoUrl: "https://youtu.be/FK5XU_gaxAE",
        notes: ""
    },
    "Sentadilla Trasera en Multipower": {
        videoUrl: "https://youtu.be/la-dqygoIuk",
        notes: ""
    },
    "Sentadilla Trasera con Landmine": {
        videoUrl: "https://youtu.be/sMcrgyyvK-8",
        notes: ""
    },
    "Sentadilla Zercher con Barra": {
        videoUrl: "https://youtu.be/ErXO1WKVlPI",
        notes: ""
    },
    "Sentadilla Frontal con Barra": {
        videoUrl: "https://youtu.be/ErXO1WKVlPI",
        notes: ""
    },
    "Sentadilla Frontal con Mancuernas/Kettlebells": {
        videoUrl: "https://youtu.be/lfb6neUpfP8",
        notes: ""
    },
    "Sentadilla Frontal con Landmine": {
        videoUrl: "https://youtu.be/go_5R_vPC0E",
        notes: ""
    },
    "Sentadilla Goblet con Mancuerna/Kettlebell": {
        videoUrl: "https://youtu.be/xPVfWX_9ytk",
        notes: ""
    },
    "Sentadilla Goblet con Pies Elevados": {
        videoUrl: "https://youtu.be/E2n7V0o8B5A",
        notes: ""
    },
    "Sentadilla Goblet Split Lunge": {
        videoUrl: "https://www.youtube.com/watch?v=EUHaKY3aA1Q",
        notes: ""
    },
    "Sentadilla Goblet con Goma": {
        videoUrl: "https://www.youtube.com/watch?v=9mklrUcruWk",
        notes: ""
    },
    "Sentadilla Búlgara con Mancuerna": {
        videoUrl: "https://youtu.be/kA6bHiDdTO4",
        notes: ""
    },
    "Sentadilla Sumo con Mancuerna/Kettlebell": {
        videoUrl: "https://youtu.be/ifBHyfgLe8k",
        notes: ""
    },
    "Sentadilla Sumo con Landmine": {
        videoUrl: "https://youtu.be/2F8_uwf5IlE",
        notes: ""
    },
    "Step Up Unilateral al Cajón con Mancuerna/Kettlebell": {
        videoUrl: "https://youtu.be/cabSAbO0YLY",
        notes: ""
    },
    "Zancada Unilateral con Barra": {
        videoUrl: "https://youtu.be/6Mjkjmkhd5o",
        notes: ""
    },
    "Zancada Unilateral en Multipower": {
        videoUrl: "https://youtu.be/yfNWlh9rp6o",
        notes: ""
    },
    "Zancada Lateral Unilateral con Barra": {
        videoUrl: "https://youtu.be/xGsr_RInxoQ",
        notes: ""
    },
    "Zancada Lateral Unilateral con Mancuerna/Kettlebell": {
        videoUrl: "https://youtu.be/xyl28TxLlsM",
        notes: ""
    },
    "Zancada Lateral Unilateral con Landmine": {
        videoUrl: "https://youtu.be/jFOd8kYKr3c",
        notes: ""
    },
    "Zancada Alterna con Barra": {
        videoUrl: "https://youtu.be/Q2SUv47Qh4U",
        notes: ""
    },
    "Zancadas Caminando con Mancuernas/Kettlebells": {
        videoUrl: "https://youtu.be/7tRy9X0ibnk",
        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera."
    },
    "Hack Squat / Prensa Hack": {
        videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
        notes: ""
    },
    "Buenos Días con Barra": {
        videoUrl: "https://youtu.be/IKNPwb8BSmM",
        notes: ""
    },
    "Buenos Días con Landmine": {
        videoUrl: "https://youtu.be/3j6KS3ZdRU0",
        notes: ""
    },
    "Buenos Días con Mancuernas / Kettlebells": {
        videoUrl: "https://www.youtube.com/watch?v=OXn2s-6vCz0",
        notes: ""
    },
    "Sentadilla con Salto": {
        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
        notes: ""
    },
    "Extensión de Rodilla en Máquina": {
        videoUrl: "https://www.youtube.com/watch?v=5j5nnaRpslk",
        notes: ""
    },
    "Prensa Horizontal": {
        videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
        notes: ""
    },
    "Prensa Inclinada 45º": {
        videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
        notes: ""
    },
    "Prensa Inclinada 45º (Pies Juntos)": {
        videoUrl: "https://www.youtube.com/watch?v=P3BKVY63XtI",
        notes: ""
    },
    "Sissy Squat / Subidas al Box": {
        videoUrl: "https://www.youtube.com/watch?v=V_GXrG-JXEs",
        notes: "Añade peso con mancuernas. Prioriza una altura que realmente te cueste subir antes que el peso."
    },
    "FitBall Wall Squat": {
        videoUrl: "https://www.youtube.com/watch?v=xweAYObpwDk",
        notes: ""
    },

    // =================================================================
    // ISQUIOSURALES / GLÚTEO
    // =================================================================
    "Peso Muerto Rumano con Barra": {
        videoUrl: "https://youtu.be/R7FKam5GyNw",
        notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta)."
    },
    "Peso Muerto Rumano con Kettlebell": {
        videoUrl: "https://www.youtube.com/watch?v=jDSKi9vIt34",
        notes: ""
    },
    "Peso Muerto Rumano con Mancuernas": {
        videoUrl: "https://www.youtube.com/watch?v=mpg_qmBdmxc",
        notes: ""
    },
    "Peso Muerto Rumano con Pies Elevados": {
        videoUrl: "https://www.youtube.com/watch?v=5vu4oytOYjw",
        notes: ""
    },
    "Peso Muerto Rumano con Landmine": {
        videoUrl: "https://youtu.be/qrUts4P62R4",
        notes: ""
    },
    "Peso Muerto Rumano Unilateral en Landmine": {
        videoUrl: "https://youtu.be/qrUts4P62R4",
        notes: ""
    },
    "Peso Muerto Rumano en Polea": {
        videoUrl: "https://www.youtube.com/watch?v=P02Hz-SfL8I",
        notes: ""
    },
    "Peso Muerto Rumano a una Pierna con Mancuerna": {
        videoUrl: "https://www.youtube.com/watch?v=1bAi304kd7s",
        notes: ""
    },
    "Peso Muerto Convencional con Barra": {
        videoUrl: "https://youtu.be/wgq70sy0c_xA",
        notes: ""
    },
    "Peso Muerto con Mancuernas": {
        videoUrl: "https://www.youtube.com/watch?v=9KO-tIYXABk",
        notes: ""
    },
    "Peso Muerto Sumo con Barra": {
        videoUrl: "https://youtu.be/Fw2IpVd8m-Q",
        notes: ""
    },
    "Peso Muerto Sumo con Mancuernas": {
        videoUrl: "https://www.youtube.com/watch?v=vK2b4IMom0E",
        notes: ""
    },
    "Peso Muerto con Déficit": {
        videoUrl: "https://www.youtube.com/watch?v=8JrOCpcMDvo",
        notes: ""
    },
    "Peso Muerto Jefferson Split": {
        videoUrl: "https://www.youtube.com/watch?v=AB7rjJCDcc4",
        notes: ""
    },
    "Hip Thrust con Barra": {
        videoUrl: "https://youtu.be/sbl1qYdkzUc",
        notes: ""
    },
    "Hip Thrust Unilateral en Landmine": {
        videoUrl: "https://youtu.be/HI40fySlwd8",
        notes: ""
    },
    "Hip Thrust con Barra y Bandas de Glúteo": {
        videoUrl: "https://www.youtube.com/watch?v=1SMcV-yzl4w",
        notes: ""
    },
    "Puente de Glúteo desde el Suelo con Barra": {
        videoUrl: "https://www.youtube.com/watch?v=soGI_iVLya0",
        notes: ""
    },
    "Hip Thrust a una pierna (Starter)": {
        videoUrl: "https://www.youtube.com/watch?v=CDGIhreWKIk",
        notes: ""
    },
    "B-Stance Squat con Mancuernas": {
        videoUrl: "https://youtu.be/YtzdcxjEb8s",
        notes: ""
    },
    "Frog Squat": {
        videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
        notes: ""
    },
    "Puente de Glúteo (Lumbar Bridge)": {
        videoUrl: "https://www.youtube.com/watch?v=dizQOJZwTDw",
        notes: ""
    },
    "Patada de Glúteo en Hold en Banco": {
        videoUrl: "https://www.youtube.com/watch?v=JfJPwDmzyKM",
        notes: ""
    },
    "Nordic Curl": {
        videoUrl: "https://www.youtube.com/watch?v=N_jZzObyGxE",
        notes: ""
    },
    "Curl Femoral en Máquina": {
        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
        notes: ""
    },
    "Curl Femoral con Mancuerna": {
        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
        notes: ""
    },
    "Curl Femoral desde Puente (Con Fitball)": {
        videoUrl: "https://www.youtube.com/watch?v=PE83aF3Wbt4",
        notes: ""
    },
    "Curl Femoral desde Puente (Con TRX)": {
        videoUrl: "https://www.youtube.com/watch?v=6NCkHTG4lHc",
        notes: ""
    },
    "Curl Femoral desde Puente (Con Sliders / Toalla)": {
        videoUrl: "https://www.youtube.com/watch?v=HI3Bb1SAru8",
        notes: ""
    },
    "Aductor en Máquina": {
        videoUrl: "https://www.youtube.com/watch?v=CfTZfTILu3U",
        notes: ""
    },
    "Box Step Up": {
        videoUrl: "https://www.youtube.com/watch?v=V_GXrG-JXEs",
        notes: "Buscamos un ángulo óptimo de rodilla y cadera."
    },

    // =================================================================
    // CARDIO / PLIOMETRÍA / CARGAS
    // =================================================================
    "Cardio - Press Dinámico con Landmine": { videoUrl: "https://youtu.be/9_faYEjxCTU", notes: "" },
    "Cardio - Shuttle Run": { videoUrl: "https://www.youtube.com/watch?v=7gxdoc3ACoU", notes: "" },
    "Saltos - Ski Jumps": { videoUrl: "https://www.youtube.com/watch?v=Hr9M_-sw6n8", notes: "" },
    "Saltos - Vertical Jump": { videoUrl: "https://www.youtube.com/watch?v=UH-3LUWzBpU", notes: "" },
    "Saltos - Box jump (Touch and go)": { videoUrl: "https://www.youtube.com/watch?v=P0VQFYM8xGg", notes: "" },
    "Carga Externa - Squat Sumo": { videoUrl: "https://youtu.be/gJRjDiTSPYk", notes: "" },
    "Carga Externa - Squat + Flexión de Hombro": { videoUrl: "https://youtu.be/bUIDrMKNjSc", notes: "" },
    "Carga Externa - Squat + Push Press": { videoUrl: "https://youtu.be/wX2eqMDte1U", notes: "" },
    "Carga Externa - Squat Lateral": { videoUrl: "https://youtu.be/RkmdE5WBOy4", notes: "" },
    "Carga Externa - Squat ISO + Bíceps": { videoUrl: "https://youtu.be/nH_Y8BI0eww", notes: "" },
    "Carga Externa - Remo Unilateral": { videoUrl: "https://youtu.be/e4Y_oxLK_x8", notes: "" },
    "Carga Externa - Zancada": { videoUrl: "https://youtu.be/FqqcafS91zo", notes: "" },
    "Carga Externa - Zancada Nivel 2": { videoUrl: "https://youtu.be/R26dvSFzx7c", notes: "" },
    "Carga Externa - Zancada + Press": { videoUrl: "https://youtu.be/yrCWZ2SBs6I", notes: "Puedes usar una mancuerna" },

    // =================================================================
    // ABDOMEN (CRUNCH)
    // =================================================================
    "Crunch - Fly de apertura con Goma": { videoUrl: "https://www.youtube.com/watch?v=dii63Gtove0", notes: "" },
    "Crunch - Modificado McGuill": { videoUrl: "https://youtu.be/-SCPkGTv6Cg", notes: "" },
    "Crunch - Normal": { videoUrl: "https://youtu.be/wNqGgCjBVaE", notes: "Mantén la Lumbar pegada al suelo" },
    "Crunch - 90º": { videoUrl: "https://youtu.be/d_Abdeaygas", notes: "¡No cruces las piernas!" },
    "Crunch - Mariposa": { videoUrl: "https://youtu.be/Wh9hdGIUkVw", notes: "" },
    "Crunch - Pierna Cruzada": { videoUrl: "https://youtu.be/0r0GqczoZu4", notes: "" },
    "Crunch - Lateral Tronco": { videoUrl: "https://youtu.be/xROATuMzDZg", notes: "" },
    "Crunch - Lateral Piernas": { videoUrl: "https://youtu.be/jjoqs9YMyrM", notes: "" },
    "Crunch - Extensión Lumbar": { videoUrl: "https://youtu.be/BJTJdFViRsU", notes: "" },
    "Crunch - Flexión de Cadera": { videoUrl: "https://youtu.be/XJFii9NYHNs", notes: "" },
    "Crunch - V Agrupado": { videoUrl: "https://youtu.be/bS10OysdlLg", notes: "" },
    "Crunch - Reverse crunch": { videoUrl: "https://www.youtube.com/watch?v=DHxCkq4C20o", notes: "" },
    "Crunch - V": { videoUrl: "https://youtu.be/_SCqc7BCW9A", notes: "" },
    "Crunch - Bicycle Crunch": { videoUrl: "https://www.youtube.com/watch?v=udtuZlqsrGU", notes: "" },

    // =================================================================
    // ABDOMEN (PLANCHA)
    // =================================================================
    "Plancha - Tirón de Goma Frontal": { videoUrl: "https://www.youtube.com/watch?v=LAAQ9WP6QGE", notes: "" },
    "Plancha - de Rodillas": { videoUrl: "https://youtu.be/yMo5ppT6bgY", notes: "" },
    "Plancha - Rodillas-Pies": { videoUrl: "https://youtu.be/N-njmmJhdDA", notes: "" },
    "Plancha - Normal": { videoUrl: "https://youtu.be/DQ4wYExQRJo", notes: "Mantener espalda recta y glúteo apretado (retroversión de cadera)" },
    "Plancha - Cambios de apoyo": { videoUrl: "https://youtu.be/Yg74EfwLBQY", notes: "" },
    "Plancha - Abrir y Cerrar Piernas": { videoUrl: "https://youtu.be/G8GPAq4110U", notes: "" },
    "Plancha - Avanzada": { videoUrl: "https://youtu.be/nH9AQFIJ1rY", notes: "" },
    "Plancha - Lateral de Rodillas": { videoUrl: "https://youtu.be/pIf682Ral3A", notes: "" },
    "Plancha - Lateral elevando Rodilla": { videoUrl: "https://youtu.be/ROVRkBnD4zg", notes: "" },
    "Plancha - Lateral elevando Pierna": { videoUrl: "https://youtu.be/-3PDE3ztwzU", notes: "" },
    "Plancha - Lateral": { videoUrl: "https://youtu.be/IBlAMf7LYvI", notes: "" },
    "Plancha - Lateral Copenhague": { videoUrl: "https://youtu.be/vYpsixm7ETY", notes: "" },
    "Plancha - Unilateral Alterna": { videoUrl: "https://youtu.be/zQVZrTzOYBk", notes: "" },

    // =================================================================
    // ABDOMEN (HOLLOW)
    // =================================================================
    "Hollow - Lateral": { videoUrl: "https://youtu.be/Oj50AWSRuhE", notes: "" },
    "Hollow - Nivel 1": { videoUrl: "https://youtu.be/hqB_aA5phBA", notes: "" },
    "Hollow - Nivel 2": { videoUrl: "https://youtu.be/lFEg3UQYM3g", notes: "" },
    "Hollow - Nivel 3": { videoUrl: "https://youtu.be/I6YISGE4Uvo", notes: "" },
    "Hollow - Nivel 4": { videoUrl: "https://youtu.be/RxFdlQ4oelM", notes: "" },
    "Hollow - Nivel 4 Dinámico": { videoUrl: "https://youtu.be/9ROZxtdlRVo", notes: "" },
    "Hollow - Barquitas posteriores": { videoUrl: "https://youtu.be/7eluESd2YaI", notes: "" },
    "Hollow - Facial": { videoUrl: "https://youtu.be/5dnBA1cxYL0", notes: "" },
    "Hollow - Facial Dinámica": { videoUrl: "https://youtu.be/LFHyG9bubx8", notes: "" },
    "Hollow - Superman": { videoUrl: "https://youtu.be/4JCCPi4z3Kg", notes: "" },

    // =================================================================
    // CUERPO LIBRE / FUNCIONAL
    // =================================================================
    "Funcional - Mountain Climber": { videoUrl: "https://youtu.be/GZWmYzClS3s", notes: "" },
    "Funcional - Spider Climber": { videoUrl: "https://youtu.be/bzzJ0zeO70A", notes: "" },
    "Funcional - Lateral Climber": { videoUrl: "https://youtu.be/wvDHQxUC1E8", notes: "" },
    "Funcional - Frontal Climber": { videoUrl: "https://youtu.be/xy5VzE8H1d0", notes: "" },
    "Funcional - Hundreds 90º": { videoUrl: "https://youtu.be/X1GZQJTAkEM", notes: "" },
    "Funcional - Hundreds": { videoUrl: "https://youtu.be/1d9EJxJPe6g", notes: "" },
    "Funcional - Sit Up": { videoUrl: "https://youtu.be/fXgBSdee8QU", notes: "" },
    "Funcional - Bird Dog": { videoUrl: "https://youtu.be/KizkN2buzMw", notes: "" },
    "Funcional - Dead Bug": { videoUrl: "https://youtu.be/0CteMtiMChQ", notes: "" },
    "Cuerpo Libre - Fondos a una pierna (Pistol Squat)": { videoUrl: "https://youtu.be/MGAeT2C3oCU", notes: "" },
    "Cuerpo Libre - Air Squat": { videoUrl: "https://www.youtube.com/watch?v=lmtBAVuQb3E", notes: "" },
    "Cuerpo Libre - Squat Normal": { videoUrl: "https://youtu.be/NWes6fd1Sxs", notes: "" },
    "Cuerpo Libre - Squat ISO": { videoUrl: "https://youtu.be/epS5o03foYc", notes: "" },
    "Cuerpo Libre - Squat ISO Jumping Jack": { videoUrl: "https://youtu.be/InErj6_Lqto", notes: "" },
    "Cuerpo Libre - Squat 1 and 1/4": { videoUrl: "https://youtu.be/obYzw332f5s", notes: "" },
    "Cuerpo Libre - Squat Over-Head": { videoUrl: "https://youtu.be/xNPptGxewPs", notes: "" },
    "Cuerpo Libre - Squat Jump": { videoUrl: "https://youtu.be/l6zEYjjJ4dE", notes: "" },
    "Cuerpo Libre - Squat Lateral": { videoUrl: "https://youtu.be/RkmdE5WBOy4", notes: "" },
    "Cuerpo Libre - Squat Deep Lateral": { videoUrl: "https://youtu.be/7tUIaYO-RZY", notes: "" },
    "Cuerpo Libre - Squat Skater": { videoUrl: "https://youtu.be/oeRGEOXdZqc", notes: "" },
    "Cuerpo Libre - Pistol Squat (Single Leg Box)": { videoUrl: "https://www.youtube.com/watch?v=c6aHletfv9c", notes: "" },
    "Cuerpo Libre - Pistol Squat": { videoUrl: "https://youtu.be/EHPoZVT5L-E", notes: "" },
    "Cuerpo Libre - Squat Sumo": { videoUrl: "https://youtu.be/gJRjDiTSPYk", notes: "" },
    "Cuerpo Libre - Split Normal": { videoUrl: "https://youtu.be/BvEvluBs5ZY", notes: "" },
    "Cuerpo Libre - Split Unilateral": { videoUrl: "https://youtu.be/JlqWTG-XBrg", notes: "" },
    "Cuerpo Libre - Split Overhead": { videoUrl: "https://youtu.be/A3ZWTm9kUF0", notes: "Espalda recta en todo momento, paso atrás bien amplio." },
    "Cuerpo Libre - Split Power": { videoUrl: "https://youtu.be/bO1Dwrwb_ag", notes: "" },
    "Cuerpo Libre - Step Up Unilateral en Step": { videoUrl: "https://youtu.be/bSxZqLpknb8", notes: "" },
    "Cuerpo Libre - Step Up Alterno en Step": { videoUrl: "https://youtu.be/IwixiNKjpCA", notes: "" },
    "Cuerpo Libre - Glute Bridge - Normal": { videoUrl: "https://youtu.be/D04hX-R8LsA", notes: "" },
    "Cuerpo Libre - Glute Bridge - Cambiando Piernas": { videoUrl: "https://youtu.be/a8GF3uTnUOI", notes: "" },
    "Cuerpo Libre - Glute Bridge - Unilateral Piramidal": { videoUrl: "https://youtu.be/5X0y-XdD7hE", notes: "" },
    "Cuerpo Libre - Glute Bridge - Unilateral": { videoUrl: "https://youtu.be/Nub6W77bL80", notes: "Repeticiones por lado. Diferenciar anteversión de flexión de cadera." },
    "Cuerpo Libre - Glute Bridge - Frog Pump": { videoUrl: "https://youtu.be/7F_EW3QM_Zo", notes: "" },
    "Cuerpo Libre - Glute Bridge Unilateral - En altura": { videoUrl: "https://youtu.be/-XBKDJ1IYoQ", notes: "Diferenciar anteversión de Flexión de Cadera." },
    "Cuerpo Libre - Glúteo apertura lateral": { videoUrl: "https://www.youtube.com/watch?v=9Urj31VEWUc", notes: "" },
    "Cuerpo Libre - Cardio - Sentadilla con Salto en Step": { videoUrl: "https://youtu.be/7ckSQy2BtWw", notes: "" },
    "Cuerpo Libre - Cardio - Step Up Lateral Alterno en Step": { videoUrl: "https://youtu.be/N26TyhPhSRI", notes: "" },
    "Cuerpo Libre - Cardio - Jumping Jack": { videoUrl: "https://youtu.be/K5PMB8CauGM", notes: "" },
    "Cuerpo Libre - Cardio - Predator Jacks": { videoUrl: "https://youtu.be/uGmzXjFM0d8", notes: "" },
    "Cuerpo Libre - Cardio - Over-Head Jumping Jack": { videoUrl: "https://youtu.be/ZU5OglDiAQY", notes: "" },
    "Cuerpo Libre - Cardio - Burpee sin Flexión": { videoUrl: "https://youtu.be/_liq4fAscDU", notes: "" },
    "Cuerpo Libre - Cardio - Burpee Completo": { videoUrl: "https://youtu.be/qfBhsTabWN0", notes: "" },
    "Cuerpo Libre - Cardio - One Arm Burpee": { videoUrl: "https://youtu.be/tVeOlvR6P5A", notes: "" },
    "Cuerpo Libre - Cardio - One Leg Burpee": { videoUrl: "https://youtu.be/FtmD2X0BStQ", notes: "" },
    "Cuerpo Libre - Cardio - Assault Bike": { videoUrl: "https://www.youtube.com/watch?v=AqDZi0p7kN4", notes: "" },
    "Cuerpo Libre - Empuje - Push-Up de Rodillas": { videoUrl: "https://youtu.be/MglHjgWs-BQ", notes: "" },
    "Cuerpo Libre - Empuje - Push-Up": { videoUrl: "https://youtu.be/Mq5JZLdYTaE", notes: "" },
    "Cuerpo Libre - Empuje - Triceps Push-Up de Rodillas": { videoUrl: "https://youtu.be/xlYUV9xY-lg", notes: "" },
    "Cuerpo Libre - Empuje - Triceps Push-Up": { videoUrl: "https://youtu.be/9o2ldyYStO8", notes: "" },
    "Cuerpo Libre - Empuje - Pike Push-Up": { videoUrl: "https://youtu.be/5d8ft4ktyeA", notes: "" },
    "Cuerpo Libre - Empuje - Pike Push-Up Handstand": { videoUrl: "https://www.youtube.com/watch?v=edqJ_JRt73Y", notes: "" },

    // =================================================================
    // KETTLEBELL
    // =================================================================
    "Kettlebell - Swing Ruso": { videoUrl: "https://youtu.be/eKN0tj8q6Qc", notes: "" },
    "Kettlebell - Swing Ruso Alterno": { videoUrl: "https://youtu.be/rHgKjGjmHNI", notes: "" },
    "Kettlebell - Swing Americano": { videoUrl: "https://youtu.be/_kVSgpKXc_k", notes: "" },
    "Kettlebell - Clean Unilateral": { videoUrl: "https://youtu.be/FfEFoNgsHMA", notes: "" },
    "Kettlebell - Clean Alterno": { videoUrl: "https://youtu.be/xBOoNSv9LlY", notes: "" },
    "Kettlebell - Snatch": { videoUrl: "https://youtu.be/KlzSHIMdPTc", notes: "" },
    "Kettlebell - Remo Supino Invertido": { videoUrl: "https://youtu.be/yX_jmmRaigY", notes: "" },
    "Kettlebell - Remo Inclinado Unilateral": { videoUrl: "https://youtube.com/shorts/JQYZ3sz3rko", notes: "" },
    "Kettlebell - Press Militar": { videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI", notes: "" },
    "Kettlebell - Thruster": { videoUrl: "https://youtube.com/shorts/52JAS52W8Hw", notes: "" },
    "Kettlebell - Split": { videoUrl: "https://youtube.com/shorts/ZmPOvj3lKvo", notes: "" },
    "Kettlebell - Zancada con Giro Unilateral": { videoUrl: "https://youtube.com/shorts/BZ-Yq7bmv70", notes: "" },
    "Kettlebell - Thruster B-Stance": { videoUrl: "https://youtube.com/shorts/y3IcI9w3XgI", notes: "" },
    "Kettlebell - Zancada Alterna": { videoUrl: "https://youtube.com/shorts/ieJm16QfwFo", notes: "" },
    "Kettlebell - Zancada Overhead": { videoUrl: "https://youtube.com/shorts/10W_Ewtl4iI", notes: "" },
    "Kettlebell - Soft Swing": { videoUrl: "https://youtube.com/shorts/-i4ReGBb26g", notes: "" },
    "Kettlebell - Zancadas con Balanceos en 8": { videoUrl: "https://youtube.com/shorts/0JSbYUdzdcM", notes: "" },
    "Kettlebell - Thruster Unilateral": { videoUrl: "https://youtube.com/shorts/EYW4ANACZJQ", notes: "" },
    "Kettlebell - Swing Lateral 360º": { videoUrl: "https://youtube.com/shorts/G1V4jd5XdM8", notes: "" },
    "Kettlebell - Swing con Sentadilla": { videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc", notes: "" },
    "Kettlebell - Swing con Giro Atrás": { videoUrl: "https://youtube.com/shorts/ORqy2adSvms", notes: "" },
    "Kettlebell - Windmill": { videoUrl: "https://youtube.com/shorts/VewbrD3Ph2s", notes: "" },
    "Kettlebell - Snatch Cruzado": { videoUrl: "https://youtube.com/shorts/l8v8vjHoTjs", notes: "" },
    "Kettlebell - Swing High Pull": { videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY", notes: "" },
    "Kettlebell - Swing Unilateral": { videoUrl: "https://youtube.com/shorts/qRQADTm7PwQ", notes: "" },
    "Kettlebell - Swing con Parada": { videoUrl: "https://youtube.com/shorts/wbEVaS3eAT4", notes: "" },
    "Kettlebell - Swing Lateral Snatch con Zancada": { videoUrl: "https://youtube.com/shorts/y-fI6HShSHA", notes: "" },
    "Kettlebell - Swing Unilateral Alterno": { videoUrl: "https://youtube.com/shorts/yLgn3r94shI", notes: "" },
    "Kettlebell - Swing Lateral High Pull con Parada": { videoUrl: "https://youtube.com/shorts/36-cq-R8Vyw", notes: "" },
    "Kettlebell - Swing Alterno con Giro Atrás": { videoUrl: "https://youtube.com/shorts/VacXlMC5CsE", notes: "" },
    "Kettlebell - Swing con Giro Adelante": { videoUrl: "https://youtube.com/shorts/XXejujBC39M", notes: "" },
    "Kettlebell - Swing Lateral": { videoUrl: "https://youtube.com/shorts/urah8brGZHg", notes: "" },
    "Kettlebell - Snatch Cruzado con Rotación": { videoUrl: "https://youtube.com/shorts/nynsDPReL1s", notes: "" },
    "Kettlebell - Zancada Alterna con Rotación": { videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg", notes: "" },

    // =================================================================
    // GOMAS / BANDAS ELÁSTICAS
    // =================================================================
    "Gomas - Rotación Externa en Columna": { videoUrl: "https://youtu.be/y8cSPoMahok", notes: "Mantén tu codo prácticamente pegado al torso en todo momento" },
    "Gomas - Curl de Bíceps de Pie": { videoUrl: "https://youtu.be/w4AydDM5bjU", notes: "" },
    "Gomas - Curl de Bíceps en Columna": { videoUrl: "https://youtu.be/JogvxqdpbMU", notes: "" },
    "Gomas - Extensión de Tríceps de Pie": { videoUrl: "https://youtu.be/iwMJz1a0pck", notes: "" },
    "Gomas - Extensión de Tríceps en Columna": { videoUrl: "https://youtu.be/MtGdJQ-Q0hs", notes: "" },
    "Gomas - Extensión de Tríceps Trasnuca en Columna": { videoUrl: "https://youtu.be/yN_-LZKCEPI", notes: "" },
    "Gomas - Aperturas en Columna": { videoUrl: "https://youtu.be/_FBdkpZ5FTs", notes: "" },
    "Gomas - Empuje en Columna": { videoUrl: "https://youtu.be/GrDyF8acxeU", notes: "" },
    "Gomas - Flexiones con Resistencia": { videoUrl: "https://youtu.be/5y-98KIMKf0", notes: "" },
    "Gomas - Press Militar": { videoUrl: "https://youtu.be/PaVq5VuHYEg", notes: "" },
    "Gomas - Press Militar Unilateral": { videoUrl: "https://youtu.be/Flyr7QYgB_0", notes: "" },
    "Gomas - Remo en Columna": { videoUrl: "https://youtu.be/oaNDZ4glMKY", notes: "" },
    "Gomas - Remo Unilateral en Columna": { videoUrl: "https://youtu.be/SaitEaEDD5Q", notes: "" },
    "Gomas - Remo Unilateral de Pie": { videoUrl: "https://youtu.be/KinZhmw9tIs", notes: "" },
    "Gomas - Remo Vertical en Columna": { videoUrl: "https://youtu.be/KFCTeV1AIGU", notes: "" },
    "Gomas - Remo al Mentón de Pie": { videoUrl: "https://youtu.be/K1o3Sviayko", notes: "" },
    "Gomas - FacePull en Columna": { videoUrl: "https://youtu.be/KnnWfHUjsKg", notes: "" },
    "Gomas - FacePull Tumbado en Columna": { videoUrl: "https://youtu.be/X5YTwqj12Kw", notes: "" },
    "Gomas - Peso Muerto": { videoUrl: "https://youtu.be/o3vMmkN9JnQ", notes: "" },
    "Gomas - Good Morning Unilateral": { videoUrl: "https://youtu.be/40Sc-oVyqgc", notes: "" },
    "Gomas - Squat": { videoUrl: "https://youtu.be/203_Zzz_Z_0", notes: "" },
    "Gomas - Banded hip thrust": { videoUrl: "https://www.youtube.com/watch?v=z8z0biVVaQY", notes: "" },
    "Gomas - Thruster": { videoUrl: "https://youtu.be/fCXPsC8Mk6A", notes: "" },
    "Gomas - Zancada Básica": { videoUrl: "https://youtu.be/-NtzcHwp6fo", notes: "" },
    "Gomas - Zancada Avanzada": { videoUrl: "https://youtu.be/rlfgAEO58no", notes: "" }
};

export default exerciseVideoUrls;
