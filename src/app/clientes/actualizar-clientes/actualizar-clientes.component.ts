import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
  styleUrls: ['./actualizar-clientes.component.css']
})
export class ActualizarClientesComponent implements OnInit {
  cif: string | undefined;
  form!: FormGroup;
  cliente: any;

  constructor(private route: ActivatedRoute, private clienteService: ClientesService, 
    private router: Router) { }

  ngOnInit(): void {
  this.cif = this.route.snapshot.params.cif;
  this.clienteService.getCliente(this.cif)
             .subscribe((res: any)=>{
              this.cliente = res.cliente;
              this.form.patchValue(this.cliente);

             }, (err: any)=>{

              console.log(err);
             })
this.form = new FormGroup({
nombre: new FormControl('', [Validators.required]),
cif: new FormControl('', [Validators.required, Validators.minLength(9)]),
direccion: new FormControl(''),
localidad: new FormControl('')
 })
  }
 modificarCliente(){

this.clienteService.putClientes(this.form.value, this.cif)
.subscribe((res: any)=>{
  this.router.navigate(['/clientes']);
  
 }, (err: any)=>{

  console.log(err);
 })
 }
}
