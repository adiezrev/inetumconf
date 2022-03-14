new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        conferencia: {
          tag: "inetumconf22",
          fecha: "dd/mm/aaaa",
          ponentes: new Map([ 
            ["p1", { id: "p1", nombre: "Raul Sanchez Sarria", descripcion: "----", avatar: "assets/img/ponentes/rss.jpg" }],
            ["p2", { id: "p2", nombre: "Alberto Díez Revenga", descripcion: "----", avatar: "assets/img/ponentes/adr.jpg" }],
            ["p3", { id: "p3", nombre: "Irune Gonzalez Arteagoitia", descripcion: "----", avatar: "assets/img/ponentes/iga.jpg" }],
            ["p4", { id: "p4", nombre: "Luis Maria Marce Montilla", descripcion: "----", avatar: "assets/img/ponentes/lmm.jpg"  }]
           ]),
           charlas: new Map([
            ["c1", {  id: "c1",  titulo: "Ciberseguridad", sinopsis: "----" }],
            ["c2", {  id: "c2",  titulo: "PWAs, ¿Eso que es?", sinopsis: "Fundamentos basicos de las PWAs" }],
            ["c3", {  id: "c3",  titulo: "¿?",  sinopsis: "----" }],
            ["c4", {  id: "c4",  titulo: "¿?",  sinopsis: "----"  }]
           ]),
           agenda: [
            {   id: "a1",  hora: "9:00-9:20", ponente: {  avatar: "assets/img/welcome.jpg" }, charla: { titulo: "Presentacion" }  },
            {   id: "a2",  hora: "9:30-10:20",  refs: {  charla: "c1",  ponente: "p1"  }  },
            {   id: "a3",  hora: "10:30-11:20", refs: {  charla: "c2",  ponente: "p2"  }  },
            {   id: "a4",  hora: "11:30-12:00", ponente: {  avatar: "assets/img/cafe.jpg"  },  charla: { titulo: "Descanso"  }  },
            {   id: "a5",  hora: "12:00-12:50",  refs: {  charla: "c3",  ponente: "p3"  }  },
            {   id: "a6",  hora: "13:00-13:50",  refs: {  charla: "c4",  ponente: "p4"  }  },
            {   id: "a7",  hora: "13:50-14:00",  ponente: {  avatar: "assets/img/gameover.jpg"  },  charla: {  titulo: "Cierre"  }  }
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