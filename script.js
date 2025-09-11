document.addEventListener('DOMContentLoaded', () => {
    const modules = {
        'clasificacion': {
            title: 'Clasificación',
            summary: 'La obstrucción intestinal se clasifica según la causa, la ubicación y la integridad del flujo sanguíneo. Puede ser mecánica (por una barrera física) o funcional (íleo paralítico). Las causas mecánicas se dividen en intrínsecas (tumores, estenosis), extrínsecas (adherencias, hernias) y obturación luminal (cuerpos extraños, fecalomas). La obstrucción puede ser del intestino delgado o grueso, y a su vez, parcial o completa. Una clasificación crucial es en asa cerrada o abierta, y si existe o no compromiso vascular (estrangulación), lo cual es una emergencia quirúrgica.',
            clinical_case: 'Un hombre de 68 años con antecedente de apendicectomía hace 15 años acude a urgencias por dolor abdominal tipo cólico de 48 horas de evolución, distensión progresiva, náuseas y vómitos de contenido fecaloide. No ha canalizado gases ni evacuado en las últimas 24 horas. A la exploración física, se encuentra abdomen distendido, timpánico y con ruidos intestinales metálicos de lucha. Las radiografías simples de abdomen muestran niveles hidroaéreos y dilatación de asas de intestino delgado.',
            quiz: [
                {
                    question: '¿Cuál es la causa más común de obstrucción de intestino grueso?',
                    options: ['Vólvulo', 'Enfermedad diverticular', 'Neoplasia maligna', 'Hernia'],
                    answer: 2,
                    justification: 'El adenocarcinoma es la causa más frecuente de obstrucción del colon, representando aproximadamente el 65% de los casos. La enfermedad diverticular y el vólvulo son la segunda y tercera causa más comunes, respectivamente.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1201.'
                },
                {
                    question: 'En una obstrucción en asa cerrada, ¿qué segmento del colon es más vulnerable a la perforación según la ley de Laplace?',
                    options: ['Colon sigmoide', 'Colon transverso', 'Colon ascendente', 'Ciego'],
                    answer: 3,
                    justification: 'El ciego es la porción de mayor diámetro del colon y tiene la pared muscular más delgada. Según la ley de Laplace (T=Pr), a mayor radio, mayor tensión parietal para una presión dada, lo que lo hace el sitio más susceptible a la perforación.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1176.'
                },
                {
                    question: '¿Qué hallazgo en una radiografía simple de abdomen es más sugestivo de obstrucción intestinal?',
                    options: ['Gas en la ampolla rectal', 'Niveles hidroaéreos', 'Ausencia de gas distal', 'Neumoperitoneo'],
                    answer: 1,
                    justification: 'Las radiografías simples del abdomen (vistas supina, vertical y diafragmática) ayudan a detectar patrones de gas intestinal indicativos de obstrucción del intestino delgado o grueso, siendo los niveles hidroaéreos un signo característico.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1181.'
                },
                {
                    question: 'La seudoobstrucción del colon, o síndrome de Ogilvie, se caracteriza por:',
                    options: ['Una obstrucción mecánica por un tumor pequeño', 'Dilatación masiva del colon sin obstrucción mecánica', 'Obstrucción por un vólvulo del ciego', 'Isquemia del colon descendente'],
                    answer: 1,
                    justification: 'La seudoobstrucción del colon (síndrome de Ogilvie) es un trastorno funcional en el cual se dilata de forma masiva el colon sin una obstrucción mecánica. Se relaciona con uso de narcóticos, reposo en cama y enfermedad concurrente.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1221.'
                },
                {
                    question: '¿Cuál de las siguientes es considerada una obstrucción de luz intestinal (intraluminal)?',
                    options: ['Adherencias postquirúrgicas', 'Hernia inguinal', 'Íleo biliar', 'Tumor de colon'],
                    answer: 2,
                    justification: 'Las causas de obstrucción se pueden clasificar en extrínsecas (adherencias, hernias), intrínsecas o murales (tumores, estenosis inflamatoria) y de obturación intraluminal (íleo biliar, fecaloma).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general de clasificación).'
                },
                {
                    question: 'La principal diferencia entre un divertículo verdadero y uno falso (el más común en el colon) es:',
                    options: ['La localización en el colon derecho vs. izquierdo', 'La presencia de inflamación', 'Que el verdadero contiene todas las capas de la pared intestinal', 'El tamaño del divertículo'],
                    answer: 2,
                    justification: 'Casi todos los divertículos del colon son falsos, en los que se herniaron la mucosa y la muscular de la mucosa a través de la pared. Los divertículos verdaderos, que son raros, comprenden todas las capas de la pared del intestino.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1201.'
                },
                {
                    question: '¿Qué es el \'reflejo de muestreo\' en la fisiología de la continencia?',
                    options: ['La contracción voluntaria del esfínter externo', 'La relajación del puborrectal durante la defecación', 'La relajación refleja del esfínter anal interno al distenderse el recto', 'El movimiento en masa del colon'],
                    answer: 2,
                    justification: 'La distensión del recto causa una relajación refleja del esfínter anal interno (el reflejo inhibidor rectoanal) que permite que el contenido entre en contacto con el conducto anal. Este \'reflejo de muestreo\' deja que el epitelio sensorial diferencie las heces sólidas de las líquidas y el gas.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1180.'
                },
                {
                    question: 'El vólvulo es más común en el:',
                    options: ['Ciego', 'Colon transverso', 'Colon sigmoide', 'Colon ascendente'],
                    answer: 2,
                    justification: 'El estrecho calibre del colon sigmoide y su redundancia y movilidad explican por qué es más común el vólvulo en esta sección del colon.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1176.'
                },
                {
                    question: 'Una obstrucción intestinal con compromiso vascular se denomina:',
                    options: ['Íleo paralítico', 'Obstrucción simple', 'Estrangulación', 'Obstrucción en asa cerrada'],
                    answer: 2,
                    justification: 'La estrangulación implica un compromiso del flujo sanguíneo y es una emergencia quirúrgica. Puede ocurrir en obstrucciones por hernias, vólvulos o adherencias.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general de clasificación).'
                },
                {
                    question: '¿Cuál es el tratamiento inicial de un vólvulo sigmoide no complicado?',
                    options: ['Laparotomía urgente', 'Hemicolectomía derecha', 'Detorsión endoscópica', 'Observación y laxantes'],
                    answer: 2,
                    justification: 'A menos que se observen signos evidentes de gangrena o peritonitis, el tratamiento inicial del vólvulo sigmoide consiste en reanimación seguida de detorsión endoscópica para aliviar la obstrucción de forma inmediata.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1219.'
                }
            ],
            completed: false
        },
        'etiopatogenia': {
            title: 'Etiopatogenia',
            summary: 'La etiopatogenia de la obstrucción intestinal varía según la localización. En el intestino delgado, la causa más común en adultos son las adherencias postquirúrgicas, seguidas de las hernias y neoplasias. En el intestino grueso, el adenocarcinoma es la causa predominante (más del 60% de los casos), seguido por la enfermedad diverticular complicada (estenosis) y el vólvulo del sigmoide. Otras causas menos frecuentes incluyen la enfermedad de Crohn, que puede generar estenosis, el íleo biliar (obstrucción por un cálculo biliar impactado), la intususcepción y cuerpos extraños.',
            clinical_case: 'Una mujer de 72 años, sin cirugías previas, consulta por un cuadro de 3 meses de cambios en el hábito intestinal, con estreñimiento progresivo y disminución del calibre de las heces. En las últimas 72 horas presenta distensión abdominal, dolor cólico y ausencia de evacuaciones. Refiere una pérdida de peso no intencionada de 8 kg en los últimos 6 meses. La colonoscopia revela una lesión estenosante, ulcerada e infranqueable en el colon sigmoide, cuya biopsia se reporta como adenocarcinoma.',
            quiz: [
                {
                    question: '¿Cuál es la causa más frecuente de obstrucción de intestino delgado en pacientes con antecedente quirúrgico abdominal?',
                    options: ['Hernia interna', 'Neoplasia primaria', 'Adherencias', 'Enfermedad de Crohn'],
                    answer: 2,
                    justification: 'Las adherencias postoperatorias son la causa más común de obstrucción del intestino delgado en países desarrollados, siendo responsables de hasta el 75% de los casos.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general, no página específica).'
                },
                {
                    question: 'La tríada de Rigler (neumobilia, obstrucción de intestino delgado y cálculo biliar ectópico) es diagnóstica de:',
                    options: ['Vólvulo sigmoide', 'Íleo biliar', 'Síndrome de Ogilvie', 'Cáncer de colon'],
                    answer: 1,
                    justification: 'El íleo biliar es una forma de obstrucción mecánica causada por la impactación de un cálculo biliar en el intestino, generalmente tras formar una fístula colecistoentérica. La tríada de Rigler en los estudios de imagen confirma el diagnóstico.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general, no página específica).'
                },
                {
                    question: '¿Qué factor predispone a la formación de un vólvulo sigmoide?',
                    options: ['Una dieta baja en fibra', 'Un mesenterio corto y ancho', 'Un colon sigmoide redundante con una base mesentérica estrecha', 'Múltiples divertículos'],
                    answer: 2,
                    justification: 'Un colon sigmoide largo y redundante unido a un mesenterio con una base de implantación estrecha es el principal factor de riesgo para la torsión y desarrollo de un vólvulo.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1219.'
                },
                {
                    question: 'En adultos, la intususcepción intestinal suele estar asociada a:',
                    options: ['Una infección viral reciente', 'Un punto de guía patológico como un pólipo o tumor', 'El uso de antiinflamatorios no esteroideos', 'Estreñimiento crónico'],
                    answer: 1,
                    justification: 'A diferencia de los niños, donde suele ser idiopática, la intususcepción en adultos se asocia en un 90% de los casos a una lesión patológica (pólipo, tumor, divertículo de Meckel) que actúa como cabeza de la invaginación.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'La enfermedad de Crohn causa obstrucción intestinal principalmente a través de:',
                    options: ['Formación de adherencias densas', 'Compresión extrínseca por abscesos', 'Estenosis fibrosas por inflamación transmural crónica', 'Íleo paralítico severo'],
                    answer: 2,
                    justification: 'La enfermedad de Crohn es un proceso inflamatorio transmural que conduce a fibrosis y formación de estenosis, siendo esta una de las principales indicaciones de cirugía en estos pacientes.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1198.'
                },
                {
                    question: '¿En qué localización causa obstrucción con más frecuencia la enfermedad diverticular?',
                    options: ['Ciego', 'Colon transverso', 'Colon descendente', 'Colon sigmoide'],
                    answer: 3,
                    justification: 'La diverticulosis afecta con mayor frecuencia al colon sigmoide. La inflamación recurrente (diverticulitis) puede llevar a la formación de estenosis y obstrucción.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1201.'
                },
                {
                    question: 'Una hernia de Richter se define como:',
                    options: ['Una hernia que contiene el apéndice cecal', 'Una hernia en la que solo una porción de la circunferencia del intestino está atrapada en el saco herniario', 'Una hernia que protruye a través del triángulo de Petit', 'Una hernia que contiene un divertículo de Meckel'],
                    answer: 1,
                    justification: 'En una hernia de Richter, solo una parte de la pared antimesentérica del intestino se hernia. Esto es peligroso porque puede ocurrir estrangulación y necrosis sin causar una obstrucción completa.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general de hernias).'
                },
                {
                    question: '¿Cuál de estas no es una causa de íleo adinámico o funcional?',
                    options: ['Postoperatorio abdominal', 'Trastornos electrolíticos (hipopotasemia)', 'Fármacos (opioides)', 'Un fecaloma impactado'],
                    answer: 3,
                    justification: 'El íleo es una parálisis del tránsito intestinal sin una barrera mecánica. Las cirugías, alteraciones metabólicas y fármacos son causas comunes. Un fecaloma es una causa de obstrucción mecánica intraluminal.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'La radioterapia pélvica puede causar obstrucción intestinal a largo plazo debido a:',
                    options: ['Daño nervioso y parálisis intestinal', 'Formación de adherencias y estenosis actínica', 'Aumento del riesgo de vólvulo', 'Compresión por linfedema crónico'],
                    answer: 1,
                    justification: 'La radiación induce una endarteritis obliterante y fibrosis crónica en los tejidos, lo que puede resultar en estenosis actínicas y adherencias que causan obstrucción meses o años después del tratamiento.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1234.'
                },
                {
                    question: 'La principal causa de obstrucción colónica en un paciente con enfermedad de Chagas es:',
                    options: ['Un adenocarcinoma', 'Un megacolon tóxico', 'Un vólvulo sobre un megacolon chagásico', 'Una estenosis por diverticulitis'],
                    answer: 2,
                    justification: 'La enfermedad de Chagas, causada por Trypanosoma cruzi, destruye los plexos nerviosos mientéricos, llevando a un megacolon adquirido. Este colon dilatado y atónico es propenso a la torsión (vólvulo).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1221.'
                }
            ],
            completed: false
        },
        'fisiopatologia': {
            title: 'Fisiopatología',
            summary: 'La obstrucción intestinal desencadena una cascada de eventos fisiopatológicos. Proximal al bloqueo, se acumula gas (principalmente aire deglutido) y líquido (secreciones digestivas), causando distensión del asa. Esta distensión aumenta la peristalsis (lucha intestinal) inicialmente, pero luego la inhibe. El aumento de la presión intraluminal provoca un secuestro de líquido en el lumen intestinal ("tercer espacio"), llevando a deshidratación, hipovolemia y desequilibrios hidroelectrolíticos. Si la presión sigue aumentando, se compromete el flujo venoso y luego el arterial de la pared intestinal, causando isquemia, necrosis y perforación. Además, el sobrecrecimiento bacteriano en el líquido estancado puede llevar a la translocación de bacterias y toxinas a la circulación, causando sepsis.',
            clinical_case: 'Una paciente de 80 años con fibrilación auricular y tratamiento anticoagulante es traída a urgencias por dolor abdominal súbito e intenso. A la exploración, presenta un abdomen distendido, muy doloroso a la palpación de forma difusa, con signos de irritación peritoneal (rebote positivo). Se encuentra taquicárdica, hipotensa y febril. Una tomografía computarizada muestra un vólvulo del sigmoide con signos de isquemia parietal (neumatosis intestinal) y líquido libre en cavidad. Los laboratorios muestran leucocitosis, acidosis metabólica y lactato elevado.',
            quiz: [
                {
                    question: 'En las fases iniciales de una obstrucción intestinal, la principal fuente del gas que distiende las asas es:',
                    options: ['Producción bacteriana de metano', 'Difusión desde la sangre', 'Aire deglutido', 'Reacciones químicas en el lumen'],
                    answer: 2,
                    justification: 'El gas intestinal que se acumula proximal a una obstrucción proviene principalmente (en un 70-80%) del aire que se deglute, compuesto en su mayoría por nitrógeno y oxígeno.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1179.'
                },
                {
                    question: 'La pérdida de líquidos en un paciente con obstrucción intestinal se debe principalmente a:',
                    options: ['Secuestro de líquido en el lumen intestinal y vómitos', 'Diarrea secretora distal a la obstrucción', 'Pérdidas insensibles por fiebre', 'Hemorragia en la pared intestinal'],
                    answer: 0,
                    justification: 'La hipovolemia en la obstrucción intestinal es multifactorial, pero las causas principales son el secuestro masivo de líquidos y electrolitos en el lumen intestinal (tercer espacio) y la pérdida por los vómitos.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1179.'
                },
                {
                    question: '¿Qué desequilibrio ácido-base es común encontrar en una obstrucción proximal con vómitos abundantes?',
                    options: ['Acidosis respiratoria', 'Alcalosis metabólica hipoclorémica', 'Alcalosis respiratoria', 'Acidosis metabólica con brecha aniónica normal'],
                    answer: 1,
                    justification: 'Los vómitos profusos causan pérdida de ácido clorhídrico (HCl) y potasio (K), llevando a una alcalosis metabólica hipoclorémica e hipopotasémica.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general de fisiopatología).'
                },
                {
                    question: 'La translocación bacteriana en la obstrucción intestinal se ve facilitada por:',
                    options: ['Aumento de la producción de moco', 'Disminución de la presión intraluminal', 'Isquemia de la mucosa y pérdida de la barrera intestinal', 'Esterilización del contenido intestinal por antibióticos'],
                    answer: 2,
                    justification: 'El aumento de la presión y la isquemia resultante dañan la integridad de la barrera mucosa intestinal, permitiendo que las bacterias y sus toxinas pasen del lumen a la circulación sistémica.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1179.'
                },
                {
                    question: 'Una obstrucción de colon con una válvula ileocecal competente se comporta como:',
                    options: ['Un íleo paralítico', 'Una obstrucción parcial', 'Una obstrucción en asa cerrada', 'Una fístula de alto gasto'],
                    answer: 2,
                    justification: 'Una válvula ileocecal competente impide que el contenido del colon se regurgite hacia el intestino delgado. Esto crea un segmento colónico obstruido en ambos extremos (el tumor distalmente y la válvula proximalmente), lo que se conoce como una obstrucción en asa cerrada, con alto riesgo de perforación cecal.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'El término "estrangulación" en una obstrucción intestinal implica:',
                    options: ['Que la obstrucción es completa', 'Que hay compromiso del riego sanguíneo', 'Que la causa son adherencias', 'Que el intestino está perforado'],
                    answer: 1,
                    justification: 'La estrangulación es la complicación más grave de la obstrucción e indica que el aporte vascular al segmento intestinal afectado está comprometido, lo que lleva a isquemia, gangrena y perforación si no se trata de inmediato.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: '¿Por qué el dolor en una obstrucción estrangulada cambia de cólico a constante?',
                    options: ['Por la fatiga de la musculatura intestinal', 'Por el desarrollo de irritación peritoneal debido a la isquemia', 'Por la descompresión del asa intestinal', 'Por el efecto de los analgésicos opioides'],
                    answer: 1,
                    justification: 'El dolor visceral cólico inicial (de la lucha intestinal) cambia a un dolor somático, constante y localizado cuando la isquemia progresa y causa inflamación del peritoneo parietal.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'El colon absorbe normalmente una gran cantidad de agua. ¿Aproximadamente cuánto líquido que llega del íleon se absorbe diariamente?',
                    options: ['100-200 ml', '500-800 ml', '1000-2000 ml', 'Más de 3000 ml'],
                    answer: 2,
                    justification: 'En circunstancias normales, cerca del 90% del agua contenida en el líquido ileal se absorbe en el colon, lo que equivale a 1000 a 2000 ml/día. El colon tiene una capacidad de absorción de hasta 5000 ml/ día.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1179.'
                },
                {
                    question: 'La "colitis por derivación" es una inflamación de un segmento colónico excluido del tránsito fecal. ¿Cuál es la causa fisiopatológica?',
                    options: ['Isquemia crónica', 'Infección por Clostridium difficile', 'Falta de ácidos grasos de cadena corta', 'Reacción autoinmune'],
                    answer: 2,
                    justification: 'Los ácidos grasos de cadena corta (butirato, acetato) son la principal fuente de energía para los colonocitos. La derivación del flujo fecal priva a la mucosa de estos nutrientes, lo que puede ocasionar atrofia e inflamación (colitis por derivación).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1179.'
                },
                {
                    question: '¿Qué alteración hidroelectrolítica es característica de la diarrea secretora voluminosa que puede ocurrir en algunas obstrucciones parciales?',
                    options: ['Hipernatremia e hipercloremia', 'Hipopotasemia y acidosis metabólica', 'Hipercalcemia e hipofosfatemia', 'Hipomagnesemia'],
                    answer: 1,
                    justification: 'Las secreciones intestinales son ricas en potasio y bicarbonato. Su pérdida masiva en una diarrea secretora conduce a hipopotasemia y acidosis metabólica sin brecha aniónica.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1179.'
                }
            ],
            completed: false
        },
        'diagnostico': {
            title: 'Diagnóstico clínico, laboratorio y gabinete',
            summary: 'El diagnóstico se basa en la anamnesis, exploración física y estudios de imagen. Clínicamente, los síntomas cardinales son dolor abdominal (cólico), distensión, vómitos y ausencia de evacuaciones y gases (obstipación). En la exploración física se busca taquicardia e hipotensión (deshidratación), y en el abdomen, distensión, timpanismo y ruidos intestinales aumentados ("de lucha") o ausentes. Es crucial buscar hernias y realizar un tacto rectal. Los laboratorios (biometría hemática, electrolitos, lactato) evalúan la severidad y las complicaciones. Las radiografías de abdomen son el estudio inicial, mostrando dilatación de asas y niveles hidroaéreos. La Tomografía Computarizada (TC) es el estudio de elección para confirmar el diagnóstico, identificar la causa, el sitio de transición y detectar complicaciones como isquemia o perforación.',
            clinical_case: 'Un varón de 55 años acude por dolor y distensión abdominal de 24 horas. Al examen físico se encuentra taquicárdico, con abdomen timpánico pero sin irritación peritoneal. El tacto rectal es normal. Las radiografías simples muestran gran dilatación del ciego y colon ascendente, con el colon transverso colapsado. Se realiza una TC abdominal que confirma una obstrucción a nivel del ángulo esplénico del colon. Una colonoscopia de urgencia identifica una neoplasia estenosante en esa localización y se logra colocar una endoprótesis metálica autoexpandible como puente a la cirugía.',
            quiz: [
                {
                    question: '¿Cuál es el estudio de imagen de elección para un paciente estable con sospecha de obstrucción intestinal complicada?',
                    options: ['Radiografía simple de abdomen', 'Ultrasonido abdominal', 'Tomografía computarizada (TC) con contraste', 'Enema con bario'],
                    answer: 2,
                    justification: 'La TC es la modalidad de imagen más útil. Permite confirmar el diagnóstico, determinar el nivel y la causa de la obstrucción, y, lo que es más importante, detectar signos de estrangulación, isquemia y perforación.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1181.'
                },
                {
                    question: 'En una radiografía de abdomen, la dilatación del intestino delgado se diferencia de la del grueso por la presencia de:',
                    options: ['Niveles hidroaéreos', 'Válvulas conniventes (pliegues circulares)', 'Haustras', 'Gas en la ampolla rectal'],
                    answer: 1,
                    justification: 'Las válvulas conniventes del intestino delgado atraviesan todo el diámetro del asa ("pila de monedas"), mientras que las haustras del colon son más espaciadas y no cruzan completamente la luz.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general de radiología).'
                },
                {
                    question: '¿Qué hallazgo de laboratorio es un indicador específico de isquemia intestinal y mal pronóstico?',
                    options: ['Leucocitosis', 'Hiponatremia', 'Acidosis metabólica con lactato elevado', 'Elevación de la creatinina'],
                    answer: 2,
                    justification: 'La acidosis metabólica, especialmente con un nivel de lactato sérico elevado, es un signo ominoso que sugiere isquemia tisular por metabolismo anaerobio y se asocia con un aumento de la mortalidad.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'Los cuatro síntomas cardinales de la obstrucción intestinal son:',
                    options: ['Fiebre, diarrea, ictericia y dolor', 'Dolor abdominal, distensión, vómito y obstipación', 'Cefalea, melena, pujo y tenesmo', 'Pérdida de peso, anemia, náuseas y diarrea'],
                    answer: 1,
                    justification: 'La presentación clásica de la obstrucción intestinal consiste en dolor abdominal (usualmente cólico), distensión abdominal, vómitos y cese del paso de heces y gas (obstipación).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1183.'
                },
                {
                    question: 'En la exploración física de una obstrucción intestinal temprana, los ruidos intestinales se describen clásicamente como:',
                    options: ['Ausentes (silencio abdominal)', 'Normales', 'Disminuidos en frecuencia', 'Aumentados y de tono metálico ("ruidos de lucha")'],
                    answer: 3,
                    justification: 'En las fases iniciales, el intestino lucha por vencer la obstrucción, lo que genera una hiperperistalsis que se ausculta como ruidos intestinales frecuentes, de tono alto o metálico. En fases tardías o con isquemia, los ruidos disminuyen o desaparecen.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1180.'
                },
                {
                    question: '¿Para qué tipo de vólvulo un enema con contraste hidrosoluble puede ser tanto diagnóstico como potencialmente terapéutico?',
                    options: ['Vólvulo cecal', 'Vólvulo del transverso', 'Vólvulo sigmoide', 'Vólvulo gástrico'],
                    answer: 2,
                    justification: 'En el vólvulo sigmoide, un enema con contraste muestra una imagen en "pico de pájaro". La presión hidrostática del enema a veces puede lograr la detorsión del vólvulo, aunque la descompresión endoscópica es el método de elección.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1219.'
                },
                {
                    question: 'La presencia de neumoperitoneo en una radiografía de un paciente con obstrucción intestinal indica:',
                    options: ['Íleo severo', 'Perforación intestinal', 'Neumatosis intestinal', 'Absceso intraabdominal'],
                    answer: 1,
                    justification: 'El neumoperitoneo (aire libre en la cavidad peritoneal) es un signo de perforación de una víscera hueca y constituye una emergencia quirúrgica.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1181.'
                },
                {
                    question: 'El vómito de características "fecaloides" es más sugestivo de una obstrucción:',
                    options: ['Gástrica', 'Duodenal', 'Yeyunal proximal', 'Íleon distal o colónica'],
                    answer: 3,
                    justification: 'El vómito fecaloide ocurre en obstrucciones distales (intestino delgado distal o colon) y es el resultado del sobrecrecimiento bacteriano masivo en el contenido intestinal estancado.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: '¿Qué maniobra es indispensable en la exploración física de todo paciente con obstrucción intestinal?',
                    options: ['Buscar el signo de Murphy', 'Percutir el espacio de Traube', 'Explorar todos los orificios herniarios', 'Realizar una puñopercusión lumbar'],
                    answer: 2,
                    justification: 'Una hernia inguinal o femoral incarcerada es una causa común y fácilmente tratable de obstrucción intestinal. Omitir la exploración de los orificios herniarios (inguinales, femorales, umbilicales, incisionales) es un error diagnóstico grave.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'La colonoscopia está contraindicada en la fase aguda de la diverticulitis por el riesgo de perforación, pero ¿cuándo se recomienda realizarla?',
                    options: ['Nunca, es muy riesgosa', 'Inmediatamente al ingreso', 'A las 4-6 semanas de la resolución del cuadro agudo', 'Solo si hay sangrado'],
                    answer: 2,
                    justification: 'Como el carcinoma colónico puede simular una diverticulitis, se recomienda una colonoscopia de seguimiento 4 a 6 semanas después de que el episodio agudo se haya resuelto para descartar una neoplasia maligna subyacente.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1202.'
                }
            ],
            completed: false
        },
        'tratamiento': {
            title: 'Tratamiento',
            summary: 'El tratamiento inicial de toda obstrucción intestinal es médico y se enfoca en la reanimación. Incluye mantener al paciente en ayuno (NPO), descompresión del tracto gastrointestinal con una sonda nasogástrica (SNG) para aliviar vómitos y distensión, y una agresiva reanimación hidroelectrolítica con soluciones cristaloides para corregir la deshidratación. Se debe colocar una sonda Foley para monitorear el gasto urinario. El tratamiento definitivo depende de la etiología y la presencia de complicaciones. La obstrucción parcial o el íleo postoperatorio pueden resolverse con manejo conservador. Sin embargo, la obstrucción completa, la obstrucción en asa cerrada, y cualquier signo de estrangulación o isquemia (fiebre, taquicardia, leucocitosis, acidosis, peritonismo) son indicaciones de cirugía urgente.',
            clinical_case: 'Un paciente de 65 años con antecedente de múltiples cirugías abdominales por enfermedad de Crohn presenta un cuadro de obstrucción intestinal parcial. Se inicia manejo conservador con ayuno, sonda nasogástrica a derivación y reanimación con líquidos IV. Durante las siguientes 36 horas, el paciente presenta mejoría del dolor, el gasto por la sonda disminuye y comienza a canalizar gases. Se realiza una prueba con un medio de contraste hidrosoluble (Gastrografin) que muestra paso del mismo hacia el colon, confirmando la resolución del cuadro. Se retira la SNG y se reinicia la dieta líquida con buena tolerancia.',
            quiz: [
                {
                    question: '¿Cuál es el primer paso y el más crucial en el manejo de un paciente con obstrucción intestinal aguda?',
                    options: ['Administrar antibióticos de amplio espectro', 'Realizar una TC de abdomen urgente', 'Reanimación agresiva con líquidos intravenosos', 'Colocar una sonda rectal'],
                    answer: 2,
                    justification: 'La prioridad en el manejo inicial es la corrección de la hipovolemia y los trastornos electrolíticos mediante una agresiva reanimación con líquidos IV. La deshidratación severa puede llevar a insuficiencia renal y shock.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1183.'
                },
                {
                    question: 'El propósito principal de la sonda nasogástrica (SNG) en la obstrucción intestinal es:',
                    options: ['Nutrir al paciente', 'Descomprimir el estómago y el intestino proximal', 'Administrar medicamentos', 'Lavar el estómago de toxinas'],
                    answer: 1,
                    justification: 'La SNG descomprime el tracto gastrointestinal superior, lo que alivia la distensión, reduce las náuseas y el vómito, y disminuye el riesgo de aspiración pulmonar del contenido gástrico.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general de tratamiento).'
                },
                {
                    question: '¿Cuál de las siguientes es una indicación absoluta de cirugía de urgencia en un paciente con obstrucción intestinal?',
                    options: ['Vómito fecaloide', 'Múltiples niveles hidroaéreos en la radiografía', 'Signos de peritonismo (dolor a la descompresión, rigidez)', 'Falta de mejoría en 12 horas'],
                    answer: 2,
                    justification: 'Los signos de irritación peritoneal (peritonismo) sugieren una complicación como isquemia o perforación intestinal (estrangulación), lo cual es una emergencia quirúrgica que requiere exploración inmediata.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1183.'
                },
                {
                    question: 'El procedimiento de Hartmann, indicado para algunas obstrucciones de colon izquierdo, consiste en:',
                    options: ['Resección del segmento afectado con anastomosis primaria', 'Creación de una colostomía en asa sin resección', 'Resección del segmento afectado, colostomía terminal y cierre del muñón rectal', 'Colocación de una endoprótesis colónica'],
                    answer: 2,
                    justification: 'El procedimiento de Hartmann implica la resección del sigmoide, la creación de una colostomía terminal con el colon descendente y el cierre del muñón rectal, que se deja dentro de la pelvis. Es un procedimiento seguro en situaciones de urgencia o peritonitis.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1189.'
                },
                {
                    question: 'En una obstrucción de intestino delgado por adherencias, ¿cuándo se considera generalmente que ha fallado el manejo no operatorio?',
                    options: ['Si no mejora en 6 horas', 'Si el paciente tiene más de 50 años', 'Si no hay resolución clínica o radiológica en 24 a 48 horas', 'Si el nivel de sodio es bajo'],
                    answer: 2,
                    justification: 'En una obstrucción adhesiva parcial y no complicada, se puede intentar un manejo conservador. La falta de resolución (persistencia del dolor, alto gasto por SNG, falta de paso de gas o contraste) después de 24-48 horas usualmente indica la necesidad de cirugía.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'El tratamiento de elección para un vólvulo cecal no complicado es:',
                    options: ['Detorsión endoscópica y cirugía electiva', 'Observación con sonda rectal', 'Cirugía urgente (hemicolectomía derecha)', 'Enema con bario'],
                    answer: 2,
                    justification: 'A diferencia del vólvulo sigmoide, el vólvulo cecal rara vez se puede resolver por endoscopia y tiene un alto riesgo de isquemia. Por lo tanto, el tratamiento es la exploración quirúrgica urgente, usualmente con una hemicolectomía derecha.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1220.'
                },
                {
                    question: '¿Cuál es el rol de los antibióticos en el manejo inicial de una obstrucción no complicada?',
                    options: ['No tienen ningún rol', 'Son controversiales, pero a menudo se administran para cubrir posible translocación bacteriana', 'Solo se usan si el paciente tiene fiebre alta', 'Se administran por la sonda nasogástrica'],
                    answer: 1,
                    justification: 'Aunque su uso es debatido en obstrucciones simples, a menudo se administran antibióticos de amplio espectro para cubrir la flora entérica ante la posibilidad de translocación bacteriana o isquemia oculta.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'Una opción de manejo para la obstrucción maligna de colon izquierdo como "puente a la cirugía" es:',
                    options: ['Gastrostomía de alimentación', 'Nutrición parenteral total por 2 semanas', 'Colocación de una endoprótesis (stent) colónica', 'Una ileostomía en asa'],
                    answer: 2,
                    justification: 'La colocación de un stent metálico autoexpandible por vía endoscópica puede descomprimir una obstrucción maligna, permitiendo optimizar al paciente y realizar una resección electiva con anastomosis primaria en un solo tiempo quirúrgico.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: '¿Cuál es el mejor indicador de una reanimación con líquidos adecuada en un paciente con obstrucción?',
                    options: ['La normalización de la frecuencia cardíaca', 'Un gasto urinario > 0.5 ml/kg/hora', 'La resolución de la distensión abdominal', 'La disminución del gasto por la SNG'],
                    answer: 1,
                    justification: 'Un gasto urinario adecuado es el indicador más fiable de una perfusión orgánica y una volemia restaurada, y es un objetivo clave de la reanimación inicial.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'En el síndrome de Ogilvie (seudoobstrucción colónica) que no responde a medidas conservadoras, ¿cuál es el siguiente paso terapéutico?',
                    options: ['Colectomía total urgente', 'Administración de neostigmina intravenosa', 'Enemas evacuantes diarios', 'Laparotomía exploradora'],
                    answer: 1,
                    justification: 'La neostigmina, un inhibidor de la acetilcolinesterasa, es muy eficaz para inducir la descompresión colónica en el síndrome de Ogilvie. La descompresión colonoscópica es otra opción si la neostigmina falla o está contraindicada.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1221.'
                }
            ],
            completed: false
        },
        'indicaciones': {
            title: 'Indicaciones quirúrgicas',
            summary: 'Las indicaciones quirúrgicas se dividen en urgentes y electivas. La cirugía de urgencia es mandatoria ante cualquier signo de estrangulación o isquemia intestinal (dolor constante, irritación peritoneal, fiebre, taquicardia, acidosis metabólica), perforación (neumoperitoneo), o en una obstrucción de colon en asa cerrada (válvula ileocecal competente con obstrucción distal). Otras indicaciones de urgencia incluyen la obstrucción completa que no mejora y el vólvulo cecal. La cirugía electiva se considera en pacientes con obstrucción parcial que no resuelven con manejo conservador (típicamente 24-48h), en casos de vólvulo sigmoide tras la descompresión endoscópica exitosa para prevenir recurrencias, y para resecar la causa subyacente de una obstrucción resuelta, como un tumor.',
            clinical_case: 'Un paciente de 70 años con una hernia inguinal derecha conocida, no reductible desde hace 6 horas, acude a urgencias con dolor intenso en la región y datos de obstrucción intestinal. En la exploración, la hernia es muy sensible y no se logra reducir. El paciente desarrolla fiebre y leucocitosis. Se establece el diagnóstico de una hernia inguinal incarcerada con alta sospecha de estrangulación, lo que representa una indicación quirúrgica de emergencia.',
            quiz: [
                {
                    question: '¿Cuál de los siguientes es el signo más fidedigno de estrangulación intestinal que indica cirugía inmediata?',
                    options: ['Distensión abdominal severa', 'Vómito de contenido fecaloide', 'Dolor a la descompresión (signo de rebote)', 'Múltiples niveles hidroaéreos'],
                    answer: 2,
                    justification: 'La irritación peritoneal, manifestada como dolor a la descompresión o rigidez abdominal, es el signo más fiable de isquemia o necrosis transmural y una indicación absoluta para una laparotomía de urgencia.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1183.'
                },
                {
                    question: 'Un paciente con obstrucción parcial de intestino delgado por adherencias es manejado conservadoramente. ¿Qué evento obligaría a una cirugía?',
                    options: ['Gasto de 500 ml por la SNG en 24h', 'Resolución del dolor cólico', 'Aparición de fiebre y taquicardia', 'Ausencia de evacuaciones por 24h'],
                    answer: 2,
                    justification: 'La aparición de signos sistémicos como fiebre y taquicardia, junto con leucocitosis o dolor localizado, debe hacer sospechar el desarrollo de isquemia (estrangulación) y es una indicación para abandonar el manejo conservador y proceder con cirugía.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'Tras la descompresión endoscópica exitosa de un vólvulo sigmoide, ¿cuál es la conducta a seguir?',
                    options: ['Alta hospitalaria con dieta rica en fibra', 'Mantener una sonda rectal por 2 semanas', 'Programar una sigmoidectomía electiva en el mismo ingreso', 'Repetir la colonoscopia en 24 horas'],
                    answer: 2,
                    justification: 'Debido al alto riesgo de recurrencia (hasta 40%), después de una descompresión endoscópica exitosa de un vólvulo sigmoide, está indicada la resección quirúrgica electiva (sigmoidectomía) durante la misma hospitalización para prevenir futuros episodios.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1219.'
                },
                {
                    question: '¿Cuál es el tratamiento de un vólvulo cecal?',
                    options: ['Descompresión con colonoscopia', 'Cirugía de urgencia', 'Manejo conservador con SNG y líquidos IV', 'Enema de bario para detorsión'],
                    answer: 1,
                    justification: 'El vólvulo cecal tiene un alto riesgo de compromiso vascular y no es susceptible de descompresión endoscópica. Por lo tanto, siempre es una indicación de exploración quirúrgica urgente.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1220.'
                },
                {
                    question: 'Una obstrucción de colon causada por un adenocarcinoma, que se logra descomprimir con un stent, ¿cuál es el siguiente paso?',
                    options: ['El stent es el tratamiento definitivo', 'Quimioterapia y revaloración en 6 meses', 'Resección quirúrgica programada del tumor', 'Observación hasta que vuelva a obstruirse'],
                    answer: 2,
                    justification: 'La colocación de un stent en una obstrucción maligna es una medida temporal (puente a la cirugía) que permite descomprimir el colon y optimizar al paciente para una resección oncológica definitiva de forma electiva y más segura.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: '¿Cuál de estas condiciones NO es una indicación absoluta de cirugía en obstrucción intestinal?',
                    options: ['Perforación con neumoperitoneo', 'Obstrucción parcial de intestino delgado', 'Isquemia intestinal demostrada por TC', 'Obstrucción en asa cerrada del colon'],
                    answer: 1,
                    justification: 'La obstrucción parcial de intestino delgado, especialmente si es por adherencias, a menudo se resuelve con manejo conservador. Las otras tres opciones son emergencias quirúrgicas.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'El objetivo principal de la cirugía en una obstrucción por diverticulitis complicada con un gran absceso es:',
                    options: ['Drenar el absceso y controlar la sepsis, usualmente con una resección tipo Hartmann', 'Realizar una anastomosis primaria siempre', 'Solo administrar antibióticos', 'Cerrar la perforación del divertículo'],
                    answer: 0,
                    justification: 'En diverticulitis complicada con peritonitis o un gran absceso no drenable percutáneamente, el objetivo es controlar la fuente de la sepsis. Esto usualmente requiere resecar el segmento enfermo (sigmoide) y realizar una colostomía (procedimiento de Hartmann).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1202.'
                },
                {
                    question: '¿Cuándo está indicada la cirugía en la enfermedad de Crohn que causa obstrucción?',
                    options: ['Siempre, en el momento del diagnóstico', 'Solo si hay pérdida de peso', 'Cuando la estenosis es larga y no responde a tratamiento médico o dilatación endoscópica', 'Nunca, el tratamiento es solo médico'],
                    answer: 2,
                    justification: 'La cirugía en Crohn se reserva para las complicaciones. En el caso de obstrucción, se indica cuando una estenosis fibrótica causa síntomas significativos y no es susceptible de manejo médico o endoscópico.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1198.'
                },
                {
                    question: 'Una hernia inguinal incarcerada que causa obstrucción intestinal es una indicación quirúrgica porque:',
                    options: ['Siempre se puede reducir manualmente', 'Tiene un alto riesgo de estrangulación', 'Responde bien a los antibióticos', 'Se asocia a cáncer'],
                    answer: 1,
                    justification: 'Una hernia incarcerada (que no se puede reducir) tiene un flujo sanguíneo comprometido, lo que la pone en alto riesgo de progresar a estrangulación (isquemia y necrosis del contenido herniado).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: 'En una obstrucción de colon por cáncer, ¿qué factor influye en la decisión de hacer una resección y anastomosis primaria vs. un procedimiento de Hartmann?',
                    options: ['La edad del paciente', 'El tamaño del tumor', 'La estabilidad hemodinámica del paciente y el grado de contaminación peritoneal', 'El nivel de hemoglobina'],
                    answer: 2,
                    justification: 'En una cirugía de urgencia por obstrucción colónica, la decisión de realizar una anastomosis primaria depende críticamente de si el paciente está estable, bien perfundido y si la cavidad peritoneal no tiene contaminación fecal masiva.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1186.'
                }
            ],
            completed: false
        },
        'aspectos': {
            title: 'Aspectos técnicos',
            summary: 'Los aspectos técnicos en la cirugía de obstrucción intestinal son cruciales. En cirugía oncológica, se requiere una resección amplia con ligadura alta de los vasos mesentéricos para una linfadenectomía adecuada. La creación de una anastomosis segura es primordial, debiendo estar bien vascularizada y libre de tensión. Se puede realizar de forma manual o con grapadoras circulares o lineales. La decisión entre una anastomosis primaria y un estoma (ej. procedimiento de Hartmann) depende de la estabilidad del paciente, la causa de la obstrucción y el grado de contaminación peritoneal. La creación de estomas (ileostomía o colostomía) es una técnica fundamental, y su correcta localización y maduración son vitales para la calidad de vida del paciente.',
            clinical_case: 'Un paciente de 60 años es sometido a una sigmoidectomía de urgencia por una obstrucción tumoral con peritonitis localizada. Dada la contaminación y la inflamación del tejido, se decide realizar un procedimiento de Hartmann. Se reseca el colon sigmoide, se aboca el colon descendente como una colostomía terminal en la fosa ilíaca izquierda y se cierra el muñón rectal. El paciente se recupera satisfactoriamente, y se planea la reconstitución del tránsito en un segundo tiempo quirúrgico una vez que complete la quimioterapia adyuvante.',
            quiz: [
                {
                    question: 'En una resección de colon por cáncer, el principio de "ligadura vascular alta" se refiere a:',
                    options: ['Ligar los vasos cerca de la pared del colon para preservar la irrigación', 'Ligar los vasos en su origen para extirpar los ganglios linfáticos regionales', 'Usar solo clips metálicos para la hemostasia', 'Evitar ligar la arteria principal'],
                    answer: 1,
                    justification: 'La ligadura vascular alta (en el origen de los vasos principales, como la arteria mesentérica inferior) es un principio oncológico fundamental para asegurar la resección de todo el territorio de drenaje linfático del tumor.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1185.'
                },
                {
                    question: '¿Cuál es el requisito más importante para una anastomosis intestinal segura?',
                    options: ['Que sea realizada con grapadora', 'Ausencia de tensión y buena vascularización', 'Uso de sutura no absorbible', 'Que sea de un solo plano de sutura'],
                    answer: 1,
                    justification: 'Independientemente de la técnica (manual o mecánica), los principios más importantes para evitar una fuga anastomótica son asegurar que los cabos a unir tengan una excelente irrigación sanguínea y que la unión quede completamente libre de tensión.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1189.'
                },
                {
                    question: 'El procedimiento de Hartmann es una opción segura en cirugía de colon izquierdo de urgencia porque:',
                    options: ['Es técnicamente más fácil que una anastomosis', 'Evita la necesidad de una colostomía', 'Evita realizar una anastomosis en un intestino mal preparado o en un campo contaminado', 'Permite la resección de más tumor'],
                    answer: 2,
                    justification: 'El principal beneficio del procedimiento de Hartmann en un contexto de urgencia (peritonitis, intestino no preparado) es que evita el alto riesgo de fuga de una anastomosis primaria, al derivar el tránsito con una colostomía.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1189.'
                },
                {
                    question: '¿Qué es una ileostomía tipo Brooke?',
                    options: ['Una ileostomía continente', 'Una ileostomía que se evierte sobre sí misma para crear un pezón', 'Una ileostomía a nivel de la piel', 'Una fístula mucosa'],
                    answer: 1,
                    justification: 'La técnica de Brooke consiste en evertir el extremo del íleon y suturar la mucosa a la piel. Esto crea un pezón o estoma protruido que facilita la adaptación de la bolsa y protege la piel del efluente irritante del intestino delgado.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1192.'
                },
                {
                    question: 'La "preparación intestinal mecánica" antes de una cirugía colorrectal electiva tiene como objetivo:',
                    options: ['Esterilizar el colon', 'Disminuir el volumen de heces para facilitar la manipulación quirúrgica', 'Mejorar la vascularización del colon', 'Prevenir adherencias postoperatorias'],
                    answer: 1,
                    justification: 'El objetivo de la preparación mecánica con laxantes es limpiar el colon de materia fecal, lo que teóricamente facilita la manipulación del intestino durante la cirugía y podría reducir las complicaciones infecciosas si se realiza una anastomosis, aunque su uso es debatido.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1194.'
                },
                {
                    question: '¿Cuál es la principal ventaja de la cirugía laparoscópica sobre la abierta en la resección de colon?',
                    options: ['Permite resecar tumores más grandes', 'Menor costo total', 'Menor dolor postoperatorio y recuperación más rápida', 'Menor tasa de recurrencia del cáncer'],
                    answer: 2,
                    justification: 'Las ventajas demostradas de la cirugía de mínima invasión (laparoscópica o robótica) incluyen mejores resultados cosméticos, menor dolor postoperatorio, y una reanudación más temprana de la función intestinal y las actividades normales.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1187.'
                },
                {
                    question: 'Al crear una anastomosis colorrectal baja con una grapadora circular, ¿qué es la "prueba de fuga de aire"?',
                    options: ['Insuflar aire por la SNG y escuchar el abdomen', 'Llenar la pelvis con solución salina e insuflar aire por el recto para buscar burbujas', 'Una radiografía para buscar aire libre', 'Medir la presión dentro de la anastomosis'],
                    answer: 1,
                    justification: 'Después de crear una anastomosis rectal baja, la pelvis se llena de agua o solución salina y se insufla aire a través del ano con un proctoscopio. La aparición de burbujas en el líquido indica una fuga anastomótica que debe ser reparada.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1191.'
                },
                {
                    question: 'Una colostomía terminal usualmente se sitúa en:',
                    options: ['La línea media supraumbilical', 'La fosa ilíaca derecha', 'La fosa ilíaca izquierda', 'El flanco derecho'],
                    answer: 2,
                    justification: 'Una colostomía terminal, como la del procedimiento de Hartmann, se crea con el colon descendente o sigmoide y se ubica convencionalmente en la fosa ilíaca izquierda, pasando a través del músculo recto abdominal.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. (Concepto general).'
                },
                {
                    question: '¿Qué es una colectomía subtotal?',
                    options: ['Resección de todo el colon y el recto', 'Resección del colon sigmoide', 'Resección de la mayor parte del colon, preservando el recto', 'Resección del colon derecho'],
                    answer: 2,
                    justification: 'Una colectomía total implica resecar todo el colon. Una colectomía subtotal reseca el ciego, colon ascendente, transverso y descendente, pero preserva el sigmoides y/o el recto para una posible anastomosis (ej. ileosigmoidea o ileorrectal).',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1188.'
                },
                {
                    question: 'El marcado preoperatorio del sitio de un estoma es crucial para:',
                    options: ['Asegurar que el cirujano no olvide crearlo', 'Prevenir la hernia paraestomal', 'Mejorar la calidad de vida del paciente al facilitar el cuidado del estoma', 'Disminuir el tiempo quirúrgico'],
                    answer: 2,
                    justification: 'Marcar el sitio del estoma antes de la cirugía, con el paciente en varias posiciones, es fundamental para colocarlo en un lugar visible, sobre una superficie plana y lejos de pliegues o prominencias óseas, lo que mejora drásticamente la capacidad del paciente para manejar el dispositivo y su calidad de vida.',
                    source: 'Schwartz 10ma edición. Capitulo 29. Colon, recto y ano. Página 1192.'
                }
            ],
            completed: false
        }
    };

    const moduleNav = document.getElementById('module-nav');
    const contentArea = document.getElementById('module-content');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    function init() {
        const navList = document.createElement('ul');
        Object.keys(modules).forEach(key => {
            const li = document.createElement('li');
            li.textContent = modules[key].title;
            li.dataset.moduleId = key;
            li.addEventListener('click', () => displayModule(key));
            navList.appendChild(li);
        });
        moduleNav.appendChild(navList);
        updateProgress();
    }

    function displayModule(moduleId) {
        const module = modules[moduleId];
        document.querySelectorAll('#module-nav li').forEach(li => li.classList.remove('active'));
        document.querySelector(`[data-module-id='${moduleId}']`).classList.add('active');

        contentArea.innerHTML = `
            <h2>${module.title}</h2>
            <h3>Resumen</h3>
            <p>${module.summary || 'Contenido no disponible aún.'}</p>
            <h3>Caso Clínico</h3>
            <p>${module.clinical_case || 'Contenido no disponible aún.'}</p>
            <h3>Test de Autoevaluación</h3>
            <div id="quiz-container"></div>
            <button id="submit-quiz" class="hidden">Evaluar Test</button>
        `;

        if (module.quiz.length > 0) {
            renderQuiz(moduleId);
            document.getElementById('submit-quiz').classList.remove('hidden');
        } else {
            contentArea.innerHTML += '<p>El cuestionario para este módulo estará disponible próximamente.</p>';
        }
    }

    function renderQuiz(moduleId) {
        const quizContainer = document.getElementById('quiz-container');
        const questions = modules[moduleId].quiz;
        let quizHTML = '';
        questions.forEach((q, index) => {
            quizHTML += `
                <div class="quiz-question">
                    <p><strong>${index + 1}. ${q.question}</strong></p>
                    <div class="quiz-options">
                        ${q.options.map((opt, i) => `
                            <label>
                                <input type="radio" name="question${index}" value="${i}">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                    <div class="justification hidden" id="justification${index}"></div>
                </div>
            `;
        });
        quizContainer.innerHTML = quizHTML;

        document.getElementById('submit-quiz').onclick = () => submitQuiz(moduleId);
    }

    function submitQuiz(moduleId) {
        const module = modules[moduleId];
        let score = 0;
        module.quiz.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            const justificationDiv = document.getElementById(`justification${index}`);
            
            if (selectedOption && parseInt(selectedOption.value) === q.answer) {
                score++;
                justificationDiv.style.borderColor = '#2ecc71'; // Green for correct
            } else {
                justificationDiv.style.borderColor = '#e74c3c'; // Red for incorrect
            }

            justificationDiv.innerHTML = `<p><strong>Justificación:</strong> ${q.justification}</p><p class="source">Fuente: ${q.source}</p>`;
            justificationDiv.classList.remove('hidden');
        });

        alert(`Obtuviste ${score} de ${module.quiz.length} respuestas correctas.`);
        if (!module.completed) {
            module.completed = true;
            document.querySelector(`[data-module-id='${moduleId}']`).classList.add('completed');
            updateProgress();
        }
        document.getElementById('submit-quiz').disabled = true;
    }

    function updateProgress() {
        const completedModules = Object.values(modules).filter(m => m.completed).length;
        const totalModules = Object.keys(modules).length;
        const percentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
        
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${Math.round(percentage)}% Completado`;
    }

    init();
});