package main

import (
	mlp "github.com/Trashed/mylittlepoller"
	"github.com/Trashed/mylittlepoller/web"
)

func main() {
	var server mlp.PageServer = &web.Server{}

	app := app{}

	// TODO: Start a web server in a goroutine
	app.StartProcess(server.ServePage)

	// TODO: Start the polling engine in a goroutine
	app.RunAndBlock()
}
