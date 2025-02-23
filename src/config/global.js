export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Contexto social empresarial y RSE',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Contexto Social Empresarial y Responsabilidad Social Empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Relaciones responsables entre empresas y ONG',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Creación de valor mezclado en las <em>PYMES</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Corrupción y soborno en el contexto de la RSE',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad Aplicable a la RSE',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de Gestión en la RSE',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Códigos de conducta empresarial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Informes de Sostenibilidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Relación entre RSE y Desarrollo Sostenible',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evaluación de la Aplicación de la RSE en PYMES',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rainforest Alliance. (2020). Unilever and Rainforest Alliance collaboration. ',
      link: 'https://www.rainforest-alliance.org',
    },
    {
      referencia:
        'Pinzón Camargo, M. A. (2009). El papel de las ONG y sus alcances en la responsabilidad social empresarial: ( ed.). Red Revista Opera. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/22878?page=1',
    },
    {
      referencia:
        'Guibert Ucín, J. M. (2013). Responsabilidad social empresarial: competitividad y casos de buenas prácticas en pymes: ( ed.). Publicaciones de la Universidad de Deusto. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/34084?page=1',
    },
    {
      referencia:
        'UN Global Compact. (2019). .Integrating the SDGs into corporate strategies. ',
      link: 'https://www.unglobalcompact.org',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019) .Guía para la adopción de la figura BIC en Colombia. ',
      link: 'https://www.mincit.gov.co',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y se organiza el Sistema Nacional Ambiental (SINA). ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2020). Decreto 093 de 2020. Por el cual se adoptan medidas para la implementación de sistemas de cumplimiento empresarial y la prevención de actos de corrupción y soborno. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=117213',
    },
    {
      referencia:
        'ISO. (2019). ISO 26000 and the Sustainable Development Goals. ',
      link: 'https://www.iso.org',
    },
    {
      referencia: 'United Nations Global Compact. (2021). Annual Report. ',
      link: 'https://www.unglobalcompact.org',
    },
    {
      referencia: 'OECD. (2019). Guidelines for Multinational Enterprises. ',
      link: 'https://www.oecd.org',
    },
    {
      referencia: 'SAI. (2019). SA8000 Standard: Guidance Document.',
      link: 'https://www.sa-intl.org',
    },
    {
      referencia: 'GRI. (2020). Global Reporting Initiative Standards. ',
      link: 'https://www.globalreporting.org',
    },
    {
      referencia: 'ISO. (2019). ISO 14001: Environmental Management Systems. ',
      link: 'https://www.iso.org',
    },
    {
      referencia: 'Microsoft. (2021). Standards of Business Conduct. ',
      link: 'https://www.microsoft.com',
    },
    {
      referencia:
        'Global Reporting Initiative. (2021). GRI Standards. Retrieved from ',
      link: 'https://www.globalreporting.org',
    },
    {
      referencia:
        'Social Accountability International. (2019). .SA8000 Standard. ',
      link: 'https://sa-intl.org',
    },
    {
      referencia:
        'United Nations. (2019). The Sustainable Development Goals Report. ',
      link: 'https://unstats.un.org/sdgs',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría ambiental',
      significado:
        'proceso de evaluación para medir el impacto ambiental de una organización.',
    },
    {
      termino: 'Buenas prácticas',
      significado:
        'acciones exitosas que pueden replicarse en diferentes contextos.',
    },
    {
      termino: 'Corrupción',
      significado:
        'prácticas deshonestas que involucran abuso de poder para beneficio personal. ',
    },
    {
      termino: 'Desarrollo humano',
      significado:
        'proceso que amplía las capacidades, oportunidades y calidad de vida de las personas.',
    },
    {
      termino: ' Desarrollo sostenible',
      significado:
        'satisfacción de las necesidades actuales sin comprometer los recursos del futuro.',
    },
    {
      termino: 'Dimensión ambiental',
      significado:
        'parte de la RSE enfocada en la protección y conservación de los recursos naturales.',
    },
    {
      termino: 'Dimensión económica',
      significado:
        'aspecto de la RSE relacionado con la generación de valor financiero sostenible.',
    },
    {
      termino: 'Dimensión social',
      significado:
        'componente de la RSE que promueve el bienestar de empleados y comunidades.',
    },
    {
      termino: 'Estándares GRI',
      significado:
        'normas internacionales para la elaboración de informes de sostenibilidad.',
    },
    {
      termino: ' ISO 26000',
      significado:
        'norma internacional que ofrece lineamientos para la responsabilidad social.',
    },
    {
      termino: 'Licencia social',
      significado:
        'permiso informal que otorgan las comunidades a una organización para operar en su territorio.',
    },
    {
      termino: 'ODS (Objetivos de Desarrollo Sostenible)',
      significado:
        'metas globales establecidas por la ONU para erradicar problemas sociales y ambientales.',
    },
    {
      termino: 'Pacto Global de las Naciones Unidas',
      significado:
        'iniciativa que promueve la adopción de prácticas empresariales sostenibles y éticas.',
    },
    {
      termino: '<em>PYME</em>',
      significado:
        'pequeña y mediana empresa que contribuye al desarrollo económico local.',
    },
    {
      termino: ' Reputación Empresarial',
      significado:
        'percepción que tienen los grupos de interés sobre la imagen y acciones de una empresa.',
    },
    {
      termino: 'Responsabilidad Social Empresarial (RSE)',
      significado:
        'compromiso de las empresas para operar de manera ética y sostenible.',
    },
    {
      termino: 'SA8000',
      significado:
        'estándar de certificación internacional para condiciones laborales éticas.',
    },
    {
      termino: 'Soborno',
      significado:
        'acto de ofrecer o aceptar beneficios indebidos para influenciar decisiones.',
    },
    {
      termino: 'Transparencia',
      significado:
        'práctica empresarial que implica honestidad y acceso claro a la información.',
    },
  ],
}
