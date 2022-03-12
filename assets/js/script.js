// función asíncrona que obtiene los datos de la URL
const getAlbums = async () => {
	const url = 'https://jsonplaceholder.typicode.com/photos'
	// Try para recibir el valor directamente de la promesa.

	try {
		// Metodo Fetch que almacena la respuesta dentro de la constante response
		const response = await fetch(url)
		const albums = await response.json()

		//forEach que itera y devuelve los primeros 20 títulos
		albums.forEach((e) => {
			if (e.id <= 20) console.log(e.title)
		})
		// const first20 = album.slice(0, 20)
		// first20.forEach(element => {
		//    console.log(element.title)
		// });
		// Catch que captura el error y muestra un mensaje en la consola
	} catch (err) {
		console.log(err)
	}
}

// Constante que almacena la promesa que retorna el mensaje
const message = new Promise((r) =>
	setTimeout(() => r('Información Enviada'), 3000)
)

//IIFE con funcion asincrona que permite recibir el mensaje de la promesa y llamar a la funcion principal
;(async () => {
	await getAlbums()
	console.log(await message)
})()
