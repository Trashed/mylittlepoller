package main

type app struct {
}

func (a app) StartProcess(proc func()) {

	// TODO: For starters, start a goroutine which prints a line each second. Take the function to run as a parameter
	go proc()
}

func (a app) RunAndBlock() {
	select {} // This will block the execution of the main goroutine
}
