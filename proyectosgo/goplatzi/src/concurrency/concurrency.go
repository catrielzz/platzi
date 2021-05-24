package main

import (
	"fmt"
	"sync"
)

func say(text string, wg *sync.WaitGroup){
	defer wg.Done()
	fmt.Println(text)
}

func main(){
	// Creamos conjunto de gorroutines, esto va liberando una a una
	var wg sync.WaitGroup

	fmt.Println("Hello")
	// Agregamos una gorroutine al conjunto
	wg.Add(1)
	// A esta ejecucion de gorroutine le envio el puntero del wg
	go say("World", &wg)
	// Le decimos al hilo del main que espere a que todas las gr se ejecuten
	wg.Wait()

}