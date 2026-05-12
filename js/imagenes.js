Option = prompt("Menu\n 1.Perro\n 2.Gato\n 3.Ratón\n 4.Otra");

switch (Option) {
    case "1":
        document.write("<img src='img/perro.jpg' alt='Perro'>");
        break;
    case "2":
        document.write("<img src='img/gato.jpeg' alt='Perro'>");
        break;
    case "3":
        document.write("<img src='img/raton.jpeg' alt='Perro'>");
        break;
    case "4":
        Foto = prompt("Escribe el numero de control del alumno");
        document.write("<img src='img/" + Foto + "' alt=''>");
        break;
    default:
        break;
}
