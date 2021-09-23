//creacion de objetos

//const album1={
   // nombre:'YHLQMDLGA',
   // id:01,
   // reproducir(){
   //     return 'Reproduciendo album ${this.nombre}'
   // }
//}

class ALbumClase{
    constructor(nombre,id){
        this.nombre=nombre;
        this.id=id;
    }

    reproducir(){
        return `Reproduciendo ${this.nombre}`
    }
}

class Podcast extends ALbumClase{
    constructor(nombre,id,capitulo){
        super(nombre,id);
        this.capitulo=capitulo;
    }

    reproducirPodcast(){
        return `Reproduciendo el Podscast ${this.nombre}, Capitulo ${this.capitulo}`
    }
}

class Anuncio extends ALbumClase{
    constructor(nombre,id,duracion){
        super(nombre,id);
        this.duracion=duracion;
    }

    reproducirAnuncio(){
        return `Reproduciendo anuncio ${this.nombre}, Duracion ${this.duracion}`
    }
}

//instanciar objetos
const ALbum1=new ALbumClase('YHLQMDLGN',01);
const ALbum2=new ALbumClase('Los Dioses',02);

const Podcast1=new Podcast('Eso mismo',03,2);
const Podcast2=new Podcast('Mas de lo mismo',04,3);

const Anuncio1=new Anuncio('open english',05,0.30);
const Anuncio2=new Anuncio('Uber Eats',06,0.15);

console.log(ALbum1.reproducir());
console.log(ALbum2.reproducir());

console.log(Podcast1.reproducirPodcast());
console.log(Podcast2.reproducirPodcast());

console.log(Anuncio1.reproducirAnuncio());
console.log(Anuncio2.reproducirAnuncio());