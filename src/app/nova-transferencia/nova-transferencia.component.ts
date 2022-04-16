import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  valoresComErro: any;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
        this.limparCampos();
  }

  private  ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
        this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
}

  limparCampos(){
    this.valor = 0;
    this.destino = 0;

  }
}
