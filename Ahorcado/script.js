

      var palabraAdivinar = 'TECLADO';
      var huecos = document.getElementById('huecos');

      var dibujarEspacios = () => {
        for (let i = 0; i < palabraAdivinar.length; i++) {
         huecos.innerHTMl = '_ '
        }
      };

      var intento1 = prompt('Elige una letra');
      dibujarEspacios();

      // var intento2 = prompt('Elige una letra');
      // var intento3 = prompt('Elige una letra');
      // var intento4 = prompt('Elige una letra');
      // var intento5 = prompt('Elige una letra');
