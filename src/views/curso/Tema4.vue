<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Evaluación de la Aplicación de la RSE en <em>PYMES</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La implementación de la Responsabilidad Social Empresarial (RSE) en las pequeñas y medianas empresas (PYMES) es crucial para promover el desarrollo sostenible y fortalecer las relaciones con los grupos de interés. Aunque las PYMES enfrentan limitaciones de recursos, conocimiento y estructura organizacional, su flexibilidad y conexión con las comunidades locales les otorgan un papel destacado en la generación de impactos positivos en las áreas sociales, económicas y ambientales.
    
    h2(data-aos="fade-left") Importancia de la evaluación de la RSE
    p.mb-5 La evaluación de la RSE permite identificar logros, áreas de mejora y oportunidades para alinear los objetivos económicos de las PYMES con las necesidades del entorno. Este proceso facilita la toma de decisiones informadas y fomenta prácticas éticas y sostenibles en áreas como:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Condiciones laborales dignas.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg

              p.mb-0 Disminución del impacto ambiental.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg

              p.mb-0 Respaldo a proyectos comunitarios.
    
    p.mb-5 Según Guibert Ucín (2013), este enfoque no solo incrementa la competitividad empresarial, sino que también refuerza la confianza de clientes, inversores y otros grupos de interés al evidenciar un compromiso legítimo con el bienestar social y ambiental.

    h2(data-aos="fade-left") Contexto actual: Agenda 2030 y los ODS
    p.mb-5 La Agenda 2030 y los Objetivos de Desarrollo Sostenible (ODS) han impulsado a las PYMES a integrar la sostenibilidad en sus operaciones. En este marco, evaluar la aplicación de la RSE permite a las empresas:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        p.mb-0.p-4.tarjeta.bg-color-11.text-center Incrementar su competitividad en mercados cada vez más conscientes.
      .col-lg-4.mb-3.mb-lg-0
        p.mb-0.p-4.tarjeta.bg-color-10.text-center Optimizar recursos y consolidarse como agentes de cambio.
      .col-lg-4.mb-3.mb-lg-0
        p.mb-0.p-4.tarjeta.bg-color-9.text-center Aumentar la confianza y lealtad de los grupos de interés.
    
    h2(data-aos="fade-left") Métodos de evaluación de la RSE
    p.mb-5 La evaluación de la RSE se lleva a cabo mediante técnicas y marcos específicos, tales como:


    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            ul.lista-ul
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Indicadores de impacto:</b> miden los efectos sociales, económicos y ambientales de las iniciativas.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Auditorías sociales y ambientales:</b> revisan prácticas empresariales para garantizar el cumplimiento de estándares.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Marcos de referencia como los estándares GRI (Global Reporting Initiative):</b> proveen un marco para una evaluación objetiva y sistemática.
          .col-lg-5(data-aos="zoom-in").mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema4/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-5.mb-lg-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Estudio de casos
            p.mb-4(data-aos="fade-right") El estudio de casos es una herramienta esencial para comprender la aplicación de la responsabilidad social empresarial en contextos reales. Invito a explorar el documento <b>estudio de casos</b>, que destaca su importancia en el aprendizaje práctico, los beneficios para el análisis crítico y ejemplos concretos que ilustran el impacto de la RSE en empresas y comunidades.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estudio de casos.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/4.png', alt='')
    
    h2(data-aos="fade-left") Importancia de las buenas prácticas en RSE
    .row.mb-5
      .col-lg-8 
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 Identificar y fomentar buenas prácticas permite a las organizaciones, especialmente a las pequeñas y medianas empresas (PYMES), superar las limitaciones de recursos y promover estrategias responsables. Según Guibert Ucín (2013), estas prácticas no solo fortalecen la reputación empresarial, sino que también incrementan la competitividad y el crecimiento sostenible.
        
        h2(data-aos="fade-left") Criterios para la identificación de buenas prácticas
        p(data-aos="fade-left") La detección de buenas prácticas requiere criterios claros que evalúen su efectividad e impacto. Los más comunes incluyen:
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in").mb-4.mb-lg-0

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="17.5%" y="88.5%" numero="+")
                h5 Relevancia
                p Responde a necesidades prioritarias de los grupos de interés.
      
              .bg-color-white.box-shadow.p-3(x="37.5%" y="10.7%" numero="+")
                h5 Innovación
                p Introduce soluciones creativas para problemas sociales, ambientales o económicos.
      
              .bg-color-white.box-shadow.p-3(x="58.5%" y="89%" numero="+")
                h5 Impacto medible
                p Genera resultados tangibles que pueden ser evaluados y documentados.
      
              .bg-color-white.box-shadow.p-3(x="78%" y="10.7%" numero="+")
                h5 Sostenibilidad
                p Es viable a largo plazo y puede mantenerse con los recursos disponibles.
      
              .bg-color-white.box-shadow.p-3(x="96.7%" y="88.7%" numero="+")
                h5 Replicabilidad
                p Puede aplicarse en otros contextos y sectores con mínimas adaptaciones.
    
    h2(data-aos="fade-left") Ejemplo representativo
    p.mb-5 Un ejemplo de buena práctica en RSE es una empresa del sector textil que implementó un programa de reciclaje de residuos industriales. Sus iniciativas incluyeron:

    .bg-full-width.bg-fondo-6.mb-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.text-center
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/7.svg" alt="" style="width: 90px")
              h5 Recuperación de materiales textiles
              p.mb-0 Reutilización de desechos para fabricar nuevos productos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.text-center
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/8.svg" alt="" style="width: 90px")
              h5 Capacitación a empleados
              p.mb-0 Formación en reciclaje y manejo adecuado de residuos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.text-center
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/9.svg" alt="" style="width: 90px")
              h5 Beneficio social
              p.mb-0 Donación de productos reciclados a comunidades vulnerables.
    
    h2(data-aos="fade-left") Resultados obtenidos
    p.mb-5 La implementación de estrategias sostenibles ha generado resultados significativos que reflejan el compromiso de la organización con la responsabilidad social y ambiental.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Reducción del 40 % en residuos.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg

              p.mb-0 Disminución de costos operativos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg

              p.mb-0 Impacto positivo en comunidades locales.
    
    h2(data-aos="fade-left") Herramientas para identificar buenas prácticas
    p.mb-5 Las organizaciones pueden recurrir a diversas herramientas y metodologías para identificar y analizar buenas prácticas en RSE, tales como:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7
              h5 Indicadores de sostenibilidad (GRI, ISO 26000)
              p Permiten medir y comparar el desempeño en dimensiones sociales, ambientales y económicas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/12.png")
            .col-lg-7
              h5 Estudios de caso
              p Documentan y comparten experiencias exitosas que sirven como referencia para otras organizaciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7
              h5 Auditorías sociales y ambientales
              p Evaluaciones sistemáticas para identificar oportunidades de mejora en prácticas responsables.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/14.png")
            .col-lg-7
              h5 Análisis de materialidad
              p Herramienta que identifica temas prioritarios para los grupos de interés y la organización, optimizando esfuerzos.
    
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Impactos de actos de corrupción y soborno
            p.mb-4(data-aos="fade-right") Lo invitamos a conocer más sobre los Impactos de actos de corrupción y soborno en las organizaciones y su relación con la reputación empresarial y la RSE. En este documento, se analizan las repercusiones legales, económicas y sociales de estas prácticas, así como estrategias preventivas para fortalecer la transparencia y la ética empresarial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Impactos de actos de corrupción y soborno.
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/15.png', alt='')
    
  
  

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.edelman.com" target="_blank" rel="noopener noreferrer") Edelman Trust Barometer. (2021). Global Trust Report. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-JTveXxHrB4" target="_blank" rel="noopener noreferrer") IDEARSE. (2016, noviembre 14). La Responsabilidad Social Empresarial en Recursos Humanos

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Evaluación de la Aplicación de la RSE en PYMES',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Identifica la acción que pertenece a la dimensión económica:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Programas de capacitación comunitaria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reducción de emisiones de carbono',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Inversión en tecnologías sostenibles',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Gestión de residuos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'En un escenario de crisis reputacional, ¿qué estrategia puede mitigar los efectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Comunicación transparente con los grupos de interés',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Incremento de costos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Eliminación de programas de sostenibilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Negligencia en auditorías',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Las auditorías ambientales pueden identificar el uso ineficiente de recursos.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál sería una medida práctica para prevenir la corrupción en una empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Establecer canales de denuncia anónimos',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Reducir la transparencia',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Minimizar la capacitación ética',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evitar códigos de conducta',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué beneficio genera una alianza entre empresas y ONG?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Competencia desleal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Resolución de problemas complejos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Incremento de conflictos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducción de impacto social',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
