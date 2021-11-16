import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = [];/*
    {
      titulo: "Matrix",
      anio: 1999,
      director: "Hermanos Wachosky",
      imagen: "https://i.blogs.es/4b103d/the-matrix-online/1366_2000.jpeg"
      
    },
    {
      titulo: "28 Days Later",
      anio: 2003,
      director: "Danny Boyle",
      imagen: "https://img.discogs.com/0B_5jgBfkBk3Z_aKTcmLc28il-U=/fit-in/600x537/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-577708-1521830701-5576.jpeg.jpg"

    }
  ];*/

  constructor(private peliculasService: PeliculasService) { }
  
  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    // this.peliculasService.getPeliculas();
  }
}
