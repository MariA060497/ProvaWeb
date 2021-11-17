import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentService } from "../payment.service";
import { Payment } from "../payment.model";

@Component({
  selector: "app-payment-create",
  templateUrl: "./payment-create.component.html",
  styleUrls: ["./payment-create.component.css"],
})
export class PaymentCreateComponent implements OnInit {
  payment: Payment = {
    nome: "",
    preco: "",
    dispositivo: "",
    codigo: "",
  };

  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit(): void {}

  createPayment(): void {
    this.paymentService.create(this.payment).subscribe(() => {
      this.paymentService.showMessage("Jogo adicionado!");
      this.router.navigate(["/payments"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/payments"]);
  }
}
