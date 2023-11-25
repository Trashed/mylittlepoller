package main

type app struct {
}

func (a app) StartProcess(proc func()) {
	go proc()
}

func (a app) RunAndBlock() {
	select {} // This will block the execution of the main goroutine
}
