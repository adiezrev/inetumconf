new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        conferencia: {
          tag: "inetumconf22",
          fecha: "16/06/2022",
          ponentes: new Map([ 
            ["p1", { id: "p1", nombre: "Raul Sanchez Sarria", descripcion: "----", avatar: "assets/img/ponentes/rss.jpg", linkedin:"https://es.linkedin.com/in/ra%C3%BAl-s%C3%A1nchez-sarria", twitter: null }],
            ["p2", { id: "p2", nombre: "Alberto Díez Revenga", descripcion: "----", avatar: "assets/img/ponentes/adr.jpg", linkedin:"https://es.linkedin.com/in/alberto-diez-revenga-26b292159", twitter: "https://twitter.com/DiezRevenga" }],
            ["p3", { id: "p3", nombre: "Irune Gonzalez Arteagoitia", descripcion: "----", avatar: "assets/img/ponentes/iga.jpg", linkedin:"https://es.linkedin.com/in/irune-gonzalez-arteagoitia-a5a68953", twitter: null }],
            ["p4", { id: "p4", nombre: "Luis Maria Marce Montilla", descripcion: "----", avatar: "assets/img/ponentes/lmm.jpg", linkedin:"https://es.linkedin.com/in/koldo-marce-b479907b", twitter: null  }]
           ]),
           charlas: new Map([
            ["c1", {  id: "c1",  titulo: "Ciberseguridad de aplicaciones web.", sinopsis: "Trataremos los conceptos de ciberseguridad y desarrollo de aplicaciones web protegidas." }],
            ["c2", {  id: "c2",  titulo: "PWAs, ¿El futuro entre nosotros?.", sinopsis: "Las Progresive Web Applications son la siguiente evolución en las aplicaciones web que ya estan entre nosotros. Veremos sus fundamentos, ventajas y desventajas." }],
            ["c3", {  id: "c3",  titulo: "Sinergia de equipos.",  sinopsis: "Un buen equipo no solo debe tener conocimientos técnicos, tambien debe saber trabajar en equipo." }],
            ["c4", {  id: "c4",  titulo: "La era de la Observabilidad",  sinopsis: "Estado del arte en la monitorización tradicional. De la monitorización a la observabilidad."  }]
           ]),
           agenda: [
            {   id: "a1",  hora: "10:50-10:55", ponente: {  avatar: "assets/img/welcome.jpg" }, charla: { titulo: "Presentacion" }  },
            {   id: "a2",  hora: "11:00-11:35",  refs: {  charla: "c1",  ponente: "p1"  }  },
            {   id: "a3",  hora: "11:40-12:15", refs: {  charla: "c2",  ponente: "p2"  }  },
            {   id: "a4",  hora: "12:15-12:45", ponente: {  avatar: "assets/img/cafe.jpg"  },  charla: { titulo: "Descanso"  }  },
            {   id: "a5",  hora: "12:45-13:20",  refs: {  charla: "c3",  ponente: "p3"  }  },
            {   id: "a6",  hora: "13:25-14:00",  refs: {  charla: "c4",  ponente: "p4"  }  },
            {   id: "a7",  hora: "14:00-14:10",  ponente: {  avatar: "assets/img/gameover.jpg"  },  charla: {  titulo: "Cierre. Punto y seguido."  }  }
          ]
        }
    },
    computed: {
        agendacompleta: function() {
              let a = this.conferencia.agenda.map( (entry)=> {
                  if((entry.refs!=null)&&(entry.refs.charla!=null)) {
                      entry.charla = this.conferencia.charlas.get(entry.refs.charla);
                  } 
                  if((entry.refs!=null)&&(entry.refs.ponente!=null)) {
                      entry.ponente = this.conferencia.ponentes.get(entry.refs.ponente);
                  } 
                  return entry;
              });
              return a;
        }
    }
    
  })