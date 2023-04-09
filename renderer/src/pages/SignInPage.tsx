const SignInPage = () => {
  return (
    <div className="page-container">
      <section className="heading">
        <h1 className="page-title">
          <i class="fa-solid fa-right-to-bracket"></i>
          Sign In
        </h1>
        <p>Inform your credentials to access the dashboard</p>
      </section>

      <h1>Sign In Form</h1>
    </div>
  )
}

export default SignInPage
//
// <app-spinner *ngIf="isLoading"></app-spinner>
// <div class="page-container">
//     <section class="heading">
//         <h1 class="page-title">
//             <i class="fa-solid fa-right-to-bracket"></i>
//             Sign In
//         </h1>
//         <p>Inform your credentials to access the dashboard</p>
//     </section>
//     <section *ngIf="!isLoading" class="form">
//         <form (submit)="handleSubmit()">
//             <div class="form-group">
//                 <label class="label-block">E-mail</label>
//                 <input
//                     type="email"
//                     [(ngModel)]="email"
//                     name="email"
//                     class="form-text"
//                     placeholder="E-mail address registred"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <label class="label-block">Password</label>
//                 <input
//                     type="password"
//                     [(ngModel)]="password"
//                     name="password"
//                     class="form-text"
//                     placeholder="user password for this e-mail"
//                     min="3"
//                     required
//                 />
//             </div>
//             <div class="form-group">
//                 <button type="submit" class="btn" [disabled]="isSubmitted && 'disabled'">
//                     Submit
//                 </button>
//             </div>
//         </form>
//     </section>
// </div>
//
