import { Component } from '@angular/core';
import { Esquema } from './interfaces/esquema';
// import { EsquemaTop } from './interfaces/esquema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  public top:Esquema = {
    section:'TOP MOVIES',
    peliculas: [
      {
        num: 1,
        title:'LA CASA DE PAPEL',
        src:'../assets/images/Top10/1-papel.webp',
        alt:'LA CASA DE PAPEL'
      },
      {
        num: 2,
        title:'LA REINA DEL FLOW',
        src:'../assets/images/Top10/2-reina.webp',
        alt:'LA REINA DEL FLOW'
        
      },
      {
        num: 3,
        title:'TITANES',
        src:'../assets/images/Top10/3-titanes.webp',
        alt:'TITANES'
      },
      {
        num: 4,
        title:'LOST IN SPACE',
        src:'../assets/images/Top10/4-lostinspace.webp',
        alt:'LOST IN SPACE'
      },
      {
        num: 5,
        title:'DONDE CABEN DOS',
        src:'../assets/images/Top10/5-dondecaben.webp',
        alt:'DONDE CABEN DOS'
        
      },
      {
        num: 6,
        title:'AQUI NO HAY QUIEN VIVA',
        src:'../assets/images/Top10/6-aquinohay.webp',
        alt:'AQUI NO HAY QUIEN VIVA'
      },
      {
        num: 7,
        title:'BLACKLIST',
        src:'../assets/images/Top10/7-blacklist.webp',
        alt:'BLACKLIST'
      },
      {
        num: 8,
        title:'RICOS Y MIMADOS',
        src:'../assets/images/Top10/8-ricos.webp',
        alt:'RICOS Y MIMADOS'
      },
      {
        num: 9,
        title:'EL PODER DEL PERRO',
        src:'../assets/images/Top10/9-poder.webp',
        alt:'EL PODER DEL PERRO'
      },
      {
        num: 10,
        title:'THE GOOD DOCTOR',
        src:'../assets/images/Top10/10-gooddoctor.webp',
        alt:'THE GOOD DOCTOR'
      },
  
    ]
  }

  public accion:Esquema = {
    section:'ACTION',
    peliculas: [
      {
        num: "",
        title:'El ejercito de los muertos',
        src:'../assets/images/Accion/ejercitomuertos.jpg',
        alt:'El ejercito de los muertos'
      },
      {
        num: "",
        title:'El Protector',
        src:'../assets/images/Accion/elprotector.webp',
        alt:'El Protector'
        
      },
      {
        num: "",
        title:'Equalizer 2',
        src:'../assets/images/Accion/equalizer2.webp',
        alt:'Equalizer 2'
      },
      {
        num: "",
        title:'Heat',
        src:'../assets/images/Accion/heat.webp',
        alt:'Heat'
      },
      {
        num: "",
        title:'John Whick 2',
        src:'../assets/images/Accion/johnwick2.webp',
        alt:'John Whick 2'
        
      },
      {
        num: "",
        title:'World War Z',
        src:'../assets/images/Accion/worldwarz.webp',
        alt:'World War Z'
      },
      {
        num: "",
        title:'Mission Imposible 2 ',
        src:'../assets/images/Accion/misionimposiblenacion.webp',
        alt:'Mission Imposible 2 '
      }

    ]
}

public anime:Esquema = {
  section:'ANIME',
  peliculas: [
    {
      num: "",
      title:'AJIN',
      src:'../assets/images/Anime/ajin.jpg',
      alt:'AJIN'
    },
    {
      num: "",
      title:'CHIHIRO',
      src:'../assets/images/Anime/chihiro.webp',
      alt:'CHIHIRO'
      
    },
    {
      num: "",
      title:'MONONOKE',
      src:'../assets/images/Anime/mononoke.webp',
      alt:'MONONOKE'
    },
    {
      num: "",
      title:'PERFECT BLUE',
      src:'../assets/images/Anime/perfectblue.webp',
      alt:'PERFECT BLUE'
    },
    {
      num: "",
      title:'NINOKUNI',
      src:'../assets/images/Anime/ninokuni.jpg',
      alt:'NINOKUNI'
      
    },
    {
      num: "",
      title:'EL CASTILLO AMBULANTE',
      src:'../assets/images/Anime/castilloambulante.webp',
      alt:'EL CASTILLO AMBULANTE'
    },
    {
      num: "",
      title:'ARISE',
      src:'../assets/images/Anime/gitsarise.webp',
      alt:'ARISE'
    },

  ]
}


public drama:Esquema = {
  section:'DRAMA',
  peliculas: [
    {
      num: "",
      title:'1917',
      src:'../assets/images/Drama/1917.webp',
      alt:'1917'
    },
    {
      num: "",
      title:'ARRIVAL',
      src:'../assets/images/Drama/arrival.webp',
      alt:'ARRIVAL'
      
    },
    {
      num: "",
      title:'EL CLUB DE LA LUCHA',
      src:'../assets/images/Drama/clublucha.webp',
      alt:'EL CLUB DE LA LUCHA'
    },
    {
      num: "",
      title:'CORAZONES DE ACERO',
      src:'../assets/images/Drama/corazones.webp',
      alt:'CORAZONES DE ACERO'
    },
    {
      num: "",
      title:'CULPABLE',
      src:'../assets/images/Drama/culpable.jpg',
      alt:'CULPABLE'
      
    },
    {
      num: "",
      title:'LA MILLA VERDE',
      src:'../assets/images/Drama/millaverde.webp',
      alt:'LA MILLA VERDE'
    },
    {
      num: "",
      title:'LA LISTA DE SCHINDLER',
      src:'../assets/images/Drama/schindler.webp',
      alt:'LA LISTA DE SCHINDLER'
    },
  ]
}

public comedy:Esquema = {
  section:'COMEDY',
  peliculas: [
    {
      num: "",
      title:'CASI 300',
      src:'../assets/images/Comedia/casi300.webp',
      alt:'CASI 300'
    },
    {
      num: "",
      title:'lOS CAZA FANTASMAS',
      src:'../assets/images/Comedia/cazafantasmas.webp',
      alt:'lOS CAZA FANTASMAS'
      
    },
    {
      num: "",
      title:'EL DICTADOR',
      src:'../assets/images/Comedia/dictador.webp',
      alt:'EL DICTADOR'
    },
    {
      num: "",
      title:'SCARY MOVIE 3',
      src:'../assets/images/Comedia/scarymovie3.webp',
      alt:'SCARY MOVIE 3'
    },
    {
      num: "",
      title:'TED 2',
      src:'../assets/images/Comedia/ted2.webp',
      alt:'TED 2'
      
    },
    {
      num: "",
      title:'RICK AND MORTY',
      src:'../assets/images/Comedia/rickandmorty.webp',
      alt:'RICK AND MORTY'
    },
    {
      num: "",
      title:'ERASE UNA VEZ EN HOLLYWOOD',
      src:'../assets/images/Comedia/erasehollywood.webp',
      alt:'ERASE UNA VEZ EN HOLLYWOOD'
    },
    {
      num: "",
      title:'LA TERMINAL',
      src:'../assets/images/Comedia/laterminal.webp',
      alt:'LA TERMINAL'
    },
    {
      num: "",
      title:'FAMILY GUY',
      src:'../assets/images/Comedia/family guy.webp',
      alt:'FAMILY GUY'
    },

  ]
}

public terror:Esquema = {
  section:'TERROR',
  peliculas: [
    {
      num: "",
      title:'Apostol',
      src:'../assets/images/Terror/apostol.jpg',
      alt:'Apostol'
    },
    {
      num: "",
      title:'La Calle del Terror',
      src:'../assets/images/Terror/calleterror.jpg',
      alt:'La Calle del Terror'
      
    },
    {
      num: "",
      title:'Insidius 2',
      src:'../assets/images/Terror/insidious2.webp',
      alt:'Insidius 2'
    },
    {
      num: "",
      title:'Life',
      src:'../assets/images/Terror/life.webp',
      alt:'Life'
    },
    {
      num: "",
      title:'Malasaña',
      src:'../assets/images/Terror/malasana.webp',
      alt:'Malasaña'
      
    },
    {
      num: "",
      title:'Multiple',
      src:'../assets/images/Terror/multiple.webp',
      alt:'Multiple'
    },
    {
      num: "",
      title:'Reflejos',
      src:'../assets/images/Terror/reflejos.webp',
      alt:'Reflejos'
    },
  ]
}

public ficcion:Esquema = {
  section:'SCIENCE FICTION',
  peliculas: [
    {
      num: "",
      title:'El Sexto Dia',
      src:'../assets/images/Sci-fi/6dia.webp',
      alt:'El Sexto Dia'
    },
    {
      num: "",
      title:'Twelve Monkies',
      src:'../assets/images/Sci-fi/12monos.webp',
      alt:'Twelve Monkies'
      
    },
    {
      num: "",
      title:'After Earth',
      src:'../assets/images/Sci-fi/afterearth.webp',
      alt:'After Earth'
    },
    {
      num: "",
      title:'Core',
      src:'../assets/images/Sci-fi/core.webp',
      alt:'Core'
    },
    {
      num: "",
      title:'Deep Impact',
      src:'../assets/images/Sci-fi/deepimpact.webp',
      alt:'Deep Impact'
      
    },
    {
      num: "",
      title:'Doom',
      src:'../assets/images/Sci-fi/doom.webp',
      alt:'Doom'
    },
    {
      num: "",
      title:'Ghost Shell',
      src:'../assets/images/Sci-fi/gits.webp',
      alt:'Ghost Shell'
    },
    {
      num: "",
      title:'Jumper',
      src:'../assets/images/Sci-fi/jumper.webp',
      alt:'Jumper'
    },
    {
      num: "",
      title:'Passengers',
      src:'../assets/images/Sci-fi/passengers.webp',
      alt:'Passengers'
    },
    {
      num: "",
      title:'Star Trek',
      src:'../assets/images/Sci-fi/startrek.webp',
      alt:'Star Trek'
    },
    {
      num: "",
      title:'Transformers',
      src:'../assets/images/Sci-fi/transformers.webp',
      alt:'Transformers'
    },
    {
      num: "",
      title:'Watchmen',
      src:'../assets/images/Sci-fi/watchmen.webp',
      alt:'Watchmen'
    },
  ]
}

}
