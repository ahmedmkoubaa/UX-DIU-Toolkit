/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{

					 /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Carlos",
				Photo: "carlos.jpg",
				Quote: "Disfrutar de la vida",
				Age: 48,
				Occupation: "Cajero",
				Family: "Casado desde hace 18 años",
				Location: "Málaga",
				Character: "Le gusta hacer deporte",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				],
				Goals: ["Conocer gente nueva y viajar", "Tener hijos"],
				Frustrations: ["Su mujer no logra tener hijos", "No tiene amigos para jugar al futbol"],
				Bio: "De joven le salió trabajo en Malaga y se quedo allí. Le encanta salir a tomar cervezas con los amigos",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Está un poco cansado de su trabajo y le gustaria buscar alguno mejor pagado",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Heather Soto",
				Photo: "heather.png",
				Quote: "Mujer prevenida vale por tres",
				Age: 32,
				Occupation: "Abogada, madre de 3 niños, divorciada.",
				Family: "Tiene 3 hijos",
				Location: "Londres",
				Character: "Fuerte, optimista y sin miedo.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Ser feliz.", "Ver crecer s sus hijos.", "Encontrar el amor algun día."],
				Frustrations: ["No ser engañada de nuevo", "Salir de casa sin paraguas.", "Que se le enfríen las lentejas."],
				Bio: "Madre de 3 preciosos niños frutos de una relación fallida con su exmarido de quien está divorciada. Gran apasionada de su trabajo, ama la justicia y se prometió a sí misma jamás dejar a una mujer indefensa.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "Llegar a ser feliz con sus niños." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1  }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
