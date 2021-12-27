
// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


  const app = new Vue(
    {
        el: '#app',
        data: {
          messageNew: '',
          newMsg:'',
            counter: 0,
             //predisporre una lista di frasi random
             frasiRandom: [
              'vai a mangiare ',
              'cosa?',
              'chiamami ',
              'non ho fame',
              'lo faccio subito',
              'ci vediamo domani'
          ],
            contacts: [
                {
                  name: "Michele",
                  avatar: "_1",
                  visible: true,
                  messages: [
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "sent",
                      
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sent",
                    },
                    {
                      date: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received",
                    },
                  ],
                },
                {
                  name: "Fabio",
                  avatar: "_2",
                  visible: true,
                  messages: [
                    {
                      date: "20/03/2020 16:30:00",
                      text: "Ciao come stai?",
                      status: "sent",
                    },
                    {
                      date: "20/03/2020 16:30:55",
                      text: "Bene grazie! Stasera ci vediamo?",
                      status: "received",
                    },
                    {
                      date: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sent",
                    },
                  ],
                },
              
                {
                  name: "Samuele",
                  avatar: "_3",
                  visible: true,
                  messages: [
                    {
                      date: "28/03/2020 10:10:40",
                      text: "La Marianna va in campagna",
                      status: "received",
                    },
                    {
                      date: "28/03/2020 10:20:10",
                      text: "Sicuro di non aver sbagliato chat?",
                      status: "sent",
                    },
                    {
                      date: "28/03/2020 16:15:22",
                      text: "Ah scusa!",
                      status: "received",
                    },
                  ],
                },
                {
                  name: "Luisa",
                  avatar: "_6",
                  visible: true,
                  messages: [
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Lo sai che ha aperto una nuova pizzeria?",
                      status: "sent",
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Si, ma preferirei andare al cinema",
                      status: "received",
                    },
                  ],
                },
                
            ]
            
        },
        methods: {
          change: function(index) {
              this.counter = index;
          },
          
          // cerco il nome / se presente nella lista delle chat
          searchChat: function () {
            this.contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(this.messageNew.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }

              })
          },
          
          // nuovo array inserito dall'utente più risposta automatica dopo 1 secondo
          newMessage: function(array) {
            // dayjs per la data
            dayjs.extend(window.dayjs_plugin_customParseFormat);
            let data = dayjs().format( "DD/MM/YYYY HH:mm:ss");
            // controllo se input inserito dall'utente non sia vuota
            if(this.newMsg != ''){
              let obj = {
                // date: new Date().toLocaleString('it'),
                date: data,
                text: this.newMsg,
                status: "sent"
              };

              array.push(obj);
              this.newMsg=''
              // funzione per numero random
              function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min);
              }
              const randFrase = this.frasiRandom[getRandomIntInclusive(0, this.frasiRandom.length - 1)];




              setTimeout(() => {

                const obj2 = {
                  // date: new Date().toLocaleString('it'),
                  date: data,
                  text: randFrase,
                  status: "received"
                };

                array.push(obj2);
                console.log(obj); 

              },1000)
            }
            
            
            
          },
          // Funzione Cancella messaggio: cliccando sulla icona
          deleteMsg: function (array, index) { 
                
            array.splice(index, 1);
        },  
          
      }

    }
)
