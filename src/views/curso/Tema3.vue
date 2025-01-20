<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Herramientas de Gestión en la RSE'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") La lucha contra la corrupción es esencial para las empresas comprometidas con la RSE. Al implementar medidas preventivas y fomentar una cultura ética, las organizaciones fortalecen su reputación y contribuyen al desarrollo sostenible en las comunidades donde operan.
    
    h2(data-aos="fade-left") Principales herramientas de gestión en la RSE
    p.mb-5 Las herramientas de gestión en responsabilidad social empresarial (RSE) facilitan la integración de prácticas sostenibles en las organizaciones, promoviendo un balance entre el desempeño social, ambiental y económico.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="ISO 26000")
            p.mb-0 Orienta sobre responsabilidad social en áreas como derechos humanos, medio ambiente, prácticas laborales y ética empresarial. No es certificable, pero facilita la integración de la RSE en estrategias empresariales.
    
          .div(titulo="ISO 14001")
            p.mb-0 Ayuda a las empresas a reducir su impacto ambiental mediante sistemas de gestión ambiental eficaces.
    
          .div(titulo="Indicadores Global <em>Reporting Initiative</em> (GRI)")
            p.mb-0 Estándares que evalúan el rendimiento social, ambiental y económico en informes de sostenibilidad, alineados con los ODS desde 2019.
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="<em>Balanced Scorecard Sostenible</em> (BSC)")
            p.mb-0 Adapta el modelo tradicional para integrar objetivos sociales y ambientales junto con metas financieras.
    
          .div(titulo="Análisis de Materialidad")
            p.mb-0 Identifica temas prioritarios para grupos de interés y la organización, asegurando un uso eficiente de recursos.
    
          .div(titulo="Evaluaciones de impacto social y ambiental")
            p.mb-0 Herramientas como el Análisis del Ciclo de Vida (ACV) evalúan el impacto ambiental de los productos desde su producción hasta su disposición final.
    
    .bg-full-width.bg-color-2.mb-5
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").order-2
            h5 Ejemplo práctico
            p Una empresa manufacturera puede implementar la norma ISO 14001 para reducir emisiones de carbono y optimizar el uso de recursos hídricos. A su vez, los estándares GRI le ayudan a elaborar un informe de sostenibilidad, destacando avances en gestión ambiental y su impacto en la comunidad.
          .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Beneficios y desafíos
    p.mb-5 Los beneficios y desafíos relacionados con la gestión en RSE destacan el potencial transformador de estas herramientas, así como las dificultades que enfrentan las organizaciones al implementarlas.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Beneficios" :icon="require('@/assets/bullets/1.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Beneficios
            ul.lista-ul
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Transparencia y confianza con los grupos de interés.  
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Toma de decisiones informada basada en datos claros.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Mejora continua mediante monitoreo del desempeño.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desafíos" :icon="require('@/assets/bullets/1.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Desafíos
            ul.lista-ul
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Falta de recursos para implementación, especialmente en PYMES. 
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Capacitación insuficiente para garantizar su efectividad.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Resistencia al cambio en algunos niveles organizacionales.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estas herramientas son fundamentales para conectar las operaciones empresariales con los principios de sostenibilidad y responsabilidad social. Su adopción permite no solo satisfacer expectativas de los grupos de interés, sino también contribuir al desarrollo de un entorno más equitativo y sostenible.
  
         

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Códigos de conducta empresarial
    
    .row.mb-5
      .col-lg-8 
        p(data-aos="fade-left") Los códigos de conducta empresarial son documentos formales que establecen los principios éticos y normas de comportamiento que guían las actividades organizacionales. Estos fortalecen la transparencia, ética y conexión con los grupos de interés, asegurando decisiones responsables y sostenibles.
        h2(data-aos="fade-left") Importancia de los códigos de conducta
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 Los códigos de conducta son fundamentales para establecer estándares éticos y normativos en las organizaciones, contribuyendo a un entorno empresarial más transparente y equitativo.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7
              h5 Prevención de prácticas corruptas
              p Establecen directrices claras sobre comportamientos aceptables, disminuyendo riesgos de corrupción y soborno.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Cumplimiento normativo
              p Aseguran que las acciones estén alineadas con legislaciones nacionales e internacionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Fomento de la confianza
              p Fortalecen la reputación de la organización frente a empleados, clientes, proveedores y la sociedad en general.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Entorno laboral justo
              p Impulsan prácticas laborales respetuosas, promoviendo los derechos humanos y la igualdad de oportunidades.
    
    h2(data-aos="fade-left") Elementos esenciales de un código de conducta
    p.mb-5 Un código de conducta efectivo incorpora componentes clave que garantizan su aplicación y relevancia dentro de la organización.
    
    .row.mb-5.justify-content-center
      .col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
        h5.text-center.mb-0.p-4.bg-color-11.pst Valores organizacionales
        div.p-4.bg-color-12.pst-1.pst-2.mb-0
          p.mb-0 Principios éticos como integridad, respeto y equidad.
      .col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
        h5.text-center.mb-0.py-4.bg-color-10.pst Lineamientos específicos
        div.p-4.bg-color-6.pst-1.pst-2.mb-0
          p.mb-0 Normas sobre prácticas éticas en relaciones comerciales.
      .col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
        h5.text-center.mb-0.py-4.bg-color-9.pst Mecanismos de denuncia
        div.p-4.bg-color-7.pst-1.pst-2.mb-0
          p.mb-0 Canales seguros y anónimos para reportar conductas inapropiadas.
      .col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
        h5.text-center.mb-0.py-4.bg-color-13.pst Consecuencias y sanciones
        div.p-4.bg-color-14.pst-1.pst-2.mb-0
          p.mb-0 Acciones disciplinarias en caso de incumplimiento.
      .col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
        h5.text-center.mb-0.py-4.bg-color-15.pst.text-white Capacitación continua
        div.p-4.bg-color-2.pst-1.pst-2.mb-0
          p.mb-0 Sensibilización sobre la importancia y aplicación del código.
    
    .bg-full-width.bg-color-2.mb-5
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico
            p Microsoft implementa su código “Estándares de Negocio Responsable”, que abarca lucha contra la corrupción, derechos humanos y protección ambiental. Aplica a empleados, directivos y socios comerciales, alineando sus operaciones con principios de la RSE.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/13.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Beneficios y desafíos
    p.mb-5 Los beneficios y desafíos relacionados con los códigos de conducta reflejan tanto las ventajas de su implementación como las dificultades para su adecuada adopción en las organizaciones.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Beneficios" :icon="require('@/assets/bullets/1.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Beneficios
            ul.lista-ul
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Reducción de riesgos legales y sanciones.  
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Mejora de la reputación corporativa. 
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Incremento en la eficiencia interna.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Mayor compromiso laboral al identificar los empleados con los valores organizacionales.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desafíos" :icon="require('@/assets/bullets/1.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Desafíos
            ul.lista-ul
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Falta de compromiso en liderazgo y seguimiento. 
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Desconocimiento del código por parte de los empleados.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Resistencia al cambio ante nuevas normas.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los códigos de conducta consolidan la RSE al establecer principios éticos claros, fomentando transparencia, respeto y sostenibilidad en todos los niveles organizacionales. Para los futuros profesionales en seguridad y salud en el trabajo, comprender y promover estos códigos es clave para crear entornos laborales responsables y alineados con la RSE.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Informes de Sostenibilidad
    
    .row.mb-5
      .col-lg-8 
        p(data-aos="fade-left") LLos informes de sostenibilidad son herramientas clave que permiten a las organizaciones comunicar su desempeño en áreas económicas, sociales y ambientales. Estas prácticas fortalecen la confianza con los grupos de interés, promueven la toma de decisiones responsables y alinean las operaciones empresariales con los principios de la Responsabilidad Social Empresarial (RSE).
        h2(data-aos="fade-left") Beneficios de los informes de sostenibilidad
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 La elaboración de informes de sostenibilidad permite a las organizaciones fortalecer su compromiso con la transparencia y la gestión responsable, además de alinear sus prácticas con normativas internacionales.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in").mb-4.mb-lg-0


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        h5.text-center.mb-0.p-4.bg-color-11.pst Demostración de transparencia
        div.p-4.bg-color-12.pst-1
          p.mb-4 Publicar datos verificables sobre el impacto organizacional refuerza la confianza y credibilidad.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        h5.text-center.mb-0.py-4.bg-color-10.pst Medición y gestión del desempeño sostenible
        div.p-4.bg-color-6.pst-1.mb-0
          p.mb-0 Proveen indicadores clave para evaluar avances en áreas como eficiencia energética, igualdad laboral y reducción de emisiones.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        h5.text-center.mb-0.py-4.bg-color-9.pst Cumplimiento normativo
        div.p-4.bg-color-7.pst-1.mb-0
          p.mb-0 Facilitan la alineación con marcos internacionales, como los Objetivos de Desarrollo Sostenible (ODS) y los estándares GRI.
    
    p.mb-5 Según Guibert Ucín (2013), los informes de sostenibilidad en las pymes son una herramienta estratégica para evidenciar su compromiso con la RSE, mejorando su posicionamiento en mercados competitivos.

    h2(data-aos="fade-left") Principales estándares para los informes de sostenibilidad
    p.mb-5 Los informes de sostenibilidad utilizan estándares reconocidos internacionalmente para garantizar la transparencia, coherencia y relevancia en la comunicación del desempeño ambiental, social y económico de las organizaciones.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="<em>Global Reporting Initiative</em> (GRI)")
            p.mb-0 Marco ampliamente adoptado a nivel mundial. Sus estándares incluyen dimensiones económicas, sociales y ambientales, integrando desde 2021 enfoques específicos sobre los ODS y cadenas de suministro globales.
    
          .div(titulo="Norma ISO 26000")
            p.mb-0 Proporciona lineamientos para la sostenibilidad en prácticas empresariales, fomentando informes coherentes con los principios de la RSE, aunque no es certificable.
    
          .div(titulo="<em>Sustainability Accounting Standards Board</em> (SASB)")
            p.mb-0 Diseñado para sectores específicos, ofrece indicadores clave de desempeño adaptados a las características de cada industria.

    .bg-full-width.bg-color-2.mb-5
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico
            p Un informe basado en estándares GRI puede incluir resultados sobre la disminución de residuos y emisiones de carbono, además de datos sobre programas de capacitación y apoyo a proyectos comunitarios. Este tipo de informe permite a los inversores y grupos de interés evaluar el compromiso sostenible de la organización.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/19.png', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Ejemplo de indicadores por dimensión

    .row.mb-5.justify-content-center
      .col-lg-9
        .tabla-a.color-terciario.mb-5 
          table
            thead
              tr
                th(width="30%").bg-color-3 Dimensión
                th.bg-color-3 Indicador Ejemplo 
            tbody
              tr.bg-color-white
                td.text-bold Económica
                td Crecimiento en inversión social (USD)
                
              tr.bg-color-white
                td.text-bold Social
                td Número de programas de capacitación laboral
              
              tr.bg-color-white
                td.text-bold Ambiental
                td Toneladas de CO₂ reducidas anualmente
    
    h2(data-aos="fade-left") Retos en la elaboración de informes de sostenibilidad
    p.mb-5 La creación de informes de sostenibilidad presenta diversos desafíos que las organizaciones deben enfrentar para garantizar la calidad y relevancia de la información reportada.


    .bg-full-width.bg-color-7
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").order-2
            ul.lista-ul
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Costos y recursos limitados:</b> especialmente en pymes, recolectar y procesar información puede ser un desafío.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Dificultad para medir impactos:</b> identificar y cuantificar impactos sociales y ambientales de manera precisa no siempre es sencillo.
              li.mb-4.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Cumplimiento de estándares internacionales:</b> requiere capacitación y conocimientos especializados para adaptar los informes.
          .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema3/20.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-0 Los informes de sostenibilidad son una herramienta esencial para consolidar la transparencia y el compromiso con la RSE. A través de estándares internacionales como GRI e ISO 26000, las organizaciones pueden medir y comunicar de manera efectiva sus impactos en todas las dimensiones. Para los futuros profesionales en seguridad y salud en el trabajo, estos informes son clave para impulsar prácticas empresariales responsables y sostenibles.
    
    
    .bg-color-white.shadow-soft.bg-full-width.py-4.px-lg-5.mb-5
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Auditorías sociales y ambientales
              p Lo invitamos a leer el documento <b>Auditorías sociales y ambientales</b>, donde se detallan los objetivos, tipos y beneficios de estas herramientas clave en la responsabilidad social empresarial.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-arrow-right
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Relación entre RSE y Desarrollo Sostenible
    
    p La Responsabilidad Social Empresarial (RSE) y el desarrollo sostenible están estrechamente vinculados, promoviendo prácticas empresariales éticas que equilibran los impactos sociales, ambientales y económicos con las necesidades presentes y futuras.

   
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-6
        p(data-aos="fade-left").mb-4 Para conocer sobre los fundamentos de la innovación estratégica, lo invitamos a escuchar el siguiente podcast.
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Relación entre RSE y Desarrollo Sostenible"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )
    
    .bg-color-white.shadow-soft.bg-full-width.py-4.px-lg-5
      .row.justify-content-around.align-items-center
        .col-md-auto
          img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Dimensiones económica, social y ambiental
              p Invito a explorar el documento <b>Dimensiones económica, social y ambiental</b>, el cual profundiza en los pilares de la responsabilidad social empresarial y su impacto en el desarrollo sostenible
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-arrow-right



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unglobalcompact.org" target="_blank" rel="noopener noreferrer") United Nations Global Compact. (2019). Empresas y desarrollo sostenible. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=A0HEy3BS6no" target="_blank" rel="noopener noreferrer") Gutiérrez, J. A. (2020). Herramientas en la gestión de la RSE

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
