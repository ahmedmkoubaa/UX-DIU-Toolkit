/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.JourneyIndex = 1;

        $scope.Journeys = [
			{

				/*************************************/
				  /**** PRIMER USER JOURNEY MAP  *******/
				  /*** Cambiar datos             *******/
				  /*************************************/

			 Id: 0,
			 Name: "Carlos",
				  Photo: "carlos.jpg",

				  /*** PASO #1: INSPIRACION ***/
				  goal1: "Quiere encontrar amigos para jugar al futbol",
				  touch1: "agenda",
				  feel1: "3",
				  con1: "La gente tiene que llevar un horario similar al suyo",
				  ima1: "cartoon-thinking.png",

				  /*** PASO #2: DECICION ***/
				  goal2: "Busca en redes sociales gente para hacer un equipo",
				  touch2: "Movil",
				  feel2: "2",
				  con2: "No sabe muy bien con quien hablar",
				  ima2: "cartoon-phone.png",

				  /*** PASO #3: ACTUA ***/

				  goal3: "Encuentra a un vecino suyo de pequeño y le hablan para formar el equipo",
				  touch3: "móvil (whatsapp)",
				  feel3: "5",
				  con3: "Hace tiempo que no se ven y no sabe si seguirá siendo simpático",
				  ima3: "cartoon-phone.png",

				  /*** PASO #4: OBSERVA ***/

				  goal4: "El vecino se lo dice a unos cuantos compañeros de trabajo",
				  touch4: "ordenador",
				  feel4: "4",
				  con4: "Busca gente en un foro de fútbol de su ciudad",
				  ima4: "cartoon-PCtyping.png",

					/*** PASO #5: ANALIZA ***/

				  goal5: "Tiene la opción de jugar con su vecino o con la gente del foro",
				  touch5: "móvil (llamada)",
				  feel5: "2",
				  con5: "El vecino le dice que si puede jugar un día en el que Carlos trabaja",
				  ima5: "cartoon-phoning.png",


				  /*** PASO #6: CONCLUSION ***/

				  goal6: "Acaba haciendo un equipo con la gente del foro y se divierten!",
				  touch6: "ordenador",
				  feel6: "4",
				  con6: "Su vecino se enfada con el por no haberlo elegido",
				  ima6: "cartoon-shaking.png",

		 },
		 {
				  /*************************************/
				  /**** SEGUNDO USER JOURNEY MAP *******/
				  /***      Cambiar datos        *******/
				  /*************************************/
				  	Id: 1,
			  		Name: "Heather Soto",
					Photo: "heather.png",

				/*** PASO #1: INSPIRACION ***/
					goal1: "Está en granada y un sábado de repente quiere ir con sus 3 niños pequeños al parque de atraccinoes",
					touch1: "Niños",
					feel1: "4",
					con1: "Tiene mucho trabajo por lo que debe ser rápido",
					ima1: "img1.jpg",

					/*** PASO #2: DECICION ***/
					goal2: "Usa la página para buscar un parque de atracciones o similar cerca",
					touch2: "Navegador (móvil)",
					feel2: "3",
					con2: "No encuentra nada cercano y cada vez tiene menos tiempo",
					ima2: "img2.jpg",

					/*** PASO #3: ACTUA ***/

					goal3: "Sale de casa y sube con los niños al coche ",
					touch3: "Coche",
					feel3: "3",
					con3: "Sigue sin tener claro a que parque de atracciones ir",
					ima3: "img4.jpg",

					/*** PASO #4: OBSERVA ***/

					goal4: "Llama a una amiga para pedirle sugerencias",
					touch4: "Móvil (whatsapp)",
					feel4: "1",
					con4: "Va conduciendo, se distrae con el movil y casi atropella a alguien",
					ima4: "img3.jpg",

					 /*** PASO #5: ANALIZA ***/

					goal5: "Sigue la sugerencia de su amiga y llega a un pequeño parque de atracciones que estaba cerca",
					touch5: "Parking",
					feel5: "3",
					con5: "Comprar pases para todos",
					ima5: "img5.jpg",


					/*** PASO #6: CONCLUSION ***/

					goal6: "Saca las entradas y los niños se divierten en el parque y ellas es feliz viéndolos jugar",
					touch6: "Ventanilla",
					feel6: "4",
					con6: "Ha perdido mucho tiempo y tendrá que trasnochar!",
					ima6: "img6.jpg",



		  }
	  ];

		$scope.model = $scope.Journeys[0];

	}])
